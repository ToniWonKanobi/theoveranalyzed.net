Title: Remembering the Non-breaking Space Entity  
Date: 2015-10-11 09:25  
Description: Don't forget about HTML's "no space" space, useful for weird situations where `white-space: nowrap` isn't suitable.  
Tags: Best Of, Web Design, HTML  
Image: http://d.pr/i/1igkh+  

<figure>
	<img class="iphone screenshot" src="http://d.pr/i/1igkh+" alt="Non-breaking space entity, oh how I forgot about you." title="Non-breaking space entity, oh how I forgot about you.">
	<figcaption>This stupid arrow has irked me for months.</figcaption>
</figure>

A few nights ago, inspired by a [critique of my site's design][1], I finally fixed my `.content` being too wide on smaller-screened iPhones, as well as some other aspects of my poorer small-screen layout.[^1]

And as expected, this took me down the rabbit hole of tinkering. While I was previewing the site in [Safari's Responsive Design Mode][2], I was reminded by one of those things that has irritated me for months, but I never took the time to fix: 

<p><em class="takeHome">That arrow.</em></p>

You know, that arrow symbol `→` that so[^2] often[^3] signifies[^4] a linked[^5] post on blogs.[^6]Occasionally, I would visit my site check something, only to find that the arrow in a linked post title had wrapped to a new line *by itself*. Ugh. Terrible.I wasn't sure if this was caused by an omission on my part, so I checked [Marco.org][3], [Liss is More][4], and a couple other sites. They all exhibited the same arrow-wrap-wonkiness.[^7] I asked [each website owner][5] [on Twitter][6], and at least [one of them didn't know how to fix it][7].

My thought was the CSS property `white-space` to `nowrap`, like so:

```css
white-space: nowrap
```

A good idea, no doubt, but that would have fixed one problem only to create another. The arrow `→` would no longer wrap at all, which could cause it to overwhelm the horizontal container. (That's even worse than my arrow-wrapping-to-a-line-by-itself problem.)

Thankfully, I follow a few CSS experts. And none other than Mr. [CSS-Tricks][8] himself---Chris Coyer---had the solution:

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi" title="Me on Twitter">@ToniWonKanobi</a> &amp;nbsp; between Arrow and last word</p>&mdash; Chris Coyier (@chriscoyier) <a href="https://twitter.com/chriscoyier/status/651002224525443072" title="Chris Coyier's reply on Twitter">October 5, 2015</a></blockquote>

Ahh. `&nbsp;`---the HTML entity for "[non-breaking space character][9]." What is that, exactly? It's just what it sounds like. It is a space character, except unlike regular spaces, which HTML will truncate, the `&nbsp;` character **will not break**.

In other words, if you have a string of text that would look stupid broken, such as proper nouns that contain a number modifier (e.g., `Tweetbot 4`), you can use `&nbsp;` to prevent the word and the number from ending up on separate lines.

To implement the non-breaking space character, I dug into the `.html` file that is the template for my posts (`.postHeader.html`) and removed the literal spaces and replaced them with the non-breaking space character, `&nbsp;`.

So,

```html
<h2><a class="postTitleLinked" href="{{Link}}">{{Title}} <span class="linkArrow">&#10142;</span></a></h2>
```

becomes

```html
<h2><a class="postTitleLinked" href="{{Link}}">{{Title}}&nbsp;<span class="linkArrow">&#10142;</span></a></h2>
```

And that's all there is to it.

<figure>
	<img class="screenshot inlineTwo" src="http://d.pr/i/1igkh+" alt="Without &nbsp;" title="Without &nbsp;">
	<img class="screenshot inlineTwo" src="http://d.pr/i/163ur+" alt="With &nbsp;" title="With &nbsp;">
	<figcaption><p>Here's a post header using a regular space character between the title and the arrow, and the same header using the non-breaking space character instead.</p>
<p>Which one looks better to you?</p>
	</figcaption>
</figure>

In it, [Gandalf says to Frodo][13]:

> My dear Frodo. Hobbits really are amazing creatures. You can learn all there is to know about their ways in a month, and yet after a hundred years they can still surprise you.

HTML is my "hobbits"---just when I think I have a handle on it, something like a non-breaking space character pops up and surprises me. Shows what I know.

[^1]: Here's how I handled mobile styles previously:
	<p>I defined an <code>@media</code> query to target all screen widths up to 736px, which is the longest dimension of an iPhone (it's the length of an iPhone 6 Plus display @3x asset sizes)</p>
	<p>I then set <code>.content</code> to <code>width: 300px;</code>, which was a good compromise between too much whitespace on iPhone 6 Plus, and not enough on iPhone 6. (When I did the big redesign back in June, I had a Plus and Allison had a 6, so I could test against both of those devices easily). iPads behaved like the desktop site, more or less (portrait was always a headache for some reason).</p>
	<p>The site looked great on iPhone 6 and 6 Plus, but at 300px, the <code>.content</code> width was overwhelming the 320px width screens on 3.5" and 4" iPhones. Not only was the <code>.content</code> width too wide on those small screens, the font size was too big, and the line spacing was too large as well. Needless to say, I needed to fix this.</p>
	<p>So what did I do?</p>
	<p>I added an additional <code>@media</code> query targeting smaller iPhones: <code>@media (max-width: 320px)</code>.</p>
	<p>Finally, I set <code>.content</code> <code>width: 250px;</code> and <code>font-size: 0.9em;</code>, as well as adjusted some <code>100vw</code> stuffs.</p>
	<p style="display: inline">Boom.</p>
[^2]: [Marco.org][a]:
	<p><img class="screenshot" src="http://d.pr/i/134ms+" alt="The 'Link' arrow  on Marco.org" title="The 'Link' arrow  on Marco.org" style="width: 175px;"></p>
[^3]: [Liss is More][b]:
	<p><img class="screenshot" src="http://d.pr/i/18VCM+" alt="The 'Link' arrow  on Liss Is More" title="The 'Link' arrow  on Liss Is More" style="width: 175px;"></p>
[^4]: [The Brooks Review][c]:
	<p><img class="screenshot" src="http://d.pr/i/iFQM+" alt="The 'Link' arrow  on The Brooks Review" title="The 'Link' arrow  on The Brooks Review" style="width: 175px"></p>
[^5]: [512 Pixels][d]:
	<p><img class="screenshot" src="http://d.pr/i/16hmF+" alt="The 'Link' arrow on 512 Pixels" title="The 'Link' arrow on 512 Pixels" style="width: 175px"></p>
[^6]: [Six Colors][e]:
	<p><img class="screenshot" src="http://d.pr/i/1a2ML+" alt="The 'Link' arrow  on Six Colors" title="The 'Link' arrow  on Six Colors" style="width: 175px;"></p>
[^7]: The Brooks Review's wrapping arrow problem:
	<p><img class="screenshot" src="http://d.pr/i/150Nv+" alt="The 'Link' arrow  wrapping stupidly on The Brooks Review" title="The 'Link' arrow  wrapping stupidly on The Brooks Review" style="width: 175px"></p>

[a]: http://marco.org "Marco Arment's blog, Marco.org"
[b]: http://caseyliss.com "Casey Liss's blog, Liss Is More"
[c]: http://brooksreview.net "Ben Brooks's blog, The Brooks Review"
[d]: http://512pixels.net "Stephen Hackett's blog, 512 Pixels"
[e]: http://sixcolors.com "Jason Snell's website, Six Colors"

[1]: https://twitter.com/MTello1984/status/650875060069249024 "A critique of my site's design"
[2]: http://d.pr/i/197dP+ "Safari Responsive Design Mode"
[3]: http://marco.org "Marco Arment's blog, Marco.org"
[4]: http://www.caseyliss.com "Casey Liss's Blog, Liss Is More"
[5]: https://twitter.com/ToniWonKanobi/status/650916959379320832 "Asking Marco Arment about the link arrows"
[6]: https://twitter.com/ToniWonKanobi/status/650917173292986368 "Asking Casey Liss about the link arrows"
[7]: https://twitter.com/caseyliss/status/650980852348887040 "Casey Liss replying"
[8]: https://css-tricks.com "CSS-Tricks, a great resource for CSS"
[9]: https://en.wikipedia.org/wiki/Non-breaking_space "Wikipedia: The Non-breaking Space Entity"
[10]: https://en.wikipedia.org/wiki/Gandalf "Wikipedia: Gandalf"
[11]: https://en.wikipedia.org/wiki/Frodo_Baggins "Wikipedia: Frodo Baggins"
[12]: https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring "Wikipedia: The Fellowship of the Ring"
[13]: http://www.imdb.com/title/tt0120737/quotes?item=qt0445987 "The Lord of the Rings: The Fellowship of the Ring quote"