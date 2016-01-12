Title: Using MultiMarkdown and HTML to Publish to Squarespace  
Date: 2015-02-14 16:00  
Description: Here's my workflow for blogging using the Squarespace platform.  
Tags: Best Of, Blogging, Squarespace  
Video: https://d.pr/v/13oR1+  

#### Forward

I wrote a [piece][1] a few weeks back regarding all the 'back-end' things one should do in order to implement Bigfoot style footnotes. Briefly, here was that workflow:

1. Download the necessary files from <http://bigfootjs.com> (the JavaScript itself, and then the stylesheet)
2. Upload them to Squarespace, using Squarespace's wonky file uploading system
3. Finally, load the above files with Code Injection.[^1]

What had never occurred to me was that people might find the 'back-end' tasks easy, and would instead have a harder time knowing how to write content with Markdown or HTML, with footnotes specifically in mind.

I have had a few people contact me regarding implementing Bigfoot footnotes into their writing. Rather than continue to answer each of those inquiries on an individual basis, I thought I would write a post that talks about the 'front-end' aspects of my writing. Note that this post will deal with my writing workflow as is, which means it will reference many Squarespace-specific aspects of my workflow. That said, I'm sure most everything I write will be applicable to the other content management services (CMS's) out there.

### The Process

#### Step 1: Have an Idea

Everything I write usually starts with an idea. This post I am writing *right now* started with an idea. This sounds like obvious advice, but it really isn't. You have to have a good idea, otherwise you're just writing to write. There's nothing wrong with that, but it certainly won't help to endear yourself to potential readers, unless you are incredibly witty.

Many bloggers too easily succumb to the rush that accompanies publishing content, even bloggers operating on a small scale like what I am doing. On the latest episode of [Inquisitive][2], Myke Hurley discussed this phenomenon with Merlin Mann. They talked about how content creators sometimes fall in love with the drudgery-like aspects of creating. That could mean an author might be tempted to crank out a bunch of content, just to satisfy that insatiable desire to fill in all the little text fields, simply because it is ingrained and a habit. The problem with going down that path is it can lead to lesser-quality content in the long run

I can relate to their topic wholeheartedly. It feels good to put something out there. It feels even better to know [someone is listening][3].

Almost all CMS's have a workflow that's pretty easy to master. With Squarespace, when I want to write something new, I simply fill out the pre-populated fields, click a few buttons, and then it's done. "Oh, this post is going to be a link to external content," I might ask myself whilst creating a new post. "I better be sure to copy and paste the source URL into the proper field, and then check the external link box accordingly," I might add. Finally, "I should switch that little Twitter slider so that my content gets automatically pushed to social media." 

Having a great workflow makes creating things so much easier. By the end of this post, you will know how my workflow, well works, and hopefully you can take a few things I have learned and make your own content creation easier. 

The trap I do not want anyone to fall into, however, is the trap that Merlin and Myke talked about on the aforementioned podcast: Don't get addicted to the *process*. Just clicky-clicking boxes and copy and pasting this and that into this field and that field is, after a while, brainless. 

Nobody wants to read brainless content, even if it was produced brainlessly, and even if the author who created that brainless content spent a whole heck of a lot of time making their workflow brainless.

So, have an idea, a *raison d'être* of sorts. 

#### Step 2: Decide on a Language

No, i'm not talking about what spoken/written language you plan on using. I'm talking about deciding how you will type out your thoughts, and how you will then collect them into your blogging platform.

* Are you going to write in Microsoft Word, and then copy and paste that into a Text Block in Squarespace? 
* Are you well versed with Markdown? Will you use the Markdown Block within Squarespace?
* Do you want use *any* footnotes (not just Bigfoot style ones)? Have you considered MultiMarkdown? 

How you answer the above questions will change how easy it is for you to publish your work.

##### A Word Processor

Most of the great journalists of our time do not use anything beyond a normal word processor in writing all those Pulitzer Prize winning pieces. That is the case because most everyone has at least *some* experience using a word processor like Word, and less so, like Apple Pages. And familiarity breeds content. 

If you want to write using those apps, go for it. *It is by far the easiest way to get your content on the internet.* With Squarespace, you would just do what I suggest above: Type it in your word processor, and then copy and paste that into a Text Block in the New Post window in Squarespace.

##### Markdown

[Markdown][4] was developed by John Gruber over ten years ago as an alternative to writing in pure HTML. Somewhat controversially, it has had many [non-standard][5] re-iterations. But pure, regular ol' Markdown is a great way to write with a more-or-less regular syntax, while having the power to easily convert that to HTML if need-be.[^2] Squarespace offers [Markdown Blocks][6], and if you so desire, you can set it so that your default text editor is Markdown instead of the default Rich Text. I used that workflow for a while myself.

##### MultiMarkdown → HTML

I don't think even Gruber himself could have predicted the future popularity of his text parsing engine. Over the years, many---*many*---non-standard iterations of Markdown have been devised (too many to even mention). [MultiMarkdown][7] is about as close as one could get to retaining Gruber's 'standard' Markdown's simplicity, without getting all crazy like some of the other Markdown flavors have done. 

The beauty of MultiMarkdown is that it is parsed to HTML just as easily as standard Markdown. Because of this, **I use MultiMarkdown almost anytime I write.** If you want to do the same, continue reading.

#### Step 3: Find an App That Supports Your Writing Style

##### Choices

A few years ago, [third-party alternatives to the standard iOS app were becoming very popular][8]. When the App Store launched in 2008, developers clamored to create apps better than Apple's stock ones. First it was [email][9], then later on it was [podcast apps][10]. Before that, though, it was notes apps. 

I bought several different apps, and both OS X, iPad, and iPhone versions if they were available:

* [iA][11]
* [Drafts][12]
* [Byword][13]
* [Simplenote][14]
* [Vesper][15]

##### Backstory

When I started writing more heavily late last year, I was writing everything from within the Squarespace editor, using their Text Blocks (Rich text). The problem with that is the posting window is beholden to a sufficient and constant internet connection, and if that connection were to break, so would all of my progress since the last save.

##### Byword

I knew I needed a way to write without the constant worry of hoping Squarespace wouldn't drop the connection, and I knew I wanted to rid myself of constantly having to remember to save my work. So I went back to some of those notes apps I purchased a while ago and started with Byword. It seemed to work well enough for me. I would write in plain text, and then copy and paste that into a Text Block in Squarespace's post editor. 

##### Learning Markdown, MultiMarkdown

Things really started heat up for me when I forced myself to use some Markdown syntax. The main motivator for using Markdown was that I wanted to start writing with footnotes. Before that, a lot of my writing included many [en-/em-dashes][16], and much of my writing was [parenthetical][17]. There's nothing completely wrong about that, it just made everything I wrote even more long-winded than it already was.[^3] I kept using Byword during this transition, typing in Markdown in that app, and then simply copy and pasting that into a Markdown Block in Squarespace.

When I was feeling brave enough, I looked up how to implement footnotes using Markdown. I had a hard time finding any solid information as to why it wasn't working.[^4] I was so deflated. Why did footnotes show up in Byword's HTML Preview, but not Squarespace?I thought the problem might be Byword's. And around that time, Gruber linked to an encouraging [piece][18] from [Desk][19] regarding Daring Fireball [sponsorships][20]. Desk is an app a lot like Byword, but with more features supposedly.

I thought I would see if I could do with Desk what I had been trying to do with Byword: write footnotes in Markdown. Alas, no. It didn't work with Desk either.

I looked up the [Byword syntax guide][21]. And then:

**Boom.**

There it was: the explanation I was looking for.

Byword uses MultiMarkdown, not *just* standard Markdown. So when I would preview things in HTML mode, and footnotes looked great, it was because Byword was able to parse that MultiMarkdown into the correct HTML in their own window. Squarespace, on the other hand, does *not* support MultiMarkdown, just standard Markdown. So when I would paste the [Multi]Markdown into the Squarespace editor, Squarespace just saw it as standard Markdown, and since standard Markdown doesn't support footnotes, they never worked.

##### The Solution

1. Convert [Multi]Markdown written within Byword to HTML and copy it to the clipboard
2. Create a Code Block within Squarespace's post editor
3. Paste the previously copied HTML into the Code Block4. And that's it!

### Example Workflow

#### Text-Based How-To

1. Here is the *text* for which I would like to add a footnote:  
	
	```nohighlight
	I like turtles.
	```
	
2. And here is the text I want to be the content of a *footnote*, affixed at the end of the sentence in this case:

	```nohighlight
	Turtles are super cool.
	```
	
3. In Byword, this is what I would type, in MultiMarkdown:  
	
	```nohighlight
	I like turtles.[^1]

	[^1]: Turtles are super cool.
	```
	
4. After converting it to HTML, it would look like this:  
	
	```html
	<p>I like turtles.<a href="#fn:1" id="fnref:1" title="see footnote" class="footnote">[1]</a></p>

	<div class="footnotes">
	<hr />
	<ol>

	<li id="fn:1">
	<p>Turtles are super cool. <a href="#fnref:1" title="return to article" class="reversefootnote">&#160;&#8617;</a></p>
	</li>

	</ol>
	</div>
	```

5. Finally, paste that HTML into Code Block from the Squarespace post editor

#### Video-Based How-To

1. Here is the *text* for which I would like to add a footnote:

	```nohighlight
	I like turtles.
	```
	
2. And here is the text I want to be the content of a *footnote*, affixed at the end of the sentence in this case:

	```nohighlight
	Turtles are super cool.
	```
	
3. Typing with MultiMarkdown Syntax in Byword

	<video id="byword-mmd" src="https://d.pr/v/18FFK+" title="Byword MMD" controls></video>
	
4. Using Byword to Convert The Text to HTML

	<video id="byword-mmd-to-html" src="https://d.pr/v/13oR1+" title="Byword to Convert to HTML" controls></video>
	
5. Pasting the Previously Copied HTML into a Code Block in Squarespace

	<video id="to-code-block" src="https://d.pr/v/SSVK+"  title="Taking HTML to Code Block" controls></video>
	
### Conclusion

As you can see, my workflow is not that complicated. Byword makes things incredibly easier than typing in straight HTML. Imagine how much time John Siracusa puts into his [OS X reviews][22]?[^5]

<aside class="update">

### Update: Back to Byword

March 4, 2015
<!-- {.updatetime} -->

Since writing this post, I [have switched from Byword to MultiMarkdown Composer][23] for my text editor.  I also no longer use `Code blocks` for my content---I am using `Markdown blocks` instead. I just paste the raw HTML parsed from MultiMarkdown Composer into a `Markdown block`, just like I was doing previously with `Code blocks`. Because editing content in `Code blocks` required a desktop browser, I was stuck waiting until I could get to my MacBook before fixing a typo I noticed after publishing. Using the `Markdown blocks` allows me to edit posts on the go from the Squarespace iOS [Blog][24] app. See my [post][25] for details. 

</aside>

[^1]: These steps are arguably the hardest part of implementing Bigfoot footnotes. Most early bloggers are like myself---they don't know *any* HTML. They don't know any JavaScript, either.
[^2]: That is, in actuality, the entire purpose of Markdown: easy parsing to HTML.
[^3]: I really do try to keep things brief.  
[^4]:Turns Out™ that standard-Markdown, what Squarespace supports, does *not* support footnotes natively. Dumb.
[^5]: Accidental Tech Podcast [Episode 87][a], in which Siracusa describes his workflow, consisting of almost 100% writing in HTML (wow)

[a]: http://atp.fm/episodes/87 "Accidental Tech Podcast, episode 87"

[1]: /2015/1/31/bigfoot-footnotes-in-squarespace "My post on incorporating Bigfoot footnotes in Squarespace"
[2]: http://www.relay.fm/inquisitive/26 "Inquisitive episode 26"
[3]: /2015/2/6/one-year-later "Retrospective post on my first year of TheOverAnalyzed"
[4]: http://daringfireball.net/projects/markdown/ "Project page for John Gruber's Markdown"
[5]: https://news.ycombinator.com/item?id=8264733 "Hacker News post on 'Standard Markdown'"
[6]: http://help.squarespace.com/guides/using-the-markdown-block "Squarespace help topic for using the 'Markdown Block'"
[7]: http://fletcherpenney.net/multimarkdown/ "MultiMarkdown"
[8]: http://gizmodo.com/5970972/how-third-party-apps-are-taking-over-ios "Gizmodo on 'How Third Party Apps are Taking Over iOS'"
[9]: http://sparrowmailapp.com/iphone.php "Sparrow for iPhone"
[10]: http://www.shiftyjelly.com/android/pocketcasts "Pocket Casts on Android"
[11]: https://itunes.apple.com/us/app/ia-writer/id775737172?mt=8&at=1l3vx9s "iA Writer on the App Store"
[12]: https://itunes.apple.com/us/app/drafts-4-quickly-capture-notes/id905337691?mt=8&at=1l3vx9s "Drafts 4 on the App Store"
[13]: https://itunes.apple.com/us/app/byword/id420212497?mt=12&at=1l3vx9s "Byword on the Mac App Store"
[14]: https://itunes.apple.com/us/app/simplenote/id289429962?mt=8&at=1l3vx9s "Simplenote on the App Store"
[15]: https://itunes.apple.com/us/app/vesper/id655895325?mt=8&at=1l3vx9s "Vesper on the App Store"
[16]: https://en.wikipedia.org/wiki/Dash "Wikipedia: 'Dash'"
[17]: http://www.steves-digicams.com/knowledge-center/how-tos/filmmaking-tips/screenwriting-how-to-write-parenthetical.html "'How to write parenthetical'"
[18]: http://blog.desk.pm/df/ "Desk.pm's blog post about having Daring Fireball as a sponsor"
[19]: http://blog.desk.pm/ "Desk.pm"
[20]: http://daringfireball.net/feeds/sponsors/2014/11/desk_a_desktop_blogging_app_yo "Desk sponsoring Daring Fireball"
[21]: http://bywordapp.com/markdown/guide.html "Byword's MultiMarkdown guide"
[22]: http://arstechnica.com/author/john-siracusa/ "John Siracusa on Ars Techinca"
[23]: /2015/3/4/byword-multimarkdown-composer-and-more "My post on using MultiMarkdown Composer instead of Byword"
[24]: https://itunes.apple.com/us/app/squarespace-blog/id715084234?ls=1&mt=8&at=1l3vx9s "Squarespace 'Blog' on the App Store"
[25]: /2015/3/4/byword-multimarkdown-composer-and-more "My post on using MultiMarkdown Composer instead of Byword"