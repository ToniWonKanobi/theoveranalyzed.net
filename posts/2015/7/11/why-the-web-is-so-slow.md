@@ Title=Why The Web Is So Slow  
@@ Date=2015-07-12T08:00:00-0700  
@@ Description=I've struggled with keeping TheOverAnalyzed's page load times to less than 2 seconds. I'm not alone: everyone wants a faster web. But not everyone is experiencing it. And it's mostly publishers' faults.
@@ Tags=culture, web design, web, design  
@@ Image=http://d.pr/i/1iLFm+  
@@ Video=http://d.pr/v/9TLn+  

This past week, several prominent Apple bloggers took to their sites (and Twitter) to confront the reality that most websites suck at loading quickly.

The most prominent of which came from John Gruber, who had [this](http://daringfireball.net/2015/07/safari_content_blocker_imore) to say about [iMore](http://imore.com)'s current state of slow page loading:
>I love iMore. I think they’re the best staff covering Apple today, and their content is great. But [count me in with Nick Heer](http://pxlnv.com/linklog/safari-content-blockers-shit-ass-websites/) — their website is *shit-ass*. Rene Ritchie’s response acknowledges the problem, but a web page like that — Rene’s 537-word all-text response — should not [weigh 14 MB](http://d.pr/i/19HMF+).
>
>It’s not just the download size, long initial page load time, and the ads that cover valuable screen real estate as fixed elements. The fact that these JavaScript trackers hit the network for a full-minute after the page has completely loaded is downright criminal. Advertising should have minimal effect on page load times and device battery life. Advertising should be respectful of the user’s time, attention, and battery life. The industry has gluttonously gone the other way. **iMore is not the exception — they’re the norm** [emphasis added]. 10+ MB page sizes, minute-long network access, third-party networks tracking you across unrelated websites — those things are all par for the course today, even when serving pages to mobile devices. Even on a site like iMore, staffed by good people who truly have deep respect for their readers.

It's Gruber's last comment that really puts everything into perspective:
>With Safari Content Blockers, Apple is poised to allow users to fight back. Apple has zeroed in on what we need: not a way to block ads per se, but a way to block obnoxious JavaScript code. **A reckoning is coming** [emphasis added].

Yes, that's right: in what can only be described as completely un-Apple, the fabled fruit company has decided to enable [content blockers on iOS](http://9to5mac.com/2015/06/10/block-ads-ios-9-safari-iphone/). So come September, *Apple* is attempting to put a stop to one of the most annoying aspects plauging modern web browsing, in an indirect way at least.

How did things ever get this bad?

<hr class="small" />

Let's face it: the web is [slower than we'd like](http://d.pr/v/9TLn+). In a time when cellular data connections and home WiFi are getting faster, the web continues to move forward at a snail's pace. No one wanted this. And as much as Internet Explorer is [maligned for causing the slow adoption of CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#Difficulty_with_adoption), this much is true: before CSS and JavaScript, the web was simpler. Page loading was limited to both server-side and client-side hardware specifications. Today, that's not the case. Servers have never been more robust, and the average mobile client is faster than the average desktop computer 10 years ago. And yet, page loads aren't any faster. What gives?

Before the mid 2000's, proponents of the open web were at odds with the teams behind the Netscape and Internet Explorer browsers. The [World Wide Web Consortium (W3C)](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) had been pushing for an open web with open standards for a decade. However, despite their provocations, neither the Netscape developers nor the Internet Explorer team could agree to cooperate. You see, in the late 1990's, the browser wars were still raging. Instead of working together, each of the two major browsers decided they would adopt their *own* layout specifications in order to ensure their hopeful rise to the top.[^mo]

Eventually the open standards won out. By 2004, [CSS 2.1](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_2.1) had been mostly accepted and adopted by the modern web browsers. So why didn't a near universal acceptance of CSS 2.1 usher in a faster web? Because ads.

When iPhone [launched in 2007](https://en.wikipedia.org/wiki/IPhone_(1st_generation)#Release) with a version of the venerable Safari web browser, the advertisement firms took advantage. That trend has only increased in the 8 years thereafter. Just visit any major .com news organization and you'll see what I mean. The browser window will no doubt be filled with advertisements, most of which look like shat. It's not just that most mobile ads have horribly-pixelated versions of whatever product or service the ad is peddling. No, moreover: those ads typically obscure a *major* portion of the content. 

<figure class="twoleft">
	<a class="nohover" href="http://d.pr/i/17moY+">
		<img src="http://d.pr/i/17moY+" alt="The Verge" />
	</a>
	<figcaption><a href="http://theverge.com/">The Verge</a></figcaption>
</figure>

<figure class="tworight">
	<a class="nohover" href="http://d.pr/i/1cIGg+">
		<img src="http://d.pr/i/1cIGg+" alt="iMore" />
	</a>
	<figcaption><a href="http://imore.com/">iMore</a></figcaption>
</figure>

Because Gruber picked on iMore, I'll do the same. As seen above -- on the [biggest phone-sized display Apple offers](https://en.wikipedia.org/wiki/IPhone_6#Hardware), mind you -- I can barely make out two articles' titles. The rest of the iMore page is obscured with ads. Horrible, ugly, stupid ads. And do you know what powers those ads? [JavaScript](https://en.wikipedia.org/wiki/JavaScript). Tons of nasty JavaScript extensions to enable the ads' targeting and tracking algorithms. 

<figure>
	<a class="nohover" href="http://d.pr/i/6WhJ+">
		<img src="http://d.pr/i/6WhJ+" alt="Look at all those scripts" />
	</a>
	<figcaption>I couldn't even fit all of iMore's JavaScript extensions on this screenshot.</figcaption>
</figure>

And not all of those JavaScrips are lightweight. Even if they were, it still takes time for the browser to compile the scripts before rendering the page. On mobile especially, several seconds could be the difference between a reader enjoying *your* article or someone else's.

<hr class="small" />

iMore is a great example of what happened to the web. Like every other [Apple] news site out there,[^lo] iMore became beholden to the ad revenue stream. Just because Gruber makes a fuss about iMore's crappy website doesn't suddenly make it easy for Rene Ritchie and the rest of Mobile Nations to change their ways. Those fugly ads splattered all over iMore pay for people like Ritchie to write the stories that he so frequently does. Ad after ad after ad led to this vicious state of ad-dependency iMore and others finds themselves in. As Gruber was quick to point out, iMore has some of the best Apple-focused content out there. But I would rather read about Apple on a competitor's site if the ads aren't so terrible. Imagine how bad iMore feels about that?

That said, if iMore can find a different ad revenue path, things could get a whole lot better. 

In his original piece, Gruber included a link to Dean Murphy's [blog post](http://murphyapps.co/blog/2015/6/24/an-hour-with-safari-content-blocker-in-ios-9), in which Murphy detailed just that: iMore without the cruft:
>With no content blocked, there are 38 3rd party scripts  (scripts not hosted on the host domain) running when the homepage is opened, which takes a total of 11 seconds.

>After turning off all 3rd party scripts, the homepage took 2 seconds to load, down from 11 seconds. Also, the network activity stopped as soon as the page loaded so it should be less strain on the battery. 

11 seconds to 2 seconds is a big difference.

<hr class="small" />

Websites should be fast. But can I put my money where my mouth is? It's easy to criticize iMore and all the other slowpoke webpages -- how does [TheOverAnalyzed](http://www.theoveranalyzed.net) compare?

Well enough, I think.

<figure>
	<a class="nohover" href="http://d.pr/i/14dQN+">
		<img src="http://d.pr/i/14dQN+" alt="Regular page load of TheOverAnalyzed" />
	</a>
	<figcaption>A run-of-the-mill page load for TheOverAnalyzed</figcaption>
</figure>

<figure>
	<a class="nohover" href="http://d.pr/i/14ER8+">
		<img src="http://d.pr/i/14ER8+" alt="No-JS page load of TheOverAnalyzed" />
	</a>
	<figcaption>A page load for TheOverAnalyzed with JavaScript disabled</figcaption>
</figure>

Disabling JavaScript yielded a quarter-second differential in page loading. Images were no different: around a quarter-second faster for the non-image version. 

So, if I wanted to run a completely imageless and scriptless version of my site, I might see a page load of 1.5 seconds instead of 2 seconds. I'm not sure that's worth it. 

<hr class="small" />

Self-deprecating over my website's somewhat decent page loading isn't the point of my rant. The point is that not everyone can do what I've done. And that's a problem.

[Daring Fireball](http://www.daringfireball.net), [The Loop](http://www.loopinsight.com/), and [Six Colors](http://www.sixcolors.com) are three popular Apple-oriented blogs featuring ads by [The Deck](http://decknetwork.net). [Jim Coudal's](https://twitter.com/Coudal) advertisement ring serves relevant and discrete ads to the patrons of the aforementioned blogs. I run an [adblocker](https://adblockplus.org/) in my web browsers, but I am sure to disable it for those domains. Why? Because I want those domains to succeed. And doing so doesn't cost user interface or user experience points.

The same can't be said for iMore, or The Verge, or almost every other website I visit. I would be perfectly happy to allow ads on those domains if the ads weren't such visual diarrhea. But they are, so I block them. What's sad is that those websites with crappy ads have no feasible way to wean themselves off the crappy ad teet. And until they do, I'll continue to *not* support them by blocking said ads.

If the adoption of iOS 9 even remotely follows the adoption of all the previous versions of iOS, content blocking will soon be available to millions of people on mobile. Rene Ritchie isn't oblivious to this fact. John Gruber made a point to [link](http://daringfireball.net/linked/2015/07/09/ritchie-bad-ads) to Ritchie's [response piece](http://www.imore.com/content-blockers-bad-ads-and-what-were-doing-about-it), in which Ritchie outlined many of the problems facing iMore (and the web at large). I hope iMore figures it out. It would be a shame for them to not succeed. 

[^lo]: Looking in your direction, [9to5Mac](http://d.pr/i/13nUn+) and [iDownloadBlog](http://d.pr/i/CJPm+)
[^mo]: And, moreover, their *own* JavaScript implementation -- remember [JScript](https://en.wikipedia.org/wiki/JScript)?