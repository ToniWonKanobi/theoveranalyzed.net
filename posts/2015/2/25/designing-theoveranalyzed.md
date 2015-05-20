@@ Title=Designing TheOverAnalyzed  
@@ Date=2015-02-25 08:00  
@@ Description=I walk through my process of tweaking Squarespace to achieve my desired web design esthetic for TheOverAnalyzed.  
@@ Tags=hacking Squarespace    

## Contents
* [Introduction](#introduction)
* [Preamble](#preamble)
* [History](#history)
	* [From The Beginning, I Was A Tinkerer](#from)
	* [Things Got Hairy](#things)
	* [Are You Kidding Me? Of Course I Didn't Settle](#kidding)
	* [Now What Do I Do?](#nowwhat)
	* [Trying Some Things](#trying)
	* [Another Template Change](#another)
	* [Sidebar Time](#sidebartime)
	* [So That's What That Does](#thats)
	* [Starting Over](#starting)
* [Doing It The Right Way](#doing)
	* [One More Thing](#one)
* [The Logo](#thelogo)
	* [Pixelmator](#pixelmator)
	* [If At First You Don't Succeed](#ifat)
	* [Sketch](#sketch)
* [Finally](#finally)
* [Conclusion](#conclusion)

<h1><a name="introduction">Introduction</a></h1>
Over the past 48 hours, I have become acquainted with a new friend. 

That friend is [Sketch](http://bohemiancoding.com/sketch/), a wonderful design application for OS X, created by Bohemian Coding. 

More on this later.

<h1><a name="preamble">Preamble</a></h1>
When I launched TheOverAnalyzed last year, I knew nothing about the following:

* HTML
* CSS
* JavaScript
* Web Design

Now, a year later, I still know nothing relatively nothing about the aforementioned topics. But, *I know a whole lot more than I did a year ago.*

<h1><a name="history">History</a></h1>
[Squarespace](www.squarespace.com) <s>is the all-in-one</s>[^1] made building a website insanely easy. Everything everyone has said about it has been pretty accurate in my experience. Typically, the biggest barrier to creating something is the lack of knowledge surrounding the framework upon which you might build. For making websites, that translates to the biggest barrier being a lack of knowledge regarding HTML, CSS, JavaScript, and Web Design.[^2] Squarespace takes care of all that. With all of that out the way, I was able to focus on content, which, at the end of the day, is all that matters. 

<h2><a name="from">From The Beginning, I Was A Tinkerer. 
</a></h2>
I started with the [Native](http://native-demo.squarespace.com/) template, which was, like most templates, insanely sparse and clean-looking. It had a centered main content format, and by default, the top navigation was placed underneath the logo image, which was so much more pleasing than on the top right, which was the format of some of the other templates.

Here's the Native demo page:

<figure>
	<img src="http://d.pr/i/196ta+" alt="native" width="80%" />
	<figcaption>The stock Native template</figcaption>
</figure>

Eventually, I noticed that the way Native implemented [blockquotes](http://d.pr/i/1cxvQ+) was kind of wonky. After some initial hesitation,[^4] I decided to switch to the [Avenue](http://avenue-demo.squarespace.com) template, which was a lot like Native, but had [blockquotes](http://d.pr/i/1lKIz+) like I wanted.

Here's the Avenue demo page: 

<figure>
	<img src="http://d.pr/i/rxBP+" alt="avenue" width="80%" />
	<figcaption>The stock Avenue template</figcaption>
</figure>

And here's a screenshot[^3] of my site from just a couple of weeks ago, before the first big design change:

<figure>
	<img src="http://d.pr/i/1cvPC+" alt="caption" width="80%" />
	<figcaption>TheOverAnalyzed with the Avenue template (Version 1)</figcaption>
</figure>

<h2><a name="things">Things Got Hairy 
</a></h2>
I had been wanting to make a few changes to the way my posts behaved. For instance, I wanted an arrow (→) to follow the title on Linked posts, and I also wanted a permalink (∞) to follow the the Linked post's date. There didn't seem to be a way to do that from within the Configuration section. I looked around for some ideas, and found a [post](http://duner.webfactional.com/blog/squarespace-permalinks) discussing the <code>{.passthrough}</code> string. That post offered a great solution, but the author noted that the string was only exposed to Squarespace users with the Developer Platform turned on.

Huh. I had heard on a podcast[^5] that Squarespace had a Developer Platform. Interesting. I wondered what that was all about, so I visited the Developer landing page. It seemed pretty straightforward? 

That is, until I got to the [part](http://developers.squarespace.com/initial-setup/) that mentioned [Git](https://en.wikipedia.org/wiki/Git_(software) and [SFTP](https://en.wikipedia.org/wiki/SFTP). 

Uh, no thanks. 

I had used GitHub a bit last year when I was [contributing](https://github.com/andreaslarsen/habesha/issues?q=is%3Aissue+is%3Aclosed) to a [repository](https://github.com/andreaslarsen/habesha) that contained jailbreak icon themes. I would find the BundleID for the app that needed theming, as well as the filenames of the icon sources. I would then find the iTunes Artwork using this [site,](http://bendodson.com/code/itunes-artwork-finder/index.html)[^6] and then parse all that information into a new Issue for the designer to make the icons for the theme. Finally, I would use AFC to transfer to my iOS device, via USB, the themed icon sources to their respective folders in the app bundle and insure that they were showing up properly.

But the idea of using Git or SFTP seemed to require much more nerd knowledge than I had at the time.

So what did I do? 

I forgot about it, and just settled on not having Linked posts behave like I wanted.

<h2><a name="kidding">Are You Kidding Me? Of Course I Didn't Settle  
</a></h2>
I did what have always done when it comes to nerdery: I took the plunge. I turned on the Developer Platform. 

<h2><a name="nowwhat">Now What Do I Do? </a></h2>
I wasn't sure whether Git or SFTP was the way to go, so I started with Git (due to my previous experience with GitHub). Turns Out™ that using Git involved using Terminal to push changes to the server, which seemed a little too [John Siracusa](http://hypercritical.co) [Mac OS 9](https://en.wikipedia.org/wiki/Mac_OS_9) for me. 

So SFTP it was. 

Interestingly, I wasn't sure how to use SFTP (or [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol)) either. So I checked in with the great teacher of our time, YouTube, and found a real [gem](https://www.youtube.com/watch?v=HzravxTgTe4). This guy basically spelled out how to use Espresso to manipulate my site in any way I wanted. 

How cool.

<h2><a name="trying">Trying Some Things </a></h2>
The first changes I made, like most 'first times,' were disastrous. I completely broke the site. I accidentally made changes to <code>global.less</code> without realizing what I had done. Unsure how to fix things, I turned off Developer mode in Squarespace, which reverted the site back to how it was before turning Developer mode on. Whew. Everything was fixed. Then I turned Developer mode back on, and tried again. 

I quickly familiarized myself with `blog.list` and `blog.item` and was able to make the arrow and [permalink](/2015/2/1/permalinks-in-squarespace) changes like I wanted (and much [more](/2015/1/31/bigfoot-footntes-in-squarespace). 

Here's a screenshot of Permalinks Version 1.0:[^7]

<figure>
	<img src="http://d.pr/i/1lSZU+" alt="Permalinks Version 1" width="80%" />
	<figcaption>Permalinks Version 1.0</figcaption>
</figure>

<h2><a name="another">Another Template Change</a></h2>

Things were looking [how I wanted](http://d.pr/i/1cvPC+). Still, I wasn't quite satisfied. 

One [stretch goal](http://www.forbes.com/sites/stevedenning/2012/04/23/in-praise-of-stretch-goals/) I have had since the beginning is to be sponsored by [The Deck](http://decknetwork.net/). I have seen their ads on [Daring Fireball](www.daringfireball.net), [Marco.org](www.marco.org), [Six Colors](www.sixcolors.com), and [The Loop](www.loopinsight.com). *These are the blogs I aspire towards,* so of course I wanted to be like them.

And while I realized that this was so far off, I wanted to be ready.

Being ready meant being able to implement the ads as soon as Jim Coudal knocks on my door.[^8]

Problem was that I couldn't seem to envision a place for the ads on my current site. Avenue, just like Native before it, featured centered content. Where would The Deck ads go? Unlike almost every other terrible banner ad, The Deck ads are confined to a relatively small, square block. I couldn't place them at the very top of the site, because they would take a way from the logo. I also didn't think it would be fair, traffic-wise, to place them at the bottom of the site, say, above the ©.

Most of the other sites sponsored by The Deck had a sidebar.

Naturally, I needed a sidebar. 

I noticed [Above Avalon](http://aboveavalon.com) a few weeks ago, and loved the non-scrolling (`position: absolute`) sidebar. I also loved that the site was built on Squarespace. *This meant I could easily implement a sidebar on my own site.*

Here is Niel Cybart's Stratechery-esche Above Avalon:

<figure>
	<img src="http://d.pr/i/11RRa+" alt="aboveavalon" width="80%" />
	<figcaption>Above Avalon's homepage</figcaption>
</figure>

<figure>
	<img src="http://d.pr/i/19QPN+" alt="caption" width="80%" />
	<figcaption>Look at that <code>.main-content</code> scroll</figcaption>
</figure>

<h2><a name="sidebartime">Sidebar Time</a></h2>

I looked around the templates and discovered that Cybart had implemented a relatively unchanged version of [Wells](http://wells-demo.squarespace.com/). Wells is a great template for photographers or graphic designers, as it really makes content like pictures or graphics or videos the star of the web view. 

Here is the Wells demo:

<figure>
	<img src="http://d.pr/i/1bItW+" alt="wells" width="80%" />
	<figcaption>Wells template</figcaption>
</figure>

<figure>
	<img src="http://d.pr/i/Q7z1+" alt="caption" width="80%" />
	<figcaption>And here is TheOverAnalyezd with Wells (Version 1.0 of the site)</figcaption>
</figure>

Note that the content was pushed all the way to the left of the window. This wasn't terrible, but it also wasn't [ideal](http://d.pr/i/14BaR+). I wanted the content to be basically centered, regardless of how big the window was. 

After consulting with the [Squarespace Answers Forum](answers.squarespace.com), I was able to move the content over to the center, more or less:

<figure>
	<img src="http://d.pr/i/EfZ+" alt="sorta" width="80%" />
	<figcaption>Sorta-centered</figcaption>
</figure>

But this led to a terrible design on mobile:

<figure>
	<img src="http://d.pr/i/1l1L9+" alt="mobile" width="80%" />
	<figcaption>Mobile pre `custom.less`</figcaption>
</figure>

<h2><a name="thats">So That's What This Does</a></h2>
In trying to fix the padding of the site on Desktop, I was making changes to `global.less`, which is a stylesheet that makes changes to *all* implementations of the site -- desktop/tablet/phone.

What I *should* have been doing was using the `@media` query to insure that the changes made to the desktop/tablet versions of the site did *not*[^9] effect the phone-sized versions of the site.

Now, any sane person would have probably just traced back every change made to `global.less` and reverted it back to the default. 

But I'm not sane. I'm figuring things out as I go. So what did I do?

<h2><a name="starting">Starting Over</a></h2>
Yeah, I started over. I turned off Developer mode, and then turned it back on. This reverted my site to the default Wells configuration.

<h1><a name="doing">Doing It The Right Way</a></h1>
Here is how I decided to re-style the site, using `.less` slash`.css` stuffs:

* I created a `custom.css`, which would allow me to make changes to the style of the site without being unable to 'revert' back to the default `global.less` and/or `mobile.less` configurations.
* I then modified `template.conf` at the string `"stylesheets"` such that `custom.css` was loaded *after* `mobile.less`, which was, wonderfully, loaded after `global.less` by default[^10] 
	* The output should look like this, at least for the Wells template: 
		* `"stylesheets" : [ "tweak.less", "global.less", "mobile.less", "bigfoot-number.css", "custom.css" ]`
* I wanted to ensure that the mobile version of the site extended all the way to iPad in portrait mode, but, for iPad in landscape mode, I wanted the site to load in Desktop-mode.
	* In `custom.css`, I used an `@media only screen and (min-width:769px)` modifier, which basically calls for implementing parts of `custom.css` *only* when the width of the display window is 769px or greater.[^12]
	* For kicks, here is the content of that `@media` query:
	* <script src="https://gist.github.com/ToniWonKanobi/4ff2c73d6f9e27916d7c.js"></script>
	* That worked great, but my design broke down when I zoomed in on the iPad when in landscape mode.
	* I had to do some sidebar hackery such that the `#headerWrapper` for `.sidebar-position-left` was `position: absolute !important`
	* Here is the `@media` query I used to target iPads in landscape orientation:
	* <script src="https://gist.github.com/ToniWonKanobi/50bc973ad2dde32fbb81.js"></script>

<h2><a name="one">One More Thing</a></h2>
The final piece left in the puzzle was the logo. 

When I started the site, I was lazy. Heck, I still am lazy. But I was even lazier a year ago. I wanted my logo to contain some reference to my faithful companion animal, [Smokey](http://d.pr/i/1h4fZ+).

Squarespace had *just* rolled out their [logo designer tool](http://squarespace.com/logo).[^14] I used it to combine a stock Getty-ish graphic of a dog with a relatively boring sans serif font for the site title's text.

I think it was actually a pretty nice logo considering it took me about 5 minutes to put together:

<img src="http://d.pr/i/1b8Ss+" alt="Logo Version 1.0" width="50%" />

But from the beginning, the plan was always to someday create my own. 

And that takes us to the present, conveniently serving to book-end this post.

<h1><a name="thelogo">The Logo</a></h1>
<h2><a name="pixelmator">Pixelmator</a></h2>
I started with [Pixelmator](http://www.pixelmator.com/). Hands-down, the team at Pixelmator have designed an amazing Photoshop alternative for Cocoa / OS X lovers like myself. I'm no photographer, but from what I gather, Pixelmator features about 90% of what Photoshop or Lightroom offer. That was more than enough to win me over.

When they launched version 2.2 a couple of years ago, I remember hearing about [Vectormator](http://www.pixelmator.com/blog/2013/05/14/introducing-vectormator/). When I originally caught wind of that addition, I made a mental note to myself that if I ever needed to create a graphic, I was going to use Pixelmator.

But as I quickly found out, Pixelmator's (Vectormator's) vector graphic support was rather limited. I actually created a graphic using Pixelmator, but was unable to export it as a scalable vector graphic (SVG) file. I tried but just couldn't find a way to do so.  I contacted their team, hoping I was just overlooking something trivial. 

Alas, no: 

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi">@ToniWonKanobi</a> Vector file formats? No, they are not supported.</p>&mdash; Pixelmator Team (@pixelmator) <a href="https://twitter.com/pixelmator/status/565187997940064256">February 10, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

There was no way to properly export an SVG from Pixelmator. Instead of being an all-out graphic design fork from Pixelmator, Vectormator merely enhanced photos for Pixelmator. 

<p><h2><a name="ifat">If At First You Don't Succeed</a></h2>
I needed a program that was easy to use like Pixelmator, but allowed easy exportation of a vector file. Interestingly enough, through my previous contact with the Pixelmator team, [Sketch was suggested to me](https://twitter.com/pixelmator/status/565182862128082946).

<p><h2><a name="sketch">Sketch</a></h2>
Sketch is on its [third major version](http://bohemiancoding.com/sketch/whats-new/) now, and while its true power lies in its excellent suite of mobile design utilities, the app is great for just run-of-the-mill website stuff, like logos. 

I started with a photo of Smokey:

<figure>
	<img src="http://d.pr/i/19uo2+" alt="original" width="80%" />
	<figcaption>Original picture of Smokey</figcaption>
</figure>

Then I reduced the opacity to 50%, to make vectorizing the image easier:

<figure>
	<img src="http://d.pr/i/19gqG+" alt="opacity" width="80%" />
	<figcaption>Opacity reduced</figcaption>
</figure>

And here's the vector, minus some smoothing:

<figure>
	<img src="http://d.pr/i/9MUF+" alt="vector" width="80%" />
	<figcaption>Original vector</figcaption>
</figure>

And here's the circle logo:

<figure>
	<img src="http://d.pr/i/dOCb+" alt="circke" width="80%" />
	<figcaption>Circle logo</figcaption>
</figure>

Next, the logo with text. I chose Futura Condensed ExtraBold. I like the weight, and I especially like Futura because of its versatility. It's not as trendy or readable as Proxima Nova (`body-font-font-family`), sure. But it conveys a certain amount of gravitas, without seeming too formal. It's almost comical, but only slightly so. I think that suits the site well:

<figure>
	<img src="http://d.pr/i/19wtr+" alt="logotext" width="80%" />
	<figcaption>Logo with text</figcaption>
</figure>

Finally, the full logo with the subtitle. I included the subtitle because I originally had trouble aligning the subtitle text on the different target displays. Making it part of the logo made things easier for me:

<figure>
	<img src="http://d.pr/i/qW89+" alt="finished" width="80%" />
	<figcaption>Finished logo with subtitle/figcaption>
</figure>

I also used the Circle Logo to make the browser favicon:

<figure>
	<img src="http://d.pr/i/13py7+" alt="favicon" width="80%" />
	<figcaption>Favicon</figcaption>
</figure>

<hr class="small">

I spent a fair amount of time trying to use my (`Logo.svg`) in place of the static image Squarespace uses for the logo. This was important to me because I wanted everything about my site to look good on Retina displays. And, even though most humans wouldn't zoom in to this level:

<figure>
	<img src="http://d.pr/i/1hJo2+" alt="broken" width="80%" />
	<figcaption>Broken on mobile</figcaption>
</figure>

... I wanted to be ready in case they did. 

I ended up having to edit the `site.region` file that Squarespace uses as the site template, more or less. 

<p><h1><a name="finally">Finally</a></h1>
Finally. [It was finished](http://biblehub.com/john/19-30.htm). I was able to get things looking how I want.[^13]

Desktop:

<figure>
	<img src="http://d.pr/i/1bVv2+" alt="sidebar" width="80%" />
	<figcaption>Sidebar. Desktop. Yes.</figcaption>
</figure>

iPad (Portrait):

<figure>
	<img src="http://d.pr/i/OgsK+" alt="portrait" width="50%" />
	<figcaption>iPad, portrait</figcaption>
</figure>

iPad (Landscape):

<figure>
	<img src="http://d.pr/i/pAIQ+" alt="landscape" width="50%" />
	<figcaption>iPad, landscape</figcaption>
</figure>

iPhone:

<figure>
	<img src="http://d.pr/i/1fcI8+" alt="iphone" width="50%" />
	<figcaption>iPhone, portrait</figcaption>
</figure>

***

<p><h1><a name="conclusion">Conclusion</a></h1>
As far as I can tell, I have reached the limits of what one man can do for a given Squarespace template.

I recently listened to an old [episode](http://5by5.tv/buildanalyze/18) of [Build and Analyze](http://5by5.tv/buildanalyze), in which Marco talked about [Second Crack](https://github.com/marcoarment/secondcrack).

I then scoured over Casey Liss's blog to find this [post](http://www.caseyliss.com/2014/5/2/camel-open-sourced) discussing Camel, his blogging engine similar to Second Crack.

I want the dual RSS feeds of Camel, and the easy bookmarklets that Second Crack offers.

Maybe I'll just have to 'fork' those both together into one amazing blogging engine. 

We'll see. 

Until then, maybe I can get back to writing.

[^1]: Sorry, I couldn't help it: At the moment I was writing that, I felt as if I were hosting my own podcast and doing an ad read for Squarespace. 
[^2]: You get where I'm going with this now, don't you?
[^3]: My site isn't cool enough to have been crawled by these guys yet, but have you heard of or visited [archive.org](archive.org)? I have spent hours there looking at old archives of [www.apple.com](https://web.archive.org/web/19980509035420/http://www.apple.com/). Such a great resource.
[^4]: Even before things got [crazy](http://d.pr/i/1kNyI+), I had changed *quite* a big of stuff from the default settings. Almost everything -- font size/styles/colors, as well as link colors, etc -- had been customized to my liking. And, at that time, because I didn't have any knowledge regarding how Squarespace made under-the-hood changes to the user interface, I was scared to just change to a completely new template.
[^5]: I can't remember which. Chances are it was either Upgrade or Inquisitive, because I can vaguely remember it being Myke Hurley to made reference to Stephen Hackett, who also uses the Developer Platform. Though, I feel safe saying that he hasn't used it *[nearly](https://twitter.com/ismh/status/564079479992360961)* as much as I have. 
[^6]: Another great resource. 
[^7]: Before mastering `blog.item`, I wasn't sure how to place the permalink after the date on Linked items. I thought I was stuck with it following the title of linked items. I figured that out [eventually](http://d.pr/i/1hVrx+) ⌘
[^8]: Via email.
[^9]: Sometimes I wonder, do I *italicize* **too** ***much***? 
[^10]: For all the flack I give Squarespace via email and twitter, these guys really have done a decent job of designing how developers can manipulate things. I wish they did more, like allow customization of RSS, as well as some default URL slug stupidness, but maybe that will come with time. 
[^12]: 769px is exactly one pixel greater than the `device-width` of iPad in portrait mode. 
[^13]: There are a few things I would like to change, but I think for the sake of my sanity, I will leave well enough alone for now. 
[^14]: Apparently, this caused a bit of a controversy in the [web design community](http://www.fastcodesign.com/3025363/is-squarespaces-new-logo-generator-a-design-crime). 