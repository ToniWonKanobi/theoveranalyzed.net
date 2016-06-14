Title: Some Thoughts on WWDC '16 and Apple's Design Inconsistencies 
Date: 2016-06-14 10:36    
Description: Mostly incremental changes, and lots of nicer buttons, but there's more to do.  
Tags: Apple  
Image: /images/ios10borderraddi.png  

*Apologies for the lack of posts these past few weeks. We are currently living out of a suitcase, waiting to move into our new house. There are lots of articles in my Instapaper "TheOverAnalyzed" folder---ones I'm sure to share here over the next few weeks. As always, thanks for reading*
<!-- {.topstory} -->

![SF Mono is real.][1]

### watchOS 3

"Feels like a whole new watch," says the Apple [headline][2]. And that's a pretty accurate take on what's changed in watchOS 3.

#### Faster Apps

Yes, there are still apps. And yes, nobody really uses apps on watchOS. But now that apps and glances are part of the same processes, apps now launch faster. "Seven times" faster, according to Kevin Lynch. Not bad.

#### Revised User Interface

Highlights:

* The [Contacts][3] button has been re-mapped to at least one other more useful function

* Like on iOS 7+, swiping up from the bottom of the display invokes Control Center

* Faces can now be changed via swiping left/right

Overall, watchOS 3 is closer to what we all hoped for and expected with Apple Watch. Utilizing the same 1+-year-old hardware, Apple seems to have managed to turn one of their most sluggish and frustrating devices into a less frustrating one. Let's hope the demonstrations are representative of actual end-user reality.

### tvOS

Nothing big here besides Dark mode (Finally&trade;). Also, Single Sign-on, so folks can avoid that terrible screen that asks for an authorization code from a cable provider. Siri is better. That's about it.

### macOS Sierra

#### RIP "X"

Yes, the [rumors][4] are true: [<s>Mac</s>][5] OS X no longer exists---macOS has arrived.

I'm not as opposed to the lower-case "M" as others, and it certainly fits better alongside Apple's other platforms.

<figure>
	<a href="http://images.techhive.com/images/article/2016/06/wwdc16-mac-keynote-100665978-orig.jpg">
		<img src="/images/macos.jpg" alt="Capture of WWDC '16 keynote slide showing the oddity of OS X" title="Capture of WWDC '16 keynote slide showing the oddity of OS X">
	</a>
	<figcaption>This slide says so much, doesn't it? (From Macworld)</figcaption>
</figure>

#### Optimized Storage

Like iCloud Photo Library, but for your whole Mac. This will be useful. I'm just glad Apple has upped the included iCloud storage for all iCloud accounts's. Oh wait---nevermind.

#### APFS

This wasn't even mentioned in the keynote, but it's a pretty big deal: Apple has a new filesystem! [HFS+][6]'s days are numbered, because Apple Filesystem (APFS) is [coming soon][7].

From the link above:

> Apple File System provides several new features, including optimization for **Flash/SSD storage** [emphasis added], copy-on-write metadata, space sharing, cloning of files and directories, snapshots, fast directory sizing, and atomic safe-save primitives.In case you were wondering, HFS+ was designed in the era of [floppy disks][8].

#### Siri

I'm not sure why they used a colored icon in the Menubar:

![Why, Apple? Why?][9]

### iOS 10

Let's get some features out of the way:

* Messages
	* Rich links (like Slack)
	* Handwriting recognition (Like Newton)
	* Text effects (like Snapchat)
	* Emoji improvements (like every other mobile platform)
	* Apps (why not?)
* Maps
	* They're so much nicer looking now
* Lock Screen
	* Raise to wake (so 6s users can finally see their Lock Screen notifications again)
	* Widgets (like Android)
	* Raise to wake (like Android)
	* Rich notifications (like Android)
* Deleting default apps (not mentioned, but oh, so nice!)
* Swift Playgrounds
	* No Xcode required!

... and more.

For the most part, iOS 10 is stereotypical Apple. "[Iteration, Not Revolution][10]," I've called it. The improvements made to Apple's most important platform aren't game-changing. Pessimistically, they are merely catch-up measures. "Android has had these features for years," I can hear the anti-Apple'ers saying.

Optimistically, it's Apple doubling-down on what makes them great. If it seemed like they spent over half of their iOS 10 portion of the keynote talking about Messages changes, that's because they did. Messages is Apple's most used app, according to Craig Federighi. Why *not* bolster Messages's position on user's Home Screens? Why should Apple let WhatsApp and Snapchat have all the fun? This is Apple at it's best.

***

### iOS 10's Design Inconsistencies

Most of what I wanted to discuss regarding iOS 10 concerns Apple's UI and design choices. Generally speaking, some of said discussion might apply to their other platforms (since watchOS and tvOS are direct descendants of iOS). Still, iOS is Apple's baby. It's the operating system powering Apple's cash cow, the iPhone. It's their most important platform, so I'll focus on iOS.

iOS is where Apple makes paradigm shifts. It's where Apple makes big changes. It's where Apple <s>tests the waters</s>, and where Apple tells the world what UI should be.

And for the 10th version of iOS, Apple has shown everyone that their UI is a lot of pizazz, with seemingly little thought and polish.[^1]

#### Bold is Back, But It's Awkward

"Big. Bold. Beautiful," the heading says. Apple's marketing copy wasn't haphazardly chosen: it epitomizes a UI shift in Apple. No, the UI shift isn't even close to what [Eli Schiff][11] would want, but it's an interesting change, nonetheless.

![Bold is cool again.][12]

There was a time when Helvetica Neue Ultra Light was all the rage. If Apple's use of what appears to be an Ultra Bold version of San Francisco is any indication, ultra light is out, and bold is in.

Say what you will about the contrast between their Ultra Bold headings[^2] and body text---it certainly looks better than feather-weight sans serifs set against a white background. Still, I can't help but wonder why only two apps feature the new design (Apple Music and Apple News). Are Eddy Cue's design lieutenants operating in a vacuum, separate from the rest of the iOS designers? Bold may be back, but right now it's used so infrequently across iOS 10 that it's just awkward.

#### Buttons are Back, But Their Corners Are Confused

At WWDC '13, Apple launched iOS 7. That very first beta was *drastically* different from anything we had seen before on iOS. Gone were text shadows, gradients, and other visual affordances. Text was the new button; there were no buttons.

[Over the course of that summer][13]---and over the next three years, really---Apple seems to have slowly added-back the previously-removed visual affordances.

Let's talk about buttons.

I like the new buttons. I like "rounded rect's" as much as the next wannabe designer. I like the added "[Depth][14]."

I'm not alone:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I like these buttons that look like buttons in iOS 10.</p>&mdash; John Gruber (@gruber) <a href="https://twitter.com/gruber/status/742418667929894912">June 13, 2016</a></blockquote>

What I don't like is that the border radii of the buttons are different from the border radii on the Lock Screen notifications (widgets), etc. The border radii are not consistent across the OS:

<figure>
	<a href="/images/ios10borderraddi.png">
		<img src="/images/ios10borderraddi.png" alt="Comparing iOS 10 elements and their border radii" title="None of these border radii is like the other">
	</a>
	<figcaption>None of these border radii is like the other</figcaption>
</figure>

I can't imagine defining a border radius in Objective-C or Swift as any more difficult than how web designers use the `border-radius` property in CSS. And if iOS developers are using variables, why not make it easy on themselves and with one declaration, set a border radius that's used everywhere?

There might exist a situation where different border radii are appropriate, but for the life of me, I can't think of any. 

#### Padding Isn't Back at All

Refer to this mockup illustrating the padding ("gutter") inconsistencies in the new Maps app:

[![Why is the padding around the top and bottom touch elements not consistent?][15]](/images/paddingexample.png)

Look at the padding left of the "9:49" arrival time. Next, look at the padding left of the "Gas Stations" icon. Why are they unequal?

Moreover, why is there less *vertical* padding around the top bar elements compared to the vertical padding around all the location icons in the bottom section?

Finally, why is there almost *no* padding around Lock Screen notifications?

I could go on, but I'll spare you.

***

A [friend][16] recently asked if it's ever exhausting---following lots of opinionated design critics and being privy to their whining (let's call it what it is). My immediate answer was "No, because I agree with them 100%." I still stand by my answer, but I'll expand on it: **if there's anyone to blame for such vocal and voracious design criticism aimed at Apple, it's Apple itself!**

*They* made the original Macintosh. *They* were the ones with incredible attention to detail (so much so that they made the inside of the Macintosh look as good as the outside).

*They* gave us revolutionary product after revolutionary product. 

All the while, design was foremost on their minds.

While their hardware [continues to impress][17], Apple's software design ethos has become muddied and incongruent.

Some say that this new breed of "design criticism" is unhelpful. Instead of constructive, it's just overly negative, they say. But I am certain that if weren't for such design critics, iOS 10 would not look as good as it does.

That's right: iOS 10 *does* look better than iOS 7-9. Despite my criticism, iOS 10 is absolutely a continuation of the positive trend towards a better UI. If we can compare new versions of iOS to app development, iOS 7 was an alpha. iOS 8 and 9 were both betas. iOS 10 is the public beta. I have no doubt that iOS 11 (or even a point release of 10) will be the version of iOS we've been waiting for.

[^1]: I take that back: since iOS 7, Apple's clearly exhibited UI polish with their animations.

	Generally speaking, their UI animations don't really make sense when observed across the whole of iOS. And sometimes it's hard to understand *why* they chose one animation over another. Other times, it's not clear *why* they chose different animations for similar user interactions.
	
	But what *is* clear is that Apple developers really know how to leverage `CoreAnimation` to make some pretty awesome animations. iOS 10 is no exception to this rule. I love all the new bouncy and friendly animations accompanying many of the new Snapchat-like Messages features.
	
	I believe *this* is what Jony Ive's design direction is all about. I just wish they would apply the same level of thoughtfulness that they do to animations, to the design language of the OS as a whole.
[^2]: It reminds me of [Bloomberg][a].

[1]: /images/wwdc2016.jpg "Apple's hero image for WWDC '16"
[2]: https://web.archive.org/web/20160613201813/http://www.apple.com/watchos-preview/ "Snapshot of current watchOS 3 page from apple.com"
[3]: https://web.archive.org/web/20150407002140/http://www.apple.com/watch/new-ways-to-connect/ "Apple copy on 'New Ways to Connect' with Apple Watch from September 2014"
[4]: http://daringfireball.net/linked/2011/06/15/os-x "John Gruber on the macOS rumor"
[5]: http://www.macrumors.com/2012/02/16/apple-officially-drops-mac-name-from-os-x-mountain-lion/ "MacRumors piece on Apple's removal of 'Mac' for Mountain Lion"
[6]: https://en.wikipedia.org/wiki/HFS_Plus "Wikipedia: HFS"
[7]: https://developer.apple.com/library/prerelease/content/documentation/FileManagement/Conceptual/APFS_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40016999-CH1-DontLinkElementID_27 "Apple Developer page for APFS"
[8]: https://en.wikipedia.org/wiki/Floppy_disk "Wikipedia: Floppy disks"
[9]: /images/siricolor.jpg "Screenshot of Apple image showing the colored Siri Menubar icon"
[10]: /2015/11/3/apple-tv-4-iteration-not-revolution "My post on Apple TV 4"
[11]: http://www.elischiff.com "Eli Schiff's website, full of warranted and occasionally controversial design criticism"
[12]: /images/ios10.jpg "Hero image of Apple's iOS 10 preview page"
[13]: https://twitter.com/Sentry_NC/status/420772731987034113 "Tweet from @Sentry_NC showing the changes in button shapes during the very first versions of iOS 7"
[14]: https://twitter.com/Sentry_NC/status/742451147349188608 "@Sentry_NC tweet making light of Apple's return to 'Depth'"
[15]: /images/paddingexample.png "Padding inconsistencies in the new Maps app in iOS 10"
[16]: https://twitter.com/johnmyankee "John Yankee on Twitter"
[17]: https://sixcolors.com/post/2016/05/2016-macbook-review/ "Jason Snell review the MacBook (Mid 2016)"

[a]: /images/bloomberg.png "Screenshot of what an article on Bloomberg looks like in June of 2016"