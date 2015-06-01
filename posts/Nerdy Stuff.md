@@ Title=Nerd  
@@ HideHeader=true  
@@ BodyClass=nerd

# Nerdy Stuff

## What The Site's Made Of

The site is built on a [forked version][1] of [Casey Liss's][2]  static blogging engine called [Camel][3], itself based on [Node][4], [Express][5], and several other [npm][6] [packages][7]. I've also installed several additional [`markdown-it`][8] plugins, beyond what Casey included with Camel by default. First, there's [`markdown-it-anchor`][9], which makes for easy linking to specific headers like on [GitHub][10]. Second, I added [`markdown-it-table-of-contents`][11], which can parse a 'table of contents' when called for in the `.md`.[^pa] And the last plugin is [`markdown-it-highlightjs`][12], which highlights text in ```<pre><code>``` blocks based on the detected language, much like on [GitHub][13].

As far as client-side packages go, I have employed several additional open-source JavaScript projects. The first is [Bigfoot][14], for fancy footnotes like what Marco Arment used in [Instapaper][15]. And then there's [FitVids][16], for [proportion-retained][17] `<iframe>` content (makes YouTube videos scale to fit the horizontal `.container`).
 
To the best of my knowledge, TheOverAnalyzed should perform well in most modern web browsers. A notable exception is Internet Explorer (I'm sure my site looks terrible in IE). I can't help you with that one. 

## Useful URL Slugs

**[.md][18]** You can append `.md` to the end of any post URL to see the actual Markdown for that file[^tr]

**[/2015][19]** for a list of all posts during the year of 2015[^p]

**[/tags][20]** shows all tags[^t]

**[/live][21]** for occasional coverage of live events such as [WWDC][22]


[1]: https://github.com/DataMcFly/camel
[2]: https://twitter.com/caseyliss
[3]: https://github.com/cliss/camel
[4]: https://nodejs.org/
[5]: http://expressjs.com/
[6]: https://www.npmjs.com/
[7]: https://github.com/cliss/camel/blob/master/package.json
[8]: https://www.npmjs.com/package/markdown-it
[9]: https://www.npmjs.com/package/markdown-it-anchor
[10]: http://d.pr/i/1iSqM
[11]: https://www.npmjs.com/package/markdown-it-table-of-contents
[12]: https://www.npmjs.com/package/markdown-it-highlightjs
[13]: https://github.com/markdown-it/markdown-it#simple
[14]: http://bigfootjs.com
[15]: http://www.marco.org/2011/10/17/instapaper-4-released
[16]: http://fitvidsjs.com
[17]: @@SiteRoot@@/2015/3/9/constrain-embedded-videos-while-preserving-correct-aspect-ratios-in-squarespace
[18]: @@SiteRoot@@/nerd.md
[19]: @@SiteRoot@@/2015
[20]: @@SiteRoot@@/tags
[21]: @@SiteRoot@@/live
[22]: https://developer.apple.com/wwdc/

[^pa]: Just add [`[[TOC]]`](https://github.com/Oktavilla/markdown-it-table-of-contents#example-markdown) where you want the table of contents to show up in the HTML. This is much like what Fletcher Penney's [MultiMarkdown Composer](http://multimarkdown.com) can do in Version 3 (currently in beta)
[^tr]: [Try it!](@@SiteRoot@@/nerd.md)
[^p]: You could similarly do something similar for [2014](@@SiteRoot@@/2014) (or any other year). You could even get more specific than that and list posts by year *and* month *and* day (e.g., [/2014/12/24](@@SiteRoot@@/2014/12/24))
[^t]: You even get more specific than that and list posts having a particular tag (e.g., maybe you wanted to see every post having to do with [Apple](@@SiteRoot@@/tags/Apple). Note that tags are case sensitive!