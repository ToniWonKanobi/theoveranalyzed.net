Title: Nerdy Stuff  
Date: 2016-01-16 16:21  
Description: This page contains additional information about the site not covered in /about  

### Apps I Use

Almost all of the writing, design, and development for TheOverAnalyzed happens on my Mac. I use [Byword][1] for static content such blog posts. I've tried plenty of other text editors, but Byword is by far my favorite. It just looks clean while writing.

I use <del>Atom</del> for all the coding and design.

<aside class="update">

### Update: Bye Bye, Atom. Hello Sublime Text

February 13, 2018
<!-- {.updatetime} -->

I'm now using [Sublime Text 3][2] instead of Atom. The latter, being an Electron app, wasn't as performant as a true native app like Sublime Text. I switched a few months ago, and although I haven't really done any web design in a year, I like Sublime. It's as amenable as Atom, and it's definitely more snappy!

</aside>

Occasionally I have to fix a post on my iPhone. I use [Byword][3] for that as well.

### Technical

This site is based on [Casey Liss's][4] static blogging engine, [Camel][5]. I use a [forked version][6] of that project, which includes provisions for [tags][7] and a [sitemap][8]. From there, I tweaked Camel with additional [`markdown-it`][9] plugins, including the following:

* [`markdown-it-footnote-conventional`][10], which is a forked version of [`markdown-it-footnote`][11]
* [`markdown-it-anchor`][12], which provides `id`'s to all headings (for easy permalinking)
* [`markdown-it-decorate`][13], which allows for easy `class` and `id` attribution without ugly-fying the Markdown source document
* [`markdown-it-highlightjs`][14] for code highlighting
* [`markdown-it-implicit-figures`][15], which takes Markdown-style images and wraps them in `<figure>` with `<figcaption>`'s in the resultant HTML

TheOverAnalyzed is presently hosted on [Heroku][16], though I often consider Jekyll. (I mostly withstand the urge to switch out of laziness). The domain name registration and DNS are through [Hover][17]. The media within posts form about 2016 onward are under the `/images/` slug (self-hosted). Conversely, most of the media within posts *before* 2016 are served via [Droplr][18] embeds. I'll switch those out eventually.

To my knowledge, this site should conform to [HTML5][19] web standards, and its CSS should validate as well. If you find that an area of the site does not perform as expected, please contact me. Just to be safe, try to use a [non-crappy][20] web browser---that helps tremendously.

### Useful URLs

#### [Now][21]

What am I doing now? Check out the `/now` page

#### [Tags][22]

Tags help group similar posts together, and even if my readers could care less about them, I use them often enough when referencing prior posts.

#### [Livestream][23]

When the stars align, I provide "coverage" (snarky commentary) of live events such as [WWDC][24] on Twitter.

#### [Newsletter][25]

For the less nerdy reader, I *do* have an email newsletter.

#### [Broken Links][26]

Perhaps you've looked high and low in a search engine and still can't find a link you're looking for? If so, the post might be here.

#### [Markdown Source][27]

You can append `.md` to the end of any static page (such as a blog post) URL to see the actual Markdown source for that page

[1]: https://geo.itunes.apple.com/us/app/byword/id420212497?mt=12&at=1l3vx9s "Byword on the Mac App Store"
[2]: https://www.sublimetext.com "Sublime Text text editor"
[3]: https://geo.itunes.apple.com/us/app/byword/id482063361?mt=8&at=1l3vx9s "Byword on the App Store"
[4]: https://twitter.com/caseyliss "Casey Liss on Twitter"
[5]: https://github.com/cliss/camel "Camel on GitHub"
[6]: https://github.com/datamcfly/camel "Roger Stringer's fork of Camel"
[7]: /tags "Lists all tags"
[8]: /sitemap.xml "Sitemap for TheOverAnalyzed"
[9]: https://www.npmjs.com/package/markdown-it "`markdown-it` on npmjs"
[10]: https://www.npmjs.com/package/markdown-it-footnote-conventional "My version of `markdown-it-footnote` on npmjs"
[11]: https://www.npmjs.com/package/markdown-it-footnote "`markdown-it-footnote` on npmjs"
[12]: https://www.npmjs.com/package/markdown-it-anchor "'markdown-it-anchor' on npmjs"
[13]: https://www.npmjs.com/package/markdown-it-decorate "`markdown-it-decorate' on npmjs"
[14]: https://www.npmjs.com/package/markdown-it-highlightjs "`markdown-it-highlightjs` on npmjs"
[15]: https://www.npmjs.com/package/markdown-it-implicit-figures "`markdown-it-implicit-figures` on npmjs"
[16]: https://heroku.com "Heroku"
[17]: https://hover.com/Pji0Qlok "Hover"
[18]: https://auth.droplr.com/referral/user/0cd0ca10c401759b74716f20598e6816?callback=https://d.pr/auth/referral "Droplr"
[19]: https://en.wikipedia.org/wiki/HTML5 "Wikipedia: HTML5"
[20]: https://duckduckgo.com/?q=alternatives+to+internet+explorer&ia=software "Alternatives to Internet Explorer"
[21]: /now "/now page"
[22]: /tags "I love tags"
[23]: /live "Live events like WWDC"
[24]: https://developer.apple.com/wwdc/ "WWDC"
[25]: /newsletter "TheOverAnalyzed has a newsletter!"
[26]: /brokenlinks "Some links just won't redirect from their old Squarespace destinations. Go here to check those out."
[27]: /nerd.md "You can do this with almost every page on the site"
