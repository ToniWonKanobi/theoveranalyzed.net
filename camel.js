/***************************************************
* INITIALIZATION                                  *
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
	typographer: true
}).use(require('markdown-it-footnote'))
.use(require('markdown-it-anchor'));
var Rss = require('rss');
var Handlebars = require('handlebars');

var config = require('./config');
var version = require('./package.json').version;

var Twitter = require('twitter');
var twitterClient = new Twitter({
	consumer_key: config.Social.autoTweets.consumer_key,
	consumer_secret: config.Social.autoTweets.consumer_secret,
	access_token_key: config.Social.autoTweets.access_token_key,
	access_token_secret: config.Social.autoTweets.access_token_secret
});
var twitterUsername = config.Social.autoTweets.twitterUsername;
var twitterClientNeedle = config.Social.autoTweets.twitterClientNeedle;

var app = express();
app.use(compress());
app.use(express.static("public"));
app.use(function (request, response, next) {
	response.header('X-powered-by', 'Camel (https://github.com/cliss/camel)');
	next();
});
var server = http.createServer(app);

// "Statics"
var postsRoot = './posts/';
var templateRoot = './templates/';
var metadataMarker = '@@';
var maxCacheSize = 50;
var postsPerPage = 10;
var postRegex = /^(.\/)?posts\/\d{4}\/\d{1,2}\/\d{1,2}\/(\w|-|\+)*(.redirect|.md)?$/;
var footnoteAnchorRegex = /[#"]fn\d+/g;
var footnoteIdRegex = /fnref\d+/g;
var utcOffset = 8;
var cacheResetTimeInMillis = 1800000;

var renderedPosts = {};
var renderedRss = {};
var renderedAlternateRss = {};
var allPostsSortedGrouped = {};
var headerSource;
var footerSource = null;

var pageHeaderTemplate = null;
var pageFooterTemplate = null;
var postHeaderTemplate = null;
var postFooterTemplate = null;
var rssFooterTemplate = null;
var singleHeaderTemplate = null;
var singleFooterTemplate = null;
var postBodyStartTemplate = null;
var postBodyEndTemplate = null;
var homepagePostDescriptionTemplate = null;
var homepagePostReadMoreTemplate = null;

var siteMetadata = {};
siteMetadata.SiteUrl = config.Site.Url;
siteMetadata.SiteRoot = config.Site.Url;
siteMetadata.SiteTitle = config.Site.Title;
siteMetadata.Twitter = config.Social.Twitter;
siteMetadata.siteAbout = config.Site.About;
siteMetadata.siteAuthor = config.Site.Author;
siteMetadata.DefaultImage = config.Site.DefaultImage;
siteMetadata.CurrentYear = new Date().getFullYear();


/***************************************************
 * HELPER METHODS								  *
 ***************************************************/


String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
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

function fetchFromCache(file) {
	return renderedPosts[normalizedFileName(file)] || null;
}

function addRenderedPostToCache(file, postData) {
	//console.log('Adding to cache: ' + normalizedFileName(file));
	renderedPosts[normalizedFileName(file)] = _.extend({ file: normalizedFileName(file), date: new Date() }, postData);

	if (_.size(renderedPosts) > maxCacheSize) {
		var sorted = _.sortBy(renderedPosts, function (post) { return post.date; });
		delete renderedPosts[sorted.first().file];
	}

}

// Separate the metadata from the body
function getLinesFromData(data) {
	var lines = data.lines();
	// Extract the metadata
	var metadataEnds = _.findIndex(lines, function (line) {
		 return line.trim().length === 0;
	});
	metadataEnds = metadataEnds === -1 ? lines.length : metadataEnds;

	return {
		metadata: lines.slice(0, metadataEnds),
		body: lines.slice(metadataEnds).join('\n')
	};
}

// Gets all the lines in a post and separates the metadata from the body
function getLinesFromPost(file) {
    file = file.endsWith('.md') ? file : file + '.md';
    var data = fs.readFileSync(file, {encoding: 'UTF8'});

    return getLinesFromData(data);
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
        } else if (line.has(':')) {
			var firstIndex = line.indexOf(':');
			retVal[line.first(firstIndex)] = line.from(firstIndex + 2);
		}
    });

    // NOTE: Some metadata is added in generateHtmlAndMetadataForFile().

    // Merge with site default metadata
    Object.merge(retVal, siteMetadata, false, function (key, targetVal, sourceVal) {
        // Ensure that the file wins over the defaults.
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

// Gets the metadata & rendered HTML for this file
function generateHtmlAndMetadataForFile(file) {
	var retVal = fetchFromCache(file);
	if (retVal == undefined) {
		var lines = getLinesFromPost(file);
		var metadata = parseMetadata(lines.metadata);

		metadata.relativeLink = externalFilenameForFile(file);
		metadata.permalink = metadata.relativeLink;

		if( metadata.HideHeader != 'true' ){
			if( metadata.BodyClass == 'post' ){
				var mheader = performMetadataReplacements(metadata, postHeaderTemplate(metadata) );
				var mfooter = performMetadataReplacements(metadata, postFooterTemplate(metadata) );
			}else{
				var mheader = performMetadataReplacements(metadata, pageHeaderTemplate(metadata) );
				var mfooter = performMetadataReplacements(metadata, pageFooterTemplate(metadata) );
			}
		}else{
			metadata.header = '';
			metadata.footer = '';
		}

		// Description Metadata
		if ( typeof(metadata.Description) === 'undefined') {
			metadata.Description = metadata.Title;
		}

		// Tags Metadata
		if ( typeof(metadata.Tags) !== 'undefined') {
			var tag = String( metadata.Tags );
			var tags = tag.split(",");
			var tagslist = [];
			var hashtags = '';
			var d = 1;
			for( var i in tags ){
				var tag = tags[i].trim();
				var tagReplace = tag.replace(/\s/g,'%20');
				tagslist.push('<a href="/tags/' + tagReplace + '">' + tag + '</a>');
				hashtags += tag;
				if( d < tags.length ){
					hashtags += ',';
				}
				d++;
			}
			metadata.tags = tagslist;
			metadata.hashtags = hashtags;
		}else{
			var tagslist = [];
			tagslist.push('<a href="/tags/uncategorized">Uncategorized</a>');
			metadata.tags = tagslist;
			metadata.hashtags = '';
		}

		// Link Metadata
		if( metadata.permalink == '/index' ){
			metadata.canonicalLink = metadata.SiteRoot;
			metadata.ogtype = 'website';
		}else{
			metadata.canonicalLink = metadata.SiteRoot + '/' + metadata.permalink;
			metadata.ogtype = 'article';
		}

		// Image Metadata
		if ( typeof(metadata.Image) === 'undefined') {
			metadata.Image = metadata.DefaultImage;
		}

		// If this is a post, assume a body class of 'post'.
		if (postRegex.test(file)) {
			metadata.BodyClass = 'post';
		}
		if( metadata.BodyClass == 'BodyClass' ){
			metadata.BodyClass = 'post';
		}

		if( metadata.HideHeader != 'true' ){

			//	if post, show post header and footer, otherwise, show page header and footer...
			if( metadata.BodyClass == 'post' ){
				var mheader = performMetadataReplacements(metadata, postHeaderTemplate(metadata) );
				var mfooter = performMetadataReplacements(metadata, postFooterTemplate(metadata) );
			}else{
				var mheader = performMetadataReplacements(metadata, pageHeaderTemplate(metadata) );
				var mfooter = performMetadataReplacements(metadata, pageFooterTemplate(metadata) );
				metadata.TaggedIn = '';
			}
		}else{
			var mheader = '';
			var mfooter = '';
			metadata.TaggedIn = '';
		}

		var body = lines['body'];

		// var html =  parseHtml(body, metadata, mheader, mfooter);
		addRenderedPostToCache(file, {
			metadata: metadata,
			header: performMetadataReplacements(metadata, headerSource),
			postHeader:  mheader,
			postFooter:  mfooter,
			singleHeader: performMetadataReplacements(metadata, singleHeaderTemplate(metadata)),
			singleFooter: performMetadataReplacements(metadata, singleFooterTemplate(metadata)),
			postBodyStart: performMetadataReplacements(metadata, postBodyStartTemplate(metadata)),
			// For homepage-only stuff
			homepagePostDescription: performMetadataReplacements(metadata, homepagePostDescriptionTemplate(metadata)),
			homepagePostReadMore: performMetadataReplacements(metadata, homepagePostReadMoreTemplate(metadata)),
			postBodyEnd: performMetadataReplacements(metadata, postBodyEndTemplate(metadata)),
			rssFooter: performMetadataReplacements(metadata, rssFooterTemplate(metadata)),
			unwrappedBody: performMetadataReplacements(metadata, markdownit.render(lines['body'])),
			html: function () {
				return this.header +
				this.singleHeader +
				this.postHeader +
				this.postBodyStart +
				this.unwrappedBody +
				this.postBodyEnd +
				this.postFooter +
				this.singleFooter +
				footerSource;
			}
		});
	}

	return fetchFromCache(file);
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
	if (Object.size(allPostsSortedGrouped) !== 0) {
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
				// if (new Date(key) > new Date()) {
				// 	return;
				// }

				// Get all the filenames...
				var articleFiles = groupedFiles[key];
				var articles = [];
				// ...get all the data for that file ...
				_.each(articleFiles, function (file) {
					if (!file.endsWith('redirect')) {
						articles.push(generateHtmlAndMetadataForFile(file));
					}
				});

				// ...so we can sort the posts...
				articles = _.sortBy(articles, function (article) {
					// ...by their post date and TIME.
					return Date.create(article.metadata.Date);
				}).reverse();
				// Array of objects; each object's key is the date, value
				// is an array of objects
				// In that array of objects, there is a body & metadata.
				// Note if this day only had a redirect, it may have no articles.
				if (articles.length > 0) {
					retVal.push({date: key, articles: articles});
				}
			});

			allPostsSortedGrouped = retVal;
			completion(retVal);
		});
	}
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

// Empties the caches.
function emptyCache() {
	console.log('Emptying the cache.');
	renderedPosts = {};
	renderedRss = {};
	renderedAlternateRss = {};
	allPostsSortedGrouped = {};
}

function init() {
	loadHeaderFooter('header.html', function (data) {
		headerSource = performMetadataReplacements(siteMetadata, data);
	});

	loadHeaderFooter('footer.html', function (data) {
		footerSource = performMetadataReplacements(siteMetadata, data);
	});

	loadHeaderFooter('rssFooter.html', function (data) {
		rssFooterTemplate = Handlebars.compile(data);
	});

	loadHeaderFooter('singleHeader.html', function (data) {
		singleHeaderTemplate = Handlebars.compile(data);
	});
	loadHeaderFooter('singleFooter.html', function (data) {
		singleFooterTemplate = Handlebars.compile(data);
	});

	loadHeaderFooter('postBodyStart.html', function (data) {
		postBodyStartTemplate = Handlebars.compile(data);
	});
	loadHeaderFooter('postBodyEnd.html', function (data) {
		postBodyEndTemplate = Handlebars.compile(data);
	});
	// For homepage-only stuff
	loadHeaderFooter('homepagePostDescription.html', function (data) {
		homepagePostDescriptionTemplate = Handlebars.compile(data);
	});
	loadHeaderFooter('homepagePostReadMore.html', function (data) {
		homepagePostReadMoreTemplate = Handlebars.compile(data);
	});

	loadHeaderFooter('pageHeader.html', function (data) {
		Handlebars.registerHelper('formatPostDate', function (date) {
			return new Handlebars.SafeString(new Date(date).format('{Month} {d}, {yyyy}'));
		});
		Handlebars.registerHelper('formatIsoDate', function (date) {
			return new Handlebars.SafeString(date !== undefined ? new Date(date).iso() : '');
		});
		pageHeaderTemplate = Handlebars.compile(data);
	});
	loadHeaderFooter('postHeader.html', function (data) {
		Handlebars.registerHelper('formatPostDate', function (date) {
			return new Handlebars.SafeString(new Date(date).format('{Month} {d}, {yyyy}'));
		});
		Handlebars.registerHelper('formatCalendarDate', function (date) {
			return new Handlebars.SafeString(new Date(date).format('{Month}-{dd}'));
		});
		Handlebars.registerHelper('sectionDay', function (date) {
			return new Handlebars.SafeString(new Date(date).format('{mm}-{dd}-{yyyy}'));
		});
		Handlebars.registerHelper('formatIsoDate', function (date) {
			return new Handlebars.SafeString(date !== undefined ? new Date(date).iso() : '');
		});
		postHeaderTemplate = Handlebars.compile(data);
	});
	loadHeaderFooter('pageFooter.html', function (data) {
		Handlebars.registerHelper('formatPostDate', function (date) {
			return new Handlebars.SafeString(new Date(date).format('{Month} {d}, {yyyy}'));
		});
		Handlebars.registerHelper('formatIsoDate', function (date) {
			return new Handlebars.SafeString(date !== undefined ? new Date(date).iso() : '');
		});
		pageFooterTemplate = Handlebars.compile(data);
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

}

// Gets the rendered HTML for this file, with header/footer.
function generateHtmlForFile(file) {
	var fileData = generateHtmlAndMetadataForFile(file);

	return fileData.html();
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
			count += day.articles.length;
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

/***************************************************
* ROUTE HELPERS                                   *
***************************************************/

function send404(response, file) {
	console.log('404: ' + file);
	response.status(404).send(generateHtmlForFile('posts/404.md'));
}

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
					response.status(200).send(data);
					return;
				});
			} else {
				response.status(400).send({error: 'Markdown file not found.'});
			}
		});
	} else if (fetchFromCache(file) !== null) {
		// Send the cached version.
		console.log('Sending cached file: ' + file);
		response.status(200).send(fetchFromCache(file).html());
	} else {
		var found = false;
		// Is this a post?
		if (fs.existsSync(file + '.md')) {
			found = true;
			console.log('Sending file: ' + file);
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
					response.redirect(parseInt(parts[0], 10), parts[1]);
				}
			}
		}

		if (!found) {
			send404(response, file);
			return;
		}
	}
}

// Sends a listing of an entire year's posts.
function sendYearListing(request, response) {
	var year = request.params.slug;
	var retVal = '';
	retVal += performMetadataReplacements([], singleHeaderTemplate([]) );
//	retVal += '<header><h2>Posts for ' + year + '</h2></header>';
	retVal += '<header><h2>Posts from ' + year + '</h2></header>';

	var currentMonth = null;
	var anyFound = false;
	retVal += performMetadataReplacements([], postBodyStartTemplate([]) );

	allPostsSortedAndGrouped(function (postsByDay) {
		postsByDay.each(function (day) {
			var thisDay = Date.create(day['date']);
			if (thisDay.is(year)) {
				// Date.isBetween() is not inclusive, so back the from date up one
				var thisMonth = new Date(Number(year), Number(currentMonth)).addDays(-1);
				// ...and advance the to date by two (one to offset above, one to genuinely add).
				var nextMonth = Date.create(thisMonth).addMonths(1).addDays(2);

				if (currentMonth == null || !thisDay.isBetween(thisMonth, nextMonth)) {
					// If we've started a month list, end it, because we're on a new month now.
					if (currentMonth >= 0) {
						retVal += '</ul>'
					}

					anyFound = true;

					currentMonth = thisDay.getMonth();
					retVal += '<h3><a href="/' + year + '/' + leadingZero((currentMonth + 1)) + '/"' + 'title="Posts from ' + thisDay.format('{Month}') + '">' + thisDay.format('{Month}') + '</a></h3><ul>';
				}

				day['articles'].each(function (article) {
					retVal += '<li><a href="' + externalFilenameForFile(article.file) + '" title="' + article.metadata.Title + '">' + article.metadata.Title + '</a></li>';
				});
			}
		});

		if (!anyFound) {
			retVal += "<i>No posts found</i>";
		}

		retVal += performMetadataReplacements([], postBodyEndTemplate([]) );
		retVal += performMetadataReplacements([], singleFooterTemplate([]) );

		var replacements = {};
		replacements.Title = 'Posts from ' + request.params.slug;
		replacements.canonicalLink = config.Site.Url + '/' + request.params.slug;
		replacements.ogtype = 'website';
		replacements.Image = config.Site.DefaultImage;
		replacements.Description = replacements.Title;

		var header = performMetadataReplacements(replacements, headerSource);
		header = header.replace(
			metadataMarker + 'Title' + metadataMarker,
			'Posts for ' + year
		);
		response.status(200).send(header + retVal + footerSource);
	});
}

// Handles a route by trying the cache first.
// file: file to try.
// sender: function to send result to the client. Only parameter is an object that has the key 'body', which is raw HTML
// generator: function to generate the raw HTML. Only parameter is a function that takes a completion handler that takes the raw HTML as its parameter.
// bestRouteHandler() --> generator() to build HTML --> completion() to add to cache and send
function baseRouteHandler(file, sender, generator) {
	if (fetchFromCache(file) === null) {
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

// Generates a RSS feed.
// The linkGenerator is what determines if the articles will link
// to this site or to the target of a link post; it takes an article.
// The completion function takes an object:
// {
//   date: // Date the generation happened
//   rss: // Rendered RSS
// }
function generateRss(request, feedUrl, linkGenerator, titleGenerator, completion) {
	var feed = new Rss({
		title: config.Site.Title,
//		description: 'Posts to ' + config.Site.Title,
		description: 'Posts from ' + config.Site.Title,
        feed_url: config.Site.Url + feedUrl,
        site_url: config.Site.Url,
        author: config.Site.Author,
        webMaster: config.Site.Author,
        copyright: '2014&ndash;' + new Date().getFullYear() + ' ' + config.Site.Author,
        image_url: config.Site.DefaultImage,
		language: 'en',
		pubDate: new Date().toString(),
		ttl: '60'
	});

	var max = 10;
	var i = 0;
	allPostsSortedAndGrouped(function (postsByDay) {
		postsByDay.forEach(function (day) {
			day.articles.forEach(function (article) {
				if (i < max) {

					var tags = '';
					if (typeof(article.metadata.Tags) !== 'undefined') {
						var tag = String( article.metadata.Tags );
						var tags = tag.split(",");
					}

					i += 1;
					feed.item({
						title: titleGenerator( article ),
						// Offset the time because Heroku's servers are GMT, whereas these dates are EST/EDT.
						date: new Date(article.metadata.Date).addHours(utcOffset),
						url: linkGenerator( article ),
						categories: tags,
						guid: externalFilenameForFile(article.file, request),
						description: article.unwrappedBody.replace(/<script[\s\S]*?<\/script>/gm, "").concat(article.rssFooter)
					});
				}
			});
		});

		completion({
			date: new Date(),
			rss: feed.xml()
		});
	});
}

function homepageBuilder(page, completion, redirect) {
	var indexInfo = generateHtmlAndMetadataForFile(postsRoot + 'index.md');
	var footnoteIndex = 0;

	Handlebars.registerHelper('formatDate', function (date) {
		return new Handlebars.SafeString(new Date(date).format('{Weekday}<br>{d}<br>{Month}<br />{yyyy}'));
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
		footnoteIndex += 1;

		return retVal;
	});

	var data = fs.readFileSync(templateRoot + 'ArticlePartial.html', {encoding: 'UTF8'});
	Handlebars.registerPartial('article', data );

	var text = fs.readFileSync(templateRoot + 'DayTemplate.html', {encoding: 'UTF8'});
	var dayTemplate = Handlebars.compile(text);

	var ftext = fs.readFileSync(templateRoot + 'FooterTemplate.html', {encoding: 'UTF8'});
	var footerTemplate = Handlebars.compile(ftext);

	var bodyHtml = '';
	allPostsPaginated(function (pages) {
		// If we're asking for a page that doesn't exist, redirect.
		if (page < 0 || page > pages.length) {
			redirect(pages.length > 1 ? '/page/' + pages.length : '/');
			return;
		}
		var days = pages[page - 1].days;
		days.forEach(function (day) {
			bodyHtml += dayTemplate(day);
		});

		// If we have more data to display, set up footer links.
		var footerData = {};
		if (page > 1) {
			footerData.prevPage = page - 1;
		}
		if (pages.length > page) {
			footerData.nextPage = page + 1;
		}

		var fileData = generateHtmlAndMetadataForFile(postsRoot + 'index.md');
		var metadata = fileData.metadata;
		var header = fileData.header;
		// Replace <title>...</title> with one-off for homepage, because it doesn't show both Page & Site titles.
		var titleBegin = header.indexOf('<title>') + "<title>".length;
		var titleEnd = header.indexOf('</title>');
		header = header.substring(0, titleBegin) + metadata.SiteTitle + header.substring(titleEnd);
		// Carry on with body
		bodyHtml = performMetadataReplacements(metadata, bodyHtml);
		var fullHtml = header + bodyHtml + footerTemplate(footerData) + footerSource;
		completion(fullHtml);
	});
}

/***************************************************
* ROUTES                                          *
***************************************************/

app.get('/', function (request, response) {
	// Determine which page we're on, and make that the filename
	// so we cache by paginated page.
	var page = 1;
	if (typeof(request.query.p) !== 'undefined') {
		page = Number(request.query.p);
		if (isNaN(page)) {
			response.redirect('/');
			return;
		} else {
			response.redirect('/page/' + page);
			return;
		}
	}

	// Do the standard route handler. Cough up a cached page if possible.
	baseRouteHandler('/page/1', function (cachedData) {
		response.status(200).send(cachedData.body);
	}, function (completion) {
		homepageBuilder(page, completion, function (destination) {
			response.redirect(destination);
		});
	});
});

app.get('/page/:page', function (request, response) {
	var page = Number(request.params.page);
	if (isNaN(page)) {
		response.redirect('/');
		return;
	}

	// Do the standard route handler. Cough up a cached page if possible.
	baseRouteHandler('/page/' + page, function (cachedData) {
		response.status(200).send(cachedData.body);
	}, function (completion) {
		homepageBuilder(page, completion, function (destination) {
			response.redirect(destination);
		});
	});
});

/**********************************************************
 * SITEMAP / RSS / PLEASE EDIT WITH YOUR SITE'S DETAILS	  *
 **********************************************************/

app.get('/sitemap.xml', function (request, response) {
	// this is the source of the URLs on your site, in this case we use a simple array, actually it could come from the database
	var urls = ['/','/about','/tags'];

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
		sitemap += "\t" + '<loc>'+ config.Site.Url + urls[i] + '</loc>' + "\n";
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
				var date = Date.create( article.metadata.Date );
				var lastmod = date.toISOString();

				sitemap += '<url>' + "\n";
				sitemap += "\t" + '<loc>'+ externalFilenameForFile(article.file, request) + '</loc>' + "\n";
				sitemap += "\t" + '<lastmod>' + lastmod + '</lastmod>' + "\n";
				sitemap += "\t" + '<changefreq>'+ freq +'</changefreq>' + "\n";
				sitemap += "\t" + '<priority>'+ priority +'</priority>' + "\n";
				if( article.metadata.Image  != undefined ){
					sitemap += "\t" + '<image:image>' + "\n";
					sitemap += "\t" + "\t" + '<image:loc>' + article.metadata.Image + '</image:loc>' + "\n";
					sitemap += "\t" + '</image:image>' + "\n";
				}
				sitemap += '</url>';
				sitemap += "\n";
			});
		});
	});

	sitemap += '</urlset>';
	response.header('Content-Type', 'text/xml');
	response.status(200).send( sitemap );
});

app.get('/rss', function (request, response) {
	if ('user-agent' in request.headers && request.headers['user-agent'].has('subscriber')) {
		console.log('RSS: ' + request.headers['user-agent']);
	}
	response.type('application/rss+xml');
	if (typeof(renderedRss.date) === 'undefined' || new Date().getTime() - renderedRss.date.getTime() > 3600000) {
		generateRss(request, '/rss', function (article) {
		if (typeof(article.metadata.Link) !== 'undefined') {
			return article.metadata.Link;
		}
		return externalFilenameForFile(article.file, request);
	}, function (article){
		if ( typeof(article.metadata.Link) !== 'undefined' ) {
			return '→ ' + article.metadata.Title;
		}
//		return article.metadata.Title;
		return '🐺 ' + article.metadata.Title;
	}, function (rss) {
		renderedRss = rss;
		response.status(200).send(renderedRss.rss);
	});
	} else {
		response.status(200).send(renderedRss.rss);
	}
});

app.get('/rss-alternate', function (request, response) {
	if ('user-agent' in request.headers && request.headers['user-agent'].has('subscriber')) {
		console.log('Alternate RSS: ' + request.headers['user-agent']);
	}
	response.type('application/rss+xml');

	if (typeof(renderedAlternateRss.date) === 'undefined' || new Date().getTime() - renderedAlternateRss.date.getTime() > 3600000) {
		generateRss(request, '/rss-alternate', function (article) {
			return externalFilenameForFile(article.file, request);
		}, function (article){
			return article.metadata.Title;
		}, function (rss) {
			renderedAlternateRss = rss;
			response.status(200).send(renderedAlternateRss.rss);
		});
	} else {
		response.status(200).send(renderedAlternateRss.rss);
	}
});

// Tags
app.get('/tags', function (request, response) {
	var postsByTag = {};
	var anyFound = false;
	allPostsSortedAndGrouped(function (postsByDay) {
		var retVal = '';
		retVal += performMetadataReplacements([], singleHeaderTemplate([]) );
		retVal += "<header><h2>Tags</h2></header>";
		retVal += performMetadataReplacements([], postBodyStartTemplate([]) );
		postsByDay.each(function (day) {
			day['articles'].each(function (article) {
				var tag = article.metadata.Tags;
				//	if no tag assigned to post, then place it in the uncategorized tag...
				if( !tag ){
					tag = "uncategorized";
				}
				var tags = tag.split(",");
				for( var i in tags ){
					var tag = tags[i].trim();
					var date = Date.create( article.metadata.Date);
					if (postsByTag[tag] == undefined) {
						postsByTag[tag] = [];
					}
					anyFound = true;
					postsByTag[tag].push({
						title: article.metadata.Title,
						date: date,
						url: externalFilenameForFile( article.file)
					});
				}
			});
		});
		var orderedKeys = _.sortBy(Object.keys(postsByTag), function (key) { return key.toLowerCase() });
		_.each(orderedKeys, function (key) {
			// Remove spaces from HTML
			var keyReplace = key.replace(/\s/g,'%20');
			retVal += '<h3><a href="/tags/' + keyReplace + '">' + key + '</a></h3>';
			retVal += '<ul>';
			_.each(postsByTag[key], function (post) {
				retVal += '<li><a href="' + post.url + '">' + post.title  + '</a></li>';
			});
			retVal += '</ul>';
		});

		if (!anyFound) {
			retVal += "<i>No posts found</i>";
		}

		retVal += performMetadataReplacements([], postBodyEndTemplate([]) );
		retVal += performMetadataReplacements([], singleFooterTemplate([]) );

		var replacements = {};
		replacements.Title = 'Posts by Tag';
		replacements.canonicalLink = config.Site.Url + '/tags/';
		replacements.ogtype = 'website';
		replacements.Image = config.Site.DefaultImage;
		replacements.Description = replacements.Title;

		var header = performMetadataReplacements(replacements, headerSource);
		header = header.replace(

			metadataMarker + 'Title' + metadataMarker,
			'Posts by Tag'
		);
		response.status(200).send(header + retVal + footerSource);
	});
});

// Single Tag
app.get('/tags/:tag', function (request, response) {
	var thetag = request.params.tag;
	var postsByTag = {};
	var anyFound = false;
	allPostsSortedAndGrouped(function (postsByDay) {
		var retVal = '';
		retVal += performMetadataReplacements([], singleHeaderTemplate([]) );
		retVal += '<header><h2>' + 'Posts tagged ' + '"' + thetag + '"' + '</h3></header>';
		retVal += performMetadataReplacements([], postBodyStartTemplate([]) );
		retVal += '<ul>';

		postsByDay.each(function (day) {
			day['articles'].each(function (article) {
				var tag = article.metadata.Tags;
				//	if no tag assigned to post, then place it in the uncategorized tag...
				if( !tag ){
					tag = "uncategorized";
				}
				var tags = tag.split(",");
				for( var i in tags ){
					var tag = tags[i].trim();
					if( tag == thetag ){
						var date = Date.create( article.metadata.Date);
						if (postsByTag[tag] == undefined) {
							postsByTag[tag] = [];
						}
						anyFound = true;
						postsByTag[tag].push({
							title: article.metadata.Title,
							date: date,
							url: externalFilenameForFile( article.file)
						});
					}
				}
			});
		});

		var orderedKeys = _.sortBy(Object.keys(postsByTag), function (key) { return parseInt(key); }).reverse();
		_.each(orderedKeys, function (key) {
			_.each(postsByTag[key], function (post) {
				retVal += '<li><a href="' + post.url + '" title="' + post.title + '">' + post.title  + '</a></li>';
			});
		});

		if (!anyFound) {
			retVal += "<li><i>No posts found</i></li>";
		}
		retVal += '</ul>';
		retVal += performMetadataReplacements([], postBodyEndTemplate([]) );
		retVal += performMetadataReplacements([], singleFooterTemplate([]) );

		var replacements = {};
		replacements.Title = 'Posts tagged ' + '"' + thetag + '"';
		replacements.canonicalLink = config.Site.Url + '/tags/' + thetag;
		replacements.ogtype = 'website';
		replacements.Image = config.Site.DefaultImage;
		replacements.Description = replacements.Title;

		var header = performMetadataReplacements(replacements, headerSource);
		header = header.replace(
			metadataMarker + 'Title' + metadataMarker,
			thetag
		);
		response.status(200).send(header + retVal + footerSource);
	});
});

// Month
app.get('/:year/:month', function (request, response) {
	allPostsSortedAndGrouped(function (postsByDay) {
		var seekingDay = new Date(request.params.year, request.params.month - 1);

		var html = '';
		html += performMetadataReplacements([], singleHeaderTemplate([]) );
		html += '<header><h2>Posts from ' + seekingDay.format('{Month} {yyyy}') + "</h2></header>";
		html += performMetadataReplacements([], postBodyStartTemplate([]) );

		var anyFound = false;
		postsByDay.each(function (day) {
			var thisDay = new Date(day['date']);
			if (thisDay.is(seekingDay.format('{Month} {yyyy}'))) {
				anyFound = true;

				html += '<h3><a href=' + thisDay.format('{Weekday}, {Month} {d}') + '</a></h3>';
				html += "<ul>";
				day.articles.each(function (article) {
					html += '<li><a href="' + article.metadata.relativeLink + '" title="' + article.metadata.Title + '">' + article.metadata.Title + '</a></li>';
				});
				html += '</ul>';
			}
		});

		if (!anyFound) {
			html += "<i>No posts found</i>";
		}

		html += performMetadataReplacements([], postBodyEndTemplate([]) );
		html += performMetadataReplacements([], singleFooterTemplate([]) );

		var replacements = {};
		replacements.Title = 'Posts from ' + seekingDay.format('{Month} {yyyy}');
		replacements.canonicalLink = config.Site.Url + '/' + request.params.year + '/' + request.params.month;
		replacements.ogtype = 'website';
		replacements.Image = config.Site.DefaultImage;
		replacements.Description = replacements.Title;

		var header = performMetadataReplacements(replacements, headerSource);
		header = header.replace(
			metadataMarker + 'Title' + metadataMarker,
			seekingDay.format('{Month} {yyyy}') + '&mdash;' + config.Site.Title
		);
		response.status(200).send(header + html + footerSource);
	});
});

// Day
app.get('/:year/:month/:day', function (request, response) {
	allPostsSortedAndGrouped(function (postsByDay) {
		var seekingDay = new Date(request.params.year, request.params.month - 1, request.params.day);

		postsByDay.each(function (day) {
			var thisDay = new Date(day['date']);
			if (thisDay.is(seekingDay)) {

				var html = '';
				html += performMetadataReplacements([], singleHeaderTemplate([]) );
				// html += "<header><h2>Posts from " + seekingDay.format('{Weekday}, {Month} {d}, {yyyy}') + "</h2></header>";
	            html += "<header><h3>Posts from " + seekingDay.format('{Weekday}, {Month} {d}, {yyyy}') + "</h3></header>";
				html += "<ul>";
				var anyFound = false;
				day.articles.each(function (article) {
					anyFound = true;
					html += '<li><a href="' + article.metadata.relativeLink + '">' + article.metadata.Title + '</a></li>';
				});
				html += "</ul>";

				if (!anyFound) {
					html += "<i>No posts found</i>";
				}

				html += performMetadataReplacements([], postBodyEndTemplate([]) );
				html += performMetadataReplacements([], singleFooterTemplate([]) );


				var replacements = {};
				replacements.Title = 'Posts from ' + seekingDay.format('{Weekday}, {Month} {d}, {yyyy}');
				replacements.canonicalLink = config.Site.Url + '/' + request.params.year + '/' + request.params.month + '/' + request.params.day;
				replacements.ogtype = 'website';
				replacements.Image = config.Site.DefaultImage;
				replacements.Description = replacements.Title;

				var header = performMetadataReplacements(replacements, headerSource);
				header = header.replace(
					metadataMarker + 'Title' + metadataMarker,
					seekingDay.format('{Weekday}, {Month} {d}, {yyyy}')
				);
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

// Empties the cache
app.get('/tosscache', function (request, response) {
	 emptyCache();
	 response.status(200).send(205);
});

app.get('/count', function (request, response) {
	console.log("/count");
	allPostsSortedAndGrouped(function (all) {
		var count = 0;
		var day;
		var days = 0;
		for (day in _.keys(all)) {
			days += 1;
			count += all[day].articles.length;
		}
		response.status(200).send('TheOverAnalyzed has ' + count + ' articles, across ' + days + ' days that have at least one post therein.');
	});
});

// Support for non-blog posts, such as /about, as well as years, such as /2014
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
