Title: Leaving Squarespace Part II: Modifying Files to Play Nice With Camel  
Date: 2015-06-26 11:00  
Description: Almost all of my old posts were based on local Markdown files. I had to modify them slightly in order to work with Camel.  
Tags: Meta, Camel, Leaving Squarespace  
Image: https://d.pr/i/1em7V+  

*This is Part II of the series entitled [Leaving Squarespace][1], in which I outline how I left a traditional CMS and dived deep into [Casey Liss][2]'s static blogging engine, [Camel][3]. If you haven't already done so, you should read the [first][4] post in the series. And when you're done with this post, you can read the [next][5] one as well.*
<!-- {em:.topstory) -->

### Introduction

A goal of mine from the beginning was to port over the ~250 posts I had accrued while using Squarespace. Not only would redirects have to get sorted out, I also needed to make sure that the old posts looked correct in the new platform. Modifying my plain text files for use with Camel wasn't particularly difficult. It was, however, extremely time-consuming. In preparation for the move, I made tweaks to metadata, images, and footnotes.

### Metadata

#### Previously On TheOverAnalyzed

Before transitioning to Camel, I adopted a hybrid metadata system inspired by both [Byword's][6] [MultiMarkdown guide][7], and, perhaps fortuitously, [Camel][8] itself. All of my posts since [TheOverAnalyzed 2.0][9] had `Title:`, `Date:`, and `Link:` metadata. Byword is smart enough to know that properly-formatted text placed at the top of the document denotes metadata. Byword would then omit that when parsed to HTML.

<figure>
	<img class="inlineTwo" src="https://d.pr/i/1lii9+" alt="MultiMarkdown metadata in Byword" title="MultiMarkdown metadata in Byword">
	<img class="inlineTwo" src="https://d.pr/i/13n6Z+" alt="Metadata isn't parsed when exporting to `body`-style HTML" title="Metadata isn't parsed when exporting to `body`-style HTML">
	<figcaption>Byword's MultiMarkdown-style metadata and HTML parse</figcaption>
</figure>

Byword's metadata support is everything I would want in a plain text filing system. The metadata's there when viewing the Markdown source, but disappears when parsed to HTML. I wish Camel supported metadata in the format that Byword supports, but it doesn't out of the box.[^1]

#### Metadata In Camel

Unlike Squarespace, in Camel, having metadata within the actual Markdown files is absolutely *necessary*. Casey designed his blogging engine such such that `camel.js` generates all the posts and the rest of the website using these template files. These template files specify page attributes such as page headers, page footers, etc. The template files are based on Handlebars `{{strings}}`. Camel uses metadata strings to piece together the parts of the posts, such as the post header, the post footer, etc. And because of the way the Handlebars script works in conjunction with Camel, metadata *must* be called out in a particular way. In the default configuration of Camel, that's via a `@@` prefix.

![Camel looks at the top of documents for '@@' prefixes, which denote metadata.][10]

### Images

#### Previously On TheOverAnalyzed

In the months leading up to [TheOverAnalyzed 3.0][11], I transitioned from Byword to [MultiMarkdown Composer][12]. Fletcher Penney's app offered MultiMarkdown 3 features that were crucial to my workflow, such as `{{TOC}}` for auto-table-of-contents, and most importantly, lots of nifty image syntax.

For instance, if I wanted to embed an image with caption in MultiMarkdown Composer, this is all I would have to write:

```md
![Caption][alt]

[alt]: link
```

And this is the resultant HTML:

```html
<figure>
	<img src="link" alt="alt"/>
	<figcaption>Caption</figcaption>
</figure>
```

Byword, for whatever reason, doesn't offer easy image-captioning. MultiMarkdown Composer was the only way to achieve easy image captions, so I started using it instead of Byword.

#### I Can't Get No

While MultiMarkdown Composer surely got the job done, it never quite felt like *home.* Yes, I realize how weird it may seem for me to describe a plain-text editor as homey. But it's true: Byword's UI/UX is just *better* than MultiMarkdown Composer's. [Metaclassy][14] did a [great job][15] with gradients and shadow effects, as well as other pleasing design touches. Still, I was stuck with the latter due to my dependence on the full MultiMarkdown 3 spec for easy image captions. Moving to Camel was an opportunity to re-examine my writing workflow. Within Camel, perhaps Byword could find a new purpose?

#### Images In Camel

Camel uses an [npm][16] package called [`markdown-it`][17], which is what actually takes the Markdown files and parses them to HTML. `markdown-it`, even with plugins, does not support *any* of the nifty image syntax offered by MultiMarkdown 3 and MultiMarkdown Composer. So the easy image syntax I used in the example above would not work using `markdown-it` and Camel. This nullified my reliance on MultiMarkdown Composer and made it so that I could [go back to using Byword][18]. 

Using Byword for future posts was an excellent prospect. But that didn't make the old posts formatted with MultiMarkdown 3 syntax play nice with Camel. In order for those posts to get parsed correctly by `markdown-it`, I would have to make changes to the image syntax. 

Unsure of what image syntax Camel would support, I followed Casey's lead. As has been my [M.O.][19] for the past year, I peaked at the [source][20] for one of his [posts][21] containing an image with a caption.

Here's what I found:

```html
<figure class="figleft">
	<img src="http://www.caseyliss.com/images/2015/3/iphone.png" alt="Steve Jobs debuts the iPhone" width="300" />
	<figcaption>Are You Getting It?</figcaption>
</figure>
```

Casey was using <s>regular-old HTML</s> HTML5 for his images. 

At first I scoffed at this. Why would I want to type out all that code---[John Siracusa][22] style---just for images? I even considered omitting image captions entirely, as the 'standard' Markdown image syntax of `![](image link)` is parsed perfectly by `markdown-it`. However, captions are important to me.

The biggest reason to use Markdown is that it's essentially shorthand HTML. Typing all that `<figure>` stuff is a pain not because it's difficult to understand the syntax, but because it just takes so much time to type all that out. I needed time-saving if I was going to use regular HTML syntax for images.

Here's what I decided to do:

1. I created a 'starter' post file called `template.md`, which lives in my Camel folder at `~/TheOverAnalyzed/Camel`, and has a [shortcut on the Dock][23].
2. The contents of that template file are thus:
	
	![Template file][24]
	
3. When I need to embed a picture, I can just copy and paste the `<figure>` syntax I prefer[^2] from `template.md`[^3]

	Having the `<figure>` syntax pre-populated makes embedding images easier because it eliminates much of the time associated with writing pure HTML[^4] Once I wrapped my brain around that, I began the long and tedious process of opening my old posts and switching all the MultiMarkdown 3 image syntax to regular HTML. 
	
### Footnotes

#### Previously On TheOverAnalyzed

My previous usage of MultiMarkdown Composer would also cause me trouble with footnotes in Camel. Previously, I wrote all inline footnotes in the following format:

```md
Text.[^Inline footnote]
```

This would then get parsed to this:

```html
<p>Text.<a href="#fn:1" id="fnref:1" title="see footnote" class="footnote">[1]</a></p>

<div class="footnotes">
<hr />
<ol>

<li id="fn:1">
<p>Inline footnote <a href="#fnref:1" title="return to article" class="reversefootnote">&#160;&#8617;</a></p>
</li>

</ol>
</div>
```

Because I was using the parsed HTML as the content for my posts in Squarespace, it didn't matter that Byword couldn't understand inline or multi-paragraph footnotes.

#### Footnotes In Camel

Out of the box, Camel includes the `markdown-it` plugin [`markdown-it-footnote`][25], which allows for MultiMarkdown 3-style inline and multi-paragraph footnotes. 

<figure>
	<img class="inlineTwo" src="https://d.pr/i/1aazM+" alt="Un-parsed text in Byword" title="Un-parsed text in Byword">
	<img class="inlineTwo" src="https://d.pr/i/12gMj+" alt="Parsed text in Byword" title="Parsed text in Byword">
	<figcaption>Byword's footnote parsing</figcaption>
</figure>

Neither inline footnotes nor multi-paragraph footnotes are supported by Byword. But as long as I format the footnotes syntax correctly, everything will display properly in the parsed HTML.

![While Byword may not be able to understand inline and/or multi-paragraph footnotes, Camel can thanks to 'markdown-it-footnote'][26]

***

During the two solid weeks I spent transitioning to Camel, most of my time dealt with tweaking how the site looked (the topic of a future post in this series). Second only to that was re-formatting my old posts. Most days, I would get home around 5-6 PM, and after eating dinner, I was glued to my MacBook, re-writing the image syntax and making other small. It was arduous, but so worth it in the end. Stay tuned for the next post in the series.

<aside class="update">
 
 ### Update: MultiMarkdown-style Metadata in Camel
 
November 16, 2015
<!-- {.updatetime} -->

Casey kindly added [MultiMarkdown-style metadata to Camel][28]!

</aside>

[^1]: I haven't spent much time looking into this aspect of Casey's default `camel.js` configuration, but it seems to me that `Handlebars.js` needs some sort of [modifier][a] to call out "Hey, this next string of text is metadata." I can't imagine a scenario in which Byword's [cleaner] metadata auto-format would work with Handlebars.
[^2]: In a future post, I'll talk about some of the `classes` I made. For images, there's a `wide` class for larger images; `figleft` for left-justified floating images; 'figright` for right-justified floating images; and more.
[^3]: When writing a new post, I open `template.md` and start typing. Note that I have [locked][b] the `template.md` file. So when I attempt to modify `template.md`, Byword automatically prompts me to [Duplicate][c] it. This prevents accidentally over-writing the template text with actual links and so on.
[^4]: I know there's [Text Expander][d], and I don't doubt that an app like [BBEdit][e] or [Visual Studio Code][f] probably has some sort of 'snippets' feature. I might check those out someday. But for now, Byword works for me.

[a]: https://d.pr/i/1gz4O+ "Metadata marker in Camel"
[b]: http://osxdaily.com/2010/08/11/lock-files-and-folders-in-mac-os-x/ "How to Lock Files and Folders in Mac OS X"
[c]: https://support.apple.com/en-us/HT202255 "OS X Lion: About Auto Save and Versions"
[d]: https://smilesoftware.com/textexpander "TextExpander"
[e]: http://www.barebones.com/products/bbedit "BBEdit"
[f]: https://code.visualstudio.com/ "Visual Studio Code"

[1]: /tags/Leaving%20Squarespace "Posts tagged 'Leaving Squarespace'"
[2]: http://twitter.com/caseyliss "Casey Liss on Twitter"
[3]: https://github.com/cliss/camel "Camel on GitHub"
[4]: /2015/6/17/leaving-squarespace-part-I-getting-started-with-camel "Link to Part I of the series 'Leaving Squarespace'"
[5]: /2015/7/6/leaving-squarespace-part-iii-making-camel-my-own "The final post in the series 'Leaving Squarespace'"
[6]: https://itunes.apple.com/us/app/byword/id420212497?mt=12&at=1l3vx9s "Byword on the App Store"
[7]: http://bywordapp.com/markdown/guide.html "Byword MultiMarkdown guide"
[8]: https://github.com/cliss/camel#files "Section of Camel's GitHub page about how the filesystem works"
[9]: /2015/2/25/designing-theoveranalyzed-20 "My post about TheOverAnalyzed 2.0"
[10]: https://d.pr/i/1gomf+ "Camel and metadata"
[11]: /2015/6/1/introducing-theoveranalyzed-30 "My post introducing TheOverAnalyzed"
[12]: http://multimarkdown.com/ "MultiMarkdown"
[13]: link
[14]: http://metaclassy.com/ "Creators of Byword"
[15]: http://www.engadget.com/2013/06/04/byword-2-0-for-mac-adds-publishing-more/ "Engadget's post on Byword 2 for the Mac"
[16]: http://npmjs.com "npmjs"
[17]: https://www.npmjs.com/package/markdown-it "npmjs page for `markdown-it`"
[18]: https://d.pr/i/Q2Wv+ "Dock.app on the left side of the screen"
[19]: https://en.wikipedia.org/wiki/Modus_operandi "Wikipedia: Modus operandi"
[20]: http://www.caseyliss.com/2015/3/13/are-you-getting-it.md "Source file for Casey's post 'Are You Getting It'"
[21]: http://www.caseyliss.com/2015/3/13/are-you-getting-it "Casey's post, 'Are You Getting It'"
[22]: http://hypercritical.co/ "John Siracusa's blog, Hypercritical.co"
[23]: https://d.pr/i/1bOn2+ "template.md on the Dock"
[24]: https://d.pr/i/1hwpq+ "Contents for my starting-point for most posts, template.md"
[25]: https://www.npmjs.com/package/markdown-it-footnote "mpnjs page for `markdown-it-footnote`"
[26]: https://d.pr/i/12mep+ "Footnotes"
[27]: https://github.com/cliss/camel/commit/b523b5c8a034fec4402584efe6a18fa62cc21691 "Commit adding MultiMarkdown-style metadata"