@@ Title=Nerd  
@@ HideHeader=true

# Nerd

## What TheOverAnalyzed's Made Of

In addition to using a [forked version](https://github.com/DataMcFly/camel) of [Casey Liss's Camel](https://github.com/cliss/camel), I've also installed several additional[^ca] [`npm`](https://www.npmjs.com/) [`markdown-it`](https://www.npmjs.com/package/markdown-it) plugins: [`markdown-it-anchor`](https://www.npmjs.com/package/markdown-it-anchor),[^ma] [`markdown-it-table-of-contents`](https://www.npmjs.com/package/markdown-it-table-of-contents),[^toc] and [`markdown-it-highlightjs`](https://www.npmjs.com/package/markdown-it-highlightjs).[^hljs] I have employed several additional open-source JavaScript tweaks: [Bigfoot](http://bigfootjs.com),[^bf] and [FitVids](http://fitvidsjs.com).[^fv] Both are lightweight, and should render quickly in most modern browsers. You should check them out.

## Useful URL Slugs

[/2015](@@SiteRoot@@/2015) for a list of all posts during the year of 2015[^p]

[/tags](@@SiteRoot@@/tags) shows all tags[^t]

[/live](@@SiteRoot@@/live) for coverage of live events like [WWDC](https://developer.apple.com/wwdc/)

[^ca]: Casey's engine includes [`markdown-it-footnotes`](https://www.npmjs.com/package/markdown-it-footnote) by default	
[^ma]: Allows for easy future-linking to specific headers, like on GitHub
[^toc]: Allows for easy [`[[TOC]]`](https://www.npmjs.com/package/markdown-it-table-of-contents#example-markdown)-ing, like Fletcher Penney's [MultiMarkdown](http://multimarkdown.com)
[^hljs]: Allows for pretty contextual highlighting of `<pre><code>` blocks, like on GitHub
[^bf]: For fancy footnotes like what Marco Arment used in [Instapaper](http://www.marco.org/2011/10/17/instapaper-4-released)
[^fv]: For [proportion-retained](@@SiteRoot@@/2015/3/9/constrain-embedded-videos-while-preserving-correct-aspect-ratios-in-squarespace) `<iframe>` content t
[^p]: You could similarly do something similar for [2014](@@SiteRoot@@/2014) (or any other year). You could even get more specific than that and list posts by year *and* month *and* day (e.g., [/2014/12/24](@@SiteRoot@@/2014/12/24)
[^t]: You even get more specific than that and list posts having a particular tag (e.g., maybe you wanted to see every post having to do with [Apple](@@SiteRoot@@/tags/apple)