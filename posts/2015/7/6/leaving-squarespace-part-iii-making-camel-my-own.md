@@ Title=Leaving Squarespace Part III: Making Camel My Own  
@@ Date=2015-07-06 10:27  
@@ Description=Casey Liss's Camel (as well as Roger Stringer's fork) made for excellent starting points for TheOverAnalyzed. I added some things to make it my own.  
@@ Tags=Leaving Squarespace, TheOverAnalyzed, TheOverAnalyzed 3.0, meta  
@@ Image=http://d.pr/i/1d63D+  

<div class="topstory">When I started trying to figure out Camel, all I knew was that it was going to be both more open and easier to tweak than Squarespace. Little did I know that I would discover several additional 'extras' that would make <em>my</em> version of Camel the perfect blogging platform for me. As always, check Roger Stringer's thorough post <a href="http://www.sitepoint.com/deploying-camel-js-blog-heroku/">here</a> for more in-depth information, such as how to install <code>npm</code> and <code>node</code>
</div>

<h2>Contents</h2>

[[TOC]]

# Updating Camel's Default Dependencies

Before starting with the rest of the post, you should update Camel's version of `markdown-it` to the latest version available on [npmjs](https://www.npmjs.com/package/markdown-it). This is crucial because several plugins discussed in this post require a newer version than what Camel comes with [by default](https://github.com/cliss/camel/blob/master/package.json#L61). 

Here's how to do that:

1. Navigate to Camel's directory with `cd`:
	![](http://d.pr/i/126Ir+)
2. Locate the `package.json`
3. Modify the line that lists Camel's dependency on `markdown-it` such that the `^` is replaced by the `>`. This makes it so that any subsequent updates to `markdown-it` will be okay with Camel:

	```sh
	"markdown-it": "^3.1.0",
	```
	
4. Further navigate to the `node_modules` directory (this is where all of Camel's modules live, such as `handlebars`, `express`, and `markdown-it`):
	![](http://d.pr/i/118cQ+)
5.  Run the command `npm update markdown-it` and confirm that `markdown-it` has been updated:
	![](http://d.pr/i/10848+)
	
You can now proceed with installing these additional `markdown-it` plugins.

# Header Anchors

[`markdown-it-anchor`](https://www.npmjs.com/package/markdown-it-anchor) is a `markdown-it` plugin that creates headers-based permalinks in the parsed HTML. This is similar to what [GitHub has all over its site](http://d.pr/i/16frZ+). Essentially, `markdown-it-anchor` looks through the Markdown document for header markers (`#`) and then creates permalinks to those headers, displaying them only on `a:hover` (at least in my CSS). 

This is useful if you, like me, might want to direct readers to particular sections of a post. For instance, what if a reader wanted to know how I enabled header anchors on my site? After locating the section of the post that discusses header anchors (called "Header Anchors" `# Header Anchors`) I would just copy the permalink glyph on `a:hover. I could then send *that* link to the reader. 

Here's how to enable header anchors:

1. Navigate to Camel's directory with `cd`
	![](http://d.pr/i/126Ir+)
2. Further navigate to the `node_modules` directory (this is where all of Camel's modules live, such as `handlebars`, `express`, and `markdown-it`)
	![](http://d.pr/i/118cQ+)
3. Run the command
	```
	npm i markdown-it-anchor --save
	```
	[^sa]
	![](http://d.pr/i/1hluY+)
5. Test the installation by checking `package.json` for a new dependency
	![](http://d.pr/i/1kT9a+)
6. Open `camel.js` and add the following to the Initialization section

	```
	.use(require('markdown-it-anchor'), {
		permalink: true,
	})
	```
	
6. The 'markdownit' section should look like this now

	```js
	var markdownit = require('markdown-it')({
		html: true,
		xhtmlOut: true,
		typographer: true
   	})
		.use(require('markdown-it-footnote'))
		.use(require('markdown-it-anchor'), {
			permalink: true,
		});
	```

The trendy thing to do is to set the anchor as visible only on hover (`a:hover`). That's what the `permalink: true` is defining (default is no hyperlink visible). 

We can test that the plugin worked correctly by modifying a sample post. But before commit to the local copy of Camel, you'll want to make some changes to `site.css` in order to actually visualize the header anchors.[^la]

The class you want to target is the one defined by the plugin, `.header-anchor`:

```css
.header-anchor, .header-anchor:hover, .title a {
    text-decoration: none
}

h1:hover .header-anchor, h2:hover .header-anchor, h3:hover .header-anchor, h4:hover .header-anchor, h5:hover .header-anchor, h6:hover .header-anchor {
    opacity: 1;
}

.header-anchor {
    color: #3f70a2;
    opacity: 0;
    position: absolute;
}

a.header-anchor:hover {
    border-bottom: none;
}
```

To test that everything worked as it should, `cd` to Camel's main directory and run `node camel.js`:

<figure>
	<a class="nohover" href="http://d.pr/i/1cpAW+">
		<img src="http://d.pr/i/1cpAW+" alt="anchors working" />
	</a>
	<figcaption>Permalink ("header anchor") only visible on hover. Perfect.</figcaption>
</figure>


Note the `#header-test` appended to the hyperlink (check the status bar on the bottom left of the window).

<figure>
	<a class="nohover" href="http://d.pr/i/1lpF3+">
		<img src="http://d.pr/i/1lpF3+" alt="finished anchors" />
	</a>
	<figcaption>Success</figcaption>
</figure>

# Table Of Contents

I also installed an additional `markdown-it` plugin called `markdown-it-table-of-contents`, which inserts a headers-based table of contents wherever a `[[TOC]]` is placed in the document (conventionally towards the top of the document).

Installing the plugin wasn't difficult, but it took me a while to figure it out:

1. Navigate to Camel's directory with `cd`
	![](http://d.pr/i/126Ir+)
2. Further navigate to the `node_modules` directory
	![](http://d.pr/i/118cQ+)
3. Run the command `npm i markdown-it-table-of-contents --save`
	![](http://d.pr/i/1eUNj+)
4. Test the installation by checking `package.json` for a new dependency
	![](http://d.pr/i/1lwKV+)
5. Open `camel.js` and add the following to the Initialization section

	```
	.use(require("markdown-it-table-of-contents"), {
	includeLevel: 1,
	})
	```
	
6. The 'markdownit' section should look like this now
	
	```
	var markdownit = require('markdown-it')({
		html: true,
		xhtmlOut: true,
		typographer: true
	})
		.use(require('markdown-it-footnote'))
		.use(require('markdown-it-anchor'), {
			permalink: true,
		})
		.use(require("markdown-it-table-of-contents"), {
			includeLevel: 1,
		});
	```
	
Note that the `includeLevel: 1` string is telling the plugin that I want `<h1>` level headers to be in the table of contents. You could choose `<h2>` or `<h3>` level headers if you want. Sadly, you cannot have nested headers (e.g., `<h1>` *and* `<h2>` headers in the same table of contents). 

We can test that the plugin worked correctly by modifying a sample post. After launching a local version of the site, it should look like this:

<figure>
	<a class="nohover" href="http://d.pr/i/1d63D+">
		<img src="http://d.pr/i/1d63D+" alt="toc working" />
	</a>
	<figcaption>Success</figcaption>
</figure>

# Code Highlighting

When I was still using Squarespace, I tried installing a server-side script called [highlight.js](https://highlightjs.org). Highlight.js applies color schemes to `<code>` blocks according to the type of code in the block, be it JavaScript, HTML, CSS, Perl, etc.

For whatever reason, I was never able to get it to work with my Squarespace site. I forgot about it actually. But while I was browsing the `markdown-it` plugin database (for problems eventually solved by the two aforementioned plugins in this post), I stumbled upon a `markdown-it` plugin called [`markdown-it-highlightjs`](https://www.npmjs.com/package/markdown-it-highlightjs/), which -- you guessed it -- sets `markdown-it` to use `highlight.js` by default.

1. Navigate to Camel's directory with `cd`
	![](http://d.pr/i/126Ir+)
2. Further navigate to the `node_modules` directory
	![](http://d.pr/i/118cQ+)
3. Run the command 
	```npm i markdown-it-highlightjs --save```
	![](http://d.pr/i/14A8k+)
5. Test the installation by checking `package.json` for a new dependency
	![](http://d.pr/i/Z46L+)
6. Open `camel.js` and add the following to the Initialization section:

	```
	.use(require('markdown-it-highlightjs'))
	```
	
6. The 'markdownit' section should look like this now

	```js
	var markdownit = require('markdown-it')({
		html: true,
		xhtmlOut: true,
		typographer: true
	})
		.use(require('markdown-it-footnote'))
		.use(require('markdown-it-anchor'), {
			permalink: true,
		})
		.use(require("markdown-it-table-of-contents"), {
			includeLevel: 1,
		})
		.use(require('markdown-it-highlightjs'));
	```
	
7. Now that `markdown-it-highlightjs` is installed, you'll need to load a stylesheet. Navigate to Camel's directory, and from there, 
	```
	/node_modules/markdown-it-highlightjs/node_modules/highlight.js/styles
	```
	Grab whichever stylesheet you prefer, place that in Camel's public directory where stylesheets go: `/public/css`
9. Finally, you'll need to edit `header.html` to load whichever stylesheet you chose in the prior step
	
	```html
	<link rel="stylesheet" type="text/css" href="/css/default.css">
	```

You can test that the plugin is working by editing a sample post and launching a local version of your site.

![](http://d.pr/i/BuH9+)                                               

<hr class="small" />

There are other aspects of TheOverAnalyzed that took some tweaking. I might detail those changes someday. But the bulk of the changes I made to underlying structure Camel are detailed in this post. 

[^la]: I'll talk more my CSS philosophy/changes in a future post. 
[^sa]: Appending `--save` marks the package as a dependency in Camel's `package.json`, which is important if you actually want the plugin to work.