@@ Title=Byword, MultiMarkdown Composer, and More  
@@ Date=2015-03-04T08:00:00+00:00  
@@ Description=Here's my workflow for blogging in Squarespace.  
@@ Tags=Squarespace, blogging, apps, TheOverAnalyzed, MultiMarkdown, Markdown, Byword  

<div class="topstory">

Since writing this post originally, I moved to a custom blogging engine, one that is based on the actual Markdown files `.md`. And because of that, many MultiMarkdown features provided by MultiMarkdown Composer are no longer necessary, as `node.js` has plenty of `markdown-it` plugins that take the universal 'standard' Markdown documents and parse nifty stuff anyways. So I have actually reverted back to using Byword as my plain-text editor of choice. When I re-formatted this document to work with my new blogging engine, I kept the content the same, for both posterity's sake, and to help anyone out there who uses Squarespace.

</div>

<h2>Contents</h2>

[[TOC]]
  
# Introduction

Some time ago, I wrote a rather [lengthy and exclamatory piece][theoveranalyzed] recounting how I implemented [Bigfoot footnotes][bigfootjs]. I will refrain from rehashing the entire post, but would like to discuss footnotes in general for a bit. Footnotes, and my recent change to [MultiMarkdown Composer][multimarkdown] from [Byword][bywordapp].

What I might have failed to fully articulate previously is this: I learned how to do Bigfoot footnotes *and* regular ol' non-Bigfoot footnotes at the same time. In fact, if I had never even heard of Bigfoot footnotes, I still would have been plenty happy with just regular footnotes. 

I had been wanting to incorporate footnotes into my writing, but didn't know how for the longest time.

Once I figured that out, I started nitpicking the *way* I was footnoting.

# The Problem

One big problem with my previous footnoting was a lack of knowledge regarding **multi-paragraph** footnotes. Up until yesterday, I didn't know how to do a footnote like [this][marco]. 

Yesterday, I fixed that. How did I fix that?  TL;DR: I switched from Byword to MultiMarkdown Composer. 

# Example

Consider the following. This is the type of reference-style footnote I might have tried to write in Byword:

```md
Yes you did, Brett. Yes you did.[^1]

[^1]: [Chyeah][urbandictionary].

	[Boom][urbandictionary 2].
```

The above snippet *should* get translated to the following HTML:

```html
<p>Yes you did, Brett. Yes you did.<a href="#fn:1" id="fnref:1" title="see footnote" class="footnote">1</a></p>

<div class="footnotes"><hr /><ol>
<li id="fn:1"><p><a href="http://www.urbandictionary.com/define.php?term=chyeah&amp;defid=2623427">Chyeah</a>.</p>

<p><a href="http://www.urbandictionary.com/define.php?term=Boom&amp;defid=3837129">Boom</a>.<a href="#fnref:1" title="return to article" class="reversefootnote">&#160;&#8617;</a>
</p>
</li>
</ol>
</div>
```

But instead, Byword's HTML parse results in the following:

```html
<p>Yes you did, Brett. Yes you did.<a href="#fn:1" id="fnref:1" title="see footnote" class="footnote">[1]</a></p>

<div class="footnotes">
<hr />
<ol>

<li id="fn:1">
<p><a href="http://www.urbandictionary.com/define.php?term=chyeah&amp;amp;defid=2623427">Chyeah</a>. <a href="#fnref:1" title="return to article" class="reversefootnote">&#160;&#8617;</a></p>
</li>

</ol>
</div>
```

Notice how only the `Chyeah` footnote got parsed into HTML (and not the `Boom` one)? Not ideal.

## Making Sure

I consulted with the MultiMarkdown syntax guide just to make sure I was formatting my referenced multi-paragraph footnotes correctly.

I [was][github].

So what to do? 

# The Solution

My solution was to switch from Byword to MultiMarkdown Composer. This was not an easy decision. And honestly, a part of me feels like I just said goodbye to an old friend.[^bw]

And so, after writing a similar snippet and parsing to HTML using MultiMarkdown Composer, the resulting HTML looks like this:

```html
<p>Yes you did, Brett. Yes you did.<a href="#fn:1" id="fnref:1" title="see footnote" class="footnote">1</a></p>

<div class="footnotes"><hr /><ol>
<li id="fn:1"><p><a href="http://www.urbandictionary.com/define.php?term=chyeah&amp;defid=2623427">Chyeah</a>.</p>

<p><a href="http://www.urbandictionary.com/define.php?term=Boom&amp;defid=3837129">Boom</a>.<a href="#fnref:1" title="return to article" class="reversefootnote">&#160;&#8617;</a>
</p>
</li>
</ol>
</div>
```

This is how MultiMarkdown Composer parses MultiMarkdown, and this is how the resulting HTML *should* get parsed. 

# Byword Versus MultiMarkdown Composer

First, let me say this: I love, *love* Byword. The guys at [Metaclassy][metaclassy] have built an incredibly easy to use and beautiful app. 

<figure>
	<img src="http://d.pr/i/1fsbq+" alt="sparsity"  />
	<figcaption>Byword's sparsity is part of its charm</figcaption>
</figure>

Byword is both functional, and actually quite clever at the same time. Want to copy the MultiMarkdown to HTML? `Command + Option + P`. Easy. 

Contrast this with MultiMarkdown Composer, in which the hotkey is buried in the Edit menu item:

<figure>
	<img src="http://d.pr/i/fWNQ+" alt="ehh"  />
	<figcaption>Ehh...</figcaption>
</figure>

<figure>
	<img src="http://d.pr/i/emqI+" alt="mmd"  />
	<figcaption>MultiMarkdown's window has more content, but isn't *that* much more busy than Byword</figcaption>
</figure>

## What's So Wrong With Byword?

The problem with Byword is that while the app *does* support [the most important aspects][bywordapp 2] of MultiMarkdown, it does *not* support every MultiMarkdown feature under the sun.[^us] For me, one of their more important MultiMarkdown omissions was lack of support for multi-paragraph footnotes and inline footnotes. And that was enough for me to try MultiMarkdown Composer.

## And What's So Great About MultiMarkdown Composer?

### Inline Footnotes

Probably the biggest unexpected benefit of using MultiMarkdown Composer were the **inline footnotes.**[^inf]

<figure>
	<img src="http://d.pr/i/nOPD+" alt="caption"  />
	<figcaption>Could this be any easier?</figcaption>
</figure>

While MultiMarkdown Composer's inline footnotes implementation precludes me  from having multiple paragraphs or lists,[^ww] it is still *such* a time-saver to just keep tying all the way through the footnote content, without having to go all the way to the bottom of the document to place the footnote content, and then find my way back to where I was before I started writing the footnote.[^ff]

### Table of Contents Made Easy

Another gem that will find its way into MultiMarkdown Composer version 3 (currently in beta) is the `{{TOC}}`.

Back when I was using Byword, whenever I was writing a long document, I would have to craft my own Table of Contents / Index, like a heathen. I remember thinking to myself, "There has to be a better way to do this."

Before, for an `<h1>` header named `Introduction`, I would write this for my Table of Contents / Index:

```html
<h2>Contents</h2>

* [Introduction](#introduction)
* [Next Header](#next)

<p><h1><a name="introduction">Introduction</a></h1>

Example body text.
```

And then I would have to go back through my document and copy that format for remaining headers. It was time consuming to say the least.

With MultiMarkdown Composer, I just place a `{{TOC}}` at the top of my document, and then I get something wonderful like this:

<figure>
	<img src="http://d.pr/i/1azBA+" alt="so"  class="shadow" />
	<figcaption><em>So</em> much easier than doing it by hand</figcaption>
</figure>

### Smart Pairs, Autocompleting Labels, and More

Basically, this whole list:

<figure>
	<img src="http://d.pr/i/1ad17+" alt="syntax"  />
	<figcaption>With nifty tricks like this, I spend more time writing than worrying about syntax</figcaption>
</figure>

# Conclusion

Ultimately, my nostalgic attachment to Byword was quickly forgotten. For all its beauty and simplicity, Byword just doesn't offer nearly the amount of features that MultiMarkdown Composer does.

And you know what? That's [okay][d].

[^bw]: It was with Byword, after all, that I shared my great [aha moment][reference] in which 'appropriately formatted Markdown → HTML with footnotes'
[^us]: And why should it? MultiMarkdown is filled with lots of 'extras' beyond standard Markdown, some of which most Markdown users could care less about.
[^inf]: So completely amazing.
[^ww]: When I need to do that, I just copy and paste what I have for the footnote so far, and then make a reference-style footnote at the bottom like I used to (or wherever).

	I wish there were an easier way to convert the footnote content to from "inline" to "reference style" and vice versa.
[^ff]: That gets old.

[bigfootjs]: http://www.bigfootjs.com
[bywordapp]: http://bywordapp.com
[bywordapp 2]: http://bywordapp.com/markdown/guide.html
[d]: http://d.pr/i/14RQX+
[github]: https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide#footnotes
[marco]: http://www.marco.org/2015/01/04/apple-lost-functional-high-ground#fnref:p0z3WgkpC1
[metaclassy]: http://metaclassy.com
[multimarkdown]: http://multimarkdown.com/
[reference]: http://dictionary.reference.com/browse/aha+moment
[theoveranalyzed]: @@SiteRoot@@/archive/2015/1/bigfoot-footntes-squarespace
[urbandictionary]: http://www.urbandictionary.com/define.php?term=chyeah&amp;defid=2623427
[urbandictionary 2]: http://www.urbandictionary.com/define.php?term=Boom&amp;defid=3837129