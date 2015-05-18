@@ Title=Bigfoot Footnotes In Squarespace  
@@ Date=2015-01-31 08:00  
@@ Description=A big milestone in my blogging development: footnotes are live on TheOverAnalyzed!  
@@ Tags=meta, blogging, hacking Squarespace  

Exactly 20 days ago, I [publicly committed myself](https://twitter.com/TheOverAnalyzed/status/553716002999898112) to adding [bigfoot.js](www.bigfootjs.com) footnotes to my blog ala [Marco.org](http://www.marco.org/) and [Six Colors](www.sixcolors.com). 

And guess what? 

I've done it![^3]

<hr class="small" />

Ever since I started following [prominent Apple bloggers](http://www.daringfireball.net) a few years ago, the concept of footnotes really grew on me subconsciously. [^5]

I'm sure by now you have concluded that I can talk incessantly and often go off on long tangents. I think that is just how my brain works. Occasionally, whilst conversing with people, I often step outside myself and say/think, "Am I really still talking right now? Is this person *not* yet burned out?"[^4]

And so it would not surprise you that, in my writing, I find myself often having to use parenthesis and [em dashes](http://www.thepunctuationguide.com/em-dash.html) to explain my thoughts in more detail. Peruse my longform articles and I'm sure you'll find that to be the truth. Problem is, parsing through all those em dashes and parenthesis gets daunting for the reader. I bet if someone analyzed my average sentence length[^1], I would be far past the 'readability length.'

<hr class="small" />

I searched high and low and came up on a [post](http://www.marco.org/2013/12/15/bigfoot) by Marco, in which he plugged a project by Chris Sauvé[^2] of [lemondesign.com](http://www.lemondesign.com)[^11] called [bigfoot.js](http://www.bigfootjs.com). I read through that[^6] and then did a few [DuckDuckGo](https://duckduckgo.com/?q=bigfootjs&t=osx)[^7] searches. I found this [post](http://recklessunicorn.net/blog/2014/2/11/how-to-use-bigfoot-on-squarespace)[^8] on [Reckless Unicorn](http://recklessunicorn.net/), and after **much** trial and error[^9], I finally got them working. 

Note my liberal use of [fancy schmancy](http://www.urbandictionary.com/define.php?term=Fancy+Schmancy) footnotes.

I expect the average post in the future to have maybe 10% of the footnote usage that this one does.[^10]

<hr class="small" />

<h1><a name="update">Update</a></h1>
I was having trouble getting the footnotes to reset their count for each new post on my [Archive](/posts) page. By default, for <code>bigfoot-number.css</code>, the footnotes will number sequentially for the entire page. For example, if the first post on a page has two footnotes, and the second post down has one footnote, the number of the footnote on the second post will be <code>3</code>. Ideally, the first footnote on the second post should be <code>1</code>, as the footnote numbers should reset for each post. 

This isn't a super \*big deal\*, except that it totally is. 

I looked everywhere for help. Unfortunately, there wasn't a single write-up out there that told me exactly what it was that I needed to do. So I contacted the author of <code>bigfoot.js</code> (again), and I didn't really get anywhere after talking with him, as there is only so much he can do since every CMS implements things differently. I saw some posts, one from [Crate of Penguins](http://crateofpenguins.com/blog/2013-12-add-bigfoot-to-squarespace-sites), and another from [Reckless Unicorn](http://recklessunicorn.net/blog/2014/2/11/how-to-use-bigfoot-on-squarespacecra). Those authors weren't much help .beyond what they already wrote in their posts[^13]

Fortuitously, I saw a [thread](https://twitter.com/jsnell/status/560581646248722433) on Twitter between Jason Snell and a few other heavyweights talking about this very thing. I tried again tonight and it worked!

The key was passing a particular object literal in the **Header** field of the **Code Injection** area.

Here is how to get there:

1. From the main site editor (with the horizontal panes to the left such as "Pages," "Design," etc.), *choose "Settings"*
2. Next, *choose "Advanced"*
3. After that, *choose "Code Injection"*
4. In the Header field, on a new line immediately following the <code>script type="text/javascript"</code> line, *copy and paste this:*
	```  $.bigfoot(
        {
            numberResetSelector: "article"
        }
    );
    ```
    
What you are essentially doing here is telling the <code>bigfoot.js</code> script to reset the count of the footnotes every time the script recognizes a repeated tag. In this case, that repeated tag is the 'new article' tag that Squarespace choose to utilize. In this situation, the <code>article</code> tag.

So, for completeness, this is what my Header field looks like:

```&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">&lt;/script&gt;
&lt;script type="text/javascript" src="/s/bigfoot.js">&lt;/script&gt;
&lt;link rel="stylesheet" type="text/css" href="/s/bigfoot-number.css"&gt;
&lt;script type="text/javascript"&gt;
  $.bigfoot(
        {
            numberResetSelector: "article"
        }
    );
&lt;/script&gt;
```

[^13]: I suppose I can't blame them. Me asking quite rudimentary questions about jQuery implementation in what is, to them, a random blog engine (Squarespace) is probably just as confounded as someone asking me which fingers they should use to fret a power cord. Still, it felt terrible to not have closure on this issue. 
[^12]: This is only pertinent on an 'Archive' or 'All Posts' type of page, where every post is included on one page. If several posts contain footnotes, the default behavior of bigfoot.js is to just increase the footnote number as the page progresses. 
[^11]: Defunct as well. His email *is* on [Git](https://github.com/lemonmade), however.
[^10]: I have been wanting to do this for longer than just 20 days ago, so this is like months of pent up 'wanting to footnote' feelings.
[^9]: [Squarespace](www.sqarespace.com) is a wonderful CMS, and makes things really easy for novice bloggers. But Squarespace also makes things incredibly difficult for bloggers who want to step outside of the 'normal' and typical way of doing things (e.g., footnotes). 
[^8]: Money.
[^7]: Shameless plug. Scroogle. 
[^6]: That is to say, I read through what I cloud understand, which was maybe around 80% of the HTML-y code
[^5]: Oh, authors can write, but put in all those 'asides,' without consciously distracting from the whole of the text? Nice.
[^4]: No doubt they are. 
[^3]: Yay.
[^2]: No active Twitter for him, unfortunately.
[^1]: There is such a [metric](https://strainindex.wordpress.com/2008/07/28/the-average-sentence-length/).