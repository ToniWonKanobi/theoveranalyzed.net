Title: Rotating Text with CSS  
Date: 2015-12-16 08:41  
Description: CSS3 is so neat-o.  
Tags: Web Design, CSS, Popular  
Image: https://d.pr/i/14v3E+  

![Upside-down flag emoji][1]

You know that flag emoji (🇺🇸) from a [couple posts ago][2]?

Wonder how I got it to rotate like the House of Cards [graphic][3]?

Easy. [CSS3][4]!

1. I wrapped the flag emoji (🇺🇸)  in a `<span>` tag and applied an inline style rule[^1]
2. Next, I used the CSS3 property `transform`[^2]  with the `rotate: ();` value like so:
	
	```css
	transform: rotate(-180deg);
	```

3. This didn't work.

	The result for the following markup
	
	```html
	I know who I'm voting for <span style="transform: rotate(-180deg);">🇺🇸</span>
	```
	
	was
	
	<mark class="red">I know who I'm voting for 🇺🇸</mark>
	
	**The flag wasn't upside-down as I had hoped.**
	
	What was the problem?
	
4. Turns Out&trade; I needed to force the desired-text-to-be-rotated to `inline-block` (or `block`), because `<span>` is, by definition, an inline element

	It's wonky to expect the flag emoji (🇺🇸) to rotate when it's still the child of a `<p>` that is *not* styled to rotate.
	
5. So, I applied the `display` property with the value `inline-block` and added it to the markup like so

	```html
	I know who I'm voting for <span style="display: inline-block; transform: rotate(-180deg);">🇺🇸</span>
	```
	
	resulting in
	
	<mark class="green">I know who I'm voting for <span style="display: inline-block; transform: rotate(-180deg);">🇺🇸</span></mark>

[^1]: I did this because it's not worth adding a custom class to my [main stylesheet][a] just for this one random style change.
[^2]: Technically, I should have used the `-webkit` prefix ala `-webkit-transform`, but I'm lazy, and I'm pretty sure the `transform` property has been adopted by most every browser that matters. So why add additional prefix cruft when it's more or less unnecessary?

[a]: /css/styles.css "Main stylesheet for TheOverAnalyzed"

[1]: https://d.pr/i/14v3E+ "Upside-down flag emoji"
[2]: /2015/12/16/fu-2016#flag-thingy "Portion of that post that contained the flag emoji in question"
[3]: http://www.fu2016.com/wp-content/themes/hoc/assets/img/layout/logo.ico "House of Cards favicon"
[4]: https://css-tricks.com/snippets/css/text-rotation/ "CSS-Tricks: Text Rotation"