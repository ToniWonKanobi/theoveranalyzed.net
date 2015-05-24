@@ Title=Nerd  
@@ HideHeader=true

# Nerd

In addition to using a [forked version](https://github.com/DataMcFly/camel) of [Casey Liss's Camel](https://github.com/cliss/camel), I've also installed several additional[^ca] [`npm`](https://www.npmjs.com/) [`markdown-it`](https://www.npmjs.com/package/markdown-it) plugins: [`markdown-it-anchor`](https://www.npmjs.com/package/markdown-it-anchor),[^ma] and [`markdown-it-table-of-contents`](https://www.npmjs.com/package/markdown-it-table-of-contents).[^toc] I have employed several additional open-source JavaScript tweaks: [Bigfoot](http://bigfootjs.com) (for fancy footnotes), and [FitVids](http://fitvidsjs.com) (for auto-width `<iframe>` content). Both are lightweight, and should render quickly in most modern browsers. You should check them out.

## Useful URL Slug Stuff

[/2015](@@SiteRoot@@/2015) for a list of all posts during the year of 2015[^p]

[/tags](@@SiteRoot@@/tags) shows all tags[^t]

[/live](@@SiteRoot@@/live) for coverage of live events like [WWDC](https://developer.apple.com/wwdc/)

[^ca]: Casey's engine includes `markdown-it-footnotes` by default	
[^ma]: Allows for easy future-linking to specific headers, like on GitHub's pages
[^toc]: Allows for easy `[[TOC]]`-ing, Fletcher Penney [MultiMarkdown](http://multimarkdown.com)-style
[^p]: You could similarly do something similar for [2014](@@SiteRoot@@/2014) (or any other year). You could even get more specific than that and list posts by year *and* month *and* day (e.g., [/2014/12/24/](@@SiteRoot@@/2014/12/24)
[^t]: You even get more specific than that and list posts having a particular tag (e.g., maybe you wanted to see every post having to do with [Apple](@@SiteRoot@@/tags/apple)