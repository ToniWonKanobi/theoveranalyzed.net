Title: Remembering the Non-breaking Space Entity  
Date: 2015-10-11 09:25  
Description: Don't forget about HTML's "no space" space, useful for weird situations where `white-space: nowrap` isn't suitable.  
Tags: Web Design, HTML, Popular  
Image: https://d.pr/i/1igkh+  

![Non-breaking space entity, oh how I forgot about you.][1]

A few nights ago, inspired by a [critique of my site's design][2], I finally fixed my `.content` being too wide on smaller-screened iPhones, as well as some other aspects of my poorer small-screen layout.[^1]

And as expected, this took me down the rabbit hole of tinkering. While I was previewing the site in [Safari's Responsive Design Mode][3], I was reminded by one of those things that has irritated me for months, but I never took the time to fix: 

It was that arrow.

You know, that arrow symbol `→` that so[^2] often[^3] signifies[^4] a linked[^5] post on blogs.[^6]

Occasionally, I would visit my site check something, only to find that the arrow in a linked post title had wrapped to a new line *by itself*.

Ugh.

*Terrible.*

I wasn't sure if this was caused by an omission on my part, so I checked [Marco.org][4], [Liss is More][5], and a couple other sites. They all exhibited the same arrow-wrap-wonkiness.[^7] I asked [each website owner][6] [on Twitter][7], and at least [one of them didn't know how to fix it][8].

My thought was the CSS property `white-space` to `nowrap`, like so:

```css
white-space: nowrap
```

A good idea, no doubt, but that would have fixed one problem only to create another. The arrow `→` would no longer wrap at all, which could cause it to overwhelm the horizontal container. (That's even worse than my arrow-wrapping-to-a-line-by-itself problem.)

Thankfully, I follow a few CSS experts. And none other than Mr. [CSS-Tricks][9] himself---Chris Coyer---had the solution:

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi" title="Me on Twitter">@ToniWonKanobi</a> &amp;nbsp; between Arrow and last word</p>&mdash; Chris Coyier (@chriscoyier) <a href="https://twitter.com/chriscoyier/status/651002224525443072" title="Chris Coyier's reply on Twitter">October 5, 2015</a></blockquote>

Ahh. `&nbsp;`---the HTML entity for "[non-breaking space character][10]." What is that, exactly? It's just what it sounds like. It is a space character, except unlike regular spaces, which HTML will truncate, the `&nbsp;` character **will not break**.

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
	<img class="twoinline border" src="http://d.pr/i/14jkN+" alt="Without &nbsp;" title="Without &nbsp;">
	<img class="twoinline border" src="https://d.pr/i/163ur+" alt="With &nbsp;" title="With &nbsp;">
	<figcaption>Here's a post header that has a regular space character between the title and the arrow (Left), and another post header using the non-breaking space character instead.</figcaption>
</figure>

Which one looks better to you? Yeah, I thought so.

Recall [Gandalf saying this to Frodo][11]:

> My dear Frodo. Hobbits really are amazing creatures. You can learn all there is to know about their ways in a month, and yet after a hundred years they can still surprise you.

HTML is my "hobbits"---just when I think I have a handle on it, something like a non-breaking space character pops up and surprises me. Shows what I know.

[^1]: Here's how I handled mobile styles previously:
	
	I defined an `@media` query to target all screen widths up to 736px, which is the longest dimension of an iPhone (it's the length of an iPhone 6 Plus display @3x asset sizes)
	
	I then set `.content` to `width: 300px;`, which was a good compromise between too much whitespace on iPhone 6 Plus, and not enough on iPhone 6. (When I did the big redesign back in June, I had a Plus and Allison had a 6, so I could test against both of those devices easily). iPads behaved like the desktop site, more or less (portrait was always a headache for some reason).
	
	The site looked great on iPhone 6 and 6 Plus, but at 300px, the `.content` width was overwhelming the 320px width screens on 3.5" and 4" iPhones. Not only was the `.content` width too wide on those small screens, the font size was too big, and the line spacing was too large as well. Needless to say, I needed to fix this.
	
	So what did I do?
	
	I added an additional `@media` query targeting smaller iPhones: `@media (max-width: 320px)`.
	
	Finally, I set `.content` `width: 250px;` and `font-size: 0.9em;`, as well as adjusted some `100vw` stuffs.
	
	Boom.
[^2]: [Marco.org][a]:
![The 'Link' arrow  on Marco.org][b] <!-- {style="max-width: 175px;"} -->
[^3]: [Liss is More][c]:
![The 'Link' arrow  on Liss Is More][d] <!-- {style="max-width: 175px;"} -->
[^4]: [The Brooks Review][e]:
![The 'Link' arrow  on The Brooks Review][f] <!-- {style="max-width: 175px;"} -->
[^5]: [512 Pixels][g]:
![The 'Link' arrow on 512 Pixels][h] <!-- {style="max-width: 175px;"} -->
[^6]: [Six Colors][i]:
![The 'Link' arrow  on Six Colors][j] <!-- {style="max-width: 175px;"} -->
[^7]: The Brooks Review's wrapping arrow problem:
![The 'Link' arrow  wrapping stupidly on The Brooks Review][k] <!-- {style="max-width: 175px;"} -->

[a]: http://marco.org "Marco Arment's blog, Marco.org"
[b]: https://d.pr/i/134ms+ "The 'Link' arrow  on Marco.org"
[c]: http://caseyliss.com "Casey Liss's blog, Liss Is More"
[d]: https://d.pr/i/18VCM+ "The 'Link' arrow  on Liss Is More"
[e]: http://brooksreview.net "Ben Brooks's blog, The Brooks Review"
[f]: https://d.pr/i/iFQM+ "The 'Link' arrow  on The Brooks Review"
[g]: http://512pixels.net "Stephen Hackett's blog, 512 Pixels"
[h]: https://d.pr/i/16hmF+ "The 'Link' arrow on 512 Pixels"
[i]: http://sixcolors.com "Jason Snell's website, Six Colors"
[j]: https://d.pr/i/1a2ML+ "The 'Link' arrow  on Six Colors"
[k]: https://d.pr/i/150Nv+ "The 'Link' arrow  wrapping stupidly on The Brooks Review"

[1]: https://d.pr/i/n4zN+ "Non-breaking space entity, oh how I forgot about you."
[2]: https://twitter.com/MTello1984/status/650875060069249024 "A critique of my site's design"
[3]: https://d.pr/i/197dP+ "Safari Responsive Design Mode"
[4]: http://marco.org "Marco Arment's blog, Marco.org"
[5]: http://www.caseyliss.com "Casey Liss's Blog, Liss Is More"
[6]: https://twitter.com/ToniWonKanobi/status/650916959379320832 "Asking Marco Arment about the link arrows"
[7]: https://twitter.com/ToniWonKanobi/status/650917173292986368 "Asking Casey Liss about the link arrows"
[8]: https://twitter.com/caseyliss/status/650980852348887040 "Casey Liss replying"
[9]: https://css-tricks.com "CSS-Tricks, a great resource for CSS"
[10]: https://en.wikipedia.org/wiki/Non-breaking_space "Wikipedia: The Non-breaking Space Entity"
[11]: http://www.imdb.com/title/tt0120737/quotes?item=qt0445987 "The Lord of the Rings: The Fellowship of the Ring quote"