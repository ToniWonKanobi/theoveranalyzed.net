Title: Ditching Webfonts Part II: Hoefler Webfonts Are Prettier, but Slower  
Date: 2015-07-19 11:14  
Description: It's been a few days since I stopped using webfonts on my website. I did some super scientific and empirical testing in determining that Cloud.typography (Hoefler) webfonts are slower than everyone else's.  
Tags: Typography, Web Design, Ditching Webfonts  
Image: https://www.typography.com/images/overviewPageImages/whitney_cell_07.png  

*What started out as a simple rant about the slowness of the web morphed into a [series][1] of posts about webfonts. Be sure to check out the [first][2] and [second][3] posts on the subject.*
<!-- {em:.topstory) -->

#### Just Not The Same

[Avenir Next][4] is the typeface currently adorning TheOverAnalyzed, at least on Apple displays. It's not meant to be permanent. It's a stopgap. Until my favorite webfont comes without the burden of latency, that isn't likely to change. 

### A Good Point

A few days ago I found myself commanding the attention of none other than Ben Thompson, who had this to say about my hasty[^1] decision to ditch webfonts:

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi" title="Me on Twitter">@ToniWonKanobi</a> <a href="https://twitter.com/gruber" title="John Gruber on Twitter">@gruber</a> <a href="https://twitter.com/marcoarment" title="Marco Arment on Twitter">@marcoarment</a> <a href="https://twitter.com/TheOverAnalyzed" title="TheOverAnalyzed on Twitter">@TheOverAnalyzed</a> the vast majority of computers don&#39;t have Avenir installed</p>&mdash; Ben Thompson (@benthompson) <a href="https://twitter.com/benthompson/status/621555208657592320" title="Ben Thompson positing to me on Twitter">July 16, 2015</a></blockquote>

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/benthompson" title="Ben Thompson on Twitter">@benthompson</a> <a href="https://twitter.com/gruber" title="John Gruber on Twitter">@gruber</a> <a href="https://twitter.com/marcoarment" title="Marco Arment on Twitter">@marcoarment</a> <a href="https://twitter.com/TheOverAnalyzed" title="TheOverAnalyzed on Twitter">@TheOverAnalyzed</a> It should default to whatever sans serif is there if no Avenir: <a href="http://t.co/WiLvy1Lvai" title="Screenshot of my CSS showing the default to Avenir">http://t.co/WiLvy1Lvai</a></p>&mdash; Anthony Craig (@ToniWonKanobi) <a href="https://twitter.com/ToniWonKanobi/status/621555527638609920" title="Me positing to Ben Thompson">July 16, 2015</a></blockquote>

Thompson was right. In modifying my CSS to call for generic font families in lieu of my webfont of choice, I am potentially allowing fonts I never approved of to be displayed on my site (e.g., in the case of the fallback to `sans serif`). That's not ideal.

My website is faster for it, but it's not *really* my website anymore.

A later tweet by Thompson seemed to suggest to me that perhaps [Cloud.typography][5] webfonts were more latency-prone and less performant than competitors' webfonts:

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi" title="Me on Twitter">@ToniWonKanobi</a> yep. Don&#39;t feel it slows my site up 97% of the time</p>&mdash; Ben Thompson (@benthompson) <a href="https://twitter.com/benthompson/status/621561134663897088" title="Ben Thompson on TypeKit webfonts on Stratechery">July 16, 2015</a></blockquote>

Thompson's blog [Stratechery][6] uses the [Freight Sans][7] font family, provided by Adobe's TypeKit webfont repository:

![Stratechery showing very little latency][8]

For [Liss Is More][9], Casey Liss uses [Lato][10], another TypeKit font:

![Liss Is More, with relatively no latency as well][11]

### Further Experimentation, Lazy Style

Yesterday afternoon, I thought some more about my alternatives to Cloud.typography. I decided to do a preliminary search on 'Hoefler's webfonts versus Adobe's'. The very *first* [DuckDuckGo][12] result was a [post][13] by Chris Bowler, who had this to say about Hoefler's [then] newbie webfont foundry:

> Overall, Typekit is a slightly easier to use service. Both offer great fonts, decent pricing, and are technically sound. The primary reason a designer would use Cloud.typography is when he/she absolutely needs to use a H&FJ font in a design. Otherwise, the options lean toward Typekit.

Bowler wrote this post in 2013, right as Hoefler was launching its webfont service.[^2]

Bowler had nothing to say about latency, probably because the service hadn't been live long enough to properly evaluate.

In that same post, Bowler linked to three websites, all of which helped beta-test Hoefler webfonts before Cloud.typography went live: [kottke.org][14], [Rands in Repose][15], and [SimpleBits][16].

And of course I checked out their source code as well.

<figure>
	<img src="https://d.pr/i/1k8Wv+" alt="kottke.org source" title="kottke.org source">
	<figcaption><a href="http://kottke.org" title="Jason Kottke">kottke.org</a></figcaption>
</figure>

<figure>
	<img src="https://d.pr/i/14hQq+" alt="Rands in Repose source" title="Rands in Repose source">
	<figcaption><a href="http://randsinrepose.com" title="Michael Lopp's blog, Rands in Repose">Rands in Repose</a></figcaption>
</figure>

<figure>
	<img src="https://d.pr/i/11Gtm+" alt="SimpleBits source" title="SimpleBits source">
	<figcaption><a href="http://simplebits.com" title="SimpleBits source">SimpleBits</a></figcaption>
</figure>

Pay close attention to the timeline view. Look [familiar][17]? Yes, that's *latency* you see, found in two of the three sites that beta-tested Hoefler webfonts. Notice anything else? There is relatively *no* latency for SimpleBits, which *now* uses TypeKit for the webfont instead of Hoefler.

Compared to TypeKit, things weren't looking good for Cloud.typography.

### A Chance Meeting

A couple of days ago, a patient of mine[^3] ended up being one of those typical web design / developer / entrepreneur-types. We started talking non-dental things like iOS and OS X, and after the conversation included the typical Apple blogosphere heavyweights like [Gruber][18] and [Marco][19], we talked a bit about webfonts.[^4] After the "exam" was completed, I went back to my office. And like any [good] aspiring web developer, I snuck a peak at his website's source code. He was using [Google Fonts][20].

Before the girls up front checked him out, I stopped by to pick his brain one last time. I asked him what he thought about the Google Fonts webfonts, and whether he had ever experienced any latency on uncached page loads. He said he never experienced noticeable lag, and that Google Fonts were a "no-brainer."

A pretty clear endorsement from a professional, wouldn't you say?

TypeKit and Google Fonts---it seems both are less latent than Cloud.typography fonts.

### Results

So what does this tell me? Well, for starters, it tells me that I'm not crazy. I'm not just imagining that my site was slower than everyone else's. Also, this tells me that I'm not completely incompetent. Apparently I haven't done anything extremely idiotic with my website design, because other websites ([ones built by way smarter people than me][21]) are equally slow to load Hoefler webfonts.

It seems that across the board, Cloud.typography has significantly more latency than TypeKit. Or, put another way: Hoefler webfonts are slower than TypeKit.

Hoefler webfonts are slower than TypeKit
<!-- {#boom .takehome} -->

And that's too bad, because Hoefler fonts really are the *best* fonts. Typography shouldn't be about WebKit rendering, or CSS wonkery, or `@font-face` hacks. Typography is about conveying a language. But as long as Hoefler webfonts are this latent, it *will* be more about those other concepts, and any language that those fonts hoped to convey will be obscured by their own sluggishness.

I can't imagine Hoefler wants his font foundry losing out to TypeKit or Google Fonts when it comes to expediency.

### Hoefler & Co.

Over the past three decades, Hoefler & Co ([prev. Hoefler & Frere-Jones][22]) has been a prolific font foundry. They have acquired a rather variegated clientele, from everyone's favorite [fruit company][23] to presidential candidates (see below). Font nerds: do yourself a solid and check out their [website][24]. 

Here are some of my favorites:[^5]

<figure>
	<img src="https://www.typography.com/images/overviewPageImages/archer-A-07.png" alt="Archer" title="Archer">	
	<figcaption><a href="https://www.typography.com/fonts/archer/overview/" title="Archer webfont">Archer</a> is a slab-serif, featured in the poster for <a href="http://fontsinuse.com/uses/7035/the-grand-budapest-hotel-poster-and-props" title="Fonts In Use: The Grand Budapest Hotel">The Grand Budapest Hotel (2014)</a>, as well as in the <a href="https://en.wikipedia.org/wiki/Martha_Stewart_Living" title="Wikipedia: Martha Stewart Living">Martha Stewart Living</a> magazine.</figcaption>
</figure>

<figure>
	<img src="https://www.typography.com/images/overviewPageImages/gotham_cell_02.png" alt="Gotham" title="Gotham">
	<figcaption><a href="http://www.typography.com/fonts/gotham/overview/" title="Gotham webfont">Gotham</a> is probably Hoefler & Frere-Jones's most well-known font. What started as GQ commission became an 'everywhere' font. Notably, Gotham was featured in <a href="https://en.wikipedia.org/wiki/Gotham_(typeface)#In_the_Obama_campaign" title="Wikipedia: Gotham in Obama's campaign">Obama's</a> <a href="http://fontsinuse.com/uses/1603/obama-2008-campaign-posters" title="Fonts In Use: Gotham in Obama's campaigns">2008 and 2012 presidential campaigns</a>.</figcaption>
</figure>

<figure>
	<img src="https://www.typography.com/images/overviewPageImages/whitney_cell_02.png" alt="Whitney" title="Whitney">
	<figcaption><a href="http://www.typography.com/fonts/whitney/overview/" title="Whitney webfont">Whitney</a> was the runner-up font for TheOverAnalyzed. If it weren't for all the <a href="/2015/7/15/ditching-webfonts#becoming-ideal" title="My piece on Ditching Webfonts, specifically the section about going back to Ideal Sans">personal history</a> associated with Ideal Sans, I probably would have chosen Whitney instead. <a href="http://fontsinuse.com/uses/2384/romney-2012-presidential-campaign" title="Fonts In Use: Whitney in Romney's 2012 presidential campaign">Mitt Romney's 2012 presidential campaign</a> featured this font.</figcaption>
</figure>

These are just a [few][25] of the [great][26] [fonts][27] [available][28] from [Hoefler][29]. And unfortunately, I can't use any of them.

### Final Thoughts

If it isn't immediately obvious, I am a big fan of the Hoefler font foundry. I wrote this post because I care about using great fonts like theirs. If by some strange miracle I am able to get Hoefler's attention, perhaps they could work on making their webfont faster? 

Since finishing TheOverAnalyzed 3.0 [last month][30], I probably view my website multiple times a day. I love seeing that [logo][31] I made in [Sketch][32]. And, up until a few days ago, I loved seeing Ideal Sans, with all its humanist influences, adorning my website. I miss it. 

I hope Cloud.typography webfonts can become less latent. As soon as they are, I'll be back. You can count on that. In the meantime, Avenir Next will have to do.

<aside class="update">

### Update: Ideal Sans is Back

August 11, 2015
<!-- {.updatetime} -->

You may have noticed that I've re-enabled my Cloud.typography webfont, Ideal Sans. Avenir Next is a great sans serif font, but it can't hold a candle to Hoefler. Yeah, the site loads slightly slower than before, but TheOverAnalyzed isn't really TheOverAnalyzed without Ideal Sans.

</aside>

[^1]: But correct.
[^2]: Hoefler <del title="This was unnecessarily snarky of me. I wasn't privy to the inner-workings of the JF/TFJ relationship, so it was inappropriate to assume some amount of shadiness on the part of JF.">conveniently</del> launched Cloud.typography *after* the split with Frere-Jones was [official][a], thereby obfuscating any potential copyright claims from Frere-Jones in the future. That [whole story][b] is just sad.
	
	**Update February 14, 2018:** According to Jonathan Hoefler, Tobias Frere-Jones officially left Hoefler & Frere-Jones in January of 2014—some ~3 months after the launch of Cloud.typography.
[^3]: I am inclined to link to his development studio, but since we met in a professional setting, [HIPPA][c] would not approve of me doing so.
[^4]: At this point, the hygienist was most displeased. As you might imagine, our nerdy conversation went on for a while, and this was impeding her from moving on to her next patient.
[^5]: This just became an Accidental <s>Tech</s> Font <s>Podcast</s> Post. If you want to skip ahead to my final thoughts about Hoefler webfonts, click [here][d].

[a]: http://typography.com/press/20140117 "Press release from Hoefler & Co about Frere-Jones departure"
[b]: https://en.wikipedia.org/wiki/Hoefler_%26_Co.#Conflict_between_Hoefler_and_Frere-Jones "Wikipedia: Conflict between Hoefler and Frere-Jones"
[c]: https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act "Wikipedia: HIPPA"
[d]: /2015/7/19/ditching-webfonts-part-ii#final-thoughts "Final section of the part 2 post in my 'Ditching Webfonts' mini-series"

[1]: /tags/Ditching%20Webfonts "My mini-series entitled 'Ditching Webfonts'"
[2]: /2015/7/12/why-the-web-is-so-slow "My piece on why the web is slow"
[3]: /2015/7/15/ditching-webfonts "First of a two-part series on ditching webfonts"
[4]: https://en.wikipedia.org/wiki/Avenir_(typeface)#Avenir_Next "Wikipedia: Avenir Next"
[5]: http://cloud.typography.com "Hoefler & Co's webfonts"
[6]: http://stratechery.com "Ben Thompson's blog, Stratechery"
[7]: https://typekit.com/fonts/freight-sans-pro "Adobe TypeKit's 'Freight Sans Pro'"
[8]: https://d.pr/i/1lonW+ "Stratechery"
[9]: http://www.caseyliss.com "Casey Liss's personal blog, Liss Is More"
[10]: https://typekit.com/fonts/lato "Adobe TypeKit's 'Lato'"
[11]: https://d.pr/i/120yX+ "Liss Is More"
[12]: /2015/3/19/you-should-use-duckduckgo "My linked post about DuckDuckGo"
[13]: http://chrisbowler.com/journal/cloud-vs-typekit "Chris Bowler compares webfonts"
[14]: http://kottke.org "Jason Kottke's blog, kottke.org"
[15]: http://randsinrepose.com "Michael Lopp's blog, Rands in Repose"
[16]: http://simplebits.com "SimpleBits and Dribbble founder, Dan Cederholm"
[17]: https://d.pr/i/138Zv+ "Speedtesting the site with everything turned back on"
[18]: http://daringfireball.net "John Gruber's personal blog, Daring Fireball"
[19]: http://marco.org "Marco Arment's personal blog, Marco.org"
[20]: https://en.wikipedia.org/wiki/Google_Fonts "Wikipedia: Google Fonts"
[21]: http://thesweetsetup.com "The Sweet Setup"
[22]: http://www.theverge.com/2014/1/17/5318206/hoefler-and-frere-jones-lawsuit "The Verge: Hoefler Frere-Jones lawsuit"
[23]: https://en.wikipedia.org/wiki/Hoefler_Text "Wikipedia: Hoefler Text"
[24]: http://typography.com "Hoefler & Co"
[25]: http://www.typography.com/fonts/knockout/overview/ "Hoefler & Co's 'Knockout' webfont"
[26]: http://www.typography.com/fonts/obsidian/overview/ "Hoefler & Co's 'Obsidian' webfont"
[27]: http://www.typography.com/fonts/sentinel/overview/ "Hoefler & Co's 'Sentinel' webfont"
[28]: http://www.typography.com/fonts/surveyor/overview/ "Hoefler & Co's 'Surveyor' webfont"
[29]: http://www.typography.com/fonts/tungsten/overview/ "Hoefler & Co's 'Tungsten' webfont"
[30]: /2015/6/1/introducing-theoveranalyzed-30 "My post introducing TheOverAnalyzed 3.0"
[31]: /images/site-title.svg "TheOverAnalyzed's title (SVG)"
[32]: https://itunes.apple.com/us/app/sketch-3/id852320343?at=1l3vx9s "Sketch on the App Store"
[33]: http://typography.com/press/20140117 "Press release from Hoefler & Co about Frere-Jones departure"
[34]: https://en.wikipedia.org/wiki/Hoefler_%26_Co.#Conflict_between_Hoefler_and_Frere-Jones "Wikipedia: Conflict between Hoefler and Frere-Jones"
[35]: https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act "Wikipedia: HIPPA"
[36]: /2015/7/19/ditching-webfonts-part-ii#final-thoughts "Final section of the part 2 post in my 'Ditching Webfonts' mini-series"