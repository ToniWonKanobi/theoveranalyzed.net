Title: Designing TheOverAnalyzed 2.0  
Date: 2015-02-25 08:00  
Description: I walk through my process of tweaking Squarespace to achieve my desired web design esthetic for TheOverAnalyzed.  
Tags: Meta  
Image: http://d.pr/i/EfZ+  

## Forward

When I launched TheOverAnalyzed last year, I knew nothing about HTML, CSS, JavaScript, or web design in general. Now, a year later, I still know nothing relatively nothing about the aforementioned topics. But, I know a whole lot more than I did.

# History

[Squarespace][sqs] <s>is the all-in-one</s>[^ss] made building a website insanely easy. Everything everyone has said about it has been pretty accurate in my experience. Typically, the biggest barrier to creating something is the lack of knowledge surrounding the framework upon which you might build. For making websites, that translates to the biggest barrier being a lack of knowledge regarding HTML, CSS, JavaScript, and Web Design.[^wd] Squarespace takes care of all that. With all of that out the way, I was able to focus on content, which, at the end of the day, is all that matters. 

## From The Beginning, I Was A Tinkerer

I started with the [Native][squarespace] template, which was, like most templates, insanely sparse and clean-looking. It had a centered main content format, and by default, the top navigation was placed underneath the logo image, which was so much more pleasing than on the top right, which was the format of some of the other templates.

Here's the Native demo page:

<figure>
	<img src="http://d.pr/i/15dfx+" alt="'Native' template on Squarespace" title="'Native' template on Squarespace">
	<figcaption>The stock Native template</figcaption>
</figure>

Eventually, I noticed that the way Native implemented [blockquotes][d] was kind of wonky. After some initial hesitation,[^ih] I decided to switch to the [Avenue][squarespace 2] template, which was a lot like Native, but had [blockquotes][d 2] like I wanted.

Here's the Avenue demo page: 

<figure>
	<img src="http://d.pr/i/rxBP+" alt="'Avenue' template on Squarespace" title="'Avenue' template on Squarespace">
	<figcaption>The stock Avenue template</figcaption>
</figure>

And here's a screenshot[^v] of my site from just a couple of weeks ago, before the first big design change:

<figure>
	<img src="http://d.pr/i/1cvPC+" alt="TheOverAnalyzed a couple weeks ago" title="TheOverAnalyzed a couple weeks ago">
	<figcaption>TheOverAnalyzed with the Avenue template (Version 1)</figcaption>
</figure>

## Things Got Hairy

I had been wanting to make a few changes to the way my posts behaved. For instance, I wanted an arrow `→` to follow the title on Linked posts, and I also wanted a permalink `∞` to follow the the Linked post's date. There didn't seem to be a way to do that from within the Configuration section. I looked around for some ideas, and found a [post][webfactional] discussing the `{.passthrough}` string. That post offered a great solution, but the author noted that the string was only exposed to Squarespace users with the Developer Platform turned on.

Huh. I had heard on a podcast[^hp] that Squarespace had a [Developer Platform][squarespace 3]. Interesting. I wondered what that was all about, so I visited the developer landing page. It seemed pretty straightforward? 

That is, until I got to the [part][squarespace 4] that mentioned [Git][wikipedia] and [SFTP][wikipedia 2]. 

Uh, no thanks. 

I had used GitHub a bit last year when I was [contributing][github] to a [repository][github 2] that contained jailbreak icon themes. I would find the BundleID for the app that needed theming, as well as the filenames of the icon sources. I would then find the iTunes Artwork using this [site][bendodson],[^bd] and then parse all that information into a new Issue for the designer to make the icons for the theme. Finally, I would use AFC to transfer to my iOS device, via USB, the themed icon sources to their respective folders in the app bundle and insure that they were showing up properly.

But the idea of using Git or SFTP seemed to require much more nerd knowledge than I had at the time.

So what did I do? 

I forgot about it, and just settled on not having Linked posts behave like I wanted.

## Are You Kidding Me? Of Course I Didn't Settle

I did what have always done when it comes to nerdery: I took the plunge. I turned on the Developer Platform. 

## Now What Do I Do?

I wasn't sure whether Git or SFTP was the way to go, so I started with Git (due to my previous experience with GitHub). Turns Out™ that using Git involved using Terminal to push changes to the server, which seemed a little too [John Siracusa][hypercritical] [Mac OS 9][wikipedia 3] for me. 

So SFTP it was. 

Interestingly, I wasn't sure how to use SFTP (or [FTP][wikipedia 4]) either. So I checked in with the great teacher of our time, YouTube, and found a real [gem][youtube]. This guy basically spelled out how to use Espresso to manipulate my site in any way I wanted. 

How cool.

## Trying Some Things

The first changes I made, like most 'first times,' were disastrous. I completely broke the site. I accidentally made changes to `global.less` without realizing what I had done. Unsure how to fix things, I turned off Developer mode in Squarespace, which reverted the site back to how it was before turning Developer mode on. Whew. Everything was fixed. Then I turned Developer mode back on, and tried again. 

I quickly familiarized myself with `blog.list` and `blog.item` and was able to make the arrow and [permalink][pli] changes like I wanted (and much [more][more]).

Here's a screenshot of Permalinks Version 1.0:[^pl]

<figure>
	<img src="http://d.pr/i/1lSZU+" alt="Permalinks Version 1" title="Permalinks Version 1">
	<figcaption>Permalinks Version 1.0</figcaption>
</figure>

## Another Template Change

Things were looking [how I wanted][d 3]. Still, I wasn't quite satisfied. 

One [stretch goal][forbes] I have had since the beginning is to be sponsored by [The Deck][decknetwork]. I have seen their ads on [Daring Fireball][df], [Marco.org][ma], [Six Colors][sc], and [The Loop][lp]. *These are the blogs I aspire towards,* so of course I wanted to be like them.

And while I realized that this was so far off, I wanted to be ready.

Being ready meant being able to implement the ads as soon as Jim Coudal knocks on my door.[^md]

Problem was that I couldn't seem to envision a place for the ads on my current site. Avenue, just like Native before it, featured centered content. Where would[ The Deck][decknetwork] ads go? Unlike almost every other terrible banner ad, The Deck ads are confined to a relatively small, square block. I couldn't place them at the very top of the site, because they would take a way from the logo. I also didn't think it would be fair, traffic-wise, to place them at the bottom of the site, say, above the `©`.

Most of the other sites sponsored by The Deck had a sidebar.

Naturally, I <s>needed</s> a sidebar. 

I noticed [Above Avalon][aboveavalon] a few weeks ago, and loved the non-scrolling (`position: absolute`) sidebar. I also loved that the site was built on Squarespace. *This meant I could easily implement a sidebar on my own site.*

Here is Niel Cybart's Stratechery-esche Above Avalon:

<figure>
	<img src="http://d.pr/i/11RRa+" alt="Above Avalon" title="Above Avalon">
	<figcaption>Above Avalon's homepage</figcaption>
</figure>

<figure>
	<img src="http://d.pr/i/19QPN+" alt="Scrolling Above Avalon" title="Scrolling Above Avalon">
	<figcaption>Look at that <code>.main-content</code> scroll</figcaption>
</figure>

## Sidebar Time

I looked around the templates and discovered that Cybart had implemented a relatively unchanged version of [Wells][squarespace 5]. Wells is a great template for photographers or graphic designers, as it really makes content like pictures or graphics or videos the star of the web view. 

Here is the Wells demo:

<figure>
	<img src="http://d.pr/i/12IAy+" alt="'Wells' template on Squarespace" title="'Wells' template on Squarespace">
	<figcaption>Wells template</figcaption>
</figure>

<figure>
	<img src="http://d.pr/i/Q7z1+" alt="TheOverAnalyzed with 'Wells' template" title="TheOverAnalyzed with 'Wells' template">
	<figcaption>And here is TheOverAnalyezd with Wells (Version 1.0 of the site)</figcaption>
</figure>

Note that the content was pushed all the way to the left of the window. This wasn't terrible, but it also wasn't [ideal][d 4]. I wanted the content to be basically centered, regardless of how big the window was. 

After consulting with the [Squarespace Answers Forum](answers.squarespace.com), I was able to move the content over to the center, more or less:

<figure>
	<img src="http://d.pr/i/EfZ+" alt="Sorta-centered" ttile="Sorta-centered">
	<figcaption>Sorta-centered</figcaption>
</figure>

But this led to a terrible design on mobile:

<figure>
	<img class="screenshot iphone" src="http://d.pr/i/1l1L9+" alt="Mobile" title="Mobile">
	<figcaption>Mobile, pre-<code>custom.less</code></figcaption>
</figure>

## So That's What This Does

In trying to fix the padding of the site on Desktop, I was making changes to `global.less`, which is a stylesheet that makes changes to *all* implementations of the site---desktop/tablet/phone.

What I *should* have been doing was using the `@media` query to insure that the changes made to the desktop/tablet versions of the site did *not*[^mq] effect the phone-sized versions of the site.

Now, any sane person would have probably just traced back every change made to `global.less` and reverted it back to the default. 

But I'm not sane. I'm figuring things out as I go. So what did I do?

## Starting Over

Yeah, I started over. I turned off Developer mode, and then turned it back on. This reverted my site to the default Wells configuration.

# Doing It The Right Way

Here is how I decided to re-style the site, using `.less` slash `.css` stuffs:

* I created a `custom.css`, which would allow me to make changes to the style of the site without being unable to 'revert' back to the default `global.less` and/or `mobile.less` configurations.
* I then modified `template.conf` at the string `"stylesheets"` such that `custom.css` was loaded *after* `mobile.less`, which was, wonderfully, loaded after `global.less` by default[^mlgl] 
	* The output should look like this, at least for the Wells template:
	
		```
		"stylesheets" : [ "tweak.less", "global.less", "mobile.less", "bigfoot-number.css", "custom.css" ]
		```
		
* I wanted to ensure that the mobile version of the site extended all the way to iPad in portrait mode, but, for iPad in landscape mode, I wanted the site to load in Desktop-mode.
	* In `custom.css`, I used an `@media only screen and (min-width:769px)` modifier, which basically calls for implementing parts of `custom.css` *only* when the width of the display window is 769px or greater.[^ip]
	* For kicks, here is the content of that `@media` query:
		<script src="https://gist.github.com/ToniWonKanobi/4ff2c73d6f9e27916d7c.js"></script>
	* That worked great, but my design broke down when I zoomed in on the iPad when in landscape mode.
	* I had to do some sidebar hackery such that the `#headerWrapper` for `.sidebar-position-left` was `position: absolute !important`
	* Here is the `@media` query I used to target iPads in landscape orientation:
		<script src="https://gist.github.com/ToniWonKanobi/50bc973ad2dde32fbb81.js"></script>

## One More Thing

The final piece left in the puzzle was the logo. 

When I started the site, I was lazy. Heck, I still am lazy. But I was even lazier a year ago. I wanted my logo to contain some reference to my faithful companion animal, [Smokey][d 5].

Squarespace had *just* rolled out their [logo designer tool][squarespace 6].[^ld] I used it to combine a stock Getty-ish graphic of a dog with a relatively boring sans serif font for the site title's text.

I think it was actually a pretty nice logo considering it took me about 5 minutes to put together:

<figure>
	<img src="http://d.pr/i/1b8Ss+" alt="Logo, v1" title="Logo, v1">
	<figcaption>Logo Version 1.0</figcaption>
</figure>

But from the beginning, the plan was always to someday create my own. 

And that takes us to the present, conveniently serving to book-end this post.

# The Logo

## Pixelmator

I started with [Pixelmator][pixelmator]. Hands-down, the team at Pixelmator have designed an amazing Photoshop alternative for Cocoa / OS X lovers like myself. I'm no photographer, but from what I gather, Pixelmator features about 90% of what Photoshop or Lightroom offer. That was more than enough to win me over.

When they launched version 2.2 a couple of years ago, I remember hearing about [Vectormator][pixelmator 2]. When I originally caught wind of that addition, I made a mental note to myself that if I ever needed to create a graphic, I was going to use Pixelmator.

But as I quickly found out, Pixelmator's (Vectormator's) vector graphic support was rather limited. I actually created a graphic using Pixelmator, but was unable to export it as a scalable vector graphic (SVG) file. I tried but just couldn't find a way to do so.  I contacted their team, hoping I was just overlooking something trivial. 

Alas, no: 

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi" title="Me on Twitter">@ToniWonKanobi</a> Vector file formats? No, they are not supported.</p>&mdash; Pixelmator Team (@pixelmator) <a href="https://twitter.com/pixelmator/status/565187997940064256" title="Pixelmator's response">February 10, 2015</a></blockquote>

There was no way to properly export an SVG from Pixelmator. Instead of being an all-out graphic design fork from Pixelmator, Vectormator merely enhanced photos for Pixelmator. 

## If At First You Don't Succeed

I needed a program that was easy to use like Pixelmator, but allowed easy exportation of a vector file. Interestingly enough, through my previous contact with the Pixelmator team, [Sketch was suggested to me][twitter].

## Sketch

Sketch is on its [third major version][bohemiancoding] now, and while its true power lies in its excellent suite of mobile design utilities, the app is great for just run-of-the-mill website stuff, like logos. 

I started with a photo of Smokey:

<figure>
	<img src="http://d.pr/i/19uo2+" alt="Original picture of Smokey" title="Original picture of Smokey">
	<figcaption>Original picture of Smokey</figcaption>
</figure>

Then I reduced the opacity to 50%, to make vectorizing the image easier:

<figure>
	<img src="http://d.pr/i/19gqG+" alt="Opacity reduced" title="Opacity reduced">
	<figcaption>Opacity reduced</figcaption>
</figure>

And here's the vector, minus some smoothing:

<figure>
	<img src="http://d.pr/i/9MUF+" alt="Original vector" title="Original vector">
	<figcaption>Original vector</figcaption>
</figure>

And here's the circle logo:

<figure>
	<img src="http://d.pr/i/dOCb+" alt="Circle logo" title="Circle logo">
	<figcaption>Circle logo</figcaption>
</figure>

Next, the logo with text. I chose Futura Condensed ExtraBold. I like the weight, and I especially like Futura because of its versatility. It's not as trendy or readable as Proxima Nova (`body-font-font-family`), sure. But it conveys a certain amount of gravitas, without seeming too formal. It's almost comical, but only slightly so. I think that suits the site well:

<figure>
	<img src="http://d.pr/i/19wtr+" alt="Logo with text" title="Logo with text">
	<figcaption>Logo with text</figcaption>
</figure>

Finally, the full logo with the subtitle. I included the subtitle because I originally had trouble aligning the subtitle text on the different target displays. Making it part of the logo made things easier for me:

<figure>
	<img src="http://d.pr/i/qW89+" alt="Finished logo with subtitle" title="Finished logo with subtitle">
	<figcaption>Finished logo with subtitle</figcaption>
</figure>

I also used the Circle Logo to make the browser favicon:

<figure>
	<img src="http://d.pr/i/13py7+" alt="Favicon" title="Favicon">
	<figcaption>Favicon</figcaption>
</figure>

***

I spent a fair amount of time trying to use my (`Logo.svg`) in place of the static image Squarespace uses for the logo. This was important to me because I wanted everything about my site to look good on Retina displays. And, even though most humans wouldn't zoom in to this level:

<figure>
	<img class="screenshot iphone" src="http://d.pr/i/1hJo2+" alt="Site broken on mobile" title="Site broken on mobile">
	<figcaption>Broken on mobile</figcaption>
</figure>

... I wanted to be ready in case they did. 

I ended up having to edit the `site.region` file that Squarespace uses as the site template, more or less. 

# Finally

Finally. [It was finished][biblehub]. I was able to get things looking how I want.[^iw]

Desktop:

<figure>
	<img src="http://d.pr/i/1bVv2+" alt="Sidebar on desktop version of website" title="Sidebar on desktop version of website">
	<figcaption>Sidebar. Desktop. Yes.</figcaption>
</figure>

iPad (Portrait):

<figure class="iphone">
	<img class="screenshot" src="http://d.pr/i/OgsK+" alt="iPad, portrait" title="iPad, portrait">
	<figcaption>iPad, portrait</figcaption>
</figure>

iPad (Landscape):

<figure>
	<img class="screenshot iphone" src="http://d.pr/i/pAIQ+" alt="iPad, landscape" title="iPad, landscape">
	<figcaption>iPad, landscape</figcaption>
</figure>

iPhone:

<figure>
	<img class="screenshot iphone" src="http://d.pr/i/1fcI8+" alt="iPhone, portrait" title="iPhone, portrait">
	<figcaption>iPhone, portrait</figcaption>
</figure>

***

# Conclusion

As far as I can tell, I have reached the limits of what one man can do for a given Squarespace template. I recently listened to an old [episode][5by5] of [Build and Analyze][5by6], in which Marco talked about [Second Crack][github 3]. I then scoured over Casey Liss's blog to find this [post][caseyliss] discussing Camel, his blogging engine similar to Second Crack.

I want the dual RSS feeds of Camel, and the easy bookmarklets that Second Crack offers.

Maybe I'll just have to 'fork' those both together into one amazing blogging engine. 

We'll see. 

Until then, maybe I can get back to writing.

[^ss]: Sorry, I couldn't help it: At the moment I was writing that, I felt as if I were hosting my own podcast and doing an ad read for Squarespace. 
[^wd]: You get where I'm going with this now, don't you?
[^v]: My site isn't cool enough to have been crawled by these guys yet, but have you heard of or visited [archive.org][arc]? I have spent hours there looking at old archives of [www.apple.com][archive]. Such a great resource.
[^ih]: Even before things got [crazy][d 6], I had changed *quite* a big of stuff from the default settings. Almost everything---font size/styles/colors, as well as link colors, etc---had been customized to my liking. And, at that time, because I didn't have any knowledge regarding how Squarespace made under-the-hood changes to the user interface, I was scared to just change to a completely new template.
[^hp]: I can't remember which. Chances are it was either Upgrade or Inquisitive, because I can vaguely remember it being Myke Hurley to made reference to Stephen Hackett, who also uses the Developer Platform. Though, I feel safe saying that he hasn't used it *[nearly][twitter 2]* as much as I have. 
[^bd]: Another great resource. 
[^pl]: Before mastering `blog.item`, I wasn't sure how to place the permalink after the date on Linked items. I thought I was stuck with it following the title of linked items. I figured that out [eventually][d 7]
[^md]: Via email.
[^mq]: Sometimes I wonder, do I *italicize* **too** ***much***? 
[^ip]: 769px is exactly one pixel greater than the `device-width` of iPad in portrait mode.
[^ld]: Apparently, this caused a bit of a controversy in the [web design community][fastcodesign]. 
[^mlgl]: For all the flack I give Squarespace via email and twitter, these guys really have done a decent job of designing how developers can manipulate things. I wish they did more, like allow customization of RSS, as well as some default URL slug stupidness, but maybe that will come with time. 
 [^iw]: There are a few things I would like to change, but I think for the sake of my sanity, I will leave well enough alone for now. 

[5by5]: http://5by5.tv/buildanalyze/18 "Build and Analyze, episode 18"
[5by6]: http://5by5.tv/buildanalyze "Build and Analyze"
[aboveavalon]: http://aboveavalon.com "Above Avalon"
[arc]: https://archive.org "Internet Archive"
[archive]: https://web.archive.org/web/19980509035420/http://www.apple.com/ "Apple's website in 1998"
[bendodson]: http://bendodson.com/code/itunes-artwork-finder/index.html "iTunes Artwork Finder by Ben Dodson"
[biblehub]: http://biblehub.com/john/19-30.htm "'It is finished' quote"
[bohemiancoding]: http://bohemiancoding.com/sketch/whats-new/ "What's new in the newest version of Sketch"
[caseyliss]: http://www.caseyliss.com/2014/5/2/camel-open-sourced "Casey Liss's blog post about open-sourcing 'Camel'"
[d]: http://d.pr/i/1cxvQ+ "Lack of blockquotes like I want"
[d 2]: http://d.pr/i/1lKIz+ "These are the types of blockquotes I wanted"
[d 3]: http://d.pr/i/1cvPC+ "Getting closer"
[d 4]: http://d.pr/i/14BaR+ "This is the centering I was going for"
[d 5]: http://d.pr/i/1h4fZ+ "Picture of Smokey"
[d 6]: http://d.pr/i/1kNyI+ "Modifying the `.less` files quite a bit"
[d 7]: http://d.pr/i/1hVrx+ "Figured out how to place the permalink anchor to the right of hte date (out of the title)"
[df]: http://www.daringfireball.net "John Gruber's blog, Daring Fireball"
[decknetwork]: http://decknetwork.net/ "Jim Coudal's ad network, The DECK"
[fastcodesign]: http://www.fastcodesign.com/3025363/is-squarespaces-new-logo-generator-a-design-crime "Fast Company on Squarespace's 'design your own logo' platform"
[forbes]: http://www.forbes.com/sites/stevedenning/2012/04/23/in-praise-of-stretch-goals/ "Forbes: 'In Praise Of Stretch Goals'"
[github]: https://github.com/andreaslarsen/habesha/issues?q=is%3Aissue+is%3Aclosed "Issue on Habesha GitHub project page"
[github 2]: https://github.com/andreaslarsen/habesha "Habesha project page on GitHub"
[github 3]: https://github.com/marcoarment/secondcrack "Marco's static blogging engine"
[hypercritical]: http://hypercritical.co "John Siracusa's blog, Hypercritical.co"
[lp]: http://www.loopinsight.com "Jim Dalrymple's blog, The Loop"
[ma]: http://www.marco.org "Marco Arment's blog, Marco.org"
[more]: /2015/1/31/bigfoot-footnotes-in-squarespace "My post about incorporating Bigfoot footnotes into Squarespace"
[pixelmator]: http://www.pixelmator.com/ "Pixelmator's website"
[pixelmator 2]: http://www.pixelmator.com/blog/2013/05/14/introducing-vectormator/ "Pixelmator's blog post introducing 'Vectormator'"
[pli]: /2015/2/1/permalinks-in-squarespace "My post outlining how I added permalinks to my linked posts"
[sc]: http://www.sixcolors.com "Jason Snell's blog, Six Colors"
[squarespace]: http://native-demo.squarespace.com/ "'Native' template on Squarespace"
[squarespace 2]: http://avenue-demo.squarespace.com "'Avenue' template on Squarespace"
[squarespace 3]: http://developers.squarespace.com "Squarespace Developer Platform"
[squarespace 4]: http://developers.squarespace.com/initial-setup/ "How to setup Squarespace Developer Platform"
[squarespace 5]: http://wells-demo.squarespace.com/ "'Wells' template on Squarespace"
[squarespace 6]: http://squarespace.com/logo "Squrespace's logo-creation page"
[sqs]: http://squarespace.com "Squarespace"
[twitter]: https://twitter.com/pixelmator/status/565182862128082946 "Pixelmator suggesting Sketch"
[twitter 2]: https://twitter.com/ismh/status/564079479992360961 "Asking Stephen Hackett if he's tried the Squarespace Developer Platform"
[webfactional]: http://duner.webfactional.com/blog/squarespace-permalinks "Webpage that helped me figure out permalinks in Squarespace"
[wikipedia]: https://en.wikipedia.org/wiki/Git_(software) "Wikipedia: Git"
[wikipedia 2]: https://en.wikipedia.org/wiki/SFTP "Wikipedia: SFTP"
[wikipedia 3]: https://en.wikipedia.org/wiki/Mac_OS_9 "Wikipedia: Mac OS 9"
[wikipedia 4]: https://en.wikipedia.org/wiki/File_Transfer_Protocol "Wikipedia: FTP"
[youtube]: https://www.youtube.com/watch?v=HzravxTgTe4 "YouTube: Setting Up Squarespace 7 (Squarespace 6) Developer Platform with Espresso2 and LiveReload"