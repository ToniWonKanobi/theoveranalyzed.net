@@ Title=Remembering the Non-breaking Space Character (&nbsp;)  
@@ Date=2015-10-10 09:00  
@@ Description=Don't forget about HTML's "no space" space, useful for weird situations where `white-space: nowrap` isn't suitable.  
@@ Tags=HTML, CSS, blogging, web, web design  
@@ Image=asdf  

<figure>
	<a class="nohover" href="asdf">
		<img src="asdf" alt="Non-breaking space entity, oh how I forgot about you.">
	</a>
	<figcaption>This stupid arrow has irked me for months.</figcaption>
</figure>

Late last night, inspired by a [critique of my site's design](https://twitter.com/MTello1984/status/650875060069249024), I finally fixed my `.content` being too wide on smaller-screened iPhones, as well as some other aspects of my poorer small-screen layout.[^mobile]

And as expected, this took me down a rabbit hole of tinkering. While I was previewing the site in [Safari's Responsive Design Mode](http://d.pr/i/197dP+), I was reminded by one of those things that irritated me for months, but I never had time to fix: 

<div class="takehome">

That arrow

</div>

You know, that arrow symbol `→` that so often signifies a linked post on blogs. On my site it's actually a [Font Awesome glyph](https://fortawesome.github.io/Font-Awesome/icon/long-arrow-right/), but you could approximate it with HTML (`&#10142;`). 

Occasionally, I would visit my site to check something, only to find that the arrow in a linked post title had wrapped to a new line *by itself*. Ugh. How terrible is that, right?

I wasn't sure if this was just something stupid I was omitting in my design, so I checked [Marco.org](http://marco.org) and [Liss is More](http://www.caseyliss.com), and they both exhibited the same arrow-wrap-wonkiness. I asked [each website owner](https://twitter.com/ToniWonKanobi/status/650916959379320832) [on Twitter](https://twitter.com/ToniWonKanobi/status/650917173292986368), and at least [one of them didn't know how to fix it](https://twitter.com/caseyliss/status/650980852348887040).

Thankfully, I follow a few CSS experts, and none other than CSS-Tricks Chris Coyer had the the solution:

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi">@ToniWonKanobi</a> &amp;nbsp; between Arrow and last word</p>&mdash; Chris Coyier (@chriscoyier) <a href="https://twitter.com/chriscoyier/status/651002224525443072">October 5, 2015</a></blockquote>

Ahh. `&nbsp;`---the HTML entity for "non-breaking space." What is that, exactly? It is literally what it sounds like. It is a space character, except unlike regular spaces, which HTML will truncate, the `&nbsp;` character **will not break**.

In other words, if you have a string of text that would look stupid broken, such as proper nouns that contain a number modifier (e.g., `Tweetbot 4`), you can use `&nbsp;` to prevent the word and the number from ending up on separate lines.

Consider the following two passages of text:[^pass]

<div style="overflow-x: break-all">
<p>asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf Tweetbot 4</p>
</div>

<div style="overflow-x: break-all">
<p>asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf Tweetbot&nbsp;4</p>
</div> 

To implement the non-breaking space character, I dug into the `.html` file that is the template for my posts (`.postHeader.html`) and removed the literal spaces and replaced them with the non-breaking space character, `&nbsp;`:

```
<li class="postPermalink">
	<a class="postPermalink" title="Permalink to post" href="{{permalink}}"><i class="fa fa-paragraph fa-fw"></i> Permalink</a>
</li>
```

becomes

```
<li class="postPermalink">
	<a class="postPermalink" title="Permalink to post" href="{{permalink}}"><i class="fa fa-paragraph fa-fw"></i>&nbsp;Permalink</a>
</li>
```



***

[Re-]Discovering `&nbsp;` reminded me of that poignant moment shared between Gandalf and Frodo at the beginning of The Fellowship of The Ring:  
In it, [Gandalf says to Frodo](http://www.imdb.com/title/tt0120737/quotes?item=qt0445987):
>My dear Frodo. Hobbits really are amazing creatures. You can learn all there is to know about their ways in a month, and yet after a hundred years they can still surprise you.

HTML is my "hobbits"---just when I think I have a handle on it, something like a non-breaking space character pops up and surprises me


[^mobile]: Here's how I handled mobile styles previously:

	1. I defined an `@media` query to target all screen widths up to 736px, which is the longest dimension of an iPhone (it's the length of an iPhone 6 Plus display @3x asset sizes). 

	2. I then set `.content` to `width: 300px`, which was a good compromise between too much whitespace on iPhone 6 Plus, and not enough on iPhone 6. (When I did the big redesign back in June, I had a Plus and Allison had a 6, so I could test against both of those devices easily).
	
	3. iPads behaved like the desktop site, more or less (portrait was always a headache for some reason).

	The site looked great on iPhone 6 and 6 Plus, but at 300px, the `.content` width was overwhelming the 320px width screens on 3.5" and 4" iPhones. Not only was the `.content` width too wide on those small screens, the font size was too big, and the line spacing was too large as well. Needless to say, I needed to fix this.
	
	So what did I do?
	
	1. I added an additional `@media` query targeting smaller iPhones: 
	
	```
	@media (max-width: 320px)
	```
	
	2. I set `.content` `width: 250px` and `font-size: 0.9em`, as well as adjusted some `100vw` stuffs
[^pass]: <div style="overflow-x: break-all">
<p>asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf Tweetbot 4</p>
</div>

	<div style="overflow-x: break-all">
<p>asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf Tweetbot&nbsp;4</p>
</div> 