Title: How Practical Typography Helped Me Be a Better Writer  
Date: 2015-08-25 10:35  
Description: How did I *just* discover Matthew Butterick's Practical Typography? It's helped me become a better writer, which should totally benefit you all.  
Tags: Typography, Blogging  
Image: http://practicaltypography.com/images/index-a.svg  

<figure>
	<img src="https://d.pr/i/17dhF+" alt="Practical Photography: Semicolons and colons" title="Practical Photography: Semicolons and colons">
	<figcaption>No one ever gets <a href="http://practicaltypography.com/semicolons-and-colons.html">these</a> right.</figcaption>
</figure>

#### Forward

When [Matthew Butterick][1] launched [Practical Typography][2] in 2013, my concept of the ideal desktop writing experience was [rich text][3] (via [Pages.app][4]).[^1] Back then, I hadn't even started blogging. I knew nothing about [plain text][5], [Markdown][6], [HTML][7], [CSS][8], or [JavaScript][9].[^2] Things are a little different now. Practical Typography is an absolute gold-mine of a writing resource. I'm not alone in that [assessment][10]. Butterick's ideas on simple and clear writing is presented in a pseudo-online book format, unsurprisingly set in [wonderful typography][11]. I want to share some of the things I learned from his tutorial, as well as encourage you to check it out for yourself.[^3]

### Fixing Bad Habits

#### Dashes

It took me all of about ten minutes to dive into the section on [hyphens and dashes][12]---a subject I was convinced I had mastered previously. Turns Out&trade; I was wrong.

There were a couple things wrong with my previous usage of hyphens instead of dashes:

1. Using a double-hyphen is indicative of an *en* dash---not an *em* dash, which is what I was going for when I used ` -- ` in my writing. According to Butterick, "The em dash is used to make a break be­tween parts of a sen­tence. Use it when a comma is too weak, but a colon, semi­colon, or pair of paren­the­ses is too strong." What I should have done was use a triple hyphen instead `---`, which [`markdown-it`][13] ([CommonMark][14]) parses to the correct em dash.

	Incorrect:
	
	```nohighlight
	Prose -- aside -- back to prose.
	```
	
	More correct:[^4]
	
	```nohighlight
	Prose --- aside --- back to prose.
	```
2. I should have omitted the spaces on either side of the double hyphens. Again, `markdown-it` was smart enough to go ahead and parse the `---` as an em dash, but the more proper writing convention would be to have no spaces.

	[Still] incorrect:
	
	```nohighlight
	Prose --- aside --- back to prose.
	```
	
	Correct:
	
	```nohighlight
	Prose---aside---back to prose.
	```
	
	The above Markdown gets parsed to this:	

	```html
	<p>Prose&mdash;aside&mdash;back to prose.</p>
	```

##### What's the difference between *en* and *em* dashes?

Both dashes have different uses.[^5] As stated previously, em dashes are for separating the main text and an aside. It's sort of like a baby-version of a semicolon.[^6] En dashes are appropriate to signify a range of values, such has the year range 2015--2016:

<div class="table" id="endashes">
<figure>

| Sample Text | `markdown-it` (CommonMark) Parse |    
| :---------: | :------------------------------------: |   
| `2015-2016` |                2015-2016               |
	
<figcaption>Table 1.1 &mdash; Incorrect use of Hyphens</figcaption>
</figure>

<figure>

| Sample Text | `markdown-it` (CommonMark) Parse |  
| :---------: | :------------------------------------: |  
| `2015-2016` |             2015&ndash;2016            |

<figcaption>Table 1.2 &mdash; Correct use of en dash</figcaption>
</figure>
</div>

According to Butterick, this nasty habit of writers using double-hyphens in place of actual em dashes was born from the [typewriter days][17]. After a simple Finder search,[^7] I spent about an hour or so going through ~50 or so Markdown documents, quickly changing all the instances of inappropriate double hyphens ` -- ` and  changing them instead to the correct em dashes <code>&mdash;</code>.

#### Font Sizes

Butterick also had good advice as far as header (`<h1>`, `<h2>`, etc.) font sizes. Previously, for `.entry` ("body text") `<h1>`'s, I was using a font size 175% (`font-size: 1.75em`) of the normal body text, and 150% for `<h2>`'s (`font-size: 1.5em`). This was simply too big. Not only were `.entry`-level headings made too big compared to the regular font size, but post titles (`.postHeader` and `.postHeaderLinked`) were even *bigger*. For example, for `.postHeader` (non-linked posts) titles, the font size was 200% body text for the homepage (`.homepage`), and 220% on the permalink page (`.post`).

<div class="table" id="previousfontsizes">
<figure>

| Sample Text                                | Text Type              |   HTML & CSS Classes   |  
| :----------------------------------------- | :--------------------- | :--------------------: |  
| Blah                                       | Body text              |  `<p>`, `<blockquote>` |  
| <span style="font-size:1.75em">Blah</span> | Headings               |     `<h1>`, `<h2>`     |  
| <span style="font-size:2em">Blah</span>    | "Homepage" post titles | `.homepage .postTitle` |  
| <span style="font-size:2.2em">Blah</span>  | "Permalink" post title |   `.post .postTitle`   |

<figcaption>Table 2.1 &mdash; Previous Font Sizes</figcaption>
</figure>
</div>

Note that in Table 2.1 above, I left the font weight unchanged. The differences in font size are even more exaggerated if my previous `font-weight`'s are applied:[^8]

<div class="table" id="previousfontweightapplied">
<figure>

| Sample Text                                                | Text Type              |   HTML & CSS Classes   | `font-weight` |
| :--------------------------------------------------------- | :--------------------- | :--------------------: | :-----------: |
| Blah                                                       | Body text              |  `<p>`, `<blockquote>` |      300      |
| <span style="font-size:1.75em;font-weight:600">Blah</span> | Headings               |     `<h1>`, `<h2>`     |      600      |
| <span style="font-size:2em;font-weight:800">Blah</span>    | "Homepage" post titles | `.homepage .postTitle` |      800      |
| <span style="font-size:2.2em;font-weight:800">Blah</span>  | "Permalink" post title |   `.post .postTitle`   |      800      |

<figcaption>Table 2.2 &mdash; Previous Font Sizes with <code>font-weight</code> Applied</figcaption>
</figure>
</div>

According to Butterick, such extreme variations in heading sizes aren't necessary to differentiate headings from body text. The fact that the headings are bolded and placed their own line is typically enough to visually separate headings and body text. I spent some time scaling-down the inflated heading sizes, and while doing so, eliminated the separate permalink-page `.post` styles as well. This wasn't completely inspired by Butterick; this was an application of the general principle of *less is more*.

***

I'm bound to spend more time with Butterick's Practical Typography. There's just so much to digest. What is reassuring to me is that I had already been practicing a lot of his suggestions. That said, I'm sure this will prove a valuable resource for me in the future.

<aside class="update">

#### Update: The Mistakes/Styles of Other Writers

After publishing this post, I stumbled upon an old [article][18] from Jason Snell, former *editorial director* for Macworld:

![Jason Snell em dash misuse][19]

And check out the [latest][20] from Ezra Klein---*editor-in-chief* for Vox:

![Ezra Klein em dash misuse][21]

Now, admittedly, it could be argued that how a writer uses en/em dashes (e.g., with or without spaces on either side) is completely subjective. But according to Butterick, Snell and Klein have it all wrong! Looks like I wasn't alone in my incorrect usage of en/em dashes.

</aside>

[^1]: But only Pages 4.3 (from [iWork '09][a]), which has always been better than [version 5.0][b].
[^2]: Yes, I actually hyperlinked every single one of those last few entries, because why not?
[^3]: I'm convinced that even non-[web]bloggers could find use from Practical Typography. Indeed, he has whole sections devoted to [print][c].
[^4]: But still not perfect. Keep reading.
[^5]: Butterick: "The em dash (---) is typ­i­cally about as wide as a cap­i­tal H. The en dash (--) is about half as wide."
[^6]: A punctuation mark [so frequently misused][d] these days.
[^7]: Made possible only because Markdown documents are plain text, and searching through plain text documents is a snap for the OS X filesystem.
[^8]: The standard font-weight I've set for Ideal Sans is 300 (`font-weight: 300`). (This is the default for the webfont.)

[a]: https://en.wikipedia.org/wiki/IWork#Versions "Wikipedia: iWork Versions"
[b]: http://www.macworld.com/article/2059208/pages-5-0-for-mac-review-apple-writes-a-new-chapter-for-its-word-processing-app.html "Macworld on Pages 5.0"
[c]: http://practicaltypography.com/research-papers.html "Practical Typography: Research Papers"
[d]: http://practicaltypography.com/semicolons-and-colons.html "Practical Typography: Semicolons and colons"

[1]: https://en.wikipedia.org/wiki/Matthew_Butterick "Wikipedia: Matthew Butterick"
[2]: http://practicaltypography.com "'Practical Typography,' by Matthew Butterick"
[3]: https://en.wikipedia.org/wiki/Formatted_text "Wikipedia: Formatted text"
[4]: https://en.wikipedia.org/wiki/Pages_(word_processor) "Wikipedia: Pages"
[5]: https://en.wikipedia.org/wiki/Plain_text "Wikipedia: Plain text"
[6]: https://en.wikipedia.org/wiki/Markdown "Wikipedia: Markdown"
[7]: https://en.wikipedia.org/wiki/HTML "Wikipedia: HTML"
[8]: https://en.wikipedia.org/wiki/Cascading_Style_Sheets "Wikipedia: CSS"
[9]: https://en.wikipedia.org/wiki/JavaScript "Wikipedia: JavaScript"
[10]: http://macsparky.com/blog/practicaltypography "David Sparks on 'Practical Typography'"
[11]: http://practicaltypography.com/equity.html "Practical Typography: Equity"
[12]: http://practicaltypography.com/hyphens-and-dashes.html "Practical Typography: Hyphens and Dashes"
[13]: https://www.npmjs.com/package/markdown-it "The markdown processor that runs on TheOverAnalyzed"
[14]: http://commonmark.org "'Standard Markdown' Project"
[17]: http://practicaltypography.com/typewriter-habits.html "Practical Typography: Typewriter Habits"
[18]: http://www.macworld.com/article/1026829/powermacg5nextgeneration.html "Jason Snell's Macworld piece"
[19]: https://d.pr/i/11z2p+ "Jason Snell em dash misuse"
[20]: http://www.vox.com/2015/8/25/9205801/hillary-clinton-joe-biden "Ezra Klein's piece on Vox"
[21]: https://d.pr/i/1aAVj+ "Ezra Klein em dash misuse"