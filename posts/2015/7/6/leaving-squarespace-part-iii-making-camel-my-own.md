Title: Leaving Squarespace Part III: Making Camel My Own  
Date: 2015-07-06 10:27  
Description: Casey Liss's Camel made for excellent starting point for this blog. I added some extra things to make it my own.  
Tags: Meta, Camel, Leaving Squarespace  
Image: https://d.pr/i/1d63D+  

*This is the final post in the series entitled [Leaving Squarespace][1]. If you haven't already done so, you should read the [first][2] and [second][3] posts in the series before reading this post. When I started trying to figure out Camel, all I knew was that it was going to be both more open and easier to tweak than Squarespace. Little did I know that I would discover several additional 'extras' that would make my version of Camel the perfect blogging platform for me. As always, check Roger Stringer's thorough post [here][4] for more in-depth information, such as how to install `npm` and `node`.*
<!-- {em:.topstory) -->

### Updating Camel's Default Dependencies

Before starting with the rest of the post, you should update Camel's version of `markdown-it` to the latest version available on [npmjs][5]. This is crucial because several plugins discussed in this post require a newer version than what Camel comes with [by default][6]. 

Here's how to do that:

1. Navigate to Camel's directory with `cd`
2. Locate the `package.json`
3. Modify the line that lists Camel's dependency on `markdown-it` such that the `^` is replaced by the `>`. This makes it so that any subsequent updates to `markdown-it` will be okay with Camel:

	```json
	"markdown-it": "^3.1.0",
	```
	
4. Further navigate to the `node_modules` directory (this is where all of Camel's modules live, such as `handlebars`, `express`, and `markdown-it`):
5.  Run the command `npm update markdown-it` and confirm that `markdown-it` has been updated:

	![npm update markdown-it][7]
	
You can now proceed with installing these additional `markdown-it` plugins.

### Header Anchors

[`markdown-it-anchor`][8] is a `markdown-it` plugin that creates headers-based permalinks in the parsed HTML. This is similar to what [GitHub has all over its site][9]. Essentially, `markdown-it-anchor` looks through the Markdown document for header markers (`#`) and then creates permalinks to those headers, displaying them only on `a:hover` (at least in my CSS). 

This is useful if you, like me, might want to direct readers to particular sections of a post. For instance, what if a reader wanted to know how I enabled header anchors on my site? After locating the section of the post that discusses header anchors ("Header Anchors" `# Header Anchors`) I would just copy the permalink glyph on `a:hover`. I could then send *that* link to the reader. 

Here's how to enable header anchors:

1. Navigate to Camel's directory with `cd`	
2. Further navigate to the `node_modules` directory (this is where all of Camel's modules live, such as `handlebars`, `express`, and `markdown-it`)
3. Run the command `npm i markdown-it-anchor --save`[^1]4. Test the installation by checking `package.json` for a new dependency	![Adding `markdown-it-anchor` to package.json][10]
	
5. Open `camel.js` and add the following to the Initialization section

	```js
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

We can test that the plugin worked correctly by modifying a sample post. But before commit to the local copy of Camel, you'll want to make some changes to `site.css` in order to actually visualize the header anchors.[^2]

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

To test that everything worked as it should, `cd` to Camel's main directory and run `node camel.js`:![Permalink ("header anchor") only visible on hover. Perfect.][11]

Note the `#header-test` appended to the hyperlink (check the status bar on the bottom left of the window).

![Success.][12]

### Table of Contents

I also installed an additional `markdown-it` plugin called `markdown-it-table-of-contents`, which inserts a headers-based table of contents wherever a `[[TOC]]` is placed in the document (conventionally towards the top of the document).

Installing the plugin wasn't difficult, but it took me a while to figure it out:

1. Navigate to Camel's directory with `cd`
2. Further navigate to the `node_modules` directory
3. Run the command `npm i markdown-it-table-of-contents --save`
4. Test the installation by checking `package.json` for a new dependency

	![Adding `markdown-it-table-of-contents` to package.json][13]
	
5. Open `camel.js` and add the following to the Initialization section

	```js
	.use(require("markdown-it-table-of-contents"), {
	includeLevel: 1,
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
		})
		.use(require("markdown-it-table-of-contents"), {
			includeLevel: 1,
		});
	```

Note that the `includeLevel: 1` string is telling the plugin that I want `<h1>` level headers to be in the table of contents. You could choose `<h2>` or `<h3>` level headers if you want. Sadly, you cannot have nested headers (e.g., `<h1>` *and* `<h2>` headers in the same table of contents). 

We can test that the plugin worked correctly by modifying a sample post. After launching a local version of the site, it should look like this:

![More success.][14]

### Code Highlighting

When I was still using Squarespace, I tried installing a server-side script called [highlight.js][15]. Highlight.js applies color schemes to `<code>` blocks according to the type of code in the block, be it JavaScript, HTML, CSS, Perl, etc.

For whatever reason, I was never able to get it to work with my Squarespace site. I forgot about it actually. But while I was browsing the `markdown-it` plugin database (for problems eventually solved by the two aforementioned plugins in this post), I stumbled upon a `markdown-it` plugin called [`markdown-it-highlightjs`][16], which---you guessed it---sets `markdown-it` to use `highlight.js` by default.

1. Navigate to Camel's directory with `cd`
2. Further navigate to the `node_modules` directory
3. Run the command `npm i markdown-it-highlightjs --save`
4. Test the installation by checking `package.json` for a new dependency
	
	![Adding `markdown-it-highlightjs` to package.json][17]
	
5. Open `camel.js` and add the following to the Initialization section:

	```js
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
	
7. Now that `markdown-it-highlightjs` is installed, you'll need to load a stylesheet. Navigate to Camel's directory, and from there:

	```nohighlight
	/node_modules/markdown-it-highlightjs/node_modules/highlight.js/styles
	```
	
	Grab whichever stylesheet you prefer, place that in Camel's public directory where stylesheets go: `/public/css`

8. Finally, you'll need to edit `header.html` to load whichever stylesheet you chose in the prior step

	```html
	<link rel="stylesheet" type="text/css" href="/css/default.css">
	```
	
You can test that the plugin is working by editing a sample post and launching a local version of your site.

![It works!][18]
                                          
***

There are other aspects of TheOverAnalyzed that took some tweaking. I might detail those changes someday. But the bulk of the changes I made to underlying structure Camel are detailed in this post. 

<aside class="update">

#### Update: No More Code Block Highights

August 11, 2015
<!-- {.updatetime} -->

Since writing this post, I have since disabled `markdown-it-highlightjs`. It wasn't a burdensome plugin or anything---I just decided it was unnecessary visual cruft.

</aside>

<aside class="update">

#### Update: No More Table of Contents or [Exposed] Header Anchors

November 20, 2015
<!-- {.updatetime} -->

During the first few weeks of November, I spent some time refactoring my website---making changes here and there. In doing so, I culled a bunch of stuff. On the chopping block were both `markdown-it-table-of-contents` and `markdown-it-anchor`. The Table of Contents are something I'd like to see adopted by CommonMark itself. But that will be a while. Until then, I'll do without Table of Contents (they're incredibly time-consuming to do, even in Markdown.)

And while `markdown-it-anchor` is still a dependency on this project, I've tweaked `camel.js` such that permalinks don't pop up anymore on hover (since they header anchors are written to the DOM, they showed up in the RSS feeds, and just looked stupid there).

</aside>

<aside class="update">

#### Update: Code Block Highights Are Back

December 10, 2015
<!-- {.updatetime} -->

I re-enabled `markdown-it-highlightjs` after I realized just how much `<code>` I post on the site. Just as I wouldn't want to live without highlighting in my code editor of choice, I don't think readers want to live without code highlighting in large blocks of code.

</aside>

[^1]: Appending `--save` marks the package as a dependency in Camel's `package.json`, which is important!
[^2]: I'll talk more my CSS philosophy/changes in a future post.

[1]: /tags/Leaving%20Squarespace "Posts tagged 'Leaving Squarespace'"
[2]: /2015/6/17/leaving-squarespace-part-I-getting-started-with-camel "Link to Part I of 'Leaving Squarespace'"
[3]: /2015/6/26/leaving-squarespace-part-ii-modifying-files-to-play-nice-with-camel "Link to the second post in the series 'Leaving Squarespace'"
[4]: http://www.sitepoint.com/deploying-camel-js-blog-heroku/ "Roger Stringer's post on how to setup Camel"
[5]: https://www.npmjs.com/package/markdown-it "npmjs page for `markdown-it`"
[6]: https://github.com/cliss/camel/blob/master/package.json#L61 "Line of code in the package.json for Camel that calls for Express"
[7]: https://d.pr/i/10848+ "npm update markdown-it"
[8]: https://www.npmjs.com/package/markdown-it-anchor "npmjs page for `markdown-it-anchor`"
[9]: https://d.pr/i/16frZ+ "GitHub header permalinks"
[10]: https://d.pr/i/1kT9a+ "Adding `markdown-it-anchor` to package.json"
[11]: https://d.pr/i/1cpAW+ "Header anchors working"
[12]: https://d.pr/i/1lpF3+ "Finished anchors"
[13]: https://d.pr/i/1lwKV+ "Adding `markdown-it-table-of-contents` to package.json"
[14]: https://d.pr/i/1d63D+ "TOC working"
[15]: https://highlightjs.org "Home of highlight.js on the internet"
[16]: https://www.npmjs.com/package/markdown-it-highlightjs/ "npmjs page for `markdown-it-highlightjs`"
[17]: https://d.pr/i/Z46L+ "Adding `markdown-it-highlightjs` to package.json"
[18]: https://d.pr/i/BuH9+ "It works!"