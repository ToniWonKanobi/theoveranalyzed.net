@@ Title=Nerd  
@@ HideHeader=true  
@@ BodyClass=nerd

<h1>Nerdy Stuff</h1>

## What The Site's Made Of

The site is built on a [forked version](https://github.com/DataMcFly/camel) of [Casey Liss's](https://twitter.com/caseyliss)  static blogging engine called [Camel](https://github.com/cliss/camel), itself based on [Node](https://nodejs.org/), [Express](http://expressjs.com/), and several other [npm](https://www.npmjs.com/) [packages](https://github.com/cliss/camel/blob/master/package.json). I've also installed several additional [`markdown-it`](https://www.npmjs.com/package/markdown-it) plugins, beyond what Casey included with Camel by default. First, there's [`markdown-it-anchor`](https://www.npmjs.com/package/markdown-it-anchor), which makes for easy linking to specific headers like on [GitHub](http://d.pr/i/1iSqM+). Second, I added [`markdown-it-table-of-contents`](https://www.npmjs.com/package/markdown-it-table-of-contents), which can parse a 'table of contents' when called for in the `.md`.[^pa] And the last plugin is [`markdown-it-highlightjs`](https://www.npmjs.com/package/markdown-it-highlightjs), which highlights text in ```<pre><code>``` blocks based on the detected language, much like on [GitHub](https://github.com/markdown-it/markdown-it#simple).

As far as client-side packages go, I have employed several additional open-source JavaScript projects. The first is [Bigfoot](http://bigfootjs.com), for fancy footnotes like what Marco Arment used in [Instapaper](http://www.marco.org/2011/10/17/instapaper-4-released). Next is [FitVids](http://fitvidsjs.com), for [proportion-retained](@@SiteRoot@@/2015/3/9/constrain-embedded-videos-while-preserving-correct-aspect-ratios-in-squarespace) `<iframe>` content (makes YouTube videos scale to fit the horizontal `.container`).
 
To the best of my knowledge, TheOverAnalyzed should perform well in most modern web browsers. A notable exception is Internet Explorer (I'm sure my site looks terrible in IE). I can't help you with that one. 

## Useful URL Slugs

[/2015](@@SiteRoot@@/2015) for a list of all posts during the year of 2015[^p]

[/tags](@@SiteRoot@@/tags) shows all tags[^t]

[/live](@@SiteRoot@@/live) for coverage of live events like [WWDC](https://developer.apple.com/wwdc/)

[^pa]: Just add [`[[TOC]]`](https://github.com/Oktavilla/markdown-it-table-of-contents#example-markdown) where you want the table of contents to show up in the HTML. This is much like what Fletcher Penney's [MultiMarkdown Composer](http://multimarkdown.com) can do in Version 3 (currently in beta)
[^p]: You could similarly do something similar for [2014](@@SiteRoot@@/2014) (or any other year). You could even get more specific than that and list posts by year *and* month *and* day (e.g., [/2014/12/24](@@SiteRoot@@/2014/12/24)
[^t]: You even get more specific than that and list posts having a particular tag (e.g., maybe you wanted to see every post having to do with [Apple](@@SiteRoot@@/tags/Apple). Note that tags are case sensitive!