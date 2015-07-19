@@ Title=Ditching Webfonts Part II: Hoefler Webfonts Are Prettier, But Slower 
@@ Date=2015-07-19T08:00:00-07:00
@@ Description=It's been a few days since I stopped using webfonts on my website. I did some super scientific and empirical testing in determining that Cloud.typography (Hoefler) webfonts are slower than everyone else's.  
@@ Tags=Ditching Webfonts, Cloud.typography, TypeKit, Hoefler, Adobe, web, design  
@@ Image=http://www.typography.com/images/overviewPageImages/whitney_cell_07.png  

<div class="topstory">What started out as a simple rant about the slowness of the web morphed into a <a href="http://www.theoveranalyzed.net/tags/Ditching%20Webfonts">mini-series</a> about webfonts. Be sure to check out the <a href-"http://www.theoveranalyzed.net/2015/7/12/why-the-web-is-so-slow">first</a> and <a href="http://www.theoveranalyzed.net/2015/7/15/ditching-webfonts">second</a> posts on the subject.</div>

## Just Not The Same

[Avenir Next][an] is the typeface currently adorning TheOverAnalyzed, at least on Apple displays. It's not meant to be permanent. It's a stopgap. Until my favorite webfont comes without the burden of latency, that isn't likely to change. 

# A Good Point

A few days ago I found myself commanding the attention of none other than Ben Thompson, who had this to say about my hasty[^has] decision to ditch webfonts:

<blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi">@ToniWonKanobi</a> <a href="https://twitter.com/gruber">@gruber</a> <a href="https://twitter.com/marcoarment">@marcoarment</a> <a href="https://twitter.com/TheOverAnalyzed">@TheOverAnalyzed</a> the vast majority of computers don&#39;t have Avenir installed</p>&mdash; Ben Thompson (@benthompson) <a href="https://twitter.com/benthompson/status/621555208657592320">July 16, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/benthompson">@benthompson</a> <a href="https://twitter.com/gruber">@gruber</a> <a href="https://twitter.com/marcoarment">@marcoarment</a> <a href="https://twitter.com/TheOverAnalyzed">@TheOverAnalyzed</a> It should default to whatever sans serif is there if no Avenir: <a href="http://t.co/WiLvy1Lvai">http://t.co/WiLvy1Lvai</a></p>&mdash; Anthony Craig (@ToniWonKanobi) <a href="https://twitter.com/ToniWonKanobi/status/621555527638609920">July 16, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Thompson was right. In modifying my CSS to call for generic font families in lieu of my webfont of choice, I am potentially allowing fonts I never approved of to be displayed on my site (e.g., in the case of the fallback to `sans serif`). That's not ideal.

My website is faster for it, but it's not *really* my website anymore.

A later tweet by Thompson seemed to suggest to me that perhaps [Cloud.typography][ct] webfonts were more latency-prone and less performant than competitors' webfonts:

<blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi">@ToniWonKanobi</a> yep. Don&#39;t feel it slows my site up 97% of the time</p>&mdash; Ben Thompson (@benthompson) <a href="https://twitter.com/benthompson/status/621561134663897088">July 16, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Thompson's blog [Stratechery][str] uses the [Freight Sans][fs] font family, provided by Adobe's TypeKit webfont repository:

http://d.pr/i/1lonW+

Very little if any latency.

For [Liss Is More][lm], Casey Liss uses [Lato][lato], a TypeKit font

http://d.pr/i/120yX+

Again, relatively no latency compared to my site before I removed the Hoefler webfont.

# Experimenting The Lazy Way

This afternoon, I thought some more about my alternatives to Cloud.typography. I decided to do a preliminary search on Hoefler's webfonts vs Adobe's. The *first* result was a [post][cb] by Chris Bowler, who had this to say about Hoefler's service as a newcomer:
>Overall, Typekit is a slightly easier to use service. Both offer great fonts, decent pricing, and are technically sound. The primary reason a designer would use Cloud.typography is when he/she absolutely needs to use a H&FJ font in a design. Otherwise, the options lean toward Typekit.

Bowler wrote this post in 2013, right as Hoefler was launching its webfont service.[^this] Bowler had nothing to say about latency because the service probably hadn't been live long enough to evaluate such a metric.

In that same post, Bowler linked to three websites, all of which helped beta test Hoefler webfonts before they officially launched Cloud.typography: [kottke.org][kottke], [Rands in Repose][randsinrepose], and [SimpleBits][simplebits].

And of course I checked out their source code as well

<figure>
	<a class="nohover" href="http://d.pr/i/1k8Wv+">
		<img src="http://d.pr/i/1k8Wv+" alt="kottke.org source" />
	</a>
	<figcaption><a href="http://kottke.org">kottke.org</a></figcaption>
</figure>

<figure>
	<a class="nohover" href="http://d.pr/i/14hQq+">
		<img src="http://d.pr/i/14hQq+" alt="Rands in Repose source" />
	</a>
	<figcaption><a href="http://http://randsinrepose.com">Rands in Repose</a></figcaption>
</figure>

<figure>
	<a class="nohover" href="http://d.pr/i/11Gtm+">
		<img src="http://d.pr/i/11Gtm+" alt="SimpleBits source" />
	</a>
	<figcaption><a href="http://http://simplebits.com">SimpleBits</a></figcaption>
</figure>

Pay close attention to the timeline view. Anything look familiar? Yes, that's *latency* you see, found in two of the three sites that originally tested Hoefler webfonts. Notice anything else? There is relatively *no* latency for SimpleBits, which -- wouldn't you know it -- *now* uses TypeKit for the webfont.

# A Chance Meeting

A couple of days ago, a patient of mine[^hippa] ended up being one of those typical web/design/code/developer/entrepreneur-types I might encounter if I worked in the Bay Area. We got to talking about all things non-dental,  and after the conversation passed through the typical Apple blogosphere heavyweights like [Gruber][daringfireball] and [Marco][marco], we talked a bit about webfonts.[^hy] 

I went back to my office and like any [good] aspiring web developer, I snuck a peak at his website's source code. He was using [Google Fonts][wikipedia].

Before the girls up front checked him out, I stopped by to pick his brain one last time. I asked him what he thought about the Google Fonts webfonts, and whether he had ever experienced any latency on cacheless page loads. He said he never experienced noticeable lag, and that Google Fonts were a "no-brainer."

A pretty clear endorsement from a professional, wouldn't you say?

# Results

So what does this tell me? Well, for starters, it tells me that I'm not crazy. I'm not just imagining that my site was slower than everyone else's. Also, this tells me that I'm not completely incompetent -- I haven't done anything idiotic in designing my website, because other websites (ones built by way smarter people than me), are just as painfully slow to load Hoefler webfonts.

Most importantly, however, it tells me that Cloud.typography has significantly more latency than TypeKit. Or, put another way:

<p class="takehome" id="boom">Cloud.typography is slower than TypeKit</p>

And that's too bad, because Hoefler fonts are the *best* fonts. Typography shouldn't be about WebKit rendering, or CSS wonkery, or `@font-face` limitations: it's about conveying a language. But as long as Hoefler fonts are latent, it *will* be more about those other concepts, and any language those fonts might hope to convey is obscured by their own slowness. 

# Hoefler & Co.

Over the past three decades, Hoefler & Co ([prev. Hoefler & Frere-Jones][hfj]) has been a prolific font foundry. They have contributed to a wide variety of causes, from everyone's favorite [fruit company][ht] to presidential candidates. Font nerds: do yourself a solid and check out their website. 

Here are some of my favorites:[^acc] 

<figure class="wide">
	<a class="nohover" href="http://www.typography.com/images/overviewPageImages/archer-A-07.png">
		<img src="http://www.typography.com/images/overviewPageImages/archer-A-07.png" alt="Archer" />
	</a>
	<figcaption><a href="http://www.typography.com/fonts/archer/overview/">Archer</a> is a slab-serif that can be seen in the poster for <a href="http://fontsinuse.com/uses/7035/the-grand-budapest-hotel-poster-and-props">The Grand Budapest Hotel (2014)</a>, as well as in <a href="https://en.wikipedia.org/wiki/Martha_Stewart_Living">Martha Stewart Living</a></figcaption>
</figure>

<figure class="wide">
	<a class="nohover" href="http://www.typography.com/images/overviewPageImages/gotham_cell_02.png">
		<img src="http://www.typography.com/images/overviewPageImages/gotham_cell_02.png" alt="Gotham" />
	</a>
	<figcaption><a href="http://www.typography.com/fonts/gotham/overview/">Gotham</a> is probably Hoefler & Frere-Jones's most well-known font. What started as GQ commission became an 'everywhere' font. Gotham was featured in <a href="https://en.wikipedia.org/wiki/Gotham_(typeface)#In_the_Obama_campaign">Obama's</a> <a href="http://fontsinuse.com/uses/1603/obama-2008-campaign-posters">2008 presidential campaign</a>.</figcaption>
</figure>

<figure class="wide">
	<a class="nohover" href="http://www.typography.com/images/overviewPageImages/whitney_cell_02.png">
		<img src="http://www.typography.com/images/overviewPageImages/whitney_cell_02.png" alt="Whitney" />
	</a>
	<figcaption><a href="http://www.typography.com/fonts/whitney/overview/">Whitney</a> was the runner-up font for TheOverAnalyzed. If it weren't for all the personal history associated with Ideal Sans, I probably would have chosen it instead. <a href="http://fontsinuse.com/uses/2384/romney-2012-presidential-campaign">Mitt Romney's 2012 presidential campaign</a> featured this font.</figcaption>
</figure>

These are just a few of the great fonts available from Hoefler. And they're all out of reach for me.

# Final Thoughts

If it isn't immediately obvious, I am a big fan of this font foundry. I wrote this post because I care about using great fonts. If by some strange miracle I am able to get Hoefler's attention, perhaps they could work on making their webfont faster? 

Since finishing TheOverAnalyzed 3.0 [last month][theoveranalyzed], I probably view my website multiple times a day. I love seeing that [logo][logo] I made in [Sketch][sk]. And, up until a few days ago, I loved seeing Ideal Sans, with all its humanist influences, adorning my website. I miss it. 

I hope Cloud.typography webfonts can become less latent. As soon as they are, I'll be back. You can count on that. In the meantime, Avenir Next will have to do.

[^acc]: This just became an Accidental <del>Tech</del> Font <del>Podcast</del> Post. If you want to skip ahead to my final thoughts about Hoefler webfonts, click [here][theoveranalyzed 2].
[^has]: But correct
[^hippa]: I am inclined to link to his development studio, but since we met in a professional setting, [HIPPA][hippa] would not approve of me doing so.
[^hy]: The hygienist was most displeased since, as you might imagine, our nerdy conversation was impeding her from moving on to her next patient.
[^this]: Hoefler conveniently launched Cloud.typography *after* the split with Frere-Jones was [official][off], thereby obfuscating any potential copyright claims from Frere-Jones in the future. That [whole story][ws] is just sad.

[an]: https://en.wikipedia.org/wiki/Avenir_(typeface)#Avenir_Next
[cb]: http://chrisbowler.com/journal/cloud-vs-typekit
[ct]: http://cloud.typography.com
[daringfireball]: http://daringfireball.net
[ff]: http://gizmodo.com/what-hoefler-frere-jones-breakup-means-for-the-futur-1503686340
[fs]: https://typekit.com/fonts/freight-sans-pro
[hfj]: http://www.theverge.com/2014/1/17/5318206/hoefler-and-frere-jones-lawsuit
[ht]: https://en.wikipedia.org/wiki/Hoefler_Text
[kottke]: http://kottke.org
[lato]: https://typekit.com/fonts/lato
[lm]: http://www.caseyliss.com
[logo]: http://www.theoveranalyzed.net/images/SiteTitle.svg
[marco]: http://marco.org
[randsinrepose]: http://randsinrepose.com
[s]: http://typography.com/press/20140117
[simplebits]: http://simplebits.com
[sk]: http://bohemiancoding.com/sketch/
[str]:  http://stratechery.com
[theoveranalyzed]: http://www.theoveranalyzed.net/2015/6/1/introducing-theoveranalyzed-30
[theoveranalyzed 2]: http://www.theoveranalyzed.net/2015/7/19/ditching-webfonts-part-ii#final-thoughts
[wikipedia]: https://en.wikipedia.org/wiki/Google_Fonts