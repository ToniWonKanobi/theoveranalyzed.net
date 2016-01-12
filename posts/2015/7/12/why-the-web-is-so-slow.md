Title: Why the Web Is So Slow  
Date: 2015-07-12 14:00  
Description: I've struggled with keeping TheOverAnalyzed's page load times to less than 2 seconds. I'm not alone: everyone wants a faster web. But not everyone is experiencing it. And it's mostly publishers' faults.  
Tags: Web Design, Ditching Webfonts  
Image: https://d.pr/i/1iLFm+  
Video: https://d.pr/v/9TLn+  

*Unknowingly, this was the first in a [series][1] of posts regarding webfonts. You should check out the [second][2] and [third][3].*
<!-- {em:.topstory} -->

<video controls autoplay>
	<source src="https://d.pr/v/9TLn+">
</video>

#### Forward

This past week, several prominent Apple bloggers took to their sites (and Twitter) to confront the reality that most websites suck at loading quickly.

The most prominent of which came from John Gruber, who had [this][4] to say about [iMore][5]'s current state of slow page loading:

> I love iMore. I think they’re the best staff covering Apple today, and their content is great. But [count me in with Nick Heer][6] — their website is *shit-ass*. Rene Ritchie’s response acknowledges the problem, but a web page like that — Rene’s 537-word all-text response — should not [weigh 14 MB][7].
>
> It’s not just the download size, long initial page load time, and the ads that cover valuable screen real estate as fixed elements. The fact that these JavaScript trackers hit the network for a full-minute after the page has completely loaded is downright criminal. Advertising should have minimal effect on page load times and device battery life. Advertising should be respectful of the user’s time, attention, and battery life. The industry has gluttonously gone the other way. **iMore is not the exception — they’re the norm** [emphasis added]. 10+ MB page sizes, minute-long network access, third-party networks tracking you across unrelated websites — those things are all par for the course today, even when serving pages to mobile devices. Even on a site like iMore, staffed by good people who truly have deep respect for their readers.

It's Gruber's last comment that really puts everything into perspective:

> With Safari Content Blockers, Apple is poised to allow users to fight back. Apple has zeroed in on what we need: not a way to block ads per se, but a way to block obnoxious JavaScript code. **A reckoning is coming** [emphasis added].

Yes, that's right: in what can only be described as completely un-Apple, the fabled fruit company has decided to enable [content blockers on iOS][8]. So come September, *Apple* is attempting to put a stop to one of the most annoying aspects plaguing modern web browsing, in an indirect way at least.

How did things ever get this bad?

### History

Let's face it: the web is [slower than we'd like][9]. In a time when cellular data connections and home WiFi are getting faster, the web continues to move forward at a snail's pace. No one wanted this. And as much as Internet Explorer is [maligned for causing the slow adoption of CSS][10], this much is true: before CSS and JavaScript, the web was simpler. Page loading was limited to both server-side and client-side hardware specifications. Today, that's not the case. Servers have never been more robust, and the average mobile client is faster than the average desktop computer 10 years ago. And yet, page loads aren't any faster. What gives?

Before the mid 2000's, proponents of the open web were at odds with the teams behind the Netscape and Internet Explorer browsers. The [World Wide Web Consortium (W3C)][11] had been pushing for an open web with open standards for a decade. However, despite their provocations, neither the Netscape developers nor the Internet Explorer team could agree to cooperate. You see, in the late 1990's, the browser wars were still raging. Instead of working together, each of the two major browsers decided they would adopt their *own* layout specifications in order to ensure their hopeful rise to the top.[^2]Eventually the open standards won out. By 2004, [CSS 2.1][12] had been mostly accepted and adopted by the modern web browsers. So why didn't a near universal acceptance of CSS 2.1 usher in a faster web? Because ads.

When iPhone [launched in 2007][13] with a version of the venerable Safari web browser, the advertisement firms took advantage. That trend has only increased in the 8 years thereafter. Just visit any major .com news organization and you'll see what I mean. The browser window will no doubt be filled with advertisements, most of which look like shat. It's not just that most mobile ads have horribly-pixelated versions of whatever product or service the ad is peddling. No, moreover: those ads typically obscure a *major* portion of the content. 

<figure>
	<img class="inlineTwo" src="https://d.pr/i/17moY+" alt="The Verge" title="The Verge">
	<img class="inlineTwo" src="https://d.pr/i/1cIGg+" alt="iMore" title="iMore">
	<figcaption><a href="http://theverge.com/">The Verge</a> and <a href="http://imore.com/">iMore</a></figcaption>
</figure>

### iMore

Because Gruber picked on iMore, I'll do the same. As seen above---on the [biggest phone-sized display Apple offers][14], mind you---I can barely make out two articles' titles. The rest of the iMore page is obscured with ads. Horrible, ugly, stupid ads. And do you know what powers those ads? [JavaScript][15]. Tons of nasty JavaScript extensions to enable the ads' targeting and tracking algorithms. 

![I couldn't even fit all of iMore's JavaScript extensions on this screenshot.][16]

And not all of those JavaScrips are lightweight. Even if they were, it still takes time for the browser to compile the scripts before rendering the page. On mobile especially, several seconds could be the difference between a reader enjoying *your* article or someone else's.

### What Next

iMore is a great example of what happened to the web. Like every other [Apple] news site out there,[^1] iMore became beholden to the ad revenue stream. Just because Gruber makes a fuss about iMore's crappy website doesn't suddenly make it easy for Rene Ritchie and the rest of Mobile Nations to change their ways. Those fugly ads splattered all over iMore pay for people like Ritchie to write the stories that he so frequently does. Ad after ad after ad led to this vicious state of ad-dependency iMore and others finds themselves in. As Gruber was quick to point out, iMore has some of the best Apple-focused content out there. But I would rather read about Apple on a competitor's site if the ads aren't so terrible. Imagine how bad iMore feels about that?That said, if iMore can find a different ad revenue path, things could get a whole lot better.In his original piece, Gruber included a link to Dean Murphy's [blog post][17], in which Murphy detailed just that: iMore without the cruft:

> With no content blocked, there are 38 3rd party scripts  (scripts not hosted on the host domain) running when the homepage is opened, which takes a total of 11 seconds.

> After turning off all 3rd party scripts, the homepage took 2 seconds to load, down from 11 seconds. Also, the network activity stopped as soon as the page loaded so it should be less strain on the battery. 

11 seconds to 2 seconds is a big difference.

### TheOverAnalyzed

Websites should be fast. But can I put my money where my mouth is? It's easy to criticize iMore and all the other slowpoke webpages---how does TheOverAnalyzed compare?

Well enough, I think.

![A run-of-the-mill page load for TheOverAnalyzed][18]

![A page load for TheOverAnalyzed with JavaScript disabled][19]
<!-- {#nojs} -->

Disabling JavaScript yielded a quarter-second differential in page loading. Images were no different: around a quarter-second faster for the non-image version. 

So, if I wanted to run a completely imageless and scriptless version of my site, I might see a page load of 1.5 seconds instead of 2 seconds. I'm not sure that's worth it. 

***

Self-deprecating over my website's somewhat decent page loading isn't the point of my rant. The point is that not everyone can do what I've done. And that's a problem.

[Daring Fireball][20], [The Loop][21], and [Six Colors][22] are three popular Apple-oriented blogs featuring ads by [The Deck][23]. [Jim Coudal's][24] advertisement ring serves relevant and discrete ads to the patrons of the aforementioned blogs. I run an [adblocker][25] in my web browsers, but I am sure to disable it for those domains. Why? Because I want those domains to succeed. And doing so doesn't cost user interface or user experience points.

The same can't be said for iMore, or The Verge, or almost every other website I visit. I would be perfectly happy to allow ads on those domains if the ads weren't such visual diarrhea. But they are, so I block them. What's sad is that those websites with crappy ads have no feasible way to wean themselves off the crappy ad teet. And until they do, I'll continue to *not* support them by blocking said ads.

If the adoption of iOS 9 even remotely follows the adoption of all the previous versions of iOS, content blocking will soon be available to millions of people on mobile. Rene Ritchie isn't oblivious to this fact. John Gruber made a point to [link][26] to Ritchie's [response piece][27], in which Ritchie outlined many of the problems facing iMore (and the web at large). I hope iMore figures it out. It would be a shame for them to not succeed.

[^1]: Looking in your direction, [9to5Mac][a] and [iDownloadBlog][b]
[^2]: And, moreover, their *own* JavaScript implementation---remember [JScript][c]?

[a]: https://d.pr/i/13nUn+ "All of 9to5Mac's crazy JavaScript"
[b]: https://d.pr/i/CJPm+ "All of iDownloadBlog's crazy JavaScript"
[c]: https://en.wikipedia.org/wiki/JScript "Wikipedia: Script"

[1]: /tags/Ditching%20Webfonts "Posts tagged 'Ditching Webfonts"
[2]: /2015/7/15/ditching-webfonts "My post about leaving webfonts behind"
[3]: /2015/7/19/ditching-webfonts-part-ii-hoefler-webfonts-are-prettier-but-slower "My post about turning off webfonts, and how I eventually turned them back on"
[4]: http://daringfireball.net/2015/07/safari_content_blocker_imore "John Gruber on Content Blockers for iOS 9"
[5]: http://imore.com "Mobile Nation's site all about Apple stuffs"
[6]: http://pxlnv.com/linklog/safari-content-blockers-shit-ass-websites/ "Ad blockers and what they can do to crappy websites"
[7]: https://d.pr/i/19HMF+ "All of  iMore's crazy JavaScript"
[8]: http://9to5mac.com/2015/06/10/block-ads-ios-9-safari-iphone/ "9to5Mac on Safari Content Blockers in iOS 9"
[9]: https://d.pr/v/9TLn+ "Testing TheOverAnalyzed without JavaScript"
[10]: https://en.wikipedia.org/wiki/Cascading_Style_Sheets#Difficulty_with_adoption "Wikipedia: Adopting CSS"
[11]: https://en.wikipedia.org/wiki/World_Wide_Web_Consortium "Wikipedia: W3C"
[12]: https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_2.1 "Wikipedia: CSS 2.1"
[13]: https://en.wikipedia.org/wiki/IPhone_(1st_generation)#Release "Wikipedia: Original iPhone"
[14]: https://en.wikipedia.org/wiki/IPhone_6#Hardware "Wikipedia: iPhone 6 Hardware"
[15]: https://en.wikipedia.org/wiki/JavaScript "Wikipedia: JavaScript"
[16]: https://d.pr/i/1anSZ+ "Look at all those scripts"
[17]: http://murphyapps.co/blog/2015/6/24/an-hour-with-safari-content-blocker-in-ios-9 "Developer of iOS 9 ad blocker Crystal, on the performance results of said ad blocker"
[18]: https://d.pr/i/1cUBo+ "Regular page load of TheOverAnalyzed"
[19]: https://d.pr/i/1iNdv+ "No-JS page load of TheOverAnalyzed"
[20]: http://www.daringfireball.net "John Gruber's personal blog, Daring Fireball"
[21]: http://www.loopinsight.com/ "Jim Dalrymple's blog, The Loop"
[22]: http://www.sixcolors.com "Jason Snell's blog, Six Colors"
[23]: http://decknetwork.net "An ad network whose ads are served by Daring Fireball, Marco.org, Six Colors, Fonts In Use, and many other biggish small blogs"
[24]: https://twitter.com/Coudal "The DECK and Field Notes founder, Jim Coudal, on Twitter"
[25]: https://adblockplus.org/ "Desktop adblocker"
[26]: http://daringfireball.net/linked/2015/07/09/ritchie-bad-ads "John Gruber's piece on iMore sucking"
[27]: http://www.imore.com/content-blockers-bad-ads-and-what-were-doing-about-it "Rene Ritchie admitting that iMore sucks, and talking about how to fix it"