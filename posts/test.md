@@ Title=Test Page  
@@ HideHeader=true  

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
	
	<pre>Prose&mdash;aside&mdash;back to prose.</pre>