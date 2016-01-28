Title: MacBookless, Part III: Maybe For a While  
Date: 2016-01-27 21:22  
Description: My MacBook Pro is gone. I'm iPad-only right now.  
Tags: MacBookless  
Image: https://d.pr/i/11rBu+  

*In what could only be described as a series of strange and <s>un</s>fortunate events, I am still Mac\[Book\]less.*
<!-- {em:.topstory} -->

![It's not that bad, after all.](https://d.pr/i/11rBu+ "iOS full-time right now")

I [recently posted](/2016/1/25/macbookless-part-iib-adventures-with-an-ipad-part-i "My post about my MacBook Pro returning") about my MacBook Pro returning from Apple's Repair Center. Convinced that I would soon be the proud new owner of a "cheese grater" Mac Pro, I hurriedly snapped some pics with my iPhone, trendy-ized them with [VSCO](https://itunes.apple.com/us/app/vsco/id588013838?mt=8&uo=4&at=at=1l3vx9s "VSCO on the App Store"), and placed my MacBook Pro on eBay.

It sold in about an hour.[^1]

My "[cheese grater](http://www.macworld.com/article/2057233/where-to-buy-an-old-mac-pro.html "Macworld piece discussing the 'cheese grater")" desires were mostly inspired by Tapbots's [Paul Haddad](https://twitter.com/tapbot_paul/status/690782158898626560 "Paul Haddad's response to me on Twitter"), who recently upgraded his 2009 dual-socket Mac Pro with a couple of [6-core Intel Xeon X5675](http://www.everymac.com/systems/apple/mac_pro/specs/mac-pro-twelve-core-3.06-mid-2012-westmere-specs.html "EveryMac piece discussing these CPUs")'s, transforming that [~7 year old machine](http://browser.primatelabs.com/geekbench3/search?q=model:%22Mac%20Pro%20(Mid%202012)%22%20platform:%22Mac%22%20processor:%22Intel%20Xeon%20X5675%22%20frequency:3070%20bits:64 "Cheese grater performance on GeekBench") into one having roughly 84% of the multi-core performance of a current "[trash can](http://browser.primatelabs.com/geekbench3/search?q=model:%22Mac%20Pro%20(Late%202013)%22%20platform:%22Mac%22%20processor:%22Intel%20Xeon%20E5-2697%20v2%22%20frequency:2700%20bits:64 "GeekBench scores for 'trash can' Mac Pro's")" Mac Pro's (roughly 27,000 on GeekBench's 64-bit benchmark).

I've always wanted one of those older towers. All those neat compartments, easy to access, arranged so tidily. Those Mac Pro's (and Power Mac G5's before) were some of the finest examples of pre-iPhone, pre-white-room Jony Ive design.

Moreover, I love the idea of breathing new life into an old machine. For $1500, I could source new CPUs, a new graphics card, a PCIe SSD, and for kicks, maybe some 3.5" platter drives, set up with software RAID-0 as a scratch disk. How neat is that?

Finally, after it was all said and done, who wouldn't want multi-threaded performance like that?

Well, Turns Out&trade; it's not quite that simple.

After hours of research on several popular benchmark websites, as well as advice from a few [popular](https://marco.org/2014/10/16/retina-imac-vs-mac-pro "Marco's advice for iMa vs Mac Pro") [bloggers](http://www.anandtech.com/show/7603/mac-pro-review-late-2013/4 "Anand on the Mac Pro vs iMac"), I've discovered this:

*For whatever multi-threaded performance the Mac Pro's gain with 12-core chipsets, they give that up and more in single-threaded performance.*
<!-- {.takehome} -->

It's even more true for the older Mac Pro's than the newer ones.

In other words, although Handbrake and other OpenCL applications would gladly leverage all 12 cores, the vast majority of applications on OS X do *not* benefit from multiple cores.

(This is why the 6-core Mac Pro's outperform the 8-core's in GeekBench single-core tests, and similarly, this is why the 8-core's outperform the 12-core's in the same single-core tests.)

So I don't think I'll be getting my "cheese grater" any time soon---at least not for my primary computer.[^2]

What to do?

As much as I like my new iPad, I still need a Mac. Neither of my websites have traditional web interfaces, and both rely heavily on the command line for deployment.

Because a traditional file system is not exposed on iOS, there is no true command line experience to be had either.

As far TheOverAnalyzed goes, because Camel is a dynamic/static combination blogging engine, even [Coda](https://itunes.apple.com/us/app/coda/id500906297?mt=8&uo=4&at=at=1l3vx9s "Coda on the App Store") has a hard time previewing the website. So while I can write and deploy posts just fine with the Heroku web interface from my iPad, making HTML or CSS changes isn't particularly easy.

The same is true for my dental website, even though it is hosted with GitHub Pages. Making HTML or CSS changes via GitHub Pages is *slightly* easier than with Camel, because at least GitHub has a file system-based web interface, allowing me to `commit` changes and deploy from there. But, like Camel, it's not really easy to do so.

More than the difficulty and time required to post/make changes to my website, what bothers me more is that **none of the changes made to my websites can be previewed before publishing.** In other words, if I want to change the CSS, I can't really preview the changes unless I deploy. Coda might have a way to preview a dynamic website, but for the life of me, I can't figure it out.

I need a Mac.

I just don't know which one to get.

Here are a few options I've been considering:

1. Get a 5K iMac

	It would be nice to have a big Retina display, that's for sure. That said, I can't help but feel like an iMac is so ...*consumer.* Yes, in reality, I'm nothing more than a consumer. I don't do <i>de facto</i> app or web development, I'm not a professional photography or videographer, and I don't do a bunch of enterprise-level 3D work. I am about as far from professional as one could be.
	
	I *should* just be happy with getting an iMac. It's the fastest single-threaded machine Apple currently sells, and it's multi-core performance is far from shabby.
	
	And yet, I just don't want an iMac.
	
	Hard to buy something I just don't want.
	
2. Get a "cheese grater" Mac Pro

	I could do the fun experiment, and if/when it sucks for single threaded stuff, sell it and end up back where I am today.

	It certainly wouldn't be the first time I've switched up my Apple gear to try something new.
	
3. Do nothing.
	
	(At least not right now.)
	
	I can continue using my iPad for the time being. 
	
	If I need to use the Web Inspector or make site changes, I can steal Allison's MacBook after she goes to sleep.
	
	Although Mark Gurman hasn't yet told us so, it sure seems like Intel should have some new Skylake processors ready for a 15" (13" too?) hardware revision for the MacBook Pro lineup.
	
	If those hardware changes come with Thunderbolt 3, Apple could release a standalone 5K display alongside the new Pro MacBooks.
	
	If---*if*---Apple did all that, I'd be content with that setup as well.
	
	I'm not sure why that is more appealing than an all-in-one like the iMac, but there it is.
	
***

The ideal setup would be one Mac and one iOS device. Having two Mac's and keeping them in sync (even in the days of Dropbox), is a pain.

That's why I like having an iPad as my mobile device---I don't have to worry about local copies of repositories, etc. Why? Because on iOS, I couldn't have local copies of repositories if I wanted them.

Sometimes iOS is constraining.

Specifically:

* GitHub makes *some* things easier, but not everything.
* Yes, iOS isn't as accommodating to Terminal-dependent web developers like myself
* And yes, iOS sucks at multitasking
* And yes, iOS 8's extensions are still wonkey as heck sometimes

But for all iOS's shortcomings, I can now attest to the *focus* provided by iOS's full-screen app approach. It really does help keep me less distracted.

* Before iOS 9, iOS was almost *too* focused (in my opinion)
* Now, with Split View, users have an in-between
* It's still focused, because apps are still full-screen. But now, if the user chooseS, they can have *two* apps, full-screen, side by side.

	That's pretty cool.

So for now, I can hop along iOS-only. The novelty of the OS is still there, so I can at least ride that out for a bit longer.

Will see how I feel after I get a few more days under my belt.

Maybe I'll be getting that iMac after all?

[^1]: My Thunderbolt Display, no doubt hampered by the 5-year old technology therein, has had several bites, but nothing official as of yet.
[^2]: But who knows. In the future, maybe I'll do a "cheese grater" 12-core build, and have that be a dedicated Handbrake machine / media server.