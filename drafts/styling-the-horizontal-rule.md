@@ Title=Styling the Horizontal Rule  
@@ Date=2015-10-23 15:10  
@@ Description=Here's how I finally settled on horizontal rules for my site.  
@@ Tags=HTML, CSS, TheOverAnalyzed, hr, :after  
@@ Image=http://d.pr/i/19n1p+  

<figure>
	<a class="nohover" href="contentlink">
		<img src="imagelink" alt="text">
	</a>
	<figcaption>caption</figcaption>
</figure>

Ever since [moving to Camel this past June](http://www.theoveranalyzed.net/2015/6/1/introducing-theoveranalyzed-30), I've been struggling with the [horizontal rules](https://en.wikipedia.org/w/index.php?title=HTML_element&redirect=no#hr) on my site.[^for]

In case you're not familiar with the horizontal rule, here's a to-the-point definition by [Chris Coyer](https://css-tricks.com/simple-styles-for-horizontal-rules/):
>It's an emphatic break between two sections of content

Yes, those horizontal lines/bars/whatever that bloggers (and sometimes real writers too) use to separate paragraphs are called horizontal rules. 

The horizontal rule (`<hr>`) is a block-level element in HTML. And in it's most basic form, the horizontal rule is *literally* a horizontal line with 

So, barring any site-specific `<hr>` styling, the following HTML markup

```
<hr>
```

would call for a horizontal rule in the DOM with the following styles (Safari and Firefox):

```
hr {
	display: block;
	-webkit-margin-before: 0.5em;
	-webkit-margin-after: 0.5em;
	-webkit-margin-start: auto;
	-webkit-margin-end: auto;
	border-style: inset;
	border-width: 1px;
}
```

The rule would like like this:

<style>

	hr.example {
		padding: initial;
		border: initial;
		color: initial;
		text-align: initial
	}

	hr.example:after {
		content: initial;
		display: initial;
		position: initial;
		font-size: initial;
		top: initial
	}
	
</style>

<hr class="example">

Obviously this was never going to work for *my* site, so I added the requesite styles

[^for]: I've realized how often I talk about my transition from Squarespace to Camel. I don't do it because I think it's some grand accomplishment. 
	
	In reality, I probably could have stayed within the Squarespace platform and still have accomplished all of the same layout goals I have with Camel.
	
	*But I could never have learned everything I have in the past four months if I had never left Squarespace.*
	
	I know *now* that I could probably go back and start over with Squarespace, and eventually get TheOverAnalyzed to be pretty much how I have it now (there are [exceptions](http://www.theoveranalyzed.net/2015/6/1/new-rss-feeds), obviously). It would take a bunch more work than what I currently do with Camel, but I know I could do it.
	
	But it's precisely *because* I threw myself into such a blank slate "template" (design-wise, not engineering-wise---that was all done for me with Camel, for the most part) that I was able to learn what I have about web design.
	
	*That's* why I leaving Squarespace was so important to me.

