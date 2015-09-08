@@ Title=Pages '09, Pages 5.0, and More Practical Typography  
@@ Date=2015-09-03 13:24  
@@ Description=I've had a few more days to spend with Practical Typography. Here are my thoughts on it, and how it effects my word processor usage on the Mac.  
@@ Tags=Practical Typography, Matthew Butterick, fonts, typefaces, webfonts, design, web design, blogging, Pages, reviews  
@@ Image=http://d.pr/i/1fZQU+  

A few days ago, I wrote about [Practical Typography][theoveranalyzed] and how it caused me to change a few [style][theoveranalyzed 2] [issues][theoveranalyzed 3] on TheOverAnalyzed.[^lol] After spending more time with Matthew Butterick's masterpiece,[^atleast] I stumbled upon his [page][practicaltypography] explaining [OpenType][wikipedia] features. In it, Butterick shows how to implement OpenType features on the web via CSS.[^otfeatures]

What caught my attention was Butterick's blurb on OpenType implementation across the various word processors.

In particular:
> Pages ’09 on the Mac is the word proces­sor with the best Open­Type fea­ture sup­port. **(The 2013 up­date of Pages, how­ever, sup­ports no Open­Type fea­tures at all.)** [emphasis added]

That last part troubled me. It's common knowledge that new versions of software can sometimes *remove* features instead of adding them. This is especially true in the first-party Apple app ecosystem.[^fcpx] But could an update to *Pages.app* really have removed crucial features?

[Apparently so][wikipedia 2]. 

Taking Butterick's word for it, I quickly scoured the internet for a scant copy of [iWork '09][wikipedia 3], something I recall deleting a year ago after thinking to myself, "Oh, I'll never need this---it's tied to my App Store purchases now. `Delete`"

After a bit of searching, I found a working `.dmg` for "iWork '09 Trial." Great. All I needed after that was a working serial number. Somewhat perplexingly, I found one rather quickly and easily, perhaps because it had been 5+ years since iWork '09 was released.

And so, there I was with two versions of Pages in my `/Applications` folder. 

<figure>
	<img src="http://d.pr/i/uepY+" alt="Pages '09 (4.3)" width="70%">
	<figcaption>Just look at that icon 👌🏾</figcaption>
</figure>

Boy did I feel like a real [rabble-rouser][urbandictionary]. I had a vintage pirated copy of an application that a [typography master][twitter] said was better than every other [schmuck][urbandictionary 2]'s copy of the current version.[^poorfools]

I existed in this state of congnitive bliss for several days, until a thought occurred to me: perhaps Butterick was wrong?

After all, Practical Typography *was* released [mid-2013][daringfireball]. Maybe subsequent versions of Pages.app fixed the lack of OpenType features present in the initial 5.0 release?

At first glance, it certainly *seems* like the newest version of Pages has decent ligature support.[^ligatures] I [reached out][twitter 2] to Butterick to confirm as much, but haven't yet heard back.

As best as I can tell, while the newer version of Pages *does* have proper ligature support, it doesn't appear to have any of the other OpenType features supported by the older version.

Ideal Sans comes with several alternate versions of characters, but as you can see from the screenshots below, the special "G" character (without the horizontal crossbar) does not seem to be available in the newer version of Pages. 

<figure class="inlinetwo">
	<a class="nohover" href="http://d.pr/i/17YoZ+">
		<img src="http://d.pr/i/17YoZ+" alt="Pages 4.4.3 without OpenType">
	</a>
	<a class="nohover" href="http://d.pr/i/14Yiy+">
		<img src="http://d.pr/i/14Yiy+" alt="Pages 5.5.3 OpenType">
	</a>
	<figcaption>Pages 4.4.3 with OpenType support and Pages 5.5.3 without much OpenType support at all</figcaption>
</figure>

So Butterick was right. Still, even without full support of OpenType features, the newest version of Pages.app is clearly more at home on 10.11+ systems than the older version. The iconography and pretty much everything else about the newer version is more inline with "iWork's" iOS counterparts. And because of this, I can't help but recommend that most users migrate to the newer versions of Pages. 

Indeed, even the Pages.app application icon has now incorporated the Yosemite and El Capitan design ethos:

<figure>
	<img src="http://d.pr/i/16ee0+" width="70%">
	<figcaption>The "flat" application icon for Pages.app 5.0+</figcaption>
</figure>
	
Louie Mantia agrees:

<blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi">@ToniWonKanobi</a> sure but this one suits Yosemite better.</p>&mdash; Louie (@mantia) <a href="https://twitter.com/mantia/status/638444776191209472">August 31, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

***

It seems like Pages was never sure whether it wanted to be a layout/design application, or *just* a word processor. Version 5.0 of Pages solidified its place in the latter camp. And there's nothing particularly heinous about that, unless you're one of those prosumers not savvy enough for Illustrator, but too smart for Word. If you're one of those people, the new Pages is not what it used to be. I feel sorry for you, because I *am* one of you.

[^atleast]: At least *I* think it's his masterpiece.
[^fcpx]: [Final Cut Pro X][wikipedia 4], anyone?
[^lol]: "[Why typography matters][practicaltypography 2]"
[^ligatures]: Throughout this piece, I've been assuming that ligature support means full OpenType support, but that isn't necessarily the case. And ultimately, I cannot truly confirm full OpenType support without being a typography expert.
[^otfeatures]: [`font-fea­ture-set­tings`][mozilla]
[^poorfools]: Poor, poor fools. 

[daringfireball]: http://daringfireball.net/linked/2013/08/19/buttericks-practical-typography
[mozilla]: https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings
[practicaltypography]: http://practicaltypography.com/opentype-features.html
[practicaltypography 2]: http://practicaltypography.com/why-typography-matters.html
[theoveranalyzed]: /2015/8/25/practical-typography
[theoveranalyzed 2]: /2015/8/25/practical-typography#dashes
[theoveranalyzed 3]: /2015/8/25/practical-typography#font-sizes
[twitter]: https://twitter.com/mbutterick
[twitter 2]: https://twitter.com/ToniWonKanobi/status/638744688581718016
[urbandictionary]: http://www.urbandictionary.com/define.php?term=rabble+rouser&defid=1122945
[urbandictionary 2]: http://www.urbandictionary.com/define.php?term=schmuck&defid=4802506
[wikipedia]: https://en.wikipedia.org/wiki/OpenType
[wikipedia 2]: https://en.wikipedia.org/wiki/Pages_(word_processor)#Version_history
[wikipedia 3]: https://en.wikipedia.org/wiki/IWork#Web_services
[wikipedia 4]: https://en.wikipedia.org/wiki/Final_Cut_Pro_X#Reception