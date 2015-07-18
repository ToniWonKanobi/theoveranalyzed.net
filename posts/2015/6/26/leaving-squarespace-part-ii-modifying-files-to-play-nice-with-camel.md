@@ Title=Leaving Squarespace Part II: Modifying Files To Play Nice With Camel  
@@ Date=2015-06-26T11:00:00-07:00  
@@ Description=Almost all of my old posts were based on local Markdown files. I had to modify them slightly in order to work with Camel.  
@@ Tags=Camel, Leaving Squarespace, TheOverAnalyzed, TheOverAnalyzed 3.0, meta  
@@ Image=http://d.pr/i/1em7V+  

<div class="topstory">This is Part II of the series entitled <a href="http://www.theoveranalyzed.net/tags/Leaving%20Squarespace">Leaving Squarespace</a>, in which I outline how I left the CMS giant and dived deep into <a href="http://www.twitter.com/caseyliss">Casey Liss</a>'s static blogging engine, <a href="https://github.com/cliss/camel">Camel</a>. 
</div>

<h2>Contents</h2>

[[TOC]]

# Introduction

A goal of mine from the beginning was to port over the ~250 posts I had accrued while using Squarespace. Not only would redirects have to get sorted out, I also needed to make sure that the old posts looked correct in the new platform. Modifying my plain text files for use with Camel wasn't particularly difficult. It was, however, extremely time-consuming. In preparation for the move, I made tweaks to metadata, images, and footnotes.

# Metadata

## Previously On TheOverAnalyzed

Before transitioning to Camel, I adopted a hybrid metadata system inspired by both [Byword's][bywordapp] [MultiMarkdown guide][bywordapp 2], and, perhaps fortuitously, [Camel][github] itself. All of my posts since [TheOverAnalyzed 2.0][theoveranalyzed] had `Title:`, `Date:`, and `Link:` metadata. Byword is smart enough to know that properly-formatted text placed at the top of the document denotes metadata. Byword would then omit that when parsed to HTML.

<figure class="twoleft">
	<a class="nohover" href="http://d.pr/i/1lii9+">
		<img src="http://d.pr/i/1lii9+" alt="Old style metadata" />
	</a>
</figure>

<figure class="tworight">
	<a class="nohover" href="http://d.pr/i/13n6Z+">
		<img src="http://d.pr/i/13n6Z+" alt="Smart Byword" />
	</a>
</figure>

Byword's metadata support is everything I would want in a plain text filing system. The metadata's there when viewing the Markdown source, but disappears when parsed to HTML. I wish Camel supported metadata in the format that Byword supports, but it doesn't out of the box.[^ma]

## Metadata In Camel

Unlike Squarespace, in Camel, having metadata within the actual Markdown files is absolutely *necessary*. Casey designed his blogging engine such such that `camel.js` generates all the posts and the rest of the website using these template files. These template files specify page attributes such as page headers, page footers, etc. The template files are based on Handlebars `{{strings}}`. Camel uses metadata strings to piece together the parts of the posts, such as the post header, the post footer, etc. And because of the way the Handlebars script works in conjunction with Camel, metadata *must* be called out in a particular way. In the default configuration of Camel, that's via a `@@` prefix.

<figure>
	<a class="nohover" href="http://d.pr/i/1gomf+">
		<img src="http://d.pr/i/1gomf+" alt="Camel and metadata" />
	</a>
	<figcaption>Camel looks at the top of documents for <code>@@</code> prefixes, which denote metadata.</figcaption>
</figure>

# Images

## Previously On TheOverAnalyzed

In the months leading up to [TheOverAnalyzed 3.0][theoveranalyzed 3], I transitioned from Byword to [MultiMarkdown Composer][multimarkdown]. Fletcher Penney's app offered MultiMarkdown 3 features that were crucial to my workflow, such as `{{TOC}}` for auto-table-of-contents, and most importantly, lots of nifty image syntax.

For instance, if I wanted to embed an image with caption in MultiMarkdown Composer, this is all I would have to write:

```
![Caption][alt]

[alt]: link
```

And this is the resultant HTML:

<img src="http://d.pr/i/1lCHL+" />

Byword, for whatever reason, doesn't offer easy image-captioning. MultiMarkdown Composer was the only way to achieve easy image captions, so I started using it instead of Byword. 

## I Can't Get No

While MultiMarkdown Composer surely got the job done, it never quite felt like *home.* Yes, I realize how weird it may seem for me to describe a plain-text editor as homey. But it's true: Byword's UI/UX is just *better* than MultiMarkdown Composer's. [Metaclassy][metaclassy] did a [great job][gj] with gradients and shadow effects, as well as other pleasing design touches. Still, I was stuck with the latter due to my dependence on the full MultiMarkdown 3 spec for easy image captions. Moving to Camel was an opportunity to re-examine my writing workflow. Within Camel, perhaps Byword could find a new purpose?

## Images In Camel

Camel uses an [npm][npm] package called [`markdown-it`][mdi], which is what actually takes the Markdown files and parses them to HTML. `markdown-it`, even with plugins, does not support *any* of the nifty image syntax offered by MultiMarkdown 3 and MultiMarkdown Composer. So the easy image syntax I used in the example above would not work using `markdown-it` and Camel. This nullified my reliance on MultiMarkdown Composer and made it so that I could [go back to using Byword][d]. 

Using Byword for future posts was an excellent prospect. But that didn't make the old posts formatted with MultiMarkdown 3 syntax play nice with Camel. In order for those posts to get parsed correctly by `markdown-it`, I would have to make changes to the image syntax. 

Unsure of what image syntax Camel would support, I followed Casey's lead. As has been my [M.O.][wikipedia] for the past year, I peaked at the [source][caseyliss] for one of his [posts][caseyliss 2] containing an image with a caption. 

Here's what I found:

```
<figure class="figleft">
	<img src="http://www.caseyliss.com/images/2015/3/iphone.png" alt="Steve Jobs debuts the iPhone" width="300" />
	<figcaption>Are You Getting It?</figcaption>
</figure>
```

Casey was using regular-old HTML for his images. 

At first I scoffed at this. Why would I want to type out all that code -- [John Siracusa][hypercritical] style -- just for images? I even considered omitting image captions entirely, as the 'standard' Markdown image syntax of `![](image link)` is parsed perfectly by `markdown-it`. However, captions are important to me.

The biggest reason to use Markdown is that it's essentially shorthand HTML. Typing all that `<figure>` stuff is a pain not because it's difficult to understand the syntax, but because it just takes so much time to type all that out. I needed time-saving if I was going to use regular HTML syntax for images.

Here's what I decided to do:

1. I created a 'starter' post file called `template.md`, which lives in my Camel folder at `~/TheOverAnalyzed/Camel`, and has a [shortcut on the Dock][d 3].
2. The contents of that template file are thus:
	<img src="http://d.pr/i/1hwpq+" />
3. When I need to embed a picture, I can just copy and paste the `<figure>` syntax I prefer[^fi] from `template.md`[^lo]

Having the `<figure>` syntax pre-populated makes embedding images easier because it eliminates much of the time associated with writing pure HTML[^ik] Once I wrapped my brain around that, I began the long and tedious process of opening my old posts and switching all the MultiMarkdown 3 image syntax to regular HTML. 

# Footnotes

## Previously On TheOverAnalyzed

My previous usage of MultiMarkdown Composer would also cause me trouble with footnotes in Camel. Previously, I wrote all inline footnotes in the following format:

```
Text.[^Inline footnote]
```

This would then get parsed to this:

```
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

## Footnotes In Camel

Out of the box, Camel includes the `markdown-it` plugin [`markdown-it-footnote`][mif], which allows for MultiMarkdown 3-style inline and multi-paragraph footnotes. 

<figure class="twoleft">
	<a class="nohover" href="http://d.pr/i/1aazM+">
		<img src="http://d.pr/i/1aazM+" alt="non-parsed text in Byword" />
	</a>
</figure>

<figure class="tworight">
	<a class="nohover" href="http://d.pr/i/12gMj+">
		<img src="http://d.pr/i/12gMj+" alt="parsed text in Byword" />
	</a>
</figure>

Neither inline footnotes nor multi-paragraph footnotes are supported by Byword. But as long as I format the footnotes syntax correctly, everything will display properly in the parsed HTML.

<figure>
	<a class="nohover" href="http://d.pr/i/12mep+">
		<img src="http://d.pr/i/12mep+" alt="footnotes" />
	</a>
	<figcaption>While Byword may not be able to understand inline and/or multi-paragraph footnotes, Camel can thanks to <code>markdown-it-footnote</code></figcaption>
</figure>

<hr class="small" />

During the two solid weeks I spent transitioning to Camel, most of my time dealt with tweaking how the site looked (the topic of a future post in this series). Second only to that was re-formatting my old posts. Most days, I would get home around 5-6 PM, and after eating dinner, I was glued to my MacBook, re-writing the image syntax and making other small. It was arduous, but so worth it in the end. Stay tuned for the next post in the series.

[^fi]: In a future post, I'll talk about some of the `classes` I made. For images, there's a `wide` class for larger images; `figleft` for left-justified floating images; 'figright` for right-justified floating images; and more. 
[^ik]: I know there's [Text Expander][smilesoftware], and I don't doubt that an app like [BBEdit][barebones] or [Visual Studio Code][visualstudio] probably has some sort of 'snippets' feature. I might check those out someday. But for now, Byword works for me.
[^lo]: When writing a new post, I open `template.md` and start typing. Note that I have [locked][macworld] the `template.md` file. So when I attempt to modify `template.md`, Byword automatically prompts me to [Duplicate][apple] it. This prevents accidentally over-writing the template text with actual links and so on. 
[^ma]: I haven't spent much time looking into this aspect of Casey's default `camel.js` configuration, but it seems to me that `Handlebars.js` needs some sort of [modifier][d 5] to call out "Hey, this next string of text is metadata." I can't imagine a scenario in which Byword's [cleaner] metadata auto-format would work with Handlebars. 

[apple]: https://support.apple.com/en-us/HT202255
[barebones]: http://www.barebones.com/products/bbedit
[bywordapp]: http://bywordapp.com/
[bywordapp 2]: http://bywordapp.com/markdown/guide.html
[caseyliss]: http://www.caseyliss.com/2015/3/13/are-you-getting-it.md
[caseyliss 2]: http://www.caseyliss.com/2015/3/13/are-you-getting-it
[d]: http://d.pr/i/Q2Wv+
[d 3]: http://d.pr/i/1bOn2+
[d 5]: http://d.pr/i/1gz4O+
[github]: https://github.com/cliss/camel#files
[gj]: http://www.engadget.com/2013/06/04/byword-2-0-for-mac-adds-publishing-more/
[hypercritical]: http://hypercritical.co/
[lt]: imagelink
[macworld]: http://hints.macworld.com/article.php?story=20010328105037397
[mdi]: https://www.npmjs.com/package/markdown-it
[metaclassy]: http://metaclassy.com/
[mif]: https://www.npmjs.com/package/markdown-it-footnote
[multimarkdown]: http://multimarkdown.com/
[npm]: http://npmjs.com
[smilesoftware]: http://smilesoftware.com/TextExpander/index.html
[theoveranalyzed]: http://www.theoveranalyzed.net/2015/2/25/designing-theoveranalyzed-20
[theoveranalyzed 2]: http://www.theoveranalyzed.net/2015/3/4/byword-multimarkdown-composer-and-more#byword-versus-multimarkdown-composer
[theoveranalyzed 3]: http://www.theoveranalyzed.net/2015/6/1/introducing-theoveranalyzed-30
[visualstudio]: https://code.visualstudio.com/
[wikipedia]: https://en.wikipedia.org/wiki/Modus_operandi