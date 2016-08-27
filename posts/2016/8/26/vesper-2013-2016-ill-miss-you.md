Title: Vesper (2013–2016): I'll Miss You  
Date: 2016-08-27 08:45  
Description: Where am I going to get my Ideal Sans-laden notes fix now?  
Tags: Apps  
Image: /images/notesapps.png  

![One of these three is much nicer than the others. Also, one of these three is going bye-bye.][1]

You may have heard that the iOS notes app famously associated with John Gruber, Brent Simmons, and Dave Wiskus---[Vesper][2]---has [seen its last update][3].

Indeed, Vesper's days are [coming to an end][4].

Here's a portion from Gruber's "[adieu][5]:"

> Yesterday, we announced that development was ceasing, and we’ll soon be shutting down our sync server. I am terribly sad about this. I love Vesper. I use it every day. I mean that in the present tense. I still use it. When we pull the plug on the sync server, I’ll stop, but until then it’s my go-to notes app. In my career, the only things I’ve done that I’m prouder of are writing Daring Fireball and the creation of Markdown.

There's a whole lot that could be said about *why* Vesper didn't make it, but I'm not going to talk about that. It's been hashed out in many blog posts and podcasts over the past few years, during which time the "free, with in-app purchase" model has steamrolled the entire App Store (so much so that "paid up front" apps like Vesper simply couldn't afford to compete).

Instead, I want to talk about what made Vesper so great.

But first, some explanation.

### What Makes a Vesper?

Vesper was an "opinionated" notes application, to say the least. There was exactly *one* font choice. There were tags instead of folders. There were no power user features. There was no dark mode. There wasn't a whole lot of anything. 

But I liked it because it had a spartan, yet thoughtfully-designed UI. And I suspect that's the reason most other people liked it, too.

Before I even knew what Vesper was, I was using [Simplenote][6]. Simplenote was a great notes app, because it did everything Notes.app did (but better), while removing all the annoyances of Notes.app (namely, the ghastly skeumorphic, pre-iOS 7 design touches).

In a lot of ways, Vesper wasn't nearly as effective as Simplenote: 

1. When Vesper launched, there was no sync service, so every time I would restore an iPhone, I would have to re-create notes---how stupid is that?[^1]

2. When Vesper launched, there was no iPad client.[^2]

3. Finally---and perhaps *most* importantly---there was no Mac app. So if I wanted to act on a particular note while on my Mac, I would have to try and copy the information in the Vesper note to Notes.app, and then use Notes.app on my Mac to access the content.[^3]

So why have I been using Vesper for the past three years if Simplenote was significantly more practical?

Two reasons:

1. I was offended that Simplenote had taken too many visual cues from Vesper, and decided that I didn't want to support a copycat app (especially one that directly competed with an app made by people I admired). The issue was [fairly well-known][7] in the iOS designer/developer community.

2. [Ideal Sans][8].

	I believe Ideal Sans is the most interesting [humanist sans serif][9] out there. It's suitable for most formal occasions, yet still retains a sense of playfulness that anyone can appreciate.
	
	Before my absolute love affair with Ideal Sans, and before I incorporated my favorite Hoefler & Co. typeface into my own blog, I always liked it---I just didn't know why until I got into design.
	
	Still, it was familiar to me because Marco Arment used to use it on his blog, and Instapaper featured the typeface as well.
	
	But even before all of that, *Vesper* was my gateway to Ideal Sans. Dave Wiskus wrote about their typography choices in the [Vesper blog][10].
	
I read that blog post and I was inspired: these guys had toiled away for *months*, meticulously obsessing over individual pixels of early drafts and comps. This was an app whose design was carefully considered. How could I *not* use Vesper?
	
That brings me to today.

### What's Next?

As far as I can tell, there's nothing out there that totally replicates Vesper---noting in terms of design or function. Design-wise, I don't think there's a better looking notes app out there.

Function-wise---yes---there *are* more powerful apps out there, but they are almost always *too* powerful (think Evernote). And with all that power comes the necessary code-savings, like stock `UITextView` classes instead of custom ones. That's just not pretty.

So where does that leave me?

Ironically enough, here I am, three years after ditching it for moral reasons, and my only real choice is Simplenote.

Yesterday's update added [Markdown support][11], which is a *big* reason for me to jump back aboard the Simplenote train.

Admittedly, it'll be nice to have an iOS/Mac notes app with a super fast backend and reasonably-decent UI (again).

And it's easy to suck up my pride when it's the only option.

But Simplenote is no Vesper. Not at all.

### The Future

But is there something better than Simplenote?

I don't think so---at least not yet.

I've conquered some legitimate nerd goals in the past year:

* I wrote my own front-end for this blog
* As of about six months ago, I had three other websites under my belt
* And as of *five* months or so, I've transitioned all my projects to [Jade][12] and [Sass][13] in lieu of vanilla HTML and CSS

But one nerd goal I've yet to conquer is learning iOS development. I've wanted to know how to write an iOS app since I first started listening to the [Accidental Tech Podcast][14] in 2013. But as the hosts have each said several times, the best way to learn iOS development is to *try and solve a problem*.

I can appreciate that advice: I wasn't inspired to learn front-end development until I *had* to. I needed to solve a problem that Squarespace couldn't help me with. So I learned a lot of stuff and solved said problem over the the next few months.

But before the lack of a decent notes app, I haven't had any problems with iOS apps. For a while now, I've been pretty set with my so-called *hand-crafted, indie* iOS apps. Occasionally, something new [pops up][15], and I might check it out for a while. But I always come back to my [favorites][16]. Indeed, there are [several][17] [apps][18] [on][19] my Home Screen that I [use][20] [*so*][21] [much][22] that it's almost as if using those apps is the same thing as using an iPhone in general.

Vesper's shuttering might just be the impetus I've needed.

I've got a few good ideas for a notes app, and I think there just *might* be a [small] market still out there for a well-designed notes app.

And I can learn from the failures of others. Over the past few years, those who've been paying attention know the writing on the wall: "paid up-front" apps are fading away, and the "free, with in-app purchase" route is the only practical way to be successful in the App Store.

While Swift is still fresh and new, every subsequent major version is better than its predecessor. CloudKit is more robust that ever, and could possibly obfuscate my lack of server-side, back-end knowledge. Heck, children are learning development on iPads---I have no excuse!

It's never been easier to build an iOS app.

I guess it's time to open Xcode and watch some YouTube videos?

[^1]: They eventually [added sync][a].
[^2]: In their defense: when Vesper launched, iOS 8 hadn't been unveiled, and there were no Size Classes. Before that point, the iPad app was very much *distinct* from the iPhone code.

	That said, about a year after adding sync, Q Branch released an update that [provided iPad and landscape views for Vesper][b].
[^3]: As an armchair [everything], I think their biggest mistake was not having a Mac app to go along with the iOS app. In Gruber's farewell to Vesper, he laid out two hypothetical *Shoulda, Woulda, Coulda* plans---both of which put a Mac app as the first step.

[a]: http://vesperapp.co/blog/vesper-year-one/ "Vesper blog post announcing sync"
[b]: http://vesperapp.co/blog/native-support-for-ipad-and-landscape/ "Vesper blog post announcing iPad and landscape views"

[1]: /images/notesapps.png "Screenshot of three notes apps"
[2]: https://geo.itunes.apple.com/us/app/vesper/id655895325?mt=8&at=1l3vx9s "iTunes link to Vesper"
[3]: http://vesperapp.co/blog/the-end-of-vesper/ "Vesper blog announcing the end of Vesper"
[4]: http://inessential.com/2016/08/21/last_vesper_update_sync_shutting_down "Brent Simmons announcing the end of Vesper"
[5]: http://daringfireball.net/2016/08/vesper_adieu "Daring Fireball post saying goodbye to Vesper"
[6]: http://simplenote.com "Simplenote"
[7]: http://www.techmusings.me/techmusings/software-review-simplenote-by-codality "Review of Simplenote, making note of it's uncanny resemblance to Vesper"
[8]: http://www.typography.com/fonts/ideal-sans/overview/ "Ideal Sans"
[9]: https://en.wikipedia.org/wiki/Sans-serif#Humanist "Humanist sans serifs"
[10]: http://vesperapp.co/blog/how-to-make-a-vesper/ "Vesper blog post about how they designed the app"
[11]: https://simplenote.com/2016/08/25/markdown-added-in-latest-ios-app-update/ "Simplenote blog post adding Markdown support"
[12]: http://jade-lang.com/ "Jade language"
[13]: http://sass-lang.com "Sass"
[14]: http://atp.fm "ATP"
[15]: http://blog.supertop.co/post/148985792112/castro-2-is-now-available "Blog post describing the launch of Castro 2"
[16]: http://overcast.fm "Overcast"
[17]: http://tapbots.com/tweetbot/ "Tweetbot for iOS"
[18]: http://reederapp.com/ios/ "Reeder for iOS"
[19]: https://www.instapaper.com/iphone "Instapaper for iOS"
[20]: http://www.pixiapps.com/ecouteios/ "Ecoute for iOS"
[21]: http://junecloud.com/software/iphone/deliveries.html "Deliveries for iOS"
[22]: https://darksky.net/app/ "Dark Sky for iOS"