@@ Title=Ditching Webfonts  
@@ Date=2015-07-15T11:41:00+00:00  
@@ Description=Over the past few years, I've become increasingly interested in design and specifically, typography. Ideal Sans was *it* for me. But maybe Hoefler's webfont is just too much of a drag right now?  
@@ Tags=web, web design, design, fonts, typefaces, Ideal Sans, webfonts, Hoefler, Cloud.typography, Ditching Webfonts, CSS  
@@ Image=http://d.pr/i/138Zv+  

<div class="topstory">This piece is largely a self-response to an earlier post I wrote on the subject called <a href="http://www.theoveranalyzed.net/2015/7/12/why-the-web-is-so-slow">Why The Web Is So Slow</a>. You should read that before reading this.
</div>

<figure>
	<a class="nohover" href="http://d.pr/i/138Zv+">
		<img src="http://d.pr/i/138Zv+" alt="Waiting." />
	</a>
	<figcaption>That's 457.1 ms <em>too</em> long for me.</figcaption>
</figure>

# Becoming Ideal

Ever since I became more interested in typefaces and web design, [Ideal Sans][typography] had been my unicorn. When I initially became interested in using that font on my website, I knew very little about HTML and CSS, or webfonts in general. Because of that, I wasn't sure how to add it to my website. All I knew was that I liked it. Marco used it for his [blog][marco] and [app][fontsinuse], and Q Branch [used it][vesperapp] for [Vesper][vesperapp 2]. It's also available in the [Feedbin][feedbin] webapp (along with other Hoefler originals like [Whitney][typography 2]).

When I moved from Squarespace to Camel [last month][theoveranalyzed], one of the lights at the end of the tunnel was securing Ideal Sans for the website. I remember the first time I deployed my site and I saw that beautiful and personable typeface staring right back at me. What joy.

I had done it. I made my own website. And I made it look *good*.

# Settling On Ideal

Over the course of the next few weeks, I was constantly tweaking this and that in CSS.[^no] Up until a few days ago, page load times were a rather trivial matter for me. From the beginning, I knew there would be no way to match John Gruber's lightning-quick [Daring Fireball][daringfireball], which loads in approximately [1 second][d] on desktop *and* mobile. 

Gruber has virtually no JavaScript extensions in use, and his website rarely features an embedded image. When it does, the size of the image is in the low hundred of kilobytes. Conversely, TheOverAnalyzed has always been a media-rich blog. I don't just write about Apple. Very often, pop culture posts can be found interspersed amongst the posts about static blogging engines and other such nerdery. And when I do write about something like [Star Wars][theoveranalyzed 2] or [movies][theoveranalyzed 3], the posts usually include a picture or two. Also, because of the way the Camel handles pagination, the homepage and each subsequent page might have 10-15 posts, depending on my post/day ratio. If each posts has one picture weighing in around 500 KB, that could add up to around 7-8 MB for each index page. 

Thus, Daring Fireball this is not. And there really isn't anything *wrong* with that.

Still, ever the tinkerer, I <del>was</del> am always tweaking this or that, testing local versions of the site against certain JavaScript and jQuery plugins. The goal is always the same: try to make TheOverAnalyzed faster. I eventually settled on a middle ground. I could deploy TheOverAnalyzed with Ideal Sans, [Bigfoot footnotes][bigfootjs], and [auto-width YouTube embeds][fitvidsjs] for around 2.5 seconds of page loading. Certainly not as fast as Daring Fireball, but fast enough.

Right?

# The Slow Web

My priorities changed somewhat last week. Gruber [wrote a short piece][daringfireball 2] on the crummy state of modern web browsing, focusing primarily on how *slowly* most webpages load these days. According to Gruber, the culprit was all those JavaScript extensions powering those annoying web advertisements. He picked on iMore in particular. [I did the same][theoveranalyzed 4]. 

While I was writing that post last week, I experimented with a jQuery plugin called [Lazy Load](), by Mika Tuupola. The purpose of that plugin is to prevent the loading of embedded images until they come into `viewport`. I had to edit the source code (Markdown/HTML) for my posts by adding a special class to images, `<img class="lazy"`, as well as add a `data-original=` modifier in place of the traditional `src=`. When the image comes into focus on the webpage, Lazy Load dynamically reads the `data-original=` content and inserts an `src=` string into the `<img>` tag, thereby loading the image. It's a pretty nifty plugin -- at least in theory. 

Truthfully, I'm not sure why I was so bent on trying this. At the time, I justified using it by telling myself that it would make TheOverAnalyzed load faster. From the beginning, this was flawed logic. Previously, I tested the site against the `Disable Images` option in Safari's Develop menu. And guess what? Disabling images never made a meaningful difference in page loading times.

But I tried Lazy Load anyways. Funnily enough, the deployment of the site that contained my aforementioned post on slow-loading webpages coincided with my trying Lazy Load full-tilt. And guess what? It actually *increased* the page loading of TheOverAnalyzed! Yes, while my 'holier than thou' post was being propagated to FeedPress and social media, my site was all the while slower than before I wrote my post. How ironic.

How is it possible that a plugin designed to speed page loading could actually make my site slower? I'm not sure I know exactly why. My working theory is that on a page with a bunch of images (15-20 on the homepage at the moment), the client-side JavaScript compiler is doing a lot of work to parse the Lazy Load script. Also, I wasn't able to perfect the placeholder image syntax. And because of that, every time Lazy Load inserted the `src=` string, the layout of the page was modified. That couldn't have been healthy for page loading speeds. This was especially apparent on mobile, where the page loading time increased from around 2.5 seconds to 5 seconds. *That* is a long time to wait for a page to load. I can't imagine why anyone would stick around that long to wait for my homepage to generate.

Less than an hour after that deploy, I had re-edited my posts to remove the Lazy Load image classes and attributes, and I had completely removed the plugin from TheOverAnalyzed. So then: back to square one.

# Trying Stuff

Yesterday, I experimented more with disabling JavaScript. Without JavaScript enabled, page load times were only marginally faster. [And as I said previously][theoveranalyzed 5], gaining less than a quarter second in page loading times didn't warrant losing Bigfoot footnotes. But while I was experimenting in Safari's `View Page Source` window, I noticed something. In general, TheOverAnalyzed initializes rather quickly, somewhere in the range of 100 ms. However, immediately thereafter -- before loading the next resource -- there was latency of around 800 ms. That "next resource" I speak of is the Ideal Sans webfont, served up via Hoefler & Co's [Cloud.typography][typography 3] backend. 

800 ms. That's almost an *entire* second of latency. And Ideal Sans -- my favorite font -- was the culprit.

Could I fix this?

# Considering The Inconsiderable

Interestingly, while I was examining TheOverAnalyzed's page source and realizing that the Hoefler webfont was killing my page loading, an important conversation was happening on Twitter. 

<blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/benthompson">@benthompson</a> No one should ever do anything that makes a website slow.</p>&mdash; John Gruber (@gruber) <a href="https://twitter.com/gruber/status/620966969953636353">July 14, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/marcoarment">@marcoarment</a> <a href="https://twitter.com/benthompson">@benthompson</a> That’s one reason I’ve procrastinated on switching to webfonts at DF. (Bigger reason: inertia.)</p>&mdash; John Gruber (@gruber) <a href="https://twitter.com/gruber/status/621074509676826624">July 14, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Moreover, it seems Craig Hockenberry has experienced (or at least has knowledge of) webfont latency for himself:

<blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/jimray">@jimray</a> <a href="https://twitter.com/gruber">@gruber</a> <a href="https://twitter.com/marcoarment">@marcoarment</a> <a href="https://twitter.com/benthompson">@benthompson</a> They can have high latency depending on where they’re hosted.</p>&mdash; Craig Hockenberry (@chockenberry) <a href="https://twitter.com/chockenberry/status/621119545227345924">July 15, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

If Ideal Sans was the problem, I wondered how fast TheOverAnalyzed would load without it? 

# Gaining A Second

To test the site without the webfont, I modified `main.css`, so that there would be a fallback font. In this case, [Avenir][wikipedia]), which is like [Helvetica][wikipedia 2] but less cliche.[^sf]

<figure>
	<a class="nohover" href="http://d.pr/i/U6XZ+">
		<img src="http://d.pr/i/U6XZ+" alt="Adding Avenir." />
	</a>
	<figcaption>Adding Avenir.</figcaption>
</figure>

I also commented-out the stylesheet helper for the webfont in the `<head>` section (`header.html` for Camel)

<figure>
	<a class="nohover" href="http://d.pr/i/hddm+">
		<img src="http://d.pr/i/hddm+" alt="Disabling the webfont stylesheet." />
	</a>
	<figcaption>Disabling the webfont stylesheet.</figcaption>
</figure>

Once that was done, the results were noticable.

<figure>
	<a class="nohover" href="http://d.pr/i/1eIhx+">
		<img src="http://d.pr/i/1eIhx+" alt="Not waiting as long." />
	</a>
	<figcaption>Bye bye latency.</figcaption>
</figure>

Yes, *still* not [Daring Fireball][d 2], but significantly quicker page loading without the Cloud.typography latency. 

# Slow Is Death

Ben Thompson of Stratechery recently [wrote][stratechery] on the subject of web advertisements from the perspective of both the publishers and the readers. Always the pragmatist, he had this to say:
>The problem for publishers, though, is that dollars and cents — which come from advertisers — are a far more scarce resource than are page views, leaving publishers with a binary choice: provide a great user experience and go out of business, or muddle along with all of the baggage that relying on advertising networks entails.

He also puts the slow web conversation into perspective with regard to [Facebook Instant Articles][theoveranalyzed 6]:
>If the New York Times cannot resist programmatic advertising, what chance does iMore or the vast majority of online publications have? If anything this puts Facebook’s Instant Articles initiative in a far more positive light: the social network is offering to not only improve the user experience by displaying articles instantly — thanks, primarily, to the lack of programmatic advertising cruft — but also to help monetize said content by selling ads against it and sharing 70%, backed by profile data that is far superior to even the ad networks.
>
>Indeed, arguably the biggest takeaway should be that the chief objection to Facebook’s offer — that publishers are giving up their independence — is a red herring. **Publishers are already slaves to the ad networks** [emphasis added], and their primary decision at this point is which master — ad networks or Facebook — is preferable?

>[A reckoning is coming], as I noted when Facebook’s Instant Articles launched. The future for most publishers is likely that of pure content production only, save for the few — like Gruber — who are destination sites capable of selling native advertising in stream (or selling subscriptions, like this site). What is very much in question is exactly how users will feel when they finally get what they claim they wish for.

Ben Thompson is coming at slow loading webpages from a different perspective than my own. The point of his post was to explain how iMore's job of making a [Gruber-approved webpage][daringfireball 3] is easier said than done. Because the average web reader is not willing to pay for content, ads *must* be served to keep the publisher publishing. And, as Thompson asserts, users can't have free without ads. For both the publisher and the reader, Facebook Instant Articles (and [Apple News][instagram]) might not be that bad after all, on an infinite time scale.[^atp]

# Now What

My webpage wasn't slow because of horrible JavaScript-powered advertisements like what plagues iMore. TheOverAnalyzed was slow because of a webfont. But the difference isn't what's important. The end result is. Slow-loading pages are problematic for both publishers and readers. I'm sure publishers wished their websites were better, just as I'm sure readers wish websites were better. For myself and TheOverAnalyzed: as long as webfonts are slow, I can't imagine I'll be coming back.

Still, I am not sure if I'll stay away from webfonts forever. I haven't taken a serious look at Adobe's [Typekit][typekit] or [Google Fonts][google], because neither one offered Ideal Sans. I might experiment with those services in the future. For now, however, I think I'll be okay with Avenir. It's no Ideal Sans, but it sure beats Helvetica. 

And because I'm in the purging mood, I'm going to try TheOverAnalyzed without all JavaScript as well.[^big] I'll probably turn it back on, but I want to enjoy speedy page loads to the fullest extent possible. I've always wondered why Daring Fireball didn't have any fancy JavaScript. Now I know why. Because it's faster without it. And for the web, faster is *always* better.

[^atp]: [ATP reference][overcast].
[^big]: No Bigfoot footnotes!? How can this be? (Especially when I've dedicated entire [posts][theoveranalyzed 7] to how I enabled them in the first place.)

	This is probably just temporary. But only time will tell.
[^no]: Nothing's changed. I don't think I'll ever be truly done with my website. 
[^sf]: I tried [San Francisco][wikipedia 3], per Craig Hockenberry's [recommendation][furbo], but I think the font name changed since his original post. He warned that might happen, since iOS 9 / 10.11 are still in beta. I'll have to revisit this when both OS's are officially released.

[bigfootjs]: http://www.bigfootjs.com/
[d]: http://d.pr/i/1hGao+
[d 2]: http://d.pr/i/8o2U+
[d 3]: http://d.pr/i/wayX+
[daringfireball]: http://daringfireball.net
[daringfireball 2]: http://daringfireball.net/2015/07/safari_content_blocker_imore
[daringfireball 3]: http://daringfireball.net/linked/2015/07/09/ritchie-bad-ads
[feedbin]: http://blog.feedbin.com/2013/09/03/format-toolbar/
[fitvidsjs]: http://fitvidsjs.com/
[fontsinuse]: http://fontsinuse.com/uses/1577/instapaper-ios-app
[furbo]: http://furbo.org/2015/07/09/i-left-my-system-fonts-in-san-francisco/
[google]: https://encrypted.google.com/fonts
[hippa]: https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act
[instagram]: https://instagram.com/p/4XAr5Fwz3M/
[marco]: http://marco.org
[overcast]: https://overcast.fm/+CdRcwCsQ/43:24
[stratechery]: https://stratechery.com/2015/why-web-pages-suck/
[theoveranalyzed]: http://www.theoveranalyzed.net/2015/6/1/introducing-theoveranalyzed-30
[theoveranalyzed 2]: http://www.theoveranalyzed.net/tags/Star%20Wars
[theoveranalyzed 3]: http://www.theoveranalyzed.net/tags/movies
[theoveranalyzed 4]: http://www.theoveranalyzed.net/2015/7/12/why-the-web-is-so-slow
[theoveranalyzed 5]: http://www.theoveranalyzed.net/2015/7/12/why-the-web-is-so-slow#nojs
[theoveranalyzed 6]: http://www.theoveranalyzed.net/2015/5/15/facebooks-instant-articles
[theoveranalyzed 7]: http://www.theoveranalyzed.net/2015/1/31/bigfoot-footnotes-in-squarespace
[typekit]: http://typekit.com/
[typography]: http://www.typography.com/fonts/ideal-sans/overview/
[typography 2]: http://www.typography.com/fonts/whitney/overview/
[typography 3]: http://www.typography.com/cloud/welcome/
[vesperapp]: http://vesperapp.co/blog/how-to-make-a-vesper/
[vesperapp 2]: http://vesperapp.co
[wikipedia]: https://en.wikipedia.org/wiki/Avenir_(typeface
[wikipedia 2]: https://en.wikipedia.org/wiki/Helvetica
[wikipedia 3]: https://en.wikipedia.org/wiki/San_Francisco_(2014_typeface)