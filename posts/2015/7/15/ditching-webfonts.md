Title: Ditching Webfonts  
Date: 2015-07-15 11:41  
Description: Over the past few years, I've become increasingly interested in design and specifically, typography. Ideal Sans was *it* for me. But maybe Hoefler's webfont is just too much of a drag right now?  
Tags: Typography, Web Design, Ditching Webfonts  
Image: https://d.pr/i/138Zv+  

*This is the second post in a series called [Ditching Webfonts][1]. If you haven't already done so, you should read the [first][2] post in this series. You can also read the [final][3] post in the series.*
<!-- {em:.topstory) -->

![That's exactly 457.1 ms too long for me.][4]

### Becoming Ideal

Ever since I became more interested in typefaces and web design, [Ideal Sans][5] had been my unicorn. When I initially became interested in using that font on my website, I knew very little about HTML and CSS, or webfonts in general. Because of that, I wasn't sure how to add it to my website. All I knew was that I liked it. Marco used it for his [blog][6] and [app][7], and Q Branch [used it][8] for [Vesper][9]. It's also available in the [Feedbin][10] webapp (along with other Hoefler originals like [Whitney][11]).

When I moved from Squarespace to Camel [last month][12], one of the lights at the end of the tunnel was securing Ideal Sans for the website. I remember the first time I deployed my site and I saw that beautiful and personable typeface staring right back at me. What joy.

I had done it. I made my own website. And I made it look *good*.

### Settling On Ideal

Over the course of the next few weeks, I was constantly tweaking this and that in CSS.[^1] Up until a few days ago, page load times were a rather trivial matter for me. From the beginning, I knew there would be no way to match John Gruber's lightning-quick [Daring Fireball][13], which loads in approximately [1 second][14] on desktop *and* mobile. 

Gruber has virtually no JavaScript extensions in use, and his website rarely features an embedded image. When it does, the size of the image is in the low hundred of kilobytes. Conversely, TheOverAnalyzed has always been a media-rich blog. I don't just write about Apple. Very often, pop culture posts can be found interspersed amongst the posts about static blogging engines and other such nerdery. And when I do write about something like [Star Wars][15] or [movies][16], the posts usually include a picture or two. Also, because of the way the Camel handles pagination, the homepage and each subsequent page might have 10-15 posts, depending on my post/day ratio. If each posts has one picture weighing in around 500 KB, that could add up to around 7-8 MB for each index page. 

Thus, Daring Fireball this is not. And there really isn't anything *wrong* with that.

Still, ever the tinkerer, I <s>was</s> am always tweaking this or that, testing local versions of the site against certain JavaScript and jQuery plugins. The goal is always the same: try to make TheOverAnalyzed faster. I eventually settled on a middle ground. I could deploy TheOverAnalyzed with Ideal Sans, [Bigfoot footnotes][17], and [auto-width YouTube embeds][18] for around 2.5 seconds of page loading. Certainly not as fast as Daring Fireball, but fast enough.

Right?

### The Slow Web

My priorities changed somewhat last week. Gruber [wrote a short piece][19] on the crummy state of modern web browsing, focusing primarily on how *slowly* most webpages load these days. According to Gruber, the culprit was all those JavaScript extensions powering those annoying web advertisements. He picked on iMore in particular. [I did the same][20]. 

While I was writing that post last week, I experimented with a jQuery plugin called [Lazy Load][21], by Mika Tuupola. The purpose of that plugin is to prevent the loading of embedded images until they come into `viewport`. I had to edit the source code (Markdown/HTML) for my posts by adding a special class to images, `<img class="lazy"`, as well as add a `data-original=` modifier in place of the traditional `src=`. When the image comes into focus on the webpage, Lazy Load dynamically reads the `data-original=` content and inserts an `src=` string into the `<img>` tag, thereby loading the image. It's a pretty nifty plugin---at least in theory. 

Truthfully, I'm not sure why I was so bent on trying this. At the time, I justified using it by telling myself that it would make TheOverAnalyzed load faster. From the beginning, this was flawed logic. Previously, I tested the site against the `Disable Images` option in Safari's Develop menu. And guess what? Disabling images never made a meaningful difference in page loading times.

But I tried Lazy Load anyways. Funnily enough, the deployment of the site that contained my aforementioned post on slow-loading webpages coincided with my trying Lazy Load full-tilt. And guess what? It actually *increased* the page loading of TheOverAnalyzed! Yes, while my 'holier than thou' post was being propagated to FeedPress and social media, my site was all the while slower than before I wrote my post. How ironic.

How is it possible that a plugin designed to speed page loading could actually make my site slower? I'm not sure I know exactly why. My working theory is that on a page with a bunch of images (15-20 on the homepage at the moment), the client-side JavaScript compiler is doing a lot of work to parse the Lazy Load script. Also, I wasn't able to perfect the placeholder image syntax. And because of that, every time Lazy Load inserted the `src=` string, the layout of the page was modified. That couldn't have been healthy for page loading speeds. This was especially apparent on mobile, where the page loading time increased from around 2.5 seconds to 5 seconds. *That* is a long time to wait for a page to load. I can't imagine why anyone would stick around that long to wait for my homepage to generate.

Less than an hour after that deploy, I had re-edited my posts to remove the Lazy Load image classes and attributes, and I had completely removed the plugin from TheOverAnalyzed. So then: back to square one.

### Trying Stuff

Yesterday, I experimented more with disabling JavaScript. Without JavaScript enabled, page load times were only marginally faster. [And as I said previously][22], gaining less than a quarter second in page loading times didn't warrant losing Bigfoot footnotes. But while I was experimenting in Safari's `View Page Source` window, I noticed something. In general, TheOverAnalyzed initializes rather quickly, somewhere in the range of 100ms. However, immediately thereafter---before loading the next resource---there was latency of around 800ms. That next resource I speak of is the Ideal Sans webfont, served up via Hoefler & Co's [Cloud.typography][23] backend. 

800ms. That's almost an *entire* second of latency. And Ideal Sans---my favorite font---was the culprit.

Could I fix this?

### Considering The Inconsiderable

Interestingly, while I was examining TheOverAnalyzed's page source and realizing that the Hoefler webfont was killing my page loading, an important conversation was happening on Twitter. 

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/benthompson" title="Ben Thompson on Twitter">@benthompson</a> No one should ever do anything that makes a website slow.</p>&mdash; John Gruber (@gruber) <a href="https://twitter.com/gruber/status/620966969953636353" title="John Gruber suggesting that anything done to a website that makes it slower is bad">July 14, 2015</a></blockquote>

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/marcoarment" title="Marco Arment on Twitter">@marcoarment</a> <a href="https://twitter.com/benthompson" title="Ben Thompson on Twitter">@benthompson</a> That’s one reason I’ve procrastinated on switching to webfonts at DF. (Bigger reason: inertia.)</p>&mdash; John Gruber (@gruber) <a href="https://twitter.com/gruber/status/621074509676826624" title="Gruber talking about switching to webfonts for Daring Fireball">July 14, 2015</a></blockquote>

Moreover, it seems Craig Hockenberry has experienced (or at least has knowledge of) webfont latency for himself:

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/jimray" title="Twitter user @jimray">@jimray</a> <a href="https://twitter.com/gruber" title="John Gruber on Twitter">@gruber</a> <a href="https://twitter.com/marcoarment" title="Marco Arment on Twitter">@marcoarment</a> <a href="https://twitter.com/benthompson" title="Ben Thompson on Twitter">@benthompson</a> They can have high latency depending on where they’re hosted.</p>&mdash; Craig Hockenberry (@chockenberry) <a href="https://twitter.com/chockenberry/status/621119545227345924" title="Craig Hockenberry on webfont latency">July 15, 2015</a></blockquote>

If Ideal Sans was the problem, I wondered how fast TheOverAnalyzed would load without it? 

### Gaining A Second

To test the site without the webfont, I modified `styles.css`, so that there would be a fallback font. In this case, [Avenir][24], which is like [Helvetica][25] but less cliche.[^2]![Adding Avenir.][26]

I also commented-out the stylesheet helper for the webfont in the `<head>` section (`header.html` for Camel)

![Disabling the webfont stylesheet.][27]

Once that was done, the results were noticeable.

![Bye bye latency.][28]

Yes, *still* not [Daring Fireball][29], but significantly quicker page loading without the Cloud.typography latency. 

### Slow Is Death

Ben Thompson of Stratechery recently [wrote][30] on the subject of web advertisements from the perspective of both the publishers and the readers. Always the pragmatist, he had this to say:

> The problem for publishers, though, is that dollars and cents — which come from advertisers — are a far more scarce resource than are page views, leaving publishers with a binary choice: provide a great user experience and go out of business, or muddle along with all of the baggage that relying on advertising networks entails.

He also puts the slow web conversation into perspective with regard to [Facebook Instant Articles][31]:

> If the New York Times cannot resist programmatic advertising, what chance does iMore or the vast majority of online publications have? If anything this puts Facebook’s Instant Articles initiative in a far more positive light: the social network is offering to not only improve the user experience by displaying articles instantly — thanks, primarily, to the lack of programmatic advertising cruft — but also to help monetize said content by selling ads against it and sharing 70%, backed by profile data that is far superior to even the ad networks.
>
> Indeed, arguably the biggest takeaway should be that the chief objection to Facebook’s offer — that publishers are giving up their independence — is a red herring. **Publishers are already slaves to the ad networks** [emphasis added], and their primary decision at this point is which master — ad networks or Facebook — is preferable?
> [A reckoning is coming], as I noted when Facebook’s Instant Articles launched. The future for most publishers is likely that of pure content production only, save for the few — like Gruber — who are destination sites capable of selling native advertising in stream (or selling subscriptions, like this site). What is very much in question is exactly how users will feel when they finally get what they claim they wish for.

Ben Thompson is coming at slow loading webpages from a different perspective than me. The point of his post was to explain how iMore's job of making a [Gruber-approved webpage][32] is easier said than done. Because the average web reader is not willing to pay for content, ads *must* be served to keep the publisher publishing. And, as Thompson asserts, users can't have free without ads. For both the publisher and the reader, Facebook Instant Articles (and [Apple News][33]) might not be that bad after all, on an infinite time scale.[^3]

### Now What

My webpage wasn't slow because of horrible JavaScript-powered advertisements like what plagues iMore. TheOverAnalyzed was slow because of a webfont. But the difference isn't what's important. The end result is. Slow-loading pages are problematic for both publishers and readers. I'm sure publishers wished their websites were better, just as I'm sure readers wish websites were better. For myself and TheOverAnalyzed: as long as webfonts are slow, I can't imagine I'll be coming back.

Still, I am not sure if I'll stay away from webfonts forever. I haven't taken a serious look at Adobe's [Typekit][34] or [Google Fonts][35], because neither one offered Ideal Sans. I might experiment with those services in the future. For now, however, I think I'll be okay with Avenir. It's no Ideal Sans, but it sure beats Helvetica. 

And because I'm in the purging mood, I'm going to try TheOverAnalyzed without all JavaScript as well.[^4] I'll probably turn it back on, but I want to enjoy speedy page loads to the fullest extent possible. I've always wondered why Daring Fireball didn't have any fancy JavaScript. Now I know why. Because it's faster without it. And for the web, faster is *always* better.

[^1]: Nothing's changed. I don't think I'll ever be truly done with my website. 
[^2]: I tried [San Francisco][a], per Craig Hockenberry's [recommendation][b], but I think the font name changed since his original post. He warned that might happen, since iOS 9 / 10.11 are still in beta. I'll have to revisit this when both OS's are officially released.
[^3]: [ATP reference][c]
[^4]: No Bigfoot footnotes!? How can this be? (Especially when I've dedicated entire [posts][d] to how I enabled them in the first place?) This is probably just temporary. But only time will tell.

[a]: https://en.wikipedia.org/wiki/San_Francisco_(2014_typeface) "Wikipedia: Apple's San Francisco typeface"
[b]: http://furbo.org/2015/07/09/i-left-my-system-fonts-in-san-francisco/ "Craig Hockenberry on `-apple-system` font"
[c]: https://overcast.fm/+CdRcwCsQ/43:24 "Accidental Tech Podcast 124: The Tyranny of Radio"
[d]: /2015/1/31/bigfoot-footnotes-in-squarespace "My post about adding Bigfoot footnotes in Squarespace"

[1]: /tags/Ditching%20Webfonts "Posts tagged 'Ditching Webfonts'"
[2]: /2015/7/12/why-the-web-is-so-slow "My piece on The Verge piece about the slow web"
[3]: /2015/7/19/ditching-webfonts-part-ii-hoefler-webfonts-are-prettier-but-slower "The final post in the series 'Ditching Webfonts'"
[4]: https://d.pr/i/138Zv+ "Waiting."
[5]: http://www.typography.com/fonts/ideal-sans/overview/ "My beloved Ideal Sans on Hoefler & Co's website"
[6]: http://marco.org "Marco Arment's personal blog, Marco.org"
[7]: http://fontsinuse.com/uses/1577/instapaper-ios-app "Fonts In Use: Instapaper and Ideal Sans"
[8]: http://vesperapp.co/blog/how-to-make-a-vesper/ "The Vesper app's blog, posting about how Vesper 2 came to be"
[9]: https://itunes.apple.com/us/app/vesper/id655895325?mt=8&at=1l3vx9s "Vesper on the App Store"
[10]: http://blog.feedbin.com/2013/09/03/format-toolbar/ "Ideal Sans (and other Hoefler & Co webfonts in Feedbin!"
[11]: http://www.typography.com/fonts/whitney/overview/ "A previous alternate for Ideal Sans, Whitney, on Hoefler & Co's website"
[12]: /2015/6/1/introducing-theoveranalyzed-30 "Me introducing TheOverAnalyzed 3.0"
[13]: http://daringfireball.net "John Gruber's personal blog, Daring Fireball"
[14]: https://d.pr/i/1hGao+ "Speedtesting Daring Fireball with Alexa"
[15]: /tags/Star%20Wars "Posts tagged 'Star Wars'"
[16]: /tags/movies "Posts tagged 'Movies'"
[17]: http://www.bigfootjs.com/ "Bigfoot Footnotes website"
[18]: http://fitvidsjs.com/ "FitVids.js website"
[19]: http://daringfireball.net/2015/07/safari_content_blocker_imore "John Gruber on Safari Content Blockers"
[20]: /2015/7/12/why-the-web-is-so-slow "My take on that Verge piece on why the web is slow"
[21]: http://www.appelsiini.net/projects/lazyload "LazyLoad.js"
[22]: /2015/7/12/why-the-web-is-so-slow#nojs "No-JavaScript section of my take on that Verge piece on why the web is slow"
[23]: http://www.typography.com/cloud/welcome/ "Hoefler & Co"
[24]: https://en.wikipedia.org/wiki/Avenir_(typeface) "Wikipedia: Avenir typeface"
[25]: https://en.wikipedia.org/wiki/Helvetica "Wikipedia: Helvetica"
[26]: https://d.pr/i/U6XZ+ "Switching to Avenir"
[27]: https://d.pr/i/hddm+ "Disabling the webfont stylesheet"
[28]: https://d.pr/i/1eIhx+ "Not waiting as long"
[29]: https://d.pr/i/8o2U+ "Speedtesting Daring Fireball on my Mac"
[30]: https://stratechery.com/2015/why-web-pages-suck/ "Ben Thompson on that Verge piece about slow websites"
[31]: /2015/5/15/facebooks-instant-articles "My post on Facebook Instant Articles"
[32]: http://daringfireball.net/linked/2015/07/09/ritchie-bad-ads "John Gruber on iMore's crappy website"
[33]: https://instagram.com/p/4XAr5Fwz3M/ "TheOverAnalyzed on Apple News!"
[34]: http://typekit.com/ "Adobe TypeKit"
[35]: https://encrypted.google.com/fonts "Google Fonts"