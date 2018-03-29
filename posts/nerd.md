Title: Nerdy Stuff  
Date: 2016-01-16 16:21  
Description: This page contains additional information about the site not covered in /about  

### The Apps I Use

* [Byword][1] for static content such blog posts. I've tried plenty of other text editors---including the text editor in which I do all my front-end stuff---and they just never quite do it for me. Byword is by far my favorite for just *writing* text

* [<del>Atom</del>][2] for front-end coding and web design

	<aside class="update">

	#### Update: Bye Bye, Atom. Hello Sublime Text

	February 13, 2018
	<!-- {.updatetime} -->

	I'm now using [Sublime Text 3][3] instead of Atom. The latter, being an Electron app, wasn't as performant as a true native app like Sublime Text. I switched a few months ago, and although I haven't really done any web design in a year, I like Sublime. It's as amenable as Atom, and it's definitely more snappy!

	</aside>

* [CodeKit][4] is a great utility for compiling [Sass/SCSS][5] down to "regular" CSS for the browser. It adds browser prefixes to declarations as well. I probably wouldn't use a CSS extension without an app like CodeKit to help me

### Technical Underpinnings of TheOverAnalyzed

* This site was built using [Camel][6], [Casey Liss][7]'s static-ish blogging engine
* Camel is a [Node.js][8] app utilizing several [node package modules][9] to make everything work together
* I actually used a [forked version][10] of Camel, and that fork included provisions for [tags][11] and a [sitemap][12]
* From there, I further-tweaked Camel with additional [`markdown-it`][13] plugins:
	* [`markdown-it-footnote-conventional`][14], which is my[^1] forked version of [`markdown-it-footnote`][15]. My fork changes a few tags from `<div>` to the more semantic `<section>`
	* [`markdown-it-anchor`][16], which generates `id`'s to all headings (for easy permalinking)
	* [`markdown-it-decorate`][17], which allows for easy `class` and `id` attribution on elements without making the Markdown source document ugly with HTML tags everywhere[^2]
	* [`markdown-it-highlightjs`][18] for code highlighting
	* [`markdown-it-implicit-figures`][19], which takes Markdown-style images and wraps them in `<figure>` with `<figcaption>`'s in the resultant HTML

### Hosting

* TheOverAnalyzed is presently hosted on [Heroku][20], though I often consider something *fully* static, like a-[Jekyll][21] setup

### DNS

* The domain name registration and DNS are through [Hover][22]
* I briefly switched to DNSimple to try out SSL, but it's so much easier when Hover does everything

### Media

* Before 2016, almost of the images and videos are served via [Droplr][23] embeds. This has always been sort of hacky, since Droplr never intended to support media embeds for grandfathered "Lite" users like me. I'll switch those out eventually
* From about 2016 onward, most all of the media on the site is self-hosted (`/images`), except big photos taken with my Leica, and/or `<video>` embeds (since they're so huge)

### Web Standards

* To my knowledge, TheOverAnalyzed should [conform][24] to [HTML5][25] web standards (😅)
* And its [CSS][26] should validate as well (🤞🏼)
* If you find that an area of the site does not perform as expected, please [contact me][27][^3]

### Useful URLs

#### [Now][28]

* Ever want to know am I doing now? Think Twitter owns too much of the internet already? Check out the `/now` page. It's what [Micro.blog][29] was before Micro.blog existed 🙃

#### [Tags][30]

* Tags help group similar posts together, and even if my readers care less about them, I use them often enough when referencing prior posts

#### [Livestream][31]

* When the stars align, I provide "coverage" (snarky commentary) of live events such as WWDC on Twitter

#### [Newsletter][32]

* Yes, I *do* have an email newsletter.

#### [Broken Links][33]

* Perhaps you've searched everywhere for a particular post, but *still* can't find a link you're looking for? If so, the post might be here

#### [Markdown Source][34]

* This is so cool. You can see how the sausage is made 🌭 Just can append `.md` to the end of any URL to see the actual Markdown source for that page[^4]

[^1]: 👋🏼
[^2]: [Like this][a]
[^3]: Just to be safe, try to use a [non-crappy][b] web browser---that helps tremendously
[^4]: You can do something similar to this on [Daring Fireball][c] 

[a]: /images/markdown-it-decorate-example.jpg "Example of how \`markdown-it-decorate\` works"
[b]: https://duckduckgo.com/?q=alternatives+to+internet+explorer&ia=software "Alternatives to Internet Explorer"
[c]: https://daringfireball.net/2004/03/dive_into_markdown.text "An example Daring Fireball entry's raw Markdown source"

[1]: https://bywordapp.com "Byword on the Mac App Store"
[2]: https://atom.io "Atom text editor"
[3]: https://www.sublimetext.com "Sublime Text text editor"
[4]: https://codekitapp.com "CodeKit"
[5]: http://sass-lang.com "Sass/SCSS"
[6]: https://github.com/cliss/camel "Camel on GitHub"
[7]: https://twitter.com/caseyliss "Casey Liss on Twitter"
[8]: http://nodejs.org "Node.js"
[9]: https://www.npmjs.com "npm"
[10]: https://github.com/datamcfly/camel "Roger Stringer's fork of Camel"
[11]: /tags "Lists all tags"
[12]: /sitemap.xml "Sitemap for TheOverAnalyzed"
[13]: https://www.npmjs.com/package/markdown-it "`markdown-it` on npmjs"
[14]: https://www.npmjs.com/package/markdown-it-footnote-conventional "My version of `markdown-it-footnote` on npmjs"
[15]: https://www.npmjs.com/package/markdown-it-footnote "`markdown-it-footnote` on npmjs"
[16]: https://www.npmjs.com/package/markdown-it-anchor "'markdown-it-anchor' on npmjs"
[17]: https://www.npmjs.com/package/markdown-it-decorate "\`markdown-it-decorate\' on npmjs"
[18]: https://www.npmjs.com/package/markdown-it-highlightjs "`markdown-it-highlightjs` on npmjs"
[19]: https://www.npmjs.com/package/markdown-it-implicit-figures "`markdown-it-implicit-figures` on npmjs"
[20]: https://heroku.com "Heroku"
[21]: https://jekyllrb.com "Jekyll"
[22]: https://hover.com/Pji0Qlok "Hover"
[23]: https://auth.droplr.com/referral/user/0cd0ca10c401759b74716f20598e6816?callback=https://d.pr/auth/referral "Droplr"
[24]: https://validator.w3.org/nu/?doc=http%3A%2F%2Ftheoveranalyzed.net%2F "W3C HTML5 validator results for TheOverAnalyzed"
[25]: https://en.wikipedia.org/wiki/HTML5 "Wikipedia: HTML5"
[26]: https://jigsaw.w3.org/css-validator/validator?uri=theoveranalyzed.net&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en "W3C CSS validator results for TheOverAnalyzed"
[27]: /about#elsewhere
[28]: /now "/now page"
[29]: https://micro.blog "Micro.blog"
[30]: /tags "I love tags"
[31]: /live "Live events like WWDC"
[32]: /newsletter "TheOverAnalyzed has a newsletter!"
[33]: /brokenlinks "Some links just won't redirect from their old Squarespace destinations. Go here to check those out."
[34]: /nerd.md "You can do this with almost every page on the site"