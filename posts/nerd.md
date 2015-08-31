@@ Title=Nerdy Stuff  

<h2>What The Site's Made Of</h2>

The site is built on a [forked version][github] of [Casey Liss][twitter]'s static blogging engine [Camel][github 2], itself based on the [Node.js][wikipedia] runtime environment.

All of the pages on this site are based on "[static][wikipedia 2]" [Markdown][wikipedia 3] files `.md` (see [below][theoveranalyzed]), which are converted to HTML non-dynamically. The later versions of Camel and it's forks use [Vitaly Puzrin's][twitter 2] [CommonMark][commonmark]-based parser called [`markdown-it`][github 3].[^mdinpm] I've also installed several additional [`markdown-it` plugins][mdipl]. First, there's [Valérian Galliat][val]'s [`markdown-it-anchor`][github 4],[^mdianpm] which makes for easy linking to specific headers like on GitHub. Also, I added [Oktavilla][oktavilla]'s [`markdown-it-table-of-contents`][github 5],[^mditocnpm] which allows for easy insertion of a table of contents with `[[TOC]]`. I wish it supported nested header levels, but [the developer doesn't seem interested][okt].

I have also employed a couple of indispensable open-source JavaScript projects. The first is [Bigfoot.js][bigfootjs] for fancy popup footnotes---first popularized by Marco Arment's read-it-later app, [Instapaper][marco]. And then there's [FitVids.js][fitvidsjs], which makes all `<iframe>` embeds responsive (i.e., it makes YouTube videos scale to the width of the horizontal container).
 
To the best of my knowledge, TheOverAnalyzed should perform well in most modern web browsers. For users of Internet Explorer version 6 and prior: my site might look weird in certain areas. Might I suggest an [alternative][google]?[^chrome]

<h2 id="slugs">Useful URL Slugs</h2>

**[.md][theoveranalyzed 4]**: You can append `.md` to the end of any post URL to see the actual source (Markdown) for that page

**[/tags][theoveranalyzed 2]**: Shows all tags. Note that tags are case-sensitive.

**[/2015][theoveranalyzed 3]**: For a list of all posts during the year of 2015[^time]

**[/live][theoveranalyzed 5]**: For occasional coverage of live events such as [WWDC][apple]

**[/dailyupdate][theoveranalyzed 6]**: Follow this URL to subscribe the daily email newsletter

**[/brokenlinks][theoveranalyzed 7]**: Perhaps you've looked high and low in a search engine and still can't find a link you're looking for? If so, the post might be here

[^chrome]: For myself, I use [Safari][wikipedia 4] almost exclusively. I wanted to be as as platform-agnostic as possible with my suggestion, hence Google Chrome.
[^mdinpm]: npm: <https://www.npmjs.com/package/markdown-it>
[^mdianpm]: npm: <https://www.npmjs.com/package/markdown-it-anchor>
[^mditocnpm]: npm: <https://www.npmjs.com/package/markdown-it-table-of-contents>
[^time]: **[/2015/6][theoveranalyzed 8]**: For a list of all posts during *June* of 2015

	**[/2015/6/1][theoveranalyzed 9]**: For a list of all posts published *June 1, 2015*

[apple]: https://developer.apple.com/wwdc/
[bigfootjs]: http://www.bigfootjs.com/
[commonmark]: http://commonmark.org
[fitvidsjs]: http://fitvidsjs.com
[github]: https://github.com/DataMcFly/camel
[github 2]: https://github.com/cliss/camel
[github 3]: https://github.com/markdown-it/markdown-it
[github 4]: https://github.com/valeriangalliat/markdown-it-anchor
[github 5]: https://github.com/Oktavilla/markdown-it-table-of-contents
[google]: https://encrypted.google.com/chrome
[marco]: http://www.marco.org/2011/10/17/instapaper-4-released
[mdipl]: https://www.npmjs.com/browse/keyword/markdown-it-plugin
[okt]: https://twitter.com/oktavilla/status/638103971018764288
[oktavilla]: http://oktavilla.se
[theoveranalyzed]: /nerd#slugs
[theoveranalyzed 2]: /tags
[theoveranalyzed 3]: /2015
[theoveranalyzed 4]: /nerd.md
[theoveranalyzed 5]: /live
[theoveranalyzed 6]: /dailyupdate
[theoveranalyzed 7]: /brokenlinks
[theoveranalyzed 8]: /2015/6
[theoveranalyzed 9]: /2015/6/1
[val]: https://twitter.com/valeriangalliat
[twitter]: https://twitter.com/caseyliss
[twitter 2]: https://twitter.com/puzrin
[wikipedia]: https://en.wikipedia.org/wiki/Node.js
[wikipedia 2]: https://en.wikipedia.org/wiki/Static_web_page
[wikipedia 3]: https://en.wikipedia.org/wiki/Markdown
[wikipedia 4]: https://en.wikipedia.org/wiki/Safari_(web_browser)