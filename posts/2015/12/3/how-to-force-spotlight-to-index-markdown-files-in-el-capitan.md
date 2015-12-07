Title: How to Force Spotlight to Index Markdown Files in El Capitan  
Date: 2015-12-03 13:53  
Description: Sometime this past summer, Spotlight in El Capitan stopped indexing Markdown files. Here's how to fix that.  
Tags: Power User, Spotlight  
Image: http://d.pr/i/16cND+  

![This was the key][d]

Sometime this past summer, I noticed Spotlight was no longer indexing my [Markdown][wikipedia] documents. This was problematic because I rely on Spotlight search to locate documents containing markup I want to change. For instance, I recently wanted to decrease my reliance on the generic `<div>` container, and instead use more [semantic][wikipedia 2] tags such as [`<section>`][w3] and [`<aside>`][w4]. I would have liked to have been able to search Spotlight for all my posts containing the string of text `<div class="update">`, so I could change that to `<aside class="update">`.

But searching for such a string of text like `<div class="update">` led to zero results. I was forced to simply open [every single one of my files][theoveranalyzed] and search for the string and replace as necessary. Needless to say, this was both incredibly frustrating and an incredible waste of time.

There were some clues. [Console.app][wikipedia 3] was constantly throwing Spotlight errors such as [`XPC connection was invalidated`][d 2], so I assumed it was some Spotlight error I introduced via `brew` or some other command line hackery. I scoured the web for answers. Almost everything pointed to El Capitan's [rootless][stackexchange] [issues][google].

Several clean restores and countless [Spotlight re-indexes][apple] later, the issue *still* wasn't fixed.

It was maddening.

<p><img class="screenshot" src="http://d.pr/i/16UH6+" alt="I hate you Spotlight" title="I hate you Spotlight"></p>

Then this morning I had a breakthrough.

*What if it's not entirely a Spotlight issue? What if it's a Markdown issue?*

I did some more searching and landed on Hilton Lipschitz's [A Yosemite Markdown Spotlight Importer][hiltmon].

Turns Out&trade; this isn't an El Capitan-only problem. It's been around for years: OS X has trouble indexing Markdown files with the extension `.md`. I tested this by renaming my `about.md` file to `about.txt`. I waited a few seconds, and then Spotlight easily found a string of text contained in the file. I then changed it back to `.md` and Spotlight failed to find `about.md` given the same search query as before.

Now, I'm not sure why this is something that only started happening a few months ago. Spotlight had no problems finding text strings within Markdown documents before this period of Spotlight failures.

What's important is that the suggestion found on Lipschitz's page worked for me (with a little tweaking).

Here's how I fixed it:

1. Lipschitz's page linked to a [post][brettterpstra] from Markdown guru Brett Terpstra

	In it, Terpstra uploaded an `mdimporter` fix to address these Spotlight/Markdown problems
	
	Download that ZIP archive and uncompress it

2. Move `Markdown.mdimporter` to `/Library/Spotlight`

	<p><img class="screenshot" src="http://d.pr/i/14Yuo+" alt="Put the mdimporter here" title="Put the mdimporter here"></p>
	
	**This is important:** Don't move it to the "user" directory as Lipschitz suggests (`~/Library/Spotlight`)---put it in the System's Library folder as I've detailed above
	
3. Open `Terminal.app` and run the following command:

	```
	mdimport -r ~/Library/Spotlight/Markdown.mdimporter
	```
	
4. You *could* wait for Spotlight to fix itself. However, for impatient types (myself included), go ahead and [force Spotlight to reindex][cultofmac]:[^youcould]

	```
	sudo mdutil -E /Volumes/Macintosh\ HD/
	```
Ahh.

<p><img class="screenshot" src="http://d.pr/i/19g9D+" alt="Ahh" title="Ahh"></p>

***

Unsurprisingly, I fixed this annoying error only *after* I spent weeks pushing TheOverAnalyzed toward a state of semantic HTML zen. Figures. In other news, I ran every single page through the W3C's validator to make sure my site was as validated as it could be. The validator still thinks I need section headings for footnote sections (`<section class="footnotes">`), but I can't do that until I learn more [JavaScript][github]. And then there's the Safari 9+'s "Pinned Tab" implementation using `mask-icon` and `color` attributes---that's still not officially supported by the HTML5 standard. But that's pretty good for a web design newbie like myself.

Now, onto more website fiddling.

[^youcould]: You could also force Spotlight to reindex only the volume/folder containing the Markdown files by appending the path like so:
	```
	sudo mdutil -E /Volumes/Macintosh\ HD/Users/Anthony/Websites/TheOverAnalyzed/posts/
	```
	This isn't useful if you have Markdown files all over the place (as I do). If you're like me, just reindex the whole drive.

[apple]: https://support.apple.com/en-us/HT201716 "Apple: 'Spotlight: How to re-index folders or volumes'"
[brettterpstra]: http://brettterpstra.com/2011/10/18/fixing-spotlight-indexing-of-markdown-content/ "Brett Terpstra fix for this problem"
[cultofmac]: http://www.cultofmac.com/154458/re-index-spotlight-from-the-terminal-re-gain-valuable-time-for-life-os-x-tips/ "Terminal command to force Spotlight to reindex"
[d]: http://d.pr/i/16cND+ "This was the key"
[d 2]: http://d.pr/i/1b0WU+ "Sigh"
[github]: https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer "Vitaly Puzrin's page for adding my own code to markdown-it-footnote"
[google]: https://www.google.com/webhp?hl=en#safe=off&amp;hl=en&amp;q=spotlight+%22XPC+connection+was+invalidated%22 "Rootless to blame?"
[hiltmon]: http://hiltmon.com/blog/2015/11/17/a-yosemite-markdown-spotlight-importer/ "A Yosemite Markdown Spotlight Importer"
[stackexchange]: http://apple.stackexchange.com/questions/193368/what-is-the-rootless-feature-in-el-capitan-really "Rootless in El Capitan"
[theoveranalyzed]: /count "Post count on TheOverAnalyzed"
[w3]: http://www.w3.org/wiki/HTML/Elements/section "W3C: Section Element"
[w4]: http://www.w3.org/wiki/HTML/Elements/aside "W3C: Aside Element"
[wikipedia]: https://en.wikipedia.org/wiki/Markdown "Wikipedia: Markdown"
[wikipedia 2]: https://en.wikipedia.org/wiki/Semantic_HTML "Wikipedia: 'Semantic HTML'"
[wikipedia 3]: https://en.wikipedia.org/wiki/Console_(OS_X) "Wikipedia: Console (OS X)"