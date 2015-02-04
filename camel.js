/***************************************************
 * INITIALIZATION								  *
 ***************************************************/

var express = require('express');
var compress = require('compression');
var http = require('http');
var fs = require('fs');
var qfs = require('q-io/fs');
var sugar = require('sugar');
var _ = require('underscore');
var markdownit = require('markdown-it')({
	html: true,
	xhtmlOut: true,
	typographer: true
}).use(require('markdown-it-footnote'));
var rss = require('rss');
var Handlebars = require('handlebars');
var app = express();
app.use(compress());
app.use(express.static("public"));
var server = http.createServer(app);



// "Statics"
var postsRoot = './posts/';
var templateRoot = './templates/';
var metadataMarker = '@@';
var maxCacheSize = 50;
var postsPerPage = 10;
//var postRegex = /^(.\/)?posts\/\d{4}\/\d{1,2}\/\d{1,2}\/(\w|-)*(.md)?/;
var postRegex = /^(.\/)?posts\/\d{4}\/\d{1,2}\/\d{1,2}\/(\w|-)*(.redirect|.md)?$/;
var footnoteAnchorRegex = /[#"]fn\d+/g;
var footnoteIdRegex = /fnref\d+/g;
var utcOffset = 5;
var cacheResetTimeInMillis = 1800000;

var renderedPosts = {};
var renderedRss = {};
var allPostsSortedGrouped = {};
var headerSource = undefined;
var footerSource = null;
var postHeaderTemplate = null;
var postFooterTemplate = null;
var siteMetadata = {};

/***************************************************
 * HELPER METHODS								  *
 ***************************************************/


function init() {
	loadHeaderFooter('defaultTags.html', function (data) {
		// Note this comes in as a flat string; split on newlines for parsing metadata.
		siteMetadata = parseMetadata(data.split('\n'));

		// This relies on the above, so nest it.
		loadHeaderFooter('header.html', function (data) {
			headerSource = performMetadataReplacements(siteMetadata, data);
		});
	});
	loadHeaderFooter('footer.html', function (data) { footerSource = data; });
	loadHeaderFooter('postHeader.html', function (data) {
		Handlebars.registerHelper('formatPostDate', function (date) {
			return new Handlebars.SafeString(new Date(date).format('{Month} {d}, {yyyy}'));
		});
		Handlebars.registerHelper('formatIsoDate', function (date) {
			return new Handlebars.SafeString(date !== undefined ? new Date(date).iso() : '');
		});
		postHeaderTemplate = Handlebars.compile(data);
	});
	loadHeaderFooter('postFooter.html', function (data) {
		Handlebars.registerHelper('formatPostDate', function (date) {
			return new Handlebars.SafeString(new Date(date).format('{Month} {d}, {yyyy}'));
		});
		Handlebars.registerHelper('formatIsoDate', function (date) {
			return new Handlebars.SafeString(date !== undefined ? new Date(date).iso() : '');
		});
		postFooterTemplate = Handlebars.compile(data);
	});

	// Kill the cache every 30 minutes.
	setInterval(emptyCache, cacheResetTimeInMillis);
/*
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		smartLists: true,
		smartypants: true
	});
*/
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}


function loadHeaderFooter(file, completion) {
	fs.exists(templateRoot + file, function(exists) {
		if (exists) {
			fs.readFile(templateRoot + file, {encoding: 'UTF8'}, function (error, data) {
				if (!error) {
					completion(data);
				}
			});
		}
	});
}

function loadTemplate(file, completion) {
	fs.exists(templateRoot + file, function(exists) {
		if (exists) {
			fs.readFile(templateRoot + file, {encoding: 'UTF8'}, function (error, data) {
				if (!error) {
					completion(data);
				}
			});
		}
	});
}


function leadingZero(value){
	if(value < 10){
		return "0" + value.toString();
	}
	return value.toString();	
}

function normalizedFileName(file) {
	var retVal = file;
	if (file.startsWith('posts')) {
		retVal = './' + file;
	}

	retVal = retVal.replace('.md', '');

	return retVal;
}

function addRenderedPostToCache(file, postData) {
	//console.log('Adding to cache: ' + normalizedFileName(file));
	renderedPosts[normalizedFileName(file)] = _.extend({ file: normalizedFileName(file), date: new Date() }, postData);

	if (_.size(renderedPosts) > maxCacheSize) {
		var sorted = _.sortBy(renderedPosts, function (post) { return post['date']; });
		delete renderedPosts[sorted.first()['file']];
	}

	//console.log('Cache has ' + JSON.stringify(_.keys(renderedPosts)));
}

function fetchFromCache(file) {
	return renderedPosts[normalizedFileName(file)] || null;
}

// Parses the metadata in the file
function parseMetadata(lines) {
	var retVal = {};

	lines.each(function (line) {
		line = line.replace(metadataMarker, '');
		line = line.compact();
		if (line.has('=')) {
			var firstIndex = line.indexOf('=');
			retVal[line.first(firstIndex)] = line.from(firstIndex + 1);
		}
	});

	// NOTE: Some metadata is added in generateHtmlAndMetadataForFile().

	// Merge with site default metadata
	Object.merge(retVal, siteMetadata, false, function(key, targetVal, sourceVal) {
		// Ensure that the file wins over the defaults.
		console.log('overwriting "' + sourceVal + '" with "' + targetVal);
		return targetVal;
	});

	return retVal;
}

function performMetadataReplacements(replacements, haystack) {
	_.keys(replacements).each(function (key) {
		// Ensure that it's a global replacement; non-regex treatment is first-only.
		haystack = haystack.replace(new RegExp(metadataMarker + key + metadataMarker, 'g'), replacements[key]);
	});

	return haystack;
}

// Parses the HTML and renders it.
function parseHtml(lines, replacements, postHeader, postFooter) {
	// Convert from markdown
	var body = performMetadataReplacements(replacements, markdownit.render(lines) );
	// Perform replacements
	var header = performMetadataReplacements(replacements, headerSource);
	var body = body;
	// Concatenate HTML
	return header + '<article>' + postHeader + '<div class="entry">' + body + '</div>' + postFooter + '</article>' + footerSource;
}

// Gets all the lines in a post and separates the metadata from the body
function getLinesFromPost(file) {
	file = file.endsWith('.md') ? file : file + '.md';
	var data = fs.readFileSync(file, {encoding: 'UTF8'});

	// Extract the pieces
	var lines = data.lines();
	var metadataLines = _.filter(lines, function (line) { return line.startsWith(metadataMarker); });
	var body = _.difference(lines, metadataLines).join('\n');
	return {metadata: metadataLines, body: body};
}

// Gets the metadata & rendered HTML for this file
function generateHtmlAndMetadataForFile(file) {
	var retVal = fetchFromCache(file);
	if (retVal == undefined) {
		var lines = getLinesFromPost(file);
		var metadata = parseMetadata(lines['metadata']);
		if (metadata['Linked'] == 'Yes'){
			metadata['relativeLink'] =  metadata['Link'];
			metadata['permalink'] = externalFilenameForFile(file);
			metadata['linked'] = 'linked';
			metadata['LinkArrow'] = ' <span class="linkarrow">→</span>';

		} else {
			metadata['relativeLink'] = externalFilenameForFile(file);
			metadata['permalink'] = metadata['relativeLink'];
			metadata['linked'] = 'notLinked';
			metadata['LinkArrow'] = '';
		}
		if( metadata['HideHeader'] != 'true' ){
			metadata['header'] = postHeaderTemplate(metadata);
			metadata['footer'] = postFooterTemplate(metadata);
		}else{
			metadata['header'] = '';
			metadata['footer'] = '';
		}

		if( metadata['Tags'] != undefined ){
			var tag = String( metadata['Tags'] );
			metadata['TaggedIn'] = '<p class="taggedIn"><span>Filed Under:</span> <a href="/tags/' + tag + '">' + tag.capitalize() + '</a></p>';
		}else{
			metadata['TaggedIn'] = '<p class="taggedIn"><span>Filed Under:</span> <a href="/tags/uncategorized">Uncategorized</a></p>';
		}

		if( metadata['permalink'] == '/index' ){
			metadata['canonicalLink'] = 'http://blog.datamcfly.com/';
			metadata['ogtype'] = 'website';
		}else{
			metadata['canonicalLink'] = 'http://blog.datamcfly.com' + metadata['permalink'];
			metadata['ogtype'] = 'article';
		}

		if( metadata['FeaturedImage'] ){
			metadata['PostImage'] = metadata['FeaturedImage'];
		}else{
			metadata['PostImage'] = 'http://blog.datamcfly.com/images/logo.png';
		}
		
		// If this is a post, assume a body class of 'post'.
		if (postRegex.test(file)) {
			metadata['BodyClass'] = 'post';
		}
		if( metadata['BodyClass'] == 'BodyClass' ){
			metadata['BodyClass'] = 'post';
		}

		if( metadata['HideHeader'] != 'true' ){
			var mheader = postHeaderTemplate(metadata);
			var mfooter = postFooterTemplate(metadata);
//			lines['body'] = lines['body'] + '<div class="fin">~&bull;~</div>';
		}else{
			var mheader = '';
			var mfooter = '';
			metadata['TaggedIn'] = '';
		}
		var body = lines['body'];

		addRenderedPostToCache(file, {
			metadata: metadata,
			header: performMetadataReplacements(metadata, headerSource),
			postHeader:  mheader,
			postFooter:  mfooter,
			cleanBody: performMetadataReplacements(metadata, markdownit.render(lines['body'])),
			unwrappedBody: performMetadataReplacements(metadata, markdownit.render(lines['body']))+"\n"+metadata['TaggedIn'],
			html: function () {
				return this.header +
				this.postHeader +
				this.unwrappedBody +
				this.postFooter +
				footerSource;
			}
		});
	}

	return fetchFromCache(file);
}

// Gets the metadata for this file
function generateMetadataForFile(file) {
	return generateHtmlAndMetadataForFile(file)['metadata'];
}

// Gets the rendered HTML for this file, with header/footer.
function generateHtmlForFile(file) {
	var fileData = generateHtmlAndMetadataForFile(file);
	return fileData.html();
}

// Gets the body HTML for this file, no header/footer.
function generateBodyHtmlForFile(file) {
	var parts = getLinesFromPost(file);
	var body = markdownit.render(parts['body']);
	var metadata = parseMetadata(parts['metadata']);
	metadata['relativeLink'] = externalFilenameForFile(file);
	return body;
}

// Gets the external link for this file. Relative if request is
// not specified. Absolute if request is specified.
function externalFilenameForFile(file, request) {
	var hostname = request != undefined ? request.headers.host : '';

	var retVal = hostname.length ? ('http://' + hostname) : '';
	retVal += file.at(0) == '/' && hostname.length > 0 ? '' : '/';
	retVal += file.replace('.md', '').replace(postsRoot, '').replace(postsRoot.replace('./', ''), '');
	return retVal;
}

// Gets all the posts, grouped by day and sorted descending.
// Completion handler gets called with an array of objects.
// Array
//   +-- Object
//   |	 +-- 'date' => Date for these articles
//   |	 `-- 'articles' => Array
//   |			+-- (Article Object)
//   |			+-- ...
//   |			`-- (Article Object)
//   + ...
//   |
//   `-- Object
//		 +-- 'date' => Date for these articles
//		 `-- 'articles' => Array
//				+-- (Article Object)
//				+-- ...
//				`-- (Article Object)
function allPostsSortedAndGrouped(completion) {
	if (Object.size(allPostsSortedGrouped) != 0) {
		completion(allPostsSortedGrouped);
	} else {
		qfs.listTree(postsRoot, function (name, stat) {
			return postRegex.test(name);
		}).then(function (files) {
			// Lump the posts together by day
			var groupedFiles = _.groupBy(files, function (file) {
				var parts = file.split('/');
				return new Date(parts[1], parts[2] - 1, parts[3]);
			});

			// Sort the days from newest to oldest
			var retVal = [];
			var sortedKeys = _.sortBy(_.keys(groupedFiles), function (date) {
				return new Date(date);
			}).reverse();

			// For each day...
			_.each(sortedKeys, function (key) {
				// Get all the filenames...
				var articleFiles = groupedFiles[key];
				var articles = [];
				// ...get all the data for that file ...
				_.each(articleFiles, function (file) {
					if (!file.endsWith('redirect')) {
						articles.push(generateHtmlAndMetadataForFile(file));
					}
				});
/*
				_.each(articleFiles, function (file) {
					articles.push(generateHtmlAndMetadataForFile(file));
				});
*/
				// ...so we can sort the posts...
				articles = _.sortBy(articles, function (article) {
					// ...by their post date and TIME.
					return Date.create(article['metadata']['Date']);
				}).reverse();
				// Array of objects; each object's key is the date, value
				// is an array of objects
				// In that array of objects, there is a body & metadata.
				retVal.push({date: key, articles: articles});
			});

			allPostsSortedGrouped = retVal;
			completion(retVal);
		});
	}
}

// Gets all the posts, paginated.
// Goes through the posts, descending date order, and joins
// days together until there are 10 or more posts. Once 10
// posts are hit, that's considered a page.
// Forcing to exactly 10 posts per page seemed artificial, and,
// frankly, harder.
function allPostsPaginated(completion) {
	allPostsSortedAndGrouped(function (postsByDay) {
		var pages = [];
		var thisPageDays = [];
		var count = 0;
		postsByDay.each(function (day) {
			count += day['articles'].length;
			thisPageDays.push(day);
			// Reset count if need be
			if (count >= postsPerPage) {
				pages.push({ page: pages.length + 1, days: thisPageDays });
				thisPageDays = [];
				count = 0;
			}
		});

		if (thisPageDays.length > 0) {
			pages.push({ page: pages.length + 1, days: thisPageDays});
		}

		completion(pages);
	});
}

// Empties the caches.
function emptyCache() {
	console.log('Emptying the cache.');
	renderedPosts = {};
	renderedRss = {};
	allPostsSortedGrouped = {};
}

/***************************************************
 * ROUTE HELPERS								   *
 ***************************************************/

function loadAndSendMarkdownFile(file, response) {
	if (file.endsWith('.md')) {
		// Send the source file as requested.
		console.log('Sending source file: ' + file);
		fs.exists(file, function (exists) {
			if (exists) {
				fs.readFile(file, {encoding: 'UTF8'}, function (error, data) {
					if (error) {
						response.status(500).send({error: error});
						return;
					}
					response.type('text/x-markdown; charset=UTF-8');
					response.send(data);
					return;
				});
			} else {
				response.status(400).send({error: 'Markdown file not found.'});
			}
		});
	} else if (fetchFromCache(file) != null) {
		// Send the cached version.
		console.log('Sending cached file: ' + file);
		response.status(200).send(fetchFromCache(file).html());
		return;
	} else {
		// Fetch the real deal.
		var found = false;
		// Is this a post?
		if (fs.existsSync(file + '.md')) {
			found = true;
			console.log('Sending file: ' + file)
			var html = generateHtmlForFile(file);
			response.status(200).send(html);
			// Or is this a redirect?
		} else if (fs.existsSync(file + '.redirect')) {
			var data = fs.readFileSync(file + '.redirect', {encoding: 'UTF8'});
			if (data.length > 0) {
				var parts = data.split('\n');
				if (parts.length >= 2) {
					found = true;
					console.log('Redirecting to: ' + parts[1]);
					response.redirect(parseInt(parts[0]), parts[1]);
				}
			}
		}
		
		if (!found) {
			send404(response, file);
			return;
/*
			console.log('404: ' + file);
			file = './posts/404.md';
			var html = generateHtmlForFile(file);
			response.status(404).send(html);
*/
		}
/*
		fs.exists(file + '.md', function (exists) {
			if (!exists) {
				console.log('404: ' + file);
				file = './posts/404.md';
//				response.send(404, {error: 'A post with that address is not found. '+file + '.md'});
//				return;
			}

			console.log('Sending file: ' + file)
			var html = generateHtmlForFile(file);
			response.status(200).send(html);
		});
*/
	}
}

// Sends a listing of an entire year's posts.
function sendYearListing(request, response) {
	var year = request.params.slug;
	var retVal = '<div class="center"><h1>Posts for ' + year + '</h1></div>';
	var currentMonth = null;
	var anyFound = false;

	allPostsSortedAndGrouped(function (postsByDay) {
		postsByDay.each(function (day) {
			var thisDay = Date.create(day['date']);
			if (thisDay.is(year)) {
				// Date.isBetween() is not inclusive, so back the from date up one
				var thisMonth = new Date(Number(year), Number(currentMonth)).addDays(-1);
				// ...and advance the to date by two (one to offset above, one to genuinely add).
				var nextMonth = Date.create(thisMonth).addMonths(1).addDays(2);

				//console.log(thisMonth.short() + ' <-- ' + thisDay.short() + ' --> ' + nextMonth.short() + '?   ' + (thisDay.isBetween(thisMonth, nextMonth) ? 'YES' : 'NO'));
				if (currentMonth == null || !thisDay.isBetween(thisMonth, nextMonth)) {
					// If we've started a month list, end it, because we're on a new month now.
					if (currentMonth >= 0) {
						retVal += '</ul>'
					}
					
					anyFound = true;
					
					currentMonth = thisDay.getMonth();
					retVal += '<h2><a href="/' + year + '/' + leadingZero((currentMonth + 1)) + '/">' + thisDay.format('{Month}') + '</a></h2>\n<ul>';
				}

				day['articles'].each(function (article) {
					retVal += '<li><a href="' + externalFilenameForFile(article['file']) + '">' + article['metadata']['Title'] + '</a></li>';
				});
			}
		});

		if (!anyFound) {
			retVal += "<i>No posts found.</i>";
		}

		var header = headerSource.replace(metadataMarker + 'Title' + metadataMarker, 'Posts for ' + year);
		response.send(header + retVal + footerSource);
	});

}

function send404(response, file) {
	console.log('404: ' + file);
	response.status(404).send( generateHtmlForFile('posts/404.md') );
}

// Handles a route by trying the cache first.
// file: file to try.
// sender: function to send result to the client. Only parameter is an object that has the key 'body', which is raw HTML
// generator: function to generate the raw HTML. Only parameter is a function that takes a completion handler that takes the raw HTML as its parameter.
// bestRouteHandler() --> generator() to build HTML --> completion() to add to cache and send
function baseRouteHandler(file, sender, generator) {
	if (fetchFromCache(file) == null) {
		console.log('Not in cache: ' + file);
		generator(function (postData) {
			addRenderedPostToCache(file, {body: postData});
			sender({body: postData});
		});
	} else {
		console.log('In cache: ' + file);
		sender(fetchFromCache(file));
	}
}

/***************************************************
 * ROUTES										  *
 ***************************************************/

app.get('/', function (request, response) {
	// Determine which page we're on, and make that the filename
	// so we cache by paginated page.
	var page = 1;
	if (request.query.p != undefined) {
		page = Number(request.query.p);
		if (isNaN(page)) {
			response.redirect('/');
		}
	}

	// Do the standard route handler. Cough up a cached page if possible.
	baseRouteHandler('/?p=' + page, function (cachedData) {
		response.send(cachedData['body']);
	}, function (completion) {
		var indexInfo = generateHtmlAndMetadataForFile(postsRoot + 'index.md');
		var footnoteIndex = 0;
		
		Handlebars.registerHelper('formatDate', function (date) {
			return new Handlebars.SafeString(new Date(date).format('{Weekday}<br />{d}<br />{Month}<br />{yyyy}'));
		});
		Handlebars.registerHelper('dateLink', function (date) {
			var parsedDate = new Date(date);
			return '/' + parsedDate.format("{yyyy}") + '/' + parsedDate.format("{M}") + '/' + parsedDate.format('{d}') + '/';
		});

		Handlebars.registerHelper('offsetFootnotes', function (html) {
			// Each day will call this helper once. We will offset the footnotes
			// to account for multiple days being on one page. This will avoid
			// conflicts with footnote numbers. If two days both have footnote,
			// they would both be "fn1". Which doesn't work; they need to be unique.
			var retVal = html.replace(footnoteAnchorRegex, '$&' + footnoteIndex);
			retVal = retVal.replace(footnoteIdRegex, '$&' + footnoteIndex);
			++footnoteIndex;

			return retVal;
		});

/*		
		loadTemplate('ArticlePartial.html', function (data) {
			Handlebars.registerPartial('article', data );

			loadTemplate('DayTemplate.html', function (data) {
				dayTemplate = Handlebars.compile(data);
			});

			loadTemplate('FooterTemplate.html', function (data) {
				footerTemplate = Handlebars.compile(data);
			});
		});
*/

		var data = fs.readFileSync(templateRoot + 'ArticlePartial.html', {encoding: 'UTF8'});
		Handlebars.registerPartial('article', data );

		var text = fs.readFileSync(templateRoot + 'DayTemplate.html', {encoding: 'UTF8'});
		var dayTemplate = Handlebars.compile(text);

		var ftext = fs.readFileSync(templateRoot + 'FooterTemplate.html', {encoding: 'UTF8'});
		var footerTemplate = Handlebars.compile(ftext);

//		Handlebars.registerPartial('article', indexInfo['metadata']['ArticlePartial']);
//		var dayTemplate = Handlebars.compile(indexInfo['metadata']['DayTemplate']);
//		var footerTemplate = Handlebars.compile(indexInfo['metadata']['FooterTemplate']);

		var bodyHtml = '';
		allPostsPaginated(function (pages) {
			// If we're asking for a page that doesn't exist, redirect.
			if (page < 0 || page > pages.length) {
				response.redirect(pages.length > 1 ? '/?p=' + pages.length : '/');
			}
			var days = pages[page - 1]['days'];
			days.forEach(function (day) {
				bodyHtml += dayTemplate(day);
			});

			// If we have more data to display, set up footer links.
			var footerData = {};
			if (page > 1) {
				footerData['prevPage'] = page - 1;
			}
			if (pages.length > page) {
				footerData['nextPage'] = page + 1;
			}

			var fileData = generateHtmlAndMetadataForFile(postsRoot + 'index.md')
			var metadata = fileData.metadata;
			var header = fileData.header;
			// Replace <title>...</title> with one-off for homepage, because it doesn't show both Page & Site titles.
			var titleBegin = header.indexOf('<title>') + "<title>".length;
			var titleEnd = header.indexOf('</title>');
			header = header.substring(0, titleBegin) + metadata['SiteTitle'] + header.substring(titleEnd);
			// Carry on with body
			bodyHtml = performMetadataReplacements(metadata, bodyHtml);
			var fullHtml = header + bodyHtml + footerTemplate(footerData) + footerSource;
			completion(fullHtml);
		});
	});
});

/***************************************************
 * RSS / PLEASE EDIT WITH YOUR SITE'S DETAILS	  *
 ***************************************************/

app.get('/sitemap.xml', function (request, response) {
	// this is the source of the URLs on your site, in this case we use a simple array, actually it could come from the database
	var urls = ['/','/about'];
	var root_path = 'http://blog.datamcfly.com';
	// XML sitemap generation starts here
	var priority = 0.6;
	var freq = 'weekly';
	var max = 100;
	var i = 0;
	
	var sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
//	sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
	sitemap += '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
	
	var lastmod = new Date().toISOString();
	sitemap += "\n";
	for (var i in urls) {
		sitemap += '<url>' + "\n";
		sitemap += "\t" + '<loc>'+ root_path + urls[i] + '</loc>' + "\n";
		sitemap += "\t" + '<lastmod>' + lastmod + '</lastmod>' + "\n";
		if( i == 0 ){
			sitemap += "\t" + '<changefreq>daily</changefreq>' + "\n";
			sitemap += "\t" + '<priority>1</priority>' + "\n";
		}else{
			sitemap += "\t" + '<changefreq>'+ freq +'</changefreq>' + "\n";
			sitemap += "\t" + '<priority>'+ priority +'</priority>' + "\n";
		}
		sitemap += '</url>';
		sitemap += "\n";
		i++;
	}

	allPostsSortedAndGrouped(function (postsByDay) {
		postsByDay.forEach(function (day) {
			day['articles'].forEach(function (article) {
				var date = Date.create( article['metadata']['Date'] );
				var lastmod = date.toISOString();

				sitemap += '<url>' + "\n";
				sitemap += "\t" + '<loc>'+ externalFilenameForFile(article['file'], request) + '</loc>' + "\n";
				sitemap += "\t" + '<lastmod>' + lastmod + '</lastmod>' + "\n";
				sitemap += "\t" + '<changefreq>'+ freq +'</changefreq>' + "\n";
				sitemap += "\t" + '<priority>'+ priority +'</priority>' + "\n";
				if( article['metadata']['FeaturedImage']  != undefined ){
//					metadata['PostImage'] = metadata['FeaturedImage'];
					sitemap += "\t" + '<image:image>' + "\n";
					sitemap += "\t" + "\t" + '<image:loc>' + article['metadata']['FeaturedImage'] + '</image:loc>' + "\n";
					sitemap += "\t" + '</image:image>' + "\n";
				}
				sitemap += '</url>';
				sitemap += "\n";
			});
		});
	});

	sitemap += '</urlset>';
	response.header('Content-Type', 'text/xml');
	response.send( sitemap );
});

app.get('/rss', function (request, response) {
	response.type('application/rss+xml');
	if (renderedRss['date'] == undefined || new Date().getTime() - renderedRss['date'].getTime() > 3600000) {
		var feed = new rss({
			title: siteMetadata['SiteTitle'],
			description: 'Posts to ' + siteMetadata['SiteTitle'],
			feed_url: 'http://blog.datamcfly.com/rss',
			site_url: 'http://blog.datamcfly.com',
			author: 'Roger Stringer',
			webMaster: 'Roger Stringer',
			copyright: '2014 -' + new Date().getFullYear() + ' Roger Stringer',
			image_url: 'http://blog.datamcfly.com/images/favicon.png',
			language: 'en',
			//categories: ['Category 1','Category 2','Category 3'],
			pubDate: new Date().toString(),
			ttl: '60'
		});

		var max = 10;
		var i = 0;
		allPostsSortedAndGrouped(function (postsByDay) {
			postsByDay.forEach(function (day) {
				day['articles'].forEach(function (article) {
					if (i < max) {
						++i;
						feed.item({
							title: article['metadata']['Title'],
							// Offset the time because Heroku's servers are GMT, whereas these dates are EST/EDT.
							date: new Date(article['metadata']['Date']).addHours(utcOffset),
							url: externalFilenameForFile(article['file'], request),
							description: article['cleanBody'].replace(/<script[\s\S]*?<\/script>/gm, "")
						});
					}
				});
			});

			renderedRss = {
				date: new Date(),
				rss: feed.xml()
			};

			response.send(renderedRss['rss']);
		});
	} else {
		response.send(renderedRss['rss']);
	}
});

//	Tags view
app.get('/tags', function (request, response) {
	var postsByTag = {};

	allPostsSortedAndGrouped(function (postsByDay) {
		var retVal = "<h1>Posts By Tag</h1><ul>";
		postsByDay.each(function (day) {
			day['articles'].each(function (article) {
				var tag = article['metadata']['Tags'];
				//	if no tag assigned to post, then place it in the uncategorized tag...
				if( !tag ){
					tag = "uncategorized";
				}
				var date = Date.create( article['metadata']['Date']);
				if (postsByTag[tag] == undefined) {
					postsByTag[tag] = [];
				}
				postsByTag[tag].push({
					title: article['metadata']['Title'], 
					date: date, 
					url: externalFilenameForFile( article['file'])
				});
			});
		});
		var orderedKeys = _.sortBy(Object.keys(postsByTag), function (key) { return parseInt(key); }).reverse();
		_.each(orderedKeys, function (key) {
			retVal += '<h2><a href="/tags/' + key.toLowerCase() + '">' + key.capitalize() + '</a></h1><ul>';
			_.each(postsByTag[key], function (post) {
				retVal += '<li><a href="' + post['url'] + '">' + post['title']  + '</a></li>';
			});
			retVal += '</ul>';
		});
		var header = headerSource.replace(metadataMarker + 'Title' + metadataMarker, 'Posts by Tag');
		response.send(header + retVal + footerSource);
	});
});
app.get('/tags/:tag', function (request, response) {
	var thetag = request.params.tag;
	var postsByTag = {};

	allPostsSortedAndGrouped(function (postsByDay) {
		var retVal = '<h1>' + thetag.capitalize() + ' Archives</h1><ul>';
		postsByDay.each(function (day) {
			day['articles'].each(function (article) {
				var tag = article['metadata']['Tags'];
				//	if no tag assigned to post, then place it in the uncategorized tag...
				if( !tag ){
					tag = "uncategorized";
				}
				if( tag == thetag ){
					var date = Date.create( article['metadata']['Date']);
					if (postsByTag[tag] == undefined) {
						postsByTag[tag] = [];
					}
					postsByTag[tag].push({
						title: article['metadata']['Title'], 
						date: date, 
						url: externalFilenameForFile( article['file'])
					});
				}
			});
		});
		var orderedKeys = _.sortBy(Object.keys(postsByTag), function (key) { return parseInt(key); }).reverse();
		_.each(orderedKeys, function (key) {
			_.each(postsByTag[key], function (post) {
				retVal += '<li><a href="' + post['url'] + '">' + post['title']  + '</a></li>';
			});
			retVal += '</ul>';
		});
		var header = headerSource.replace(metadataMarker + 'Title' + metadataMarker, thetag.capitalize() + ' Archives' );
		response.send(header + retVal + footerSource);
	});
});

// Month view
app.get('/:year/:month', function (request, response) {
	allPostsSortedAndGrouped(function (postsByDay) {
		var seekingDay = new Date(request.params.year, request.params.month - 1);

		var html = '<div class="center"><h1>' + seekingDay.format('{Month} {yyyy}') + "</h1></div>";
		var anyFound = false;
		postsByDay.each(function (day) {
			var thisDay = new Date(day['date']);
			if (thisDay.is(seekingDay.format('{Month} {yyyy}'))) {
				anyFound = true;

				html += "<h2>" + thisDay.format('{Weekday}, {Month} {d}') + "</h2><ul>";
				day.articles.each(function (article) {
					html += '<li><a href="' + article.metadata.relativeLink + '">' + article.metadata.Title + '</a></li>';
				});
				html += '</ul>';
			}
		});

		if (!anyFound) {
			html += "<i>No posts found.</i>";
		}
		var header = headerSource.replace(
			metadataMarker + 'Title' + metadataMarker,
			seekingDay.format('{Month} {yyyy}') + '&mdash;' + siteMetadata.SiteTitle);
			response.status(200).send(header + html + footerSource);
	});
});

// Day view
app.get('/:year/:month/:day', function (request, response) {
allPostsSortedAndGrouped(function (postsByDay) {
	var seekingDay = new Date(request.params.year, request.params.month - 1, request.params.day);

	postsByDay.each(function (day) {
		var thisDay = new Date(day['date']);
		if (thisDay.is(seekingDay)) {

			var html = "<h1>Posts from " + seekingDay.format('{Weekday}, {Month} {d}, {yyyy}') + "</h1><ul>";
			day.articles.each(function (article) {
				html += '<li><a href="' + article.metadata.relativeLink + '">' + article.metadata.Title + '</a></li>';
			});

			var header = headerSource.replace(
				metadataMarker + 'Title' + metadataMarker,
				seekingDay.format('{Weekday}, {Month} {d}, {Year}'));
				response.status(200).send(header + html + footerSource);
			}
		});
	})
});

// Get a blog post, such as /2014/3/17/birthday
app.get('/:year/:month/:day/:slug', function (request, response) {
	var file = postsRoot + request.params.year + '/' + request.params.month + '/' + request.params.day + '/' + request.params.slug;
	loadAndSendMarkdownFile(file, response);
});

// Empties the cache.
//app.get('/tosscache', function (request, response) {
//	 emptyCache();
//	 response.send(205);
//});

app.get('/count', function (request, response) {
	console.log("/count");
	allPostsSortedAndGrouped(function (all) {
		var count = 0;
		var days = 0;
		for (var day in _.keys(all)) {
			days++;
			count += all[day].articles.length;
		}
		response.send(count + ' articles, across ' + days + ' days that have at least one post.');
	});
});

// Support for non-blog posts, such as /about, as well as years, such as /2014.
app.get('/:slug', function (request, response) {
// If this is a typical slug, send the file
	if (isNaN(request.params.slug)) {
		var file = postsRoot + request.params.slug;
		loadAndSendMarkdownFile(file, response);
		// If it's a year, handle that.
	} else if (request.params.slug >= 2000) {
		sendYearListing(request, response);
		// If it's garbage (ie, a year less than 2013), send a 404.
	} else {
		send404(response, request.params.slug);
	}
});

/***************************************************
 * STARTUP										 *
 ***************************************************/
init();
var port = Number(process.env.PORT || 5000);
server.listen(port, function () {
	console.log('Express server started on port %s', server.address().port);
});