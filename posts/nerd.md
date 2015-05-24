@@ Title=Nerd  
@@ HideHeader=true

# Nerd

In addition to using a [forked version](https://github.com/DataMcFly/camel) of Casey's engine, I have employed several additional open-source JavaScript tweaks, [Bigfoot](http://bigfootjs.com) (for fancy footnotes), and [FitVids](http://fitvidsjs.com) (for auto-width `<iframe>` content). Both are relatively lightweight, and should render quickly in most modern browsers. You should check them out.

There are also several [`npm`](https://www.npmjs.com/) modules installed: [`markdown-it-anchor`](https://www.npmjs.com/package/markdown-it-anchor)^[Allows for easy future-linking to specific headers, like GitHub] and [`markdown-it-table-of-contents`](https://www.npmjs.com/package/markdown-it-table-of-contents)^[Allows for easy `[[TOC]]`-ing, Fletcher Penney [MultiMarkdown](http://multimarkdown.com)-style]

## Useful URL Slug Stuff

[/2015](@@SiteRoot@@/2015) for a list of all posts during the year of 2015[^p]

[/tags](@@SiteRoot@@/tags) shows all tags[^t]

[/live](@@SiteRoot@@/live) for coverage of live events like [WWDC](https://developer.apple.com/wwdc/)

[^p]: You could similarly do something similar for [2014](@@SiteRoot@@/2014) (or any other year).

	You could even get more specific than that and list posts by year *and* month *and* day (e.g., [/2014/12/24/](@@SiteRoot@@/2014/12/24).
	
[^t]: You even get more specific than that and list posts having a particular tag (e.g., maybe you wanted to see every post having to do with [Apple](@@SiteRoot@@/tags/apple)
