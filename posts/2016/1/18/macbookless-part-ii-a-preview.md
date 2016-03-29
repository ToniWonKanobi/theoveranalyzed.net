Title: MacBookless, Part II: A Preview  
Date: 2016-01-19 07:49  
Description: I've been here before. Might as well use it as a learning experience.  
Tags: Blogging, MacBookless  
Image: https://d.pr/i/15JLh+  

{{TOC}}

![Not even OSXDaily could fix this one][1]

### [♫ The <s>Day</s> Night that [My] MacBook Died ♫][2]

Two nights ago, during a break from experimenting with CSS variables, my MacBook Pro decided it didn't want to be my friend anymore.

I left to get a drink of water or something, only to return to a MacBook that refused to wake from sleep---or so I thought.

I did the usual: SMC reset, PRAM reset, boot into the Recovery HD and repair disk. Then I consulted with a post from [OSXDaily][3], featuring a suggestion from a reader to try and force the \`not-waking-from-sleep\` issue to resolve itself.

Tried that.

And---

*Nothing.*

Nothing I tried seem to fix the issue.

I went upstairs and docked the MacBook to my Thunderbolt Display (closed the MacBook and enabled "clamshell mode"). After the Thunderbolt cable was plugged in---wouldn't you know it?---the Thunderbolt Display sprang to life!

My Bluetooth peripherals seemed to be working okay, and my attached storage mounted. WiFi worked. Ethernet worked.

Everything worked.

(Except the MacBook's internal display, apparently. Keep reading.)

Once I determined that there wasn't anything wrong with the MacBook as far as sleep/wake was concerned, I started to get nervous. Fixing a sleep/wake issue is usually easy. I know because I've had to do it before. Typically, all it takes is a forced ("hard") reboot. Occasionally PRAM reset. Very rarely, an SMC reset. Again, this time, none of those things worked.

Retrospectively, it's unsurprising that none of the usual sleep/wake issue fixes worked (because I wasn't dealing a sleep/wake issue).

Next, I opened the MacBook's display to see if the connection to the Thunderbolt Display was still active.

Yep---still working.

Except that the MacBook display isn't---at all.

I could tell the display inverter was working, because there was a faint blue/black color to the display. That would seem to indicate that the display was indeed receiving power. What it didn't seem to be receiving was a proper signal from the GPU.

\<sad\>

![So it's come to this?][4]

After the initial stages of grief had subsided, I quickly headed over to <https://support.apple.com> to set up an authorized service repair.[^1]

Bye, bye, MacBook Pro. See you on the other side.

### What Now?

My present situation is [quite familiar to me][5]. This isn't the first time I've been [MacBookless][6]. Almost a year ago, I found myself in similar circumstances, though for different reasons.

Last year, I was holding out for the fabled "[Retina MacBook Air][7]"---the computer which would come to be known as the 2015 Retina MacBook.[^2] During that period, I used my phablet-sized iPhone 6 Plus to write a few posts on this site, as well as consume Twitter and RSS, email, and reading.

Fast forward to today: while Apple fixes my MacBook Pro, I'll be spending some more time on iOS. But this time, instead of an iPhone 6 Plus, I'm going to try out an iPad Air 2.[^3] And instead of *just* posting a blog entry or two, I want to try and `code` on iOS. I purchased a copy of Panic's [Coda for iOS][8], and I'm currently devouring their [Library][9] for knowledge.

My goal is to deploy a new blog entry *and* make a [trivial] site change via Coda---all before my MacBook Pro returns from the sanitarium.We'll see how I do.I'm not sure what this experience will mean for me. If I'm able to get [meaningful work done on an iPad][10], maybe I don't need a laptop after all?

I've thought about this a lot, but never actually *tried* it.

As far as I'm concerned, this test will either be the nail in the coffin for iOS productivity (at least for me), or a new chapter in my revolving door of Apple hardware.

[^1]: As an aside, this had to have been the most pleasant experience I have had with an Apple representative. Typically, I would have spent nearly a half hour convincing the representative that I'm *not* an idiot, that the damage isn' t my fault, and that I really, truly need help. But this time, it was nothing of the sort. This time, I couldn't have been happier with the Apple representative.
[^2]: If I had known what the 2015 MacBook would have been, I wouldn't have wasted my time. That MacBook was an unbelievably svelte hardware masterpiece, plagued by a CPU that a two-year-old iPhone could smash. What a waste.
[^3]: I went to the Apple Store today with Allison to look for a "loaner" (that costs full price!) for me to use during the time when my MacBook Pro is getting fixed. And for much bellyaching I do about the MacBook, it and an iPad Air 2 were my top two pics. Go figure.

[1]: https://d.pr/i/15JLh+ "So many other posts I should be writing right now"
[2]: https://soundcloud.com/kalo_beast/don-mclean-american-pie-the-real-song-no-cover#t=1:01 "Don McLean's 'American Pie' on SoundCloud"
[3]: http://osxdaily.com/2014/11/22/fix-macbook-pro-booting-black-screen/ "Post from OSXDaily with suggestions"
[4]: https://d.pr/i/1d7qi+ "Off to the repair shop, it goes"
[5]: /2015/3/31/macbookless "My first experience without a Mac"
[6]: /tags/MacBookless "Posts tagged 'MacBookless'"
[7]: /2015/1/10/my-thoughts-on-apples-rumored-12-inch-macbook-air "My thoughts on the then-upcoming MacBook Air with Retina display"
[8]: https://geo.itunes.apple.com/us/app/coda-for-ios-formerly-diet/id500906297?mt=8&at=1l3vx9s "Coda on the App Store"
[9]: https://library.panic.com/coda-ios/ "Panic's Library for Coda on iOS"
[10]: https://www.macstories.net/stories/ipad-air-2-review-why-the-ipad-became-my-main-computer/ "Federico Viticci on using his iPad as his main computer"