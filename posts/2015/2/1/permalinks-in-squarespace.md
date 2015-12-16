Title: Permalinks in Squarespace  
Date: 2015-02-01 10:00  
Description: I figured out how to enable permalinks in posts.  
Tags: Blogging, Squarespace  
Image: http://d.pr/i/118J1+  

![Permalink Symbols][1]

#### Preamble

Squarespace is a great CMS. "[The Apple of content management services][2]," it has been said. And I would generally agree. With just a minimal amount of effort from the user, it would be *very* difficult to make a website with Squarespace that wasn't halfway decent. That said, there are some caveats to be told. Just like my experiences with everyone's favorite fruit company, whenever I have strayed just a bit from the Squarespace Beaten Path™, things got hairy. One of those areas was [footnotes][3]. I figured that out with the help of the internet. Next on the list: permalinks.

### History

If all I wrote on this site consisted of completely original thoughts and content, Squarespace would be doing pretty right by me. However, I am a big Daring Fireball fan. One of my favorite parts of following Daring Fireball is the "[Linked List][4]" posts. While I enjoy John Gruber's longform content, his Linked List entires are much more frequent, and thus offer up a greater understanding of who John Gruber is as a person and a writer. That's interesting stuff. And so naturally, I wanted to do the same thing on my site. 

### What's Right Is Right

It would be considered customary and courteous[^1] to use the title of *my* post as a `link` to the original content that inspired my short post with commentary. That way, if someone stumbles upon my post using a search engine, or on Twitter, they would have an easy way to follow that link once they reached my website. Now, that by itself is a little bit of an imposed barrier, in that for a reader to actually get to the content I am linking to, they have an extra tap/click in there. And like most things in our lives, less is more. People are lazy. I know I am. I don't want to click anything.

So, what to do?

Well, because we are lazy, early pioneers of the Linked List style of posts implemented a key feature for RSS feed entries:

*The title of the RSS entry would link to the external (original) content.*

Yay. That's a good thing, because not only are the linkers providing attribution to the original content's author, the linkers are also supporting a system with one less barrier between the reader and the original content.

### The Problem

This 'system' of linking-through can be problematic in some RSS feed readers. Sometimes readers of the site want to actually see what the Linked List author (me) has to say about the Linked List entry. I know that's how I feel. Sometimes I don't even follow/read the original link shared by Gruber et al. and instead only read his commentary.[^2]  And so in own personal reading experience, I always try to find the permalink in the RSS entry to read[^3] and therefore not lose the commentary by the author I am actually following.[^4]  In an ideal situation, the RSS item title would have both a link to the external content and a permalink to my site where my post lives. *As far as I can see, this is not a feature implemented by really simple syndication, which is sad.*

### The Solution

Up until a few days ago, I had been using my own laborious system of permalinking.[^5] Turns out, I wasn't alone.[^6] I wanted something better than this.

In my hunt for how best to add footnotes to Squarespace posts, I also found a [real gem][5] from [James Smith][6] regarding permalinks.

He suggested pasting a line of HTML code in the [Post Blog Item Code Injection][7] section.

Here is the line of HTML code he suggested:

```html
<center><a href="http://smithjw.me{permalink}">∞</a></center>
```

Now, because I tend to gravitate toward content being left-adjusted, I changed

```html
<center></center>
```
 	
to

```html
<p></p>
```

So my line of HTML code looks like this:

```html
<p><a href="{permalink}">∞ Permalink</a></p>
```

### The Results

By placing the permalink in the Post Blog Item Code Injection section, I no longer have to manually create permalinks for Linked List posts. The downside to this newer method is that the permalink shows up on *every* post, even the Article-style posts. A small price to pay methinks.

<div class="check"><p>✔︎</p></div>

<aside class="update">

### Update: Permalink Fix
<p class="updateTime"><time datetime="2015-02-09">February 9, 2015</time></p>

Since initially writing this post, I have since turned on the [Developer Platform][8] for Squarespace. This has opened up both a bunch of possibilities, and a bunch of frustrations.

As mentioned previously, prior to the Developer Platform, there was no way for me to insert a Permalink to my post in the title of a Linked List item. So what I did was implement what James Smith suggested.

Once I turned on the Developer Platform, I knew I wanted to implement what Alex Durner [did][9], which was much more up my alley.

He noticed the `{.passthrough?}` in the `blog.item` section found here:

```html
my_squarespace_domain.top_level_domain/collections/blog.item
```

Here is the relevant code he suggests pasting there:

```html
{.passthrough?}
	<a class="link" href="{sourceUrl}" target="_self">{title}</a>
	<a class="permalink" href="{fullUrl}" title="Permalink for {title}">∞</a>
{.or}
	<a class="post" href="{fullUrl}">{title}</a>
{.end}
```

Now, whenever I post a "Linked List" item, as long as the "External link" checkbox is checked in the New Post Advanced panel, a permalink will show up just to the right of the title of the post (which is the target external link):

<figure>
	<img src="http://d.pr/i/1lSZU+" alt="Boom" title="Boom">
	<figcaption>Boom</figcaption>
</figure>

</aside>

[^1]: And just good 'internet form'
[^2]: Many of the sites I follow use a similar Linked List format as Daring Fireball. [Six Colors][a], [Marco.org][b], [The Sweet Setup][c], [The Loop][d], [512 Pixels][e], and more use this style of posting. And just like with Daring Fireball, sometimes I enjoy these authors' commentary on the links more than the actual content they are linking to.
[^3]: Or save to Instapaper
[^4]: I trust the authors I follow more than the average website or Twitter account promoting content. And I have found many blogs I enjoy reading whose website was unknown to me until it was linked-to by Gruber or someone else. If he didn't include his commentary I may have never even followed the original link (again, out of laziness).
[^5]: I was copying and pasting the link string of the post and placing it in the appropriate location after `http://www.theoveranalyzed.net` I then took that link and placed it at the bottom of every Linked-List style post I had made as "[Permalink]." It worked well enough, but what a [PITA][f]. 
[^6]: Come to find out, MacSparky was [doing something similar][g], though he made use of a [TextExpander][h] snippet.

[a]: http://www.sixcolors.com "Jason Snell's blog, Six Colors"
[b]: http://www.marco.org "Marco Arment's blog, Marco.org"
[c]: http://www.thesweetsetup.com "The Sweet Setup"
[d]: http://loopinsight.com "Jim Dalyrmple's blog, The Loop"
[e]: http://www.512pixels.net "Stephen Hackett's blog, 512 Pixels"
[f]: http://www.urbandictionary.com/define.php?term=pita&defid=549368 "Urban Dictionary: 'PITA'"
[g]: http://macsparky.com/blog/permalinkingss "How David Sparks did permalinks in his Squarespace-powered blog"
[h]: http://smilesoftware.com/TextExpander/index.html "TextExpander's webpage"

[1]: http://d.pr/i/118J1+ "Permalink Symbols"
[2]: http://stream-seo.com/squarespace-review/ "Review of the Squarespace CMS"
[3]: /2015/1/31/bigfoot-footnotes-in-squarespace "My post on incorporating Bigfoot footnotes in Squarespace"
[4]: http://daringfireball.net/2004/06/linked_list "John Gruber introducing the 'Linked List'"
[5]: http://http://smithjw.me/blog/permalinking-with-squarespace "Another post that helped me figure out permalinks"
[6]: https://twitter.com/smithjw "Another guy with some tips on permalinks in Squarespace"
[7]: http://help.squarespace.com/guides/using-code-injection "Squarespace help page for using code injection"
[8]: http://developers.squarespace.com "Squarespace Developer Platform"
[9]: http://alexduner.com/blog/squarespace-permalinks "One of the posts that helped me with permalinks"