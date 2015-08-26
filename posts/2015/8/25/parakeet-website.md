@@ Title=Parakeet Website  
@@ Date=2015-08-25T07:11:00+00:00  
@@ Link=https://dribbble.com/shots/2201459-Parakeet-Website  
@@ Description=Background-changing navigation elements without JavaScript? Yes, Patrick Gibson is that nifty.  
@@ Tags=JavaScript, HTML, CSS, web, web design, design, Parakeet, Patrick B. Gibson  
@@ Image=http://d.pr/i/E3zx+  

<figure>
		<img src="http://d.pr/i/E3zx+" alt="Parakeet's neat-o nav" />
	<figcaption>Some pretty sweet CSS trickery from Patrick B. Gibson</figcaption>
</figure>

The more I learn about web development, the more I come to realize that JavaScript and jQuery [are not always the way][tutorialzine]. Long-thought the answer to difficult layout situations [brought on by mobile][mobile], the current trend is moving away from [both technologies as much as possible][sitepoint]. And soon enough, it will be [harder to implement said technologies as well][daringfireball].

That's why [Patrick B. Gibson's][twitter] pure-CSS implementation of background-changing top-navigation elements is so nifty.

How did he accomplish this without jQuery? Essentially, Gibson created a custom `<div>` class for each of the example works featured on the Portfolio page (e.g., "Flinto," "Sandwiches," etc.). And then, as the user scrolls the page and transitions to a new section, absolutely-positioned *duplicate* navigation elements are presented to the user using `clip-path`:
>The nav bar elements (some svg, some just text/css) are positioned statically, so they move with the page scroll, but are actually duplicated (and styled differently) for every section, and clipped to their respective section using clip-path: inset(0,0,0,0), so that they appear/disappear for the various sections as the user scrolls. This looks especially cool when the logo changes from the regular to inverted one, as seen in this shot. All with no JS required!

And in my quest to understand how Gibson worked his magic, I stumbled upon this gem buried in the [`parakeet.css` stylesheet][s3]:

<figure>
	<a class="nohover" href="http://d.pr/i/1eRAf+">
		<img src="http://d.pr/i/1eRAf+" alt="Parakeet's main stylesheet has funny injected" />
	</a>
	<figcaption>Not only is Parakeet good at design&mdash;they're not afraid to insert some funny <a href="https://en.wikipedia.org/wiki/Easter_egg_(interaction_design)#Software">Easter eggs</a> in their CSS</figcaption>
</figure>

[Parakeet][parakeet] is a design studio focusing on "icons, illustrations, and visual identity." 

[From [Louie Mantia][twitter 2]]

[daringfireball]: http://daringfireball.net/linked/2015/08/24/williams-crystal-safari-content-blocking
[mobile]: http://www.html5rocks.com/en/mobile/responsivedesign/
[parakeet]: http://www.parakeet.co
[s3]: https://parakeetweb.s3.amazonaws.com/static/css/parakeet.css
[sitepoint]: http://www.sitepoint.com/top-5-jquery-ui-alternatives/
[tutorialzine]: http://tutorialzine.com/2012/04/5-lightweight-jquery-alternatives/
[twitter]: https://twitter.com/patr1ck
[twitter 2]: https://twitter.com/mantia/status/635982033735413764