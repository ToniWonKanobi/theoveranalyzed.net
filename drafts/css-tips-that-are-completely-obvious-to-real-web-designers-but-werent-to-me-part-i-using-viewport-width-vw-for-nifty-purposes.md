Title: CSS Tips that Are Completely Obvious to Real Web Designers but Weren't to Me Part I: Using Viewport Width (vw) for Nifty Purposes  
Date: 2015-01-08  
Description: This is the longest title ever.  
Tags: Web Design & Development, CSS  
Image: http://d.pr/i/29s0+  

![Thanks, viewport width](http://d.pr/i/29s0+ "Using viewport width is nifty")

After reading much of Matthew Butterick's Practical Typography, I haven't had too much trouble with font sizes. And even without Butterick's guide, it's not like font-sizes are a super difficult thing to figure out:

"Does the font size convey the appropriate readability and meaning on large displays?"

*Yes.*

"Does the font size convey the appropriate readability and meaning on small displays?"

*Yes.*

Cool. Done. No biggie, right?

Well, like all things web design, it's not that simple all the time.

I've been struggling with a particular aspect of font-sizes almost since the beginning of TheOverAnalyzed: the site title font-size.

You know, that big banner at the top of every page of this site that says `TheOverAnalyzed`?

That text is a `h1`-level heading, which itself is wrapped in a `<header>` (like any good HTML5 developer).

It wasn't always text. For the longest time, the site title `h1#siteTitle` was actually an SVG (yay Retina-quality at every dimension!). After a while, I decided that having an SVG wasn't as old-school HTML-friendly as I would have liked: SVG's are like other graphics---users can't select/highlight and grab the text (because even graphics containing text don't actually *contain* text). Also---and this might be the biggest reason---I like messing with things, so I wanted to use regular old text and style from there.

But switching to actual text for the site title introduced a problem of having to change the font size depending on display size. I declared an initial font size for the site title, and then via media queries, I'd change the font size for smaller displays accordingly.

If you took a peak at my CSS a few days ago, these are the rules governing the size of the text in my header site title


