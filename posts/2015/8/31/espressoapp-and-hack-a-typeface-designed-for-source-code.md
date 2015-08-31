@@ Title=Espresso.app and Hack, a Typeface Designed for Source Code 
@@ Date=2015-08-31T08:39:00+00:00  
@@ Description=Tired of Monaco or Menlo fonts for your monospace code blocks? Hack is for you.  
@@ Tags=fonts, typefaces, monospace, design, web design, Hack, Menlo, Monaco  
@@ Image=http://cdn.arstechnica.net/wp-content/uploads/2015/08/Screen-Shot-2015-08-29-at-5.06.40-PM.png  

<figure>
	<a class="nohover" href="http://macrabbit.com/espresso/images/screenshots-2.0/Main-SourceEditor.jpg">
		<img src="http://macrabbit.com/espresso/images/screenshots-2.0/Main-SourceEditor.jpg" alt="Espresso Text Editor for OS X" />
	</a>
	<figcaption><a href="http://macrabbit.com/espresso/">Espresso</a> has a permanent place on my Dock because it's awesome.</figcaption>
</figure>

# Expresso, the "Web Editor" for Mac

My code editor of choice has been with me since my [Squarespace][theoveranalyzed] days. The Squarespace [Developer Platform][squarespace] allowed either [Git][wikipedia]) or [SFTP][wikipedia 2] methods for making changes to Developer Platform sites. Because I was---and in a lot of ways still am---a Git newbie, I chose SFTP instead. At the time, I wasn't sure what that even meant, so I went to YouTube for clues. I stumbled upon this [video][youtube], in which the author explained how to use the Developer Platform via SFTP using [Espresso][macrabbit], a Mac application by [MacRabbit][macrabbit 2]. 

In a lot of ways, Espresso is very much of the pre-2007 Apple era of OS X applications. Textures are rich, and the menus are reminiscent of a time long forgotten---when real app options/settings were a thing. In my continual search for something better, I've tried the venerable [BBEdit][wikipedia 3], by [Bare Bones Software][barebones]. [Most][twitter] [everyone][twitter 2] [important][twitter 3] [in][twitter 4] [the][twitter 5] [Apple][twitter 6] [blogosphere][twitter 7] uses BBEdit, [and I can understand why][duckduckgo]. Right now, I use a combination of [Byword][bywordapp], [TextEdit][wikipedia 4], and Espresso to keep TheOverAnalyzed up and running. Byword is where I write most of the content. TextEdit is for [Camel][theoveranalyzed 2]-specific file extensions that Byword doesn't recognize.[^redirect] And Espresso is for editing HTML, CSS, and JavaScript files.

Editing in Espresso is nice due to their language highlighting. It makes reviewing code much easier:

<figure>
	<a class="nohover" href="http://d.pr/i/1jmu3+">
		<img src="http://d.pr/i/1jmu3+" alt="Espresso Colors" />
	</a>
	<figcaption>This would be more laborious without all the pretty colors</figcaption>
</figure>

And what is especially nice about Espresso is their default custom font, Espresso Mono. That font features well thought-out character choices. For instance, in most monospace fonts, the capital "O" character is easily mistaken for the number "0". Espresso Mono has this taken care of:

<figure>
	<a class="nohover" href="http://d.pr/i/1fh8y+">
		<img src="http://d.pr/i/1fh8y+" alt="0 vs O in Espresso Mono" />
	</a>
	<figcaption>Espresso Mono: <code>0</code> vs <code>O</code></figcaption>
</figure>

# In the Spirit of Espresso Mono Comes Hack

Why am I writing about an infrequently-updated "web-editor?" Because of its aforementioned typeface, Espresso Mono. I wish Espresso Mono was available as a webfont. Web designers have [plenty][typography] of [font foundries][fontbureau] to go to for great webfonts. But this isn't the case for monospace fonts---fonts most web designers use for source code.

Yesterday, Nathan Mattise of Ars Technica [linked][arstechnica] to a new [open-sourced][github] monospace font named [Hack][sourcefoundry].

<figure>
	<a class="nohover" href="http://cdn.arstechnica.net/wp-content/uploads/2015/08/Screen-Shot-2015-08-29-at-5.06.40-PM.png">
		<img src="http://cdn.arstechnica.net/wp-content/uploads/2015/08/Screen-Shot-2015-08-29-at-5.06.40-PM.png" alt="Hack" />
	</a>
	<figcaption>An alternative to <code>font-family: Monaco</code>: Hack</figcaption>
</figure>

Here's what Mattise had to say about Hack:
>The days of coders being shackled to Monaco or Courier New ends now. At SourceFoundry.org this week, programmer Chris Simpkins debuted the 2.0 version of 
>
>Hack, an open-source typeface designed specifically for use in source code.
Hack is characterized by a large x-height, wide aperture, and low contrast design in order to be "highly legible" at common coding text sizes. Its "sweet spot runs in the 8px-12px range on modern desktop and laptop monitors," Simpkins writes on [GitHub][github]. "Combine it with an HD monitor and you can comfortably work at 6 or 7px sizes." As seen in the image above, there's a heavier semi-bold weight in the regular font, and strategic serifs eliminate large gaps on each side of narrow characters. As Simpkins notes on the SourceFoundry site, **this helps to distinguish glyphs like the lowercase l and number 1 at small text sizes** [emphasis added].

(Not to mention the "0" and "O" characters.)

After visiting the GitHub page, I immediately found the CDN[^cdn] link and added that to my website's `<head>` section:

<figure>
	<a class="nohover" href="http://d.pr/i/sINJ+">
		<img src="http://d.pr/i/sINJ+" alt="Adding the Hack stylesheet to `header.html`">
	</a>
	<figcaption>CDN source? Nice.</figcaption>
</figure>

I also called for Hack via `font-family` for `<pre>` and `<code>`:

<figure>
	<a class="nohover" href="http://d.pr/i/176dB+">
		<img src="http://d.pr/i/176dB+" alt="Calling for Hack in my `main.css` stylesheet">
	</a>
	<figcaption>CDN source? Nice.</figcaption>
</figure>

Voilà:

<figure>
	<a class="nohover" href="http://d.pr/i/12y9F+">
		<img src="http://d.pr/i/12y9F+" alt="Hack installed on TheOverAnalyzed">
	</a>
	<figcaption>Boom</figcaption>
</figure>

[^cdn]: You don't have to use a CDN---you could also deploy the font from you own [webserver][github 2], if you're into that sort of thing.
[^redirect]: Looking in your direction, `.redirect`

[arstechnica]: http://arstechnica.com/information-technology/2015/08/open-source-typeface-hack-brings-design-to-source-code/
[barebones]: http://www.barebones.com/products/bbedit/
[bywordapp]: http://bywordapp.com/
[duckduckgo]: http://duckduckgo.com/?q=bbedit&t=osx
[fontbureau]: http://www.fontbureau.com
[github]: https://github.com/chrissimpkins/Hack#about
[github 2]: https://github.com/chrissimpkins/Hack#host-hack-font-files-on-your-server
[macrabbit]: http://macrabbit.com/espresso/
[macrabbit 2]: http://macrabbit.com
[sourcefoundry]: http://sourcefoundry.org/hack/
[squarespace]: http://developers.squarespace.com
[theoveranalyzed]: /tags/Squarespace
[theoveranalyzed 2]: /2015/6/17/leaving-squarespace-part-I-getting-started-with-camel
[twitter]: http://twitter.com/gruber
[twitter 2]: http://twitter.com/siracusa
[twitter 3]: http://twitter.com/jsnell
[twitter 4]: http://www.twitter.com/jdalrymple
[twitter 5]: http://www.twitter.com/reneritchie
[twitter 6]: http://www.twitter.com/danielpunkass
[twitter 7]: http://www.twitter.com/jamesthomson
[typography]: http://www.typography.com/
[wikipedia]: https://en.wikipedia.org/wiki/Git_(software)
[wikipedia 2]: https://en.wikipedia.org/wiki/SFTP
[wikipedia 3]: https://en.wikipedia.org/wiki/BBEdit
[wikipedia 4]: https://en.wikipedia.org/wiki/TextEdit
[youtube]: https://www.youtube.com/watch?v=HzravxTgTe4