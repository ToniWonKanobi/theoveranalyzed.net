@@ Title=Bigfoot Footnotes in Squarespace  
@@ Date=2015-01-31T08:00:00+00:00  
@@ Description=A big milestone in my blogging development: footnotes are live on TheOverAnalyzed!  
@@ Tags=blogging, Squarespace, TheOverAnalyzed, Bigfoot.js, footnotes  

<div class="topstory">Exactly 20 days ago, I <a href="https://twitter.com/TheOverAnalyzed/status/553716002999898112">publicly committed myself</a> to integrating <a href="http://www.bigfootjs.com">fancy</a> footnotes into my blog (as seen on <a href="http://marco.org/">Marco.org</a> and <a href="http://www.sixcolors.com/">Six Colors</a>). And guess what? I've done it!
</div>

<h2>Contents</h2>

[[TOC]]

# Backstory

Ever since I started following [prominent Apple bloggers][daringfireball] a few years ago, the concept of footnotes really grew on me subconsciously. [^sc]

I'm sure by now you have concluded that I can talk incessantly and often go off on long tangents. I think that is just how my brain works. Occasionally, whilst conversing with people, I often step outside myself and say/think, "Am I really still talking right now? Is this person *not* yet burned out?"[^bo]

And so it would not surprise you that, in my writing, I find myself often having to use parenthesis and [em dashes][thepunctuationguide] to explain my thoughts in more detail. Peruse my longform articles and I'm sure you'll find that to be the truth. Problem is, parsing through all those em dashes and parenthesis gets daunting for the reader. I bet if someone analyzed my average sentence length[^asl], I would be far past the 'readability length.'

# Searching

I searched high and low and came up on a [post][marco 2] by Marco, in which he plugged a project by Chris Sauvé[^csa] of [lemondesign.com][lemondesign][^ld] called [bigfoot.js][bigfootjs]. I read through that and then did a few [DuckDuckGo][duckduckgo] searches. I found this [post][recklessunicorn][^bfs] on [Reckless Unicorn][recklessunicorn 2], and after **much** trial and error[^te], I finally got them working. 

Note my liberal use of [fancy schmancy][urbandictionary] footnotes in this post? Yay Bigfoot.js.[^pu]

# `bigfoot-number.css` Troubles

I was having trouble getting the footnotes to reset their count for each new post on my [Archive](/posts)[^old] page. By default, for `bigfoot-number.css`, the footnotes will number sequentially for the entire page. For example, if the first post on a page has two footnotes, and the second post down has one footnote, the number of the footnote on the second post will be `3`. Ideally, the first footnote on the second post should be `1`, as the footnote numbers should reset for each post. 

This isn't a super big deal, except that it totally is. 

I looked everywhere for help. Unfortunately, there wasn't a single write-up out there that told me exactly what it was that I needed to do. So I contacted the author of `bigfoot.js` (again), and I didn't really get anywhere after talking with him, as there is only so much he can do since every CMS implements things differently. I saw some posts, one from [Crate of Penguins][crateofpenguins], and another from [Reckless Unicorn][recklessunicorn 3]. Those authors weren't much help beyond what they already wrote in their posts[^tp]

# `bigfoot-number.css` Solution

Fortuitously, I saw a [thread][twitter 2] on Twitter between Jason Snell and a few other heavyweights talking about this very thing. I tried again tonight and it worked!

The key was passing a particular object literal in the `Header` field of the `Code Injection` area.

Here is how to get there:

1. From the main site editor (with the horizontal panes to the left such as `Pages`, `Design`, etc.), choose `Settings`
2. Next, `Advanced`
3. After that, `Code Injection`
4. In the `Header` field, on a new line immediately following the `script type="text/javascript"` line, copy and paste the following:

	```js
	$.bigfoot(
		{
 			numberResetSelector: “article”
		}
	);
    ```
    
What you are essentially doing here is telling the `bigfoot.js` script to reset the count of the footnotes every time the script recognizes a repeated tag. In this case, that repeated tag is the 'new article' tag that Squarespace choose to utilize. In this situation, the `article` tag.[^ar]

So, for completeness, this is what my `Header` in the `Code Injection` field looks like:

```js
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="/s/bigfoot.js"></script>
<link rel="stylesheet" type="text/css" href="/s/bigfoot-number.css">
<script type="text/javascript">
  $.bigfoot(
        {
            numberResetSelector: "article"
        }
    );
</script>
```

[^sc]: Oh, authors can write, but put in all those 'asides,' without consciously distracting from the whole of the text? Nice.
[^bo]: No doubt they are. 
[^asl]: There is such a [metric][wordpress].
[^csa]: No active Twitter for him, unfortunately.
[^ld]: Defunct as well. His email *is* on [Git][github], however.
[^tp]: I suppose I can't blame them. Me asking quite rudimentary questions about jQuery implementation in what is, to them, a random blog engine (Squarespace) is probably just as confounded as someone asking me which fingers they should use to fret a power cord. 

	Still, it felt terrible to not have closure on this issue. 
[^ar]: This is only pertinent on an 'Archive' or 'All Posts' type of page, where every post is included on one page. If several posts contain footnotes, the default behavior of bigfoot.js is to just increase the footnote number as the page progresses. 
[^bfs]: Money.
[^te]: [Squarespace][ss] is a wonderful CMS, and makes things really easy for novice bloggers. But Squarespace also makes things incredibly difficult for bloggers who want to step outside of the 'normal' and typical way of doing things (e.g., footnotes). 
[^pu]: I have been wanting to do this for longer than just 20 days ago, so this is like months of pent up 'wanting to footnote' feelings.
[^old]: This is an old slug from when I was still using Squarespace.

[crateofpenguins]: http://crateofpenguins.com/blog/2013-12-add-bigfoot-to-squarespace-sites
[daringfireball]: http://www.daringfireball.net
[duckduckgo]: https://duckduckgo.com/?q=bigfootjs&t=osx
[github]: https://github.com/lemonmade
[lemondesign]: http://www.lemondesign.com
[marco]: http://www.marco.org/
[marco 2]: http://www.marco.org/2013/12/15/bigfoot
[recklessunicorn]: http://recklessunicorn.net/blog/2014/2/11/how-to-use-bigfoot-on-squarespace
[recklessunicorn 2]: http://recklessunicorn.net/
[recklessunicorn 3]: http://recklessunicorn.net/blog/2014/2/11/how-to-use-bigfoot-on-squarespacecra
[sixcolors]: http://www.sixcolors.com
[ss]: http://www.sqarespace.com
[thepunctuationguide]: http://www.thepunctuationguide.com/em-dash.html
[twitter 2]: https://twitter.com/jsnell/status/560581646248722433
[urbandictionary]: http://www.urbandictionary.com/define.php?term=Fancy+Schmancy
[wordpress]: https://strainindex.wordpress.com/2008/07/28/the-average-sentence-length/