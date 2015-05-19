@@ Title=Permalinks In Squarespace  
@@ Date=2015-02-01 10:00  
@@ Description=I figured out how to enable Permalinks in posts (with the help of someone smarter than me).
@@ Tags=hacking Squarespace  

## Contents
* [Introduction](#intro)
* [Backstory](#backstory)
* [What's Right Is Right](#right)
* [The Problem](#problem)
* [Solution](#solution)
* [Results](#results)
* [Update](#update) 

<h1><a id="intro">Introduction</a></h1>
Squarespace is a great CMS. "[The Apple of content management services](http://stream-seo.com/squarespace-review/)," it has been said. And I would generally agree. With just a minimal amount of effort from the user, it would be *very* difficult to make a website with Squarespace that wasn't halfway decent. That said, there are some caveats to be told. Just like my experiences with everyone's favorite fruit company[^5], whenever I have strayed just a bit from the Squarespace Beaten Path™, things got hairy. One of those areas was [footnotes](http://www.theoveranalyzed.net/posts/2015/1/bigfoot-footntes-squarespace) . I figured that out with the help of the internet. Next on the list: permalinks.

<h1><a id="backstory">Backstory</a></h1>
If all I wrote on this site consisted of completely original thoughts and content, Squarespace would be doing pretty right by me. However, I am a big [Daring Fireball](daringfireball.net) fan. One of my favorite parts of following Daring Fireball is the "[Linked List](http://daringfireball.net/archive/)" posts. While I enjoy John Gruber's longform content, his Linked List entires are much more frequent, and thus offer up a greater understanding of who John Gruber is as a person and a writer. That's interesting stuff. And so naturally, I wanted to do the same thing on my site. 

<h1><a id="right">What's Right Is Right</a></h1>
It would be considered customary and courteous[^1] to use the title of *my* post as a [link](link) to the original content that inspired my short post with commentary. That way, if someone stumbles upon my post using a search engine, or on Twitter, they would have an easy way to follow that link once they reached my website. Now, that by itself is a little bit of an imposed barrier, in that for a reader to actually get to the content I am linking to, they have an extra tap/click in there. And like most things in our lives, less is more. People are lazy. I know I am. I don't want to click anything.

So, what to do?

Well, because we are lazy, early pioneers of the Linked List style of posts implmented a key feature for RSS feed entries: 

*The title of the RSS entry would link to the external (original) content.*

Yay. That's a good thing, because not only are the linkers providing attribution to the original content's author, the linkers are also supporting a system with one less barrier between the reader and the original content.

<h1><a id="problem">The Problem</a></h1>
This 'system' of linking-through can be problematic in some RSS feed readers. Sometimes readers of the site want to actually see what the Linked List author (me) has to say about the Linked List entry. I know that's how I feel. Sometimes I don't even follow/read the original link shared by Gruber et al. and instead only read his commentary.[^4]  And so in own personal reading experience, I always try to find the permalink in the RSS entry to read[^6] and therefore not lose the commentary by the author I am actually following.[^12]  In an ideal situation, the RSS item title would have both a link to the external content and a permalink to my site where my post lives. *As far as I can see, this is not a feature implemented by really simple syndication, which is sad.*

<h1><a id="solution">The Solution</a></h1>
Up until a few days ago, I had been using my own laborious system of permalinking.[^7] Turns out, I wasn't alone.[^2] I wanted something better than this. 

In my hunt for how best to add footnotes to Squarespace posts, I also found a [real gem](http://smithjw.me/blog/permalinking-with-squarespace) from [James Smith](https://twitter.com/smithjw) regarding permalinks.

He suggested pasting a line of HTML code in the [Post Blog Item Code Injection](http://answers.squarespace.com/search/?q=Post+Blog+Code+Injection&Submit=ô&t=question) section.

Here is the line of HTML code he suggested:

`<center><a href="http://smithjw.me{permalink}">∞</a></center>`

Now, because I tend to gravitate toward content being left-adjusted, I changed

`<center></center>`
 	
to

`<left></left>`

So my line of HTML code looks like this:

`<left><a href="{permalink}">∞ Permalink</a></center></left></pre>`

<h1><a id="results">The Results</a></h1>
By placing the permalink in the Post Blog Item Code Injection section, I no longer have to manually create permalinks for Linked List posts. The downside to this newer method is that the a permalink shows up on *every* post, even the Article-style posts. A small price to pay methinks.

<h1><a id="update">Update</a></h1>
Since initially writing this post, I have since turned on the [Developer Platform](http://developers.squarespace.com) for Squarespace. This has opened up both a bunch of possibilities, and a bunch of frustrations.[^10]

As mentioned previously, prior to the Developer Platform, there was no way for me to insert a Permalink to my post in the title of a Linked List item. So what I did was implement what James Smith [suggested](http://smithjw.me/blog/permalinking-with-squarespace). 

Once I turned on the Developer Platform, I knew I wanted to implement what Alex Durner [did](http://alexduner.com/blog/squarespace-permalinks), which was much more up my alley.

He noticed the <code>{.passthrough?}</code> in the <code>blog.item</code> section found here: 

`<code>my-squarespace-domain.tld/collections/blog.item</code>`

Here is the relevant code he suggests pasting there:[^11]
```
{.passthrough?}
		<a class="link" href="{sourceUrl}" target="_self">{title}</a>
		<a class="permalink" href="{fullUrl}" title="Permalink for 	{title}">∞</a>
	{.or}
		<a class="post" href="{fullUrl}">{title}</a>
	{.end}
```

Now, whenever I post a "Linked List" item, as long as the "External link" checkbox is checked in the New Post Advanced panel, a permalink will show up just to the right of the title of the post (which is the target external link):

<figure>
	<img src="http://d.pr/i/1lSZU+" alt="boom" width="80%" />
	<figcaption>Boom</figcaption>
</figure>

[^11]: I *will* take some credit for this bit of code, because Alex assumed that anyone looking to implement this code would know where to find it. Turns out, I wasn't that smart by default, and had to look for it. 
[^10]: Well, duh. 
[^12]: I trust the authors I follow more than the average website or Twitter account promoting content. And I have found many blogs I enjoy reading whose website was unknown to me until it was linked-to by Gruber or someone else. If he didn't include his commentary I may have never even followed the original link (again, out of laziness). 
[^4]: Many of the sites I follow use a similar Linked List format as Daring Fireball. [Six Colors](sixcolors.com), [Marco.org](marco.org), [The Sweet Setup](thesweetsetup.com), [The Loop](http://loopinsight.com), [512 Pixels](512pixels.net), and more use this style of posting. And just like with Daring Fireball, sometimes I enjoy these authors' commentary on the links more than the actual content they are linking to.
[^8]: And quite barbaric by 2015's standards
[^7]: I was copying and pasting the link string of the post and placing it in the appropirate location after "http://www.theoveranalyzed.net/" I then took that link and placed it at the bottom of every Linked-List style post I had made as "[Permalink]." It worked well enough, but what a [PITA](http://www.urbandictionary.com/define.php?term=pita&defid=549368). 
[^6]: Or save to Instapaper 
[^5]:  Okay, this footnote was just for kicks 
[^3]: Any decent RSS feed reader will include some ability to adequately parse a post's permalink
[^2]: Come to find out, MacSparky was [doing something similar](http://macsparky.com/blog/permalinkingss), though he made use of a [TextExpander](http://smilesoftware.com/TextExpander/index.html) snippet
[^1]: And just good 'internet form'