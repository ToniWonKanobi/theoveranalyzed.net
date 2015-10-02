@@ Title=Tweetbot 4  
@@ Date=2015-10-01 09:50   
@@ Description=Tweetbot 4 is finally here.  
@@ Tags=Tapbots, Tweetbot, Tweetbot 4, apps, reviews  
@@ Image=http://d.pr/i/nwJY+  

<figure>
	<a class="nohover" href="https://itunes.apple.com/us/app/tweetbot-4-for-twitter/id1018355599?ls=1&mt=8&at=1l3vx9s">
		<img src="http://d.pr/i/nwJY+" alt="Tweetbot 4 and Tweetbot 3">
	</a>
	<figcaption>Tweetbot 4 isn't a huge departure from the previous versions, but as you might expect, it's worth the nominal fee to upgrade.</figcaption>
</figure>

## Preamble

Tweetbot, the beloved 3rd party Twitter client for iOS, has been updated to version 4, and is now live on the [App Store][apple]. I have been beta-testing Tweetbot 4 for a few the past few weeks, and wanted to share my thoughts on the new version and how it compares to Tweetbot 3.

Note: all of the screenshots I've embedded of both Tweetbot 4 and Tweetbot 3 might look a little different from what you see on your screen. I have [Reduce Transparency][imore] enabled on all my iOS devices, because I think it looks better than the "[neon-vibrancy][twitter]" esthetic that Jony Ive evidently adores. I highly recommend this general iOS setting, by the way.

<h2>Contents</h2>

[[TOC]]

# iPad

It should come as no surprise to you that the most compelling reason to update to Tweetbot 4 will be for a proper iPad experience. iPad users have been largely forgotten by the once-two-but-now three-man team at [Tapbots][tapbots]. When [iOS 7 was unveiled at WWDC 2013][forbes], Tapbots iOS developer Paul Haddad knew that the [focus needed to be iPhone][imore 2]. So when Tweetbot's version 3 launched shortly after iOS 7 officially made its way to the masses, only iPhone got a new UI---iPad was stuck with the older iOS 6 design esthetic. The iOS 7+ revamp for Tweetbot on iPad has been a long time coming, and it's now finally here. 

I can't comment on the new features for Tweetbot 4 on iPad because I don't have an iPad currently. From what I've seen, though, it's everything you'd expect Tweetbot to be on an iPad.

# New Features

## Safari View Controller

This isn't so much a Tweetbot 4 feature as it is an iOS 9 feature. Still, props to Hadded for incorporating it into this newest version of his app. 

<!-- Two inline images -->
<figure class="inlinetwo">
	<a class="nohover" href="http://d.pr/i/15zyw+">
		<img class="jpg lazy" data-original="http://d.pr/i/15zyw+" alt="Safari View Controller in Tweetbot 4">
	</a>
	<a class="nohover" href="http://d.pr/i/1dFgQ+">
		<img class="jpg lazy" data-original="http://d.pr/i/1dFgQ+" alt="Preview webview in Tweetbot 3">
	</a>
	<figcaption>Tweetbot 4 uses <a href="https://developer.apple.com/videos/wwdc/2015/?id=504">SFSafariViewController</a></figcaption>
</figure>

Having the Safari View Controller in Tweetbot has changed the way I use Tweetbot. 

Previously, if I saw a link that looked like it might be worth checking out, I would auto-Instapaper it. I did this for a couple of reasons. Firstly, I used to save *way* too much to Instapaper by default in general. For whatever reason, I had this crazy idea that this was more efficient and [GTD][43folders]-ish than actually previewing the link before saving it for later reading. Eventually I got tired of opening the Instapaper app in the evenings only to find 50+ articles waiting for me. Many of those articles were small enough and ephemeral enough to have disqualified them from ever getting into my Instapaper queue. And so, after a while, I started to take the time and preview links before saving to Instapaper.

But my impatience always fought this new-founded "preview and decide whether to save" method I adopted. I would often just completely skip over links off because when I tried to preview a link, I hated waiting for the page to load (it always seemed to load slower than [MobileSafari][wikipedia]. And, moreover, the mobile view of a lot of websites was typically filled with ads. I wanted to stay away from that experience as much as possible. (Even before content blocking became a [hot topic][theoveranalyzed] in the Apple circles, I hated terrible ads obscuring the viewport.)

Now, with Tweetbot 4, I don't mind previewing links in the app. Because the Safari View Controller is ostensibly a barebones [yet full-power] version of MobileSafari itself, I don't have to worry about ads or slow loading times in Tweetbot. Ads are blocked and page loads are faster in Safari View Controller because I have a [content blocker][apple 2] [installed][purify-app], and content blocking is also functional within Safari View Controller.

Haveing Safari View Controller in Tweetbot frees me to preview a lot more links than I would have previously. And it allows me to curb my auto-Instapaper-ing of links before previewing them, cutting down on my queue at the of the day. Good stuff. 

## Activity Tab

As far as I can tell, this is the *only* new addition to Tweetbot 4. There's certainly nothing wrong with that, either. In fact, that Haddad found little more to include utility-wise in this version of Tweetbot speaks to his continual willingness to update the app in-between big Tweetbot releases---especially when [Twitter exposes a useful API][macstories].

The Activity tab is just what you'd expect: it's where you can easily view information about your activity on Twitter. 

It's broken down into two sections: Stats and Activity[^what]

Stats contains a section at the top of the viewport called Today's Activity. This section shows, in a large typeface, the number of favorited tweets, retweeted tweets, and new followees you have had for the day.

<figure class="inlinetwo">
	<a class="nohover" href="http://d.pr/i/52Oc+">
		<img class="jpg lazy" data-original="http://d.pr/i/52Oc+" alt="Tweetbot 4 Activity tab, Stats section">
	</a>
	<a class="nohover" href="http://d.pr/i/1fG8A+">
		<img class="jpg lazy" data-original="http://d.pr/i/1fG8A+" alt="Tweetbot 4 Activity tab, Activity section">
	</a>
	<figcaption>Tweetbot 4's Activity tab, showing the Stats and Activity section. Both views contain essentially the same information, just presented in a slightly different manner</figcaption>
</figure>

# UI Changes

Mark Jardine, Tapbots' designer for both iOS and Mac applications, didn't break the Tweetbot 3 mold when it came to designing a new version. Think of version 4 as what El Capitan is to Yosemite: user interface changes where they make sense, but not a complete overhall.

## Tweet Dropdown

Tweetbot 4 adds splashes of color in the Timeline where gray existed before. Pictured above, the "tweet dropdown" view. In Tweetbot 4, the dropdown has the Tapbots' characteristic blue background, whereas the previous version 3 had the darker (and more subdued) gray background. I can't say I prefer the new look over the old one, but it certinaly doesn't detract. Perhaps Jardine wanted to implement a way to help the user visualize that the dropdown view was active?

<!-- Two inline images -->
<figure class="inlinetwo">
	<a class="nohover" href="http://d.pr/i/J9lG+">
		<img class="jpg lazy" data-original="http://d.pr/i/J9lG+" alt="Tweetbot 4 Timeline">
	</a>
	<a class="nohover" href="http://d.pr/i/17snp+">
		<img class="jpg lazy" data-original="http://d.pr/i/17snp+" alt="Tweetbot 3 Timeline">
	</a>
	<figcaption>Tweetbot 4 and Tweetbot 3 Timeline tab</figcaption>
</figure>

## Tweet Composer

Just as with the tweet dropdown views described above the tweet composer view got a slight tweaking. In version 4, the top right and top left borders of the composer are now radiused. In fact, the entire defined-height "composer box" from version 3 is gone. Previously, the composer height in Tweetbot 3 would resize dynamically until the length of the tweet started to encroach on the keyboard, and after which, the composition area would simply scroll. Now, the composer text field completely blends into the viewport (except for the aforementioned radiused top borders).

<!-- Three inline images -->
<figure class="inlinethree">
	<a class="nohover" href="http://d.pr/i/15UMZ+">
		<img class="jpg lazy" data-original="http://d.pr/i/15UMZ+" alt="Tweetbot 4's compose area">
	</a>
	<a class="nohover" href="http://d.pr/i/CIzr+">
		<img class="jpg lazy" data-original="http://d.pr/i/CIzr+" alt="Tweetbot 3's compose area, pre height overflow">
	</a>
	<a class="nohover" href="http://d.pr/i/11Xpp+">
		<img class="jpg lazy" data-original="http://d.pr/i/11Xpp+" alt="Tweetbot 3's compose area, post height overflow">
	</a>
	<figcaption>Compared to Tweetbot 3, Tweetbot 4's compose tweet view blends in more with the entire viewport</figcaption>
</figure>

Generally, I think I prefer the old look over the new.

## Profile Tab

I spend a decent amount of time in my profile tab, though not for [the reason you might suspect][theatlantic]. There are times when I need to copy a link to a plain tweet or an @mention tweet. If that tweet is over 10 minutes old, it would be difficult to find in my Timeline. So I go to the profile tab and then sift through my tweets to find the one I'm looking for.[^ts]

Besides the larger profile image, the most striking change to the profile tab in Tweetbot 4 is the promotion of Recent Tweets in lieu of Recent Photos. That section still exists in Tweetbot 4, but it's relegated to the bottom of the viewport, below the Recent Tweets section. I'm not sure of the utility of this view, as I'm often more interested in recent photos shared than recent tweets. (If I wanted to do that, I could just tap on the "Tweets" button above the "Recent" section.)

<!-- Two inline images -->
<figure class="inlinetwo">
	<a class="nohover" href="http://d.pr/i/19aZw+">
		<img class="jpg lazy" data-original="http://d.pr/i/19aZw+" alt="Tweetbot 4 profile tab">
	</a>
	<a class="nohover" href="http://d.pr/i/19owr+">
		<img class="jpg lazy" data-original="http://d.pr/i/19owr+" alt="Tweetbot 3 profile tab">
	</a>
	<figcaption>The profile tab in Tweetbot 4 enlarges the users background (banner) image, and prioritizes Recent Tweets, rather than Recent Photos as seen in Tweetbot 3</figcaption>
</figure>

## Miscellaneous

Generally speaking, Jardine has seen fit to increase the padding around almost all of the text elements within the app. Recall that before last year, the largest iPhone display was 4 inches. That doesn't leave a lot of room for white space flourishes and the ideal margin and padding spacing. Overall, this is a change I greatly welcome. It makes everything feel a bit more spacious than before. And since it seems logical that most of the potential Tweetbot 4 users already have bigger iPhones, this is probably a good design decision on Jardine's part.

<!-- Two inline images -->
<figure class="inlinetwo">
	<a class="nohover" href="http://d.pr/i/fUNl+">
		<img class="jpg lazy" data-original="http://d.pr/i/fUNl+" alt="Tweetbot 4 padding">
	</a>
	<a class="nohover" href="http://d.pr/i/1h10p+">
		<img class="jpg lazy" data-original="http://d.pr/i/1h10p+" alt="Tweetbot 3 padding">
	</a>
	<figcaption>In the Search tab, the increased padding around the query options is immediately apparent in Tweetbot 4. This is in contrast to the condensed text elements in Tweetbot 3.</figcaption>
</figure>

# Gripes

## Typography

Tweetbot has never been the [twitter client for typography lovers][twitterrific]. Indeed, Tweetbot 3 featured only two fonts: [Helvetica][wikipedia 2] (the system default for every iOS release besides iOS 9), and [Avenir][wikipedia 3]. I was hoping Tweetbot 4 would add at least *one* more typeface option but alas, no.

<!-- Two inline images -->
<figure class="inlinetwo">
	<a class="nohover" href="http://d.pr/i/6g8R+">
		<img class="jpg lazy" data-original="http://d.pr/i/6g8R+" alt="Tweetbot 4 replaces Helvetica with San Francisco">
	</a>
	<a class="nohover" href="http://d.pr/i/y3Vm+">
		<img class="jpg lazy" data-original="http://d.pr/i/y3Vm+" alt="Tweetbot 4 and Helvetica">
	</a>
	<figcaption>Still just two font choices for Tweetbot 4 <span style="font-style:normal">😐</span></figcaption>
</figure>

[San Francisco][wikipedia 4] and Avenir aren't *bad* typefaces, per se. The former is the actual system font in iOS 9, and it is markedly more legible on small screens compared to Helvetica. The latter is basically the "new Helvetica," of sorts. Don't get me wrong---Avenir is a pretty typeface. When I experimented with [disabling webfonts][theoveranalyzed 2], Avenir was my first choice.[^wasnt] Still, when Tweetbot's [biggest competitor][apple 3] has *eight* different fonts to choose from, it makes me wonder why Tapbots hasn't seen fit to offer at least a couple more. Maybe that's coming? Only Tapbots knows.

# Final Thoughts

Tweetbot 4 is a worthy sucessor to Tweetbot 3. I wasn't able to outline all the iPad changes, but the fact that you can now use Tweetbot 4 on your iPad and enjoy an iOS 7+ UI makes this a great update. Admittedly, this took Tapbots way too long. In their defense, there's only one iOS developer on the team. I think the wait was well worth it for Tweetbot users with iPads. 

While I can't say that the UI changes implemented contribute significantly to the usability of the app, they don't really detract, either. For me, it's more of a wash, design-wise, with the exception of the increased padding on text elements, and the larger profile photos in the Profile tab---those changes translate especially well on the larger iPhones of late.

Tweetbot 4 is available on the [App Store][apple] at a launch price of $4.99 (the normal price is $9.99). The app is available as a bundle with Tweetbot 3 for $9.99. According to developer Paul Haddad, "Users will be able to complete the bundle of both apps by paying the difference of the price they paid for Tweetbot 3 and the bundle price. So if they purchased Tweetbot 3 at $4.99 and they go to buy the bundle, they’ll be able to complete it for $4.99." Not bad.

$5 is a very small price to pay for an app I've used [all throughout the day][daringfireball] for the past two years (the last *paid* upgrade was when Tweetbot 3 launched in 2013). 

Tweetbot is [still the best Twitter client for iOS][still], I doubt that will change any time soon.

[^ts]: Incidentally, this is also a useful way to engage in an impromptu [Tweetstorm][elischiff].
[^wasnt]: I [wasn't alone in my choice][furbo], either. 
[^what]: I'm not sure how the obvious problem of `Activity → Activity` was lost on the developer. 

[43folders]: http://www.43folders.com/2004/09/08/getting-started-with-getting-things-done
[apple]: https://itunes.apple.com/us/app/tweetbot-4-for-twitter/id1018355599?ls=1&mt=8&at=1l3vx9s
[apple 2]: https://itunes.apple.com/us/app/purify-blocker-best-simplest/id1030156203?mt=8&at=1l3vx9s
[apple 3]: https://itunes.apple.com/us/app/twitterrific-5-for-twitter/id580311103?mt=8&at=1l3vx9s
[daringfireball]: http://daringfireball.net/linked/2014/10/02/tweetbot-35
[elischiff]: http://www.elischiff.com/blog/2015/8/11/forecast-tweetstorm
[forbes]: http://www.forbes.com/sites/connieguglielmo/2013/06/10/apples-tim-cook-to-unveil-ios-7-at-wwdc-developer-fest-live/
[furbo]: http://furbo.org
[imore]: http://www.imore.com/how-reduce-transparency-menus-keyboards-more-ios-71
[imore 2]: http://www.imore.com/iterate-58-paul-haddad-tweetbot-3
[macstories]: https://www.macstories.net/ios/tweetbot-adds-support-for-new-twitter-quote-feature/
[purify-app]: https://www.purify-app.com/
[still]: http://www.theverge.com/2013/10/24/4987422/tweetbot-3-for-iphone-app
[tapbots]: http://tapbots.net
[theatlantic]: http://www.theatlantic.com/health/archive/2014/11/the-persistent-myth-of-the-narcissistic-millennial/382565/
[theoveranalyzed]: http://www.theoveranalyzed.net/2015/9/21/peace-out-peace
[theoveranalyzed 2]: http://www.theoveranalyzed.net/2015/7/19/ditching-webfonts-part-ii-hoefler-webfonts-are-prettier-but-slower#final-thoughts
[twitter]: https://twitter.com/flyosity/status/649326280874311680
[twitterrific]: http://twitterrific.com/ios
[wikipedia]: https://en.wikipedia.org/wiki/Safari_(web_browser)
[wikipedia 2]: https://en.wikipedia.org/wiki/Helvetica
[wikipedia 3]: https://en.wikipedia.org/wiki/Avenir_(typeface)
[wikipedia 4]: https://en.wikipedia.org/wiki/San_Francisco_(2014_typeface)