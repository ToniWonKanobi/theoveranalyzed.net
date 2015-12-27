Title: Espresso Web Editor and Hack, a Typeface Designed for Source Code  
Date: 2015-08-31 08:39  
Description: Tired of Monaco or Menlo fonts for your monospace code blocks? Hack is for you.  
Tags: Typography, Apps, Web Design  
Image: http://cdn.arstechnica.net/wp-content/uploads/2015/08/Screen-Shot-2015-08-29-at-5.06.40-PM.png  

![Espresso has a permanent place on my Dock because it's awesome.](http://macrabbit.com/espresso/images/screenshots-2.0/Main-SourceEditor.jpg "Espresso Text Editor for OS X")
<!-- {.screenshot} -->

### Espresso, the "Web Editor" for Mac

My code editor of choice has been with me since my [Squarespace][1] days. The Squarespace [Developer Platform][2] allowed either [Git][3] or [SFTP][4] methods for making changes to Developer Platform sites. Because I was---and in a lot of ways still am---a Git newbie, I chose SFTP instead. At the time, I wasn't sure what that even meant, so I went to YouTube for clues. I stumbled upon this [video][5], in which the author explained how to use the Developer Platform via SFTP using [Espresso][6], a Mac application by [MacRabbit][7]. 

In a lot of ways, Espresso is very much of the pre-2007 Apple era of OS X applications. Textures are rich, and the menus are reminiscent of a time long forgotten---when real app options/settings were a thing. In my continual search for something better, I've tried the venerable [BBEdit][8], by [Bare Bones Software][9]. [Most][10] [everyone][11] [important][12] [in][13] [the][14] [Apple][15] [blogosphere][16] uses BBEdit, [and I can understand why][17]. Right now, I use a combination of [Byword][18], [TextEdit][19], and Espresso to keep TheOverAnalyzed up and running. Byword is where I write most of the content. TextEdit is for [Camel][20]-specific file extensions that Byword doesn't recognize.[^1] And Espresso is for editing HTML, CSS, and JavaScript files.

Editing in Espresso is nice due to their language highlighting. It makes reviewing code much easier:

![This would be more laborious without all the pretty colors](http://d.pr/i/1jmu3+ "Espresso Colors")

And what is especially nice about Espresso is their default custom font, Espresso Mono. That font features well thought-out character choices. For instance, in most monospace fonts, the capital "O" character is easily mistaken for the number "0". Espresso Mono has this taken care of:

![Espresso Mono: the number "0" versus the letter "O"](http://d.pr/i/1fh8y+ "'0' vs 'O' in Espresso Mono")
<!-- {.screenshot style="max-width: 50%;"} -->

### In the Spirit of Espresso Mono Comes Hack

Why am I writing about an infrequently-updated "web-editor?" Because of its aforementioned typeface, Espresso Mono. I wish Espresso Mono was available as a webfont. Web designers have [plenty][21] of [font foundries][22] to go to for great webfonts. But this isn't the case for monospace fonts---fonts most web designers use for source code.

Yesterday, Nathan Mattise of Ars Technica [linked][23] to a new [open-sourced][24] monospace font named [Hack][25].

![An alternative to Monaco: Hack](http://cdn.arstechnica.net/wp-content/uploads/2015/08/Screen-Shot-2015-08-29-at-5.06.40-PM.png "Hack typeface")
<!-- {.screenshot} -->

Here's what Mattise had to say about Hack:

> The days of coders being shackled to Monaco or Courier New ends now. At SourceFoundry.org this week, programmer Chris Simpkins debuted the 2.0 version of 
>
> Hack, an open-source typeface designed specifically for use in source code.
Hack is characterized by a large x-height, wide aperture, and low contrast design in order to be "highly legible" at common coding text sizes. Its "sweet spot runs in the 8px-12px range on modern desktop and laptop monitors," Simpkins writes on [GitHub][24]. "Combine it with an HD monitor and you can comfortably work at 6 or 7px sizes." As seen in the image above, there's a heavier semi-bold weight in the regular font, and strategic serifs eliminate large gaps on each side of narrow characters. As Simpkins notes on the SourceFoundry site, **this helps to distinguish glyphs like the lowercase l and number 1 at small text sizes** [emphasis added].

(Not to mention the "0" and "O" characters.)

After visiting the GitHub page, I immediately found the CDN[^2] link and added that to my website's `<head>` section:

![CDN source? Nice.](http://d.pr/i/sINJ+ "Adding the Hack stylesheet to `header.html`")

I also called for Hack via `font-family` for `<pre>` and `<code>`:

![Changing the font-family preference](http://d.pr/i/176dB+ "Calling for Hack in my `main.css` stylesheet")

Voilà:

![Hack installed on TheOverAnalyzed](http://d.pr/i/12y9F+ "Hack installed on TheOverAnalyzed")

[^1]: Looking in your direction, `.redirect`
[^2]: You don't have to use a CDN---you could also deploy the font from you own [webserver][a], if you're into that sort of thing.

[a]: https://github.com/chrissimpkins/Hack#host-hack-font-files-on-your-server "GitHub for Hack"

[1]: /tags/Squarespace "Posts tagged 'Squarespace'"
[2]: http://developers.squarespace.com "Developer Platform on Squarespace"
[3]: https://en.wikipedia.org/wiki/Git_(software) "Wikipedia: Git"
[4]: https://en.wikipedia.org/wiki/SFTP "Wikipedia: SFTP"
[5]: https://www.youtube.com/watch?v=HzravxTgTe4 "Setting Up Squarespace (Squarespace 6) Developer Platform with Espresso2 and Live"
[6]: http://macrabbit.com/espresso/ "Espresso website"
[7]: http://macrabbit.com "Developers of Espresso"
[8]: https://en.wikipedia.org/wiki/BBEdit "Wikipedia: BBEdit"
[9]: http://www.barebones.com/products/bbedit/ "BBEdit"
[10]: http://twitter.com/gruber "John Gruber on Twitter"
[11]: http://twitter.com/siracusa "John Siracusa on Twitter"
[12]: http://twitter.com/jsnell "Jason Snell on Twitter"
[13]: http://www.twitter.com/jdalrymple "Jim Dalrymple on Twitter"
[14]: http://www.twitter.com/reneritchie "Rene Ritchie on Twitter"
[15]: http://www.twitter.com/danielpunkass "Daniel Jalkut on Twitter"
[16]: http://www.twitter.com/jamesthomson "James Thompson on Twitter"
[17]: http://duckduckgo.com/?q=bbedit&t=osx "BBEdit search"
[18]: https://itunes.apple.com/us/app/byword/id420212497?at=1l3vx9s "Byword on the Mac App Store"
[19]: https://en.wikipedia.org/wiki/TextEdit "Wikipedia: TextEdit"
[20]: /2015/6/17/leaving-squarespace-part-I-getting-started-with-camel "My piece on leaving Squarespace for Camel"
[21]: http://www.typography.com/ "Hoefler & Co. typefaces"
[22]: http://www.fontbureau.com "Font Bureau"
[23]: http://arstechnica.com/information-technology/2015/08/open-source-typeface-hack-brings-design-to-source-code/ "Ars piece on Hack"
[24]: https://github.com/chrissimpkins/Hack#about "About Hack typeface"
[25]: http://sourcefoundry.org/hack/ "Hack typeface"