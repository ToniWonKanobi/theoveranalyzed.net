@@ Title=Nerd  
@@ HideHeader=true  
@@ BodyClass=nerd

<h1>Nerdy Stuff</h1>

## What The Site's Made Of

The site is built on a [forked version][github] of [Casey Liss's][twitter]  static blogging engine called [Camel][github 2], itself based on [Node][nodejs], [Express][expressjs], and several other [npm][npmjs] [packages][github 3]. I've also installed several additional [`markdown-it`][npmjs 2] plugins, beyond what Casey included with Camel by default. First, there's [`markdown-it-anchor`][npmjs 3], which makes for easy linking to specific headers like on [GitHub][d]. Second, I added [`markdown-it-table-of-contents`][npmjs 4], which can parse a 'table of contents' when called for in the `.md`.[^pa] And the last plugin is [`markdown-it-highlightjs`][npmjs 5], which highlights text in ```<pre><code>``` blocks based on the detected language, much like on [GitHub][github 4].

As far as client-side packages go, I have employed several additional open-source JavaScript projects. The first is [Bigfoot][bigfootjs], for fancy footnotes like what Marco Arment used in [Instapaper][marco]. And then there's [FitVids][fitvidsjs], for [proportion-retained][pro] `<iframe>` content (makes YouTube videos scale to fit the horizontal `.container`).
 
To the best of my knowledge, TheOverAnalyzed should perform well in most modern web browsers. A notable exception is Internet Explorer (I'm sure my site looks terrible in IE). I can't help you with that one. 

## Useful URL Slugs

**[.md][nerd]** You can append `.md` to the end of any post URL to see the actual Markdown for that file[^tr]

**[/2015][year]** for a list of all posts during the year of 2015[^p]

**[/tags][tags]** shows all tags[^t]

**[/brokenlinks][br]** if you looked high and low in a search engine and still can't find a working link, the post might be here

**[/live][live]** for occasional coverage of live events such as [WWDC][apple]

[^pa]: Just add [`[[TOC]]`][github 5] where you want the table of contents to show up in the HTML. This is much like what Fletcher Penney's [MultiMarkdown Composer][multimarkdown] can do in Version 3 (currently in beta)
[^tr]: [Try it!][try]
[^p]: You could similarly do something similar for [2014][2014] (or any other year). You could even get more specific than that and list posts by year *and* month *and* day (e.g., [/2014/12/24][dec])
[^t]: You even get more specific than that and list posts having a particular tag (e.g., maybe you wanted to see every post having to do with [Apple][ap]. (Note that tags are Case Sensitive.)

[2014]: @@SiteRoot@@/2014
[ap]: @@SiteRoot@@/tags/Apple
[apple]: https://developer.apple.com/wwdc/
[bigfootjs]: http://bigfootjs.com
[br]: @@SiteRoot@@/brokenlinks
[d]: http://d.pr/i/1iSqM+
[dec]: @@SiteRoot@@/2014/12/24
[expressjs]: http://expressjs.com/
[fitvidsjs]: http://fitvidsjs.com
[github]: https://github.com/DataMcFly/camel
[github 2]: https://github.com/cliss/camel
[github 3]: https://github.com/cliss/camel/blob/master/package.json
[github 4]: https://github.com/markdown-it/markdown-it#simple
[github 5]: https://github.com/Oktavilla/markdown-it-table-of-contents#example-markdown
[live]: @@SiteRoot@@/live
[marco]: http://www.marco.org/2011/10/17/instapaper-4-released
[multimarkdown]: http://multimarkdown.com
[nodejs]: https://nodejs.org/
[npmjs]: https://www.npmjs.com/
[npmjs 2]: https://www.npmjs.com/package/markdown-it
[npmjs 3]: https://www.npmjs.com/package/markdown-it-anchor
[npmjs 4]: https://www.npmjs.com/package/markdown-it-table-of-contents
[npmjs 5]: https://www.npmjs.com/package/markdown-it-highlightjs
[nerd]: @@SiteRoot@@/nerd.md
[pro]: @@SiteRoot@@/2015/3/9/constrain-embedded-videos-while-preserving-correct-aspect-ratios-in-squarespace
[tags]: @@SiteRoot@@/tags
[try]: @@SiteRoot@@/nerd.md
[twitter]: https://twitter.com/caseyliss
[year]: @@SiteRoot@@/2015