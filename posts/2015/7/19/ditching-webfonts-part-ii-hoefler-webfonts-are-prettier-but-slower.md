@@ Title=Ditching Webfonts Part II: Hoefler Webfonts Are Prettier, but Slower  
@@ Date=2015-07-19T11:14:00+00:00
@@ Description=It's been a few days since I stopped using webfonts on my website. I did some super scientific and empirical testing in determining that Cloud.typography (Hoefler) webfonts are slower than everyone else's.  
@@ Tags=web, web design, design, fonts, typefaces, Ideal Sans, webfonts, Cloud.typography, Ditching Webfonts, CSS, TypeKit, Hoefler, Adobe, typography  
@@ Image=http://www.typography.com/images/overviewPageImages/whitney_cell_07.png  

<div class="topstory">

What started out as a simple rant about the slowness of the web morphed into a [mini-series][ms] about webfonts. Be sure to check out the [first][first] and [second][sec] posts on the subject.

</div>

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

<figure>
	<a class="nohover" href="http://d.pr/i/1lonW+">
		<img src="http://d.pr/i/1lonW+" alt="Stratechery" />
	</a>
	<figcaption><a href="http://stratechery.com">Stratechery</a> showing very little latency</figcaption>
</figure>

For [Liss Is More][lm], Casey Liss uses [Lato][lato], another TypeKit font:

<figure>
	<a class="nohover" href="http://d.pr/i/120yX+">
		<img src="http://d.pr/i/120yX+" alt="Liss Is More" />
	</a>
	<figcaption><a href="http://caseyliss.com">Liss Is More</a>, with relatively no latency as well</figcaption>
</figure>

# Further Experimentation, Lazy Style

Yesterday afternoon, I thought some more about my alternatives to Cloud.typography. I decided to do a preliminary search on 'Hoefler's webfonts versus Adobe's'. The very *first* [DuckDuckGo][ddg] result was a [post][cb] by Chris Bowler, who had this to say about Hoefler's [then] newbie webfont foundry:
>Overall, Typekit is a slightly easier to use service. Both offer great fonts, decent pricing, and are technically sound. The primary reason a designer would use Cloud.typography is when he/she absolutely needs to use a H&FJ font in a design. Otherwise, the options lean toward Typekit.

Bowler wrote this post in 2013, right as Hoefler was launching its webfont service.[^this] Bowler had nothing to say about latency, probably because the service hadn't been live long enough to properly evaluate.

In that same post, Bowler linked to three websites, all of which helped beta-test Hoefler webfonts before Cloud.typography went live: [kottke.org][kottke], [Rands in Repose][randsinrepose], and [SimpleBits][simplebits].

And of course I checked out their source code as well.

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
	<figcaption><a href="http://randsinrepose.com">Rands in Repose</a></figcaption>
</figure>

<figure>
	<a class="nohover" href="http://d.pr/i/11Gtm+">
		<img src="http://d.pr/i/11Gtm+" alt="SimpleBits source" />
	</a>
	<figcaption><a href="http://simplebits.com">SimpleBits</a></figcaption>
</figure>

Pay close attention to the timeline view. Look [familiar][toa]? Yes, that's *latency* you see, found in two of the three sites that beta-tested Hoefler webfonts. Notice anything else? There is relatively *no* latency for SimpleBits, which *now* uses TypeKit for the webfont instead of Hoefler.

Compared to TypeKit, things weren't looking good for Cloud.typography.

# A Chance Meeting

A couple of days ago, a patient of mine[^hippa] ended up being one of those typical web/design/code/developer/entrepreneur-types. We started talking non-dental things like iOS and OS X, and after the conversation included the typical Apple blogosphere heavyweights like [Gruber][daringfireball] and [Marco][marco], we talked a bit about webfonts.[^hy] 

After the "exam" was completed, I went back to my office. And like any [good] aspiring web developer, I snuck a peak at his website's source code. He was using [Google Fonts][wikipedia].

Before the girls up front checked him out, I stopped by to pick his brain one last time. I asked him what he thought about the Google Fonts webfonts, and whether he had ever experienced any latency on uncached page loads. He said he never experienced noticeable lag, and that Google Fonts were a "no-brainer."

A pretty clear endorsement from a professional, wouldn't you say?

TypeKit and Google Fonts---it seems both are less latent than Cloud.typography fonts.

# Results

So what does this tell me? Well, for starters, it tells me that I'm not crazy. I'm not just imagining that my site was slower than everyone else's. Also, this tells me that I'm not completely incompetent. Apparently I haven't done anything extremely idiotic with my website design, because other websites ([ones built by way smarter people than me][ss]) are equally slow to load Hoefler webfonts.

It seems that across the board, Cloud.typography has significantly more latency than TypeKit. Or, put another way: Hoefler webfonts are slower than TypeKit.

<div class="takehome" id="boom"><p>Hoefler webfonts are slower than TypeKit</p></div>

And that's too bad, because Hoefler fonts really are the *best* fonts. Typography shouldn't be about WebKit rendering, or CSS wonkery, or `@font-face` hacks. Typography is about conveying a language. But as long as Hoefler webfonts are this latent, it *will* be more about those other concepts, and any language that those fonts hoped to convey will be obscured by their own sluggishness.

I can't imagine Hoefler wants his font foundry losing out to TypeKit or Google Fonts when it comes to expediency.

# Hoefler & Co.

Over the past three decades, Hoefler & Co ([prev. Hoefler & Frere-Jones][hfj]) has been a prolific font foundry. They have acquired a rather variegated clientele, from everyone's favorite [fruit company][ht] to presidential candidates (see below). Font nerds: do yourself a solid and check out their [website][typo]. 

Here are some of my favorites:[^acc] 

<figure class="wide">
	<a class="nohover" href="http://www.typography.com/images/overviewPageImages/archer-A-07.png">
		<img src="http://www.typography.com/images/overviewPageImages/archer-A-07.png" alt="Archer" />
	</a>
	<figcaption class="long"><a href="http://www.typography.com/fonts/archer/overview/">Archer</a> is a slab-serif, featured in the poster for <a href="http://fontsinuse.com/uses/7035/the-grand-budapest-hotel-poster-and-props">The Grand Budapest Hotel (2014)</a>, as well as in the <a href="https://en.wikipedia.org/wiki/Martha_Stewart_Living">Martha Stewart Living</a> magazine.</figcaption>
</figure>

<figure class="wide">
	<a class="nohover" href="http://www.typography.com/images/overviewPageImages/gotham_cell_02.png">
		<img src="http://www.typography.com/images/overviewPageImages/gotham_cell_02.png" alt="Gotham" />
	</a>
	<figcaption class="long"><a href="http://www.typography.com/fonts/gotham/overview/">Gotham</a> is probably Hoefler & Frere-Jones's most well-known font. What started as GQ commission became an 'everywhere' font. Notably, Gotham was featured in <a href="https://en.wikipedia.org/wiki/Gotham_(typeface)#In_the_Obama_campaign">Obama's</a> <a href="http://fontsinuse.com/uses/1603/obama-2008-campaign-posters">2008 and 2012 presidential campaigns</a>.</figcaption>
</figure>

<figure class="wide">
	<a class="nohover" href="http://www.typography.com/images/overviewPageImages/whitney_cell_02.png">
		<img src="http://www.typography.com/images/overviewPageImages/whitney_cell_02.png" alt="Whitney" />
	</a>
	<figcaption class="long"><a href="http://www.typography.com/fonts/whitney/overview/">Whitney</a> was the runner-up font for TheOverAnalyzed. If it weren't for all the <a href="/2015/7/15/ditching-webfonts#becoming-ideal">personal history</a> associated with Ideal Sans, I probably would have chosen Whitney instead. <a href="http://fontsinuse.com/uses/2384/romney-2012-presidential-campaign">Mitt Romney's 2012 presidential campaign</a> featured this font.</figcaption>
</figure>

These are just a [few][typography] of the [great][typography 2] [fonts][typography 3] [available][typography 4] from [Hoefler][typography 5]. And unfortunately, I can't use any of them.

# Final Thoughts

If it isn't immediately obvious, I am a big fan of the Hoefler font foundry. I wrote this post because I care about using great fonts like theirs. If by some strange miracle I am able to get Hoefler's attention, perhaps they could work on making their webfont faster? 

Since finishing TheOverAnalyzed 3.0 [last month][theoveranalyzed], I probably view my website multiple times a day. I love seeing that [logo][logo] I made in [Sketch][sk]. And, up until a few days ago, I loved seeing Ideal Sans, with all its humanist influences, adorning my website. I miss it. 

I hope Cloud.typography webfonts can become less latent. As soon as they are, I'll be back. You can count on that. In the meantime, Avenir Next will have to do.

<div class="update">

## Update
<p style="font-size:0.9em; color:#9e9e9e;margin:0.5em auto -0.5em auto">August 11, 2015</p>

You may have noticed that I've re-enabled my Cloud.typography webfont, Ideal Sans. Avenir Next is a great sans serif font, but it can't hold a candle to Hoefler. Yeah, the site loads slightly slower than before, but TheOverAnalyzed isn't really TheOverAnalyzed without Ideal Sans.

</div>

[^acc]: This just became an Accidental <del>Tech</del> Font <del>Podcast</del> Post. If you want to skip ahead to my final thoughts about Hoefler webfonts, click [here][theoveranalyzed 2].
[^has]: But correct
[^hippa]: I am inclined to link to his development studio, but since we met in a professional setting, [HIPPA][hippa] would not approve of me doing so.
[^hy]: At this point, the hygienist was most displeased. As you might imagine, our nerdy conversation went on for a while, and this was impeding her from moving on to her next patient.
[^this]: Hoefler conveniently launched Cloud.typography *after* the split with Frere-Jones was [official][off], thereby obfuscating any potential copyright claims from Frere-Jones in the future. That [whole story][ws] is just sad.

[an]: https://en.wikipedia.org/wiki/Avenir_(typeface)#Avenir_Next
[cb]: http://chrisbowler.com/journal/cloud-vs-typekit
[ct]: http://cloud.typography.com
[daringfireball]: http://daringfireball.net
[ddg]: /2015/3/19/you-should-use-duckduckgo
[ff]: http://gizmodo.com/what-hoefler-frere-jones-breakup-means-for-the-futur-1503686340
[first]: /2015/7/12/why-the-web-is-so-slow
[fs]: https://typekit.com/fonts/freight-sans-pro
[hfj]: http://www.theverge.com/2014/1/17/5318206/hoefler-and-frere-jones-lawsuit
[hippa]: https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act
[ht]: https://en.wikipedia.org/wiki/Hoefler_Text
[kottke]: http://kottke.org
[lato]: https://typekit.com/fonts/lato
[lm]: http://www.caseyliss.com
[logo]: /images/SiteTitle.svg
[marco]: http://marco.org
[ms]: /tags/Ditching%20Webfonts
[off]: http://typography.com/press/20140117
[randsinrepose]: http://randsinrepose.com
[sec]: /2015/7/15/ditching-webfonts
[simplebits]: http://simplebits.com
[sk]: http://bohemiancoding.com/sketch/
[ss]: http://thesweetsetup.com
[str]:  http://stratechery.com
[theoveranalyzed]: /2015/6/1/introducing-theoveranalyzed-30
[theoveranalyzed 2]: /2015/7/19/ditching-webfonts-part-ii#final-thoughts
[toa]: http://d.pr/i/138Zv+
[typo]: http://typography.com
[typography]: http://www.typography.com/fonts/knockout/overview/
[typography 2]: http://www.typography.com/fonts/obsidian/overview/
[typography 3]: http://www.typography.com/fonts/sentinel/overview/
[typography 4]: http://www.typography.com/fonts/surveyor/overview/
[typography 5]: http://www.typography.com/fonts/tungsten/overview/. 
[wikipedia]: https://en.wikipedia.org/wiki/Google_Fonts
[ws]: https://en.wikipedia.org/wiki/Hoefler_%26_Co.#Conflict_between_Hoefler_and_Frere-Jones

