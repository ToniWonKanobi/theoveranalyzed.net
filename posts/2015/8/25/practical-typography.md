@@ Title=How Practical Typography Helped Me Be a Better Writer  
@@ Date=2015-08-25T10:35:00+00:00  
@@ Description=How did I *just* discover Matthew Butterick's Practical Typography? It's helped me become a better writer, which should totally benefit you all.  
@@ Tags=fonts, typefaces, typography, web design, blogging, Matthew Butterick, Practical Typography  
@@ Image=http://practicaltypography.com/images/index-a.svg  

<figure>
	<a class="nohover" href="http://d.pr/i/17dhF+">
		<img src="http://d.pr/i/17dhF+" alt="Practical Photography: Semicolons and colons" />
	</a>
	<figcaption>No one ever gets <a href="http://practicaltypography.com/semicolons-and-colons.html">these</a> right.</figcaption>
</figure>

## Forward

When [Matthew Butterick][wikipedia] launched [Practical Typography][practicaltypography] in 2013, my concept of the ideal desktop writing experience was [rich text][wikipedia 2] (via [Pages.app][wikipedia 3]).[^pages] Back then, I hadn't even started blogging. I knew nothing about [plain text][wikipedia 4], [Markdown][wikipedia 5], [HTML][wikipedia 6], [CSS][wikipedia 7], or [JavaScript][wikipedia 8].[^yes] Things are a little different now. 

Practical Typography is an absolute gold-mine of a writing resource. I'm not alone in that [assessment][macsparky]. Butterick's ideas on simple and clear writing is presented in a pseudo-online book format, unsurprisingly set in [wonderful typography][practicaltypography 2]. I want to share some of the things I learned from his tutorial, as well as encourage you to check it out for yourself.[^im]

# Fixing Bad Habits

## Dashes

It took me all of about ten minutes to dive into the section on [hyphens and dashes][practicaltypography 3]---a subject I was convinced I had mastered previously. Turns Out&trade; I was wrong.

There were a couple things wrong with my previous usage of hyphens instead of dashes:

1. Using a double-hyphen is indicative of an *en* dash---not an *em* dash, which is what I was going for when I used ` -- ` in my writing. According to Butterick, "The em dash is used to make a break be­tween parts of a sen­tence. Use it when a comma is too weak, but a colon, semi­colon, or pair of paren­the­ses is too strong." What I should have done was use a triple hyphen instead `---`, which [`markdown-it`][npmjs] ([CommonMark][cm]) parses to the correct em dash.

	Incorrect:
	
	```
	Prose -- aside -- back to prose.
	```
	
	More correct:[^but]
	
	```
	Prose --- aside --- back to prose.
	```
	
	
2. I should have omitted the spaces on either side of the double hyphens. Again, `markdown-it` was smart enough to go ahead and parse the `---` as an em dash, but the more proper writing convention would be to have no spaces. dictates that

	[Still] incorrect:
	
	```
	Prose --- aside --- back to prose.
	```
	
	Correct:
	
	```
	Prose---aside---back to prose.
	```
	
	The above Markdown gets parsed to this:
	
	<pre>Prose&mdash;aside&mdash;back to prose.</pre>

### What's the difference between *en* and *em* dashes?

Both dashes have different uses.[^int] As stated previously, em dashes are for separating the main text and an aside. It's sort of like a baby-version of a semicolon.[^sc] 

En dashes are appropriate to signify a range of values, such has the year range 2015--2016.

Incorrect:

`2015-2016` <span style="margin-left:2em"><code>markdown-it</code> parse: 2015-2016</span>

Correct:

`2015--2016` <span style="margin-left:2em"><code>markdown-it</code> parse: 2015&ndash;2016</span>

According to Butterick, this nasty habit of writers using double-hyphens in place of actual em dashes was born from the [typewriter days][practicaltypography 4]. After a simple Finder search,[^ma] I spent about an hour or so going through ~50 or so Markdown documents, quickly changing all the instances of inappropriate double hyphens ` -- ` and  changing them instead to the correct em dashes <span><code>&mdash;</code></span>.

## Font Sizes

Butterick also had good advice as far as header (`<h1>`, `<h2>`, etc.) font sizes. Previously, for `.entry` ("body text") `<h1>`'s, I was using a font size 175% (`font-size: 1.75em`) of the normal body text, and 150% for `<h2>`'s (`font-size: 1.5em`). This was simply too big. 

Not only were `.entry`-level headings made too big compared to the regular font size, but post titles (`.postHeader` and `.postHeaderLinked`) were even *bigger*. For example, for `.postHeader` (non-linked posts) titles, the font size was 200% body text for the homepage (`.homepage`), and 220% on the permalink page (`.post`). 

Here's how to visualize just how much I had erroneously-inflated the headings:

<div style="text-align:center">

Body (body text)

<span style="font-size:1.75em">Headings</span> (headings)

<span style="font-size:2em">Title</span> (post titles on homepage)

<span style="font-size:2.2em">Big Title</span> (post titles on permalink page)

</div>

Note that in the example above, I left the font weight alone. The differences in font size are even more exaggerated when `font-weight: 600` was applied.[^std]

According to Butterick, such extreme variations in heading sizes aren't necessary to differentiate headings from body text. The fact that the headings are bolded and on their own line is typically enough to visually separate headings and body text. 

I spent some time scaling-down the inflated heading sizes, and while doing so, eliminated the separate permalink-page `.post` styles as well. This wasn't completely inspired by Butterick; this was an application of the general principle of *less is more*.

<hr class="small" />

I'm bound to spend more time with Butterick's Practical Typography. There's just so much to digest. What is reassuring to me is that I had already been practicing a lot of his suggestions. That said, I'm sure this will prove a valuable resource for me in the future.

[^but]: But still not perfect. Keep reading.
[^int]: Butterick: "The em dash (---) is typ­i­cally about as wide as a cap­i­tal H. The en dash (--) is about half as wide."
[^im]: I'm convinced that even non-[web]bloggers could find use from Practical Typography. Indeed, he has whole sections devoted to [print][practicaltypography 5].
[^ma]: Made possible only because Markdown documents are plain text, and searching through plain text documents is a snap for the OS X filesystem.
[^pages]: But only Pages 4.3 (from [iWork '09][wikipedia 9]), which has always been better than [version 5.0][macworld].
[^sc]: A punctuation mark [so frequently misused][practicaltypography 6] these days.
[^std]: The standard font-weight I've set for Ideal Sans is 300 (`font-weight: 300`). (This is the default for the webfont.)
[^yes]: Yes, I actually hyperlinked every single one of those last few entries, because why not?

[cm]: http://commonmark.org
[macsparky]: http://macsparky.com/blog/practicaltypography
[macworld]: http://www.macworld.com/article/2059208/pages-5-0-for-mac-review-apple-writes-a-new-chapter-for-its-word-processing-app.html
[npmjs]: https://www.npmjs.com/package/markdown-it
[practicaltypography]: http://practicaltypography.com
[practicaltypography 2]: http://practicaltypography.com/equity.html
[practicaltypography 3]: http://practicaltypography.com/hyphens-and-dashes.html
[practicaltypography 4]: http://practicaltypography.com/typewriter-habits.html
[practicaltypography 5]: http://practicaltypography.com/research-papers.html
[practicaltypography 6]: http://practicaltypography.com/semicolons-and-colons.html
[wikipedia]: https://en.wikipedia.org/wiki/Matthew_Butterick
[wikipedia 2]: https://en.wikipedia.org/wiki/Formatted_text
[wikipedia 3]: https://en.wikipedia.org/wiki/Pages_(word_processor)
[wikipedia 4]: https://en.wikipedia.org/wiki/Plain_text
[wikipedia 5]: https://en.wikipedia.org/wiki/Markdown
[wikipedia 6]: https://en.wikipedia.org/wiki/HTML
[wikipedia 7]: https://en.wikipedia.org/wiki/Cascading_Style_Sheets
[wikipedia 8]: https://en.wikipedia.org/wiki/JavaScript
[wikipedia 9]: https://en.wikipedia.org/wiki/IWork#Versions