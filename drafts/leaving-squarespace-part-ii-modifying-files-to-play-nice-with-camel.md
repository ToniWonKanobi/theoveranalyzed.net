@@ Title=Leaving Squarespace Part II: Modifying Files To Play Nice With Camel  
@@ Date=2015-06-15 13:38    
@@ Description=Almost all of my old posts were based on local Markdown files. I had to modify them slightly in order to work with Camel.  
@@ Tags=Camel, Leaving Squarespace, TheOverAnalyzed, TheOverAnalyzed 3.0, meta  
@@ Image=http://d.pr/i/1em7V+  

<center class="topstory">This is Part II of the series entitled <a href="http://www.theoveranalyzed.net/tags/Leaving%20Squarespace">Leaving Squarespace</a>, in which I outline how I left the CMS giant and dived deep into <a href="http://www.twitter.com/caseyliss">Casey Liss</a>'s static blogging engine, <a href="https://github.com/cliss/camel">Camel</a>. As always, check Roger Stringer's thorough post <a href="http://www.sitepoint.com/deploying-camel-js-blog-heroku/">here</a> for more in-depth information, such as how to install <code>npm</code> and <code>node</code>.
</center>

<figure>
	<a class="nohover" href="http://d.pr/i/1em7V+">
		<img src="http://d.pr/i/1em7V+" alt="HandleBars" />
	</a>
	<figcaption><code>camel.js</code> leverages <a href="http://handlebarsjs.com/"><code>Handlebars.js</code></a> for metadata</figcaption>
</figure>

## Introduction

Modifying my plain-text files for use with Camel wasn't particularly difficult. It was, however, extremely time-consuming. I made tweaks to metadata, images, and general Markdown syntax in preparation for my move to Camel.

# Metadata

## Previously On TheOverAnalyzed

Before transitioning to Camel, I adopted a hybrid metadata system inspired by both [Byword's](http://bywordapp.com/) [MultiMarkdown guide](http://bywordapp.com/markdown/guide.html), and, perhaps fortuitously, Camel itself. All my posts since [TheOverAnalyzed 2.0](http://www.theoveranalyzed.net/2015/2/25/designing-theoveranalyzed-20) had `Title:`, as well as `Date:`, and `Link:` metadata, specified in the top of each Markdown document. Byword is smart enough to know that text placed there, when proceeded by a colon (`:`) and ending with a double-space (for a line break `<br>`), denotes *metadata*. Byword would then omit that when parsed to HTML.

<figure class="left">
	<a class="nohover" href="http://d.pr/i/1lii9+">
		<img src="http://d.pr/i/1lii9+" alt="Old style metadata" />
	</a>
	<figcaption>Byword auto-magically recognized metadata</figcaption>
</figure>

<figure class="right">
	<a class="nohover" href="http://d.pr/i/13n6Z+">
		<img src="http://d.pr/i/13n6Z+" alt="Smart Byword" />
	</a>
	<figcaption>Because Byword recognizes metadata, its omitted when parsed to HTML</figcaption>
</figure>

Byword's metadata support is everything I would want. It's there when viewing the plain text file in plain text, and it disappears when parsed to HTML. I wish Camel supported metadata in the format that Byword supports, but it doesn't out of the box.[^ma] Not a deal-breaker, just is what it is.

## Metadata In Camel

In Camel, metadata isn't extraneous like it was while on Squarespace. In Camel, metadata is absolutely *necessary*. Casey wrote Camel such that the script `camel.js` pieces together all the posts -- and the whole website actually -- using templates. There are several open-ended template files for page headers, page footers, post headers, post footers, etc. These templates are based on Handlebars `{{strings}}`. `camel.js` uses strings called out as metadata to piece together important parts of the posts such as the post headers, post footers, and so on. And because of the way the Handlebars script works, metadata *must* be called out in a particular way. In Camel, that's via `@@`.

<figure>
	<a class="nohover" href="http://d.pr/i/1gomf+">
		<img src="http://d.pr/i/1gomf+" alt="Camel and metadata" />
	</a>
	<figcaption>Camel looks at the top of documents for <code>@@ _Metadata_Name_: _Metadata_Value_</code></figcaption>
</figure>

Once metadata was squared away, Camel was able to parse my plain text-files accordingly:

<figure>
	<a class="nohover" href="http://d.pr/i/1c3kt+">
		<img src="http://d.pr/i/1c3kt+" alt="test post" />
	</a>
	<figcaption>Proof that Camel is indeed parsing the plain text Markdown files in the directory.</figcaption>
</figure>

I went back through all my posts and modified their metadata section accordingly. 

# Markdown

## Previously On TheOverAnalyzed

In the months leading up to TheOverAnalyzed 3.0, I had all but [given up](http://www.theoveranalyzed.net/2015/3/4/byword-multimarkdown-composer-and-more#byword-versus-multimarkdown-composer) on Byword. [MultiMarkdown Composer](http://multimarkdown.com/) offered so many more MultiMarkdown features, such as `{{TOC}}` for auto-table-of-contents, and lots of other nifty image syntax.

For instance, if I wanted to embed an image with caption in MultiMarkdown Composer, this is all I would have to write:

```md
![Caption][alt]

[alt]: imagelink
```

How easy is that? Byword, for whatever reason, didn't (and still doesn't) offer easy image-captioning. Note that I stopped using Byword not because I liked MultiMarkdown Composer better. No, instead, I stopped using Byword because MultiMarkdown Composer was the only way to achieve the posting goals that I had set. Simply put, *I wanted image captions*.[^ff] I wanted lots of MultiMarkdown 3 features -- ones that Byword just didn't support.

While MultiMarkdown Composer surely got the job done, it never quite felt like *home.* Yes, I realize how weird it may seem for me to describe a plain-text editor as homey. Byword makes wonderful use of gradients in the main window, as well as other neat design touches. It's the little things like that which always made me yearn for it instead of MultiMarkdown Composer. But for those months when I was heavily using MultiMarkdown Composer because I relied heavily on the MultiMarkdown 3 spec, there was simply no way Byword would fit the bill.

## Markdown In Camel

Camel uses an npm package called `markdown-it`, which is what actually takes the Markdown files and parses them to HTML for view on a webpage. `markdown-it`, when supplemented with several `markdown-it` plugins, can do just about everything MultiMarkdown Composer can do. 

This meant that I could [go back to using Byword](http://d.pr/i/Q2Wv+) as my plain-text editor. While Byword may not know how to parse some `markdown-it` functions, I know the text will display properly once parsed and displayed as HTML when the site deploys (even if it [doesn't look perfect](http://d.pr/i/14Ogl+) from within Byword itself).

In order to make sure Camel parsed all my Markdown properly, I had to make some changes to old posts. Specifically, the image syntax portion of old posts. As explained above, I was using a MultiMarkdown 3-friendly image syntax. And `markdown-it` isn't able to parse images with that syntax. 

So what did I do? I followed Casey's guide. As has been my mo for the past year, I peaked at his [source](http://www.caseyliss.com/2015/3/13/are-you-getting-it.md) for one of his [posts](http://www.caseyliss.com/2015/3/13/are-you-getting-it) containing an image with a caption. 

Here's what I found:

```md
<figure class="figleft">
	<img src="@@SiteRoot@@/images/2015/3/iphone.png" alt="Steve Jobs debuts the iPhone" width="300" />
	<figcaption>Are You Getting It?</figcaption>
</figure>
```

Casey was using regular-old HTML for his images. 

At first I scoffed at this. Why would I want to type out all that code -- [John Siracusa](http://hypercritical.co/) style -- just for images? I even considered omitting image captions entirely, as the 'standard' Markdown image syntax of `![](image link)` is parsed perfectly by `markdown-it`. However, captions are important to me. As I said, it's why I quit using Byword for a time! I needed captions.

The biggest reason to use Markdown is that it's essentially shorthand HTML. Typing all that `<figure>` stuff is a pain not because it's difficult to understand the syntax, but instead, it is difficult because it just takes so much *time* to type all that out. I needed time-saving if I was going to use regular HTML syntax for images.

Here's what I decided to do:

1. So I created a 'starter' post file called `template.md`, which lives in my Camel folder at `~/TheOverAnalyzed/Camel`, and has a [shortcut on the Dock](http://d.pr/i/1bOn2+).
2. The contents of that template file are thus:
	![](http://d.pr/i/15CjK+)
3. When I need to embed a picture, I can just copy and paste the `<figure>` syntax from `template.md`[^lo]
4. Having the `<figure>` syntax pre-populated makes writing posts easier because it eliminates the slowest aspect of writing pure HTML: the actual writing of HTML.

Once I wrapped my brain around that, I began the long and tedious process of opening my old posts and switching all the MultiMarkdown 3 image syntax to regular HTML. 

<hr class="small" />

During the two solid weeks I spent transitioning to Camel, most of my time dealt with tweaking how the site looked. Second only to that was re-formatting my old posts. I would get home around 5-6 most days, and after eating dinner, I was glued to my MacBook screen, re-writing the image syntax and making other small. It was arduous, but so worth it in the end.

[^ff]: Fast-forward several months, and I'm using regular old `<figure` (and `<figure class=" " />`) for images anyways. Go figure.
[^lo]: When writing a new post, I open `template.md` and start typing. Note that I have [locked](http://hints.macworld.com/article.php?story=20010328105037397) the `template.md` file. So when I attempt to modify `template.md`, Byword automatically prompts me to [Duplicate](https://support.apple.com/en-us/HT202255) it. This prevents accidentally over-writing the template text with actual links and so on. 
[^ma]: I haven't spent much time looking into this aspect of Casey's default `camel.js` configuration, but it seems to me that `Handlebars.js` needs some sort of [modifier](http://d.pr/i/1gz4O+) to call out "Hey, this next string of text is metadata." I can't imagine a scenario in which Byword's [cleaner] metadata auto-format would work with Handlebars. 