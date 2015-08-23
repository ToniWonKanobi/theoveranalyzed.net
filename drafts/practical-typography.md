@@ Title=How Practical Typography Helped Me Be a Better Writer  
@@ Date=2015-08-19T23:39:00+00:00  
@@ Description=How did I *just* discover Matthew Butterick's Practical Typography? It's helped me become a better writer, which should totally benefit you all.  
@@ Tags=fonts, typefaces, typography, web design, blogging, Matthew Butterick, Practical Typography  
@@ Image=http://practicaltypography.com/images/index-a.svg  

<figure>
	<a class="nohover" href="http://d.pr/i/17dhF+">
		<img src="http://d.pr/i/17dhF+" alt="Practical Photography: Semicolons and colons" />
	</a>
	<figcaption>No one ever gets these right.</figcaption>
</figure>

## Forward

When [Matthew Butterick](https://en.wikipedia.org/wiki/Matthew_Butterick) launched [Practical Typography](http://practicaltypography.com) in 2013, my concept of the ideal desktop writing experience was [rich text](https://en.wikipedia.org/wiki/Formatted_text) via [Pages.app](https://en.wikipedia.org/wiki/Pages_(word_processor)).[^pages] Back then, I hadn't even started blogging. I knew nothing about [plain text](https://en.wikipedia.org/wiki/Plain_text), [Markdown](https://en.wikipedia.org/wiki/Markdown), [HTML](https://en.wikipedia.org/wiki/HTML), [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets), or [JavaScript](https://en.wikipedia.org/wiki/JavaScript).[^yes] Things are a little different now. 

Practical Typography is an absolute gold-mine of a writing resource. I'm not alone in that [assessment](http://macsparky.com/blog/practicaltypography). Butterick's ideas on simple and clear writing is presented in a pseudo-online book format, unsurprisingly set in [wonderful typography](http://practicaltypography.com/equity.html). I want to share some of the things I learned from his tutorial, as well as encourage you to check it out for yourself.[^im]

<h2>Contents</h2>

[[TOC]]

# Issues

## Dashes

It took me all of about ten minutes to dive into the section on [hyphens and dashes](http://practicaltypography.com/hyphens-and-dashes.html)---a subject I was convinced I had mastered previously. Turns Out&trade; I was wrong.

There were a couple things wrong with my previous usage of hyphens instead of dashes:

1. Using a double-hyphen is indicative of an *en* dash---not an *em* dash, which is what I was going for when I used ` -- ` in my writing. According to Butterick, "The em dash is used to make a break be­tween parts of a sen­tence. Use it when a comma is too weak, but a colon, semi­colon, or pair of paren­the­ses is too strong." What I should have done was use a triple hyphen instead `---`, which [`markdown-it`](https://www.npmjs.com/package/markdown-it) parses to the correct em dash.

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
	
	<div class="update">Prose&mdash;aside&mdash;back to prose.</div>

### What's the difference between en and em dashes?

Both dashes have different uses. As stated previously, em dashes are for separating the main text and an aside. It's sort of like a baby-version of a semicolon.[^sc] 

En dashes are appropriate to signify a range of values, such has the year range 2015--2016.

Incorrect:

`2015-2016` <span style="margin-left:2em"><code>markdown-it</code> parse: 2015-2016</span>

Correct:

`2015--2016` <span style="margin-left:2em"><code>markdown-it</code> parse: 2015&ndash;2016</span>

According to Butterick, this nasty habit of writers using double-hyphens in place of actual em dashes was born from the [typewriter days](http://practicaltypography.com/typewriter-habits.html). After a simple Finder search,[^ma] I spent about an hour or so going through ~50 or so Markdown documents, quickly changing all the instances of inappropriate double hyphens ` -- ` and  changing them instead to the correct em dashes <span><code>&mdash;</code></span>.

[^but]: But still not perfect. Keep reading.
[^im]: I'm convinced that even non-[web]bloggers could find use from Practical Typography. Indeed, he has whole sections devoted to [print](http://practicaltypography.com/research-papers.html).
[^ma]: Made possible only because Markdown documents are plain text, and searching through plain text documents is a snap for the OS X filesystem.
[^pages]: But only Pages 4.3 (from [iWork '09](https://en.wikipedia.org/wiki/IWork#Versions)), which has always been better than [version 5.0](http://www.macworld.com/article/2059208/pages-5-0-for-mac-review-apple-writes-a-new-chapter-for-its-word-processing-app.html).
[^sc]: A punctuation mark [so frequently misused](http://practicaltypography.com/semicolons-and-colons.html) these days.
[^yes]: Yes, I actually hyperlinked every single one of those last few entries, because why not?