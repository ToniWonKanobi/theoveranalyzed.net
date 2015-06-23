@@ Title=Leaving Squarespace Part IV: Making Camel My Own  
@@ Date=  
@@ Description=Casey Liss's Camel (as well as Roger Stringer's fork) made for excellent starting points for TheOverAnalyzed. I added some things to make it my own. 
@@ Tags=Leaving Squarespace, TheOverAnalyzed, TheOverAnalyzed 3.0, meta  
@@ Image=http://d.pr/i/118YD+  

<center class="topstory">When I started trying to figure out Camel, all I knew was that it was going to be both more open and easier to tweak than Squarespace. Little did I know that I would discover several additional 'extras' that would make <em>my</em> version of Camel the perfect blogging platform for me.
</center>

<h2>Contents</h2>

[[TOC]]

# Footnotes

Out of the box, Camel includes the npm package `markdown-it` as well as an additional plugin called `markdown-it-footnote`. The latter allows for MultiMarkdown 3-style  footnotes, including inline and multi-paragraph footnotes. 

<div class="center">
	<a class="nohover" href="http://d.pr/i/1aazM+">
    	<img src="http://d.pr/i/1aazM+" class="left" width="45%" />
    </a>
    <a class="nohover" href="http://d.pr/i/12gM+j">
    	<img src="http://d.pr/i/12gMj+" class="right" width="45%" />
    </a>
</div>

Again, neither feature is supported by [Byword](http://bywordapp.com) currently, but as long as I format the footnotes syntax correctly, everything will display properly in the parsed HTML.

<figure>
	<a class="nohover" href="http://d.pr/i/12mep+">
		<img src="http://d.pr/i/12mep+" alt="footnotes" />
	</a>
	<figcaption>While Byword may not be able to understand inline and/or multi-paragraph footnotes, Camel can thanks to <code>markdown-it-footnote</code></figcaption>
</figure>

# Header Anchors

[`markdown-it-anchor`](https://www.npmjs.com/package/markdown-it-anchor) is another `markdown-it` plugin, this one allowing for headers-based permalinks, similar to what GitHub has all over its site. Essentially, `markdown-it-anchor` looks through the document for header markers (`#`) and then creates  permalinks to those headers, displaying them only on `a:hover`.

# Table Of Contents

I also installed an additional `markdown-it` plugin called `markdown-it-table-of-contents`, which inserts a headers-based table of contents wherever a `[[TOC]]` is placed in the document (conventionally towards the top of the document).

Installing the plugin wasn't difficult, but it took me a while to figure it out:

1. Locate the npm.js repositry (or GitHub repository) and download the plugin
2. From the command line, navigate to the folder where Camel's `node_modules` are stored and run the command `npm i markdown-it-table-of-contents --save`[^sa]
3. Open `camel.js` and add locate the following:

	```js
	var markdownit = require('markdown-it')({
	html: true,
	xhtmlOut: true,
	typographer: true
	}).use(require('markdown-it-footnote'));
	```
4. Copy and paste this line `.use(require("markdown-it-table-of-contents"), { includeLevel: 1, })` like so:

	```js
	var markdownit = require('markdown-it')({
	html: true,
	xhtmlOut: true,
	typographer: true
	}).use(require('markdown-it-footnote'))
	.use(require("markdown-it-table-of-contents"), {
	includeLevel: 1,
	});
	```
	
Note that the `includeLevel: 1` string is telling the plugin that I want `<h1>` level headers to be in the table of contents. You could choose `<h2>` or `<h3>` level headers if you want. Sadly, you cannot have nested headers (e.g., `<h1>` *and* `<h2>` headers in the same table of contents). 

You can test whether everything worked by editing a sample post included in Camel's default installation.

<figure>
	<a class="nohover" href="http://d.pr/i/19dDD+">
		<img src="http://d.pr/i/19dDD+" alt="header test" />
	</a>
	<figcaption>Editing a sample post included in Camel's default installation</figcaption>
</figure>

After that, the 



# Pre/Code Highlighting

[^sa]: Appending `--save` marks the package as a dependency in Camel's `package.json`, which is important if you actually want the plugin to work.