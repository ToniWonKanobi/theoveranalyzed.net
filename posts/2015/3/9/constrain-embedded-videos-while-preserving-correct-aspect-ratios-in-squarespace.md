Title: Constrain Embedded Videos While Preserving Correct Aspect Ratios in Squarespace  
Date: 2015-03-09 08:00  
Description: Here's how I get YouTube videos to behave responsively in my webpages.  
Tags: Web Design, Squarespace  

<!-- FitVids (http://fitvidsjs.com) -->
<script src="/js/fitvids.js"></script>
<script>
	$(document).ready(function(){
		$(".entry").fitVids();
	});
</script>
			
#### TL;DR

I just can't leave well enough alone. In between patients yesterday, I figured out how to ensure that my embedded YouTube and Vimeo videos stretched to accommodate window size, while at the same time, constraining the proportions.

### The Problem

Consider this YouTube [video][1].[^1]

Suppose I wanted to embed it in the body of my post, rather than simply have it linked to externally via the Linked [post] title.

Here's the embed code copy and pasted straight from YouTube, for the video mentioned above:

```html
<iframe width="560" height="315"
	src="https://www.youtube.com/embed/kOh6iATnEnw"
	frameborder="0" allowfullscreen>
</iframe>
```

Now, because I have set the width of my "main content" to 450px,[^2][^3] I would have previously thought it best to adjust the `width="560"` to something nifty like `width="100%"`, in order to ensure that the video fills the entire width of the content window.

The problem with that is that it leads to aspect ratio weirdness like this:

![Stubby](http://d.pr/i/10yC5+ "Stubby")

Notice that while the width of the `<iframe>` is correct, the height is completely stubby? Not ideal.

`<iframe>` unfortunately doesn't intelligently adjust the height of a video based on the width. This would be nice, but it doesn't work that way.[^4]

### Previously on TheOverAnalyzed

Here's how I chose to get around the funky looking `width="100%"` fix:

1. Determine the correct aspect ratio of the video given `_your_width_here_`

	For my video above, it would be 560px / 315px = ~1.78
2. Modify the `width` string such that `width="_your_width_here_"`
3. Calculate the 'new' `height`, given `_your_width_here_` and the aspect ratio calculated in Step 1
	* For my video above, we would solve for <i>x</i>, where:	
		* `_your_width_here_` / <i>x</i> = 1.78
		* Therefore, <i>x</i> = `_your_width_here_` / 1.78
		* <i>x</i> = 253 px
4. Modify the `height` string accordingly, using that `height` value (<i>x</i>) calculated in the previous step: `height="253"`
5. Finally, place that value in the `<iframe>` accordingly:

	```html
	<iframe width="450" height="253" src="https://www.youtube.com/embed/kOh6iATnEnw" frameborder="0" allowfullscreen>
	</iframe>
	```

That solution was okay for desktop, but broke on the mobile displays I cared about.[^5]

So what to do?

### The New Fix

Good ol' [CSS-Tricks][2]. Chris Coyier comes through again. I looked around for help and found a pretty decent [article][3] on the subject. This pointed me to the *coup de grâce* by Coyier and [Dave Rupert][4], called [FitVids.js][5].

It's a nifty jQuery plugin that basically does everything I was trying to do previously with inline HTML/CSS.

#### The Process

It was easy enough:

1. Download the JavaScript, `jQuery.fitvids.js`, and upload it  
	
	On Squarespace, all of the scripts are stored at  `/scripts/` (for those on the developer platform), or you could alternatively upload it to a random page using their somewhat wanky system
2. Call the script (as well as jQuery) and target the videos container
3. *Happiness*

#### The Hard Part

Copier says to "Target your .container, .wrapper, .post, etc." The problem was that I didn't know what that was, at least in the Squarespace ecosystem.

#### Thank You, Safari "View Source"

To figure out what container to target using Safari, first make sure you have turned on "Show Develop menu in menu bar" (Chrome users can do something similar).

![Make sure the Develop option is checked](http://d.pr/i/1097d+ "Make sure the Develop option is checked")

Then, navigate to your page and then navigate to `Develop` → `Show Page Source`.[^6]

![Showing the page source has helped me with lots of HTML/CSS problems in the past](http://d.pr/i/1bkxh+ "Showing the page source")
<!-- {.screenshot} -->

For my site, I visited the `/archive/` page, which is the URL slug for my main blog.

After viewing the source, make sure that "Source Code" is selected and then click "Inspect Element". This will allow you to hover over the main content area of the blog post to try and figure out what that area is called. Whatever that main area is called---*that's* what you're looking to target with the script.

![Looking for the important stuff](http://d.pr/i/10stf+ "Looking for important stuff")

What we are looking for (at least in my template): `.main-content`

![There you are, `.main-content`](http://d.pr/i/1enKi+ "There you are")

Once I recognized the `.container` that Squarespace uses for main post content (`.main-content`), I went about copy and pasting that into the `<script>` that calls the `fitvids.js` to work.

### Putting It All Together

Paste the following code into either the site-wide [`Code injection`][6] area,[^7] or the `Page Header Code Injection` area:[^8]

```js
<script src="/scripts/fitvids.js"></script>
<script>
  $(document).ready(function(){
    $(".main-content").fitVids();
  });
</script>
```
* The string `/scripts/fitvids.js` is just where I have placed the `fitvids.js` plugin. If you do not have [Developer mode][7] turned on, you could always upload it via the [wonky Squarespace method of uploading files][8], and then call the script at the stock location, `/s/fitvids.js`
* Notice the `.main-content` wrapped in double quotes. *That* is the container that FitVids.js will target.

Finally, we are ready to test the YouTube video again. After copying the embed code from YouTube, be sure to remove the size modifiers (`width=` and `height=`) in the `<iframe>` code, so that the script can take over.[^9]

So, with that, your videos should look like this:

<iframe src="https://www.youtube.com/embed/kOh6iATnEnw" allowfullscreen></iframe>

### Conclusion

The FitVids.js solution works on all `<iframe>` elements found on `.main-content` So, any post that contains that, such as Storify, will also have the wonderful FitVids effect applied.

[^1]: At this point, I look at every 'problem' that I fix on the site as a learning opportunity. Granted, many of the fixes I implement are not my own, but rather others. Still, I take solace in knowing that I didn't need anyone to show me how to fix it. I searched for a solution, found it, and implemented it. The gratification of tweaking code and having it *finally* work after many failed attempts is very real, and quite awesome.
	<p style="display:inline">After just a couple months of web design, I can understand how programmers can go on week-long coding adventures without sleep or food. It's a surreal experience.</p>
[^2]: On mobile, this width is overruled with some `@media` queries for phone and tablet displays
[^3]: Truthfully, I am more or less targeting iPhone and iPad with my `@media` queries---because, let's face it---I could care less about other devices. Tons of web designers make a good practice of implementing 'fixes' for Internet Explorer's stupidness. Again, I could care less, so I don't. I am a terrible person.
[^4]: If I were embedding HTML5 video, this wouldn't be an issue. But I don't want to embed HTML5 video for storage and page-loading reasons
[^5]: The `device-width` of iPhones is anywhere from 320--375px, which is smaller than my statically-defined `width="450"`
[^6]: Optionally, you can hotkey it with Command-Option-U
[^7]: `Config` → `Settings` → `Advanced` → `Code Injection` → `Header`
[^8]: `Pages` → `_your_blog_name_here_` → `Blog settings` → `Page Header Code Injection`
[^9]: If you don't do this, the size modifiers might override the script, leading to weird aspect ratios.

[1]: https://www.youtube.com/watch?v=kOh6iATnEnw "Maroon 5 cover Pharrell's Happy in the Live Lounge"
[2]: http://css-tricks.com/ "CSS-Tricks"
[3]: https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php "CSS-Tricks post on embedding fluid width video"
[4]: http://daverupert.com/ "Co-creator of FitVids.js"
[5]: http://fitvidsjs.com/ "FitVids.js"
[6]: http://help.squarespace.com/guides/using-code-injection "Squarespace's help topic on using code injection"
[7]: http://developers.squarespace.com/ "Squarespace's Developer Platform"
[8]: http://help.squarespace.com/guides/uploading-and-managing-files "Squarespace help topic for uploading and managing files"