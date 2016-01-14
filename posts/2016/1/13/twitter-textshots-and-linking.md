Title: Twitter, Textshots, and Linking  
Date: 2015-01-13 22:47  
Link: http://leancrew.com/all-this/2016/01/twitter-textshots-and-linking/  
Description: Dr. Drang has some thoughts on Twitter's rumored 10k-character tweets.  
Tags: Twitter, Blogging  
Image: https://d.pr/i/15MMQ+  

![What do 10k-character tweets, Textshots, and Linked Lists have to do with eachother?][1]

Dr. Drang:

> When I started seeing textshot tweets, especially Federico [Viticci]’s, I was struck by how similar they are to linked list-style blog posts

> Today, Twitter seems like the natural place to do this sort of thing. Textshots work, but they’re clumsy. The extended tweets, however they’re implemented, will almost certainly be a better solution.

Although I don't despise ugly textshots as much as Dr. Drang seems to, I will admit that when done "tastelessly" (as most are), they just *look* horrible in the timeline. (If you must, I recommend [OneShot][2].)

Here's hoping Twitter's native solution is a true alternative to textshots.

Finally, toward the end of his post, Dr. Drang comments on the inability for bloggers to hyperlink to particular passages of text within blog posts:

> Looking at quoting and linking in a broader sense, it seems odd that links are controlled more by the citee than the citer. In HTML, you cannot link to just any part of a web document, only to either the document as a whole or to [particular spots][3] that the document’s author has designated by including tags with id attributes.

As noted in my [`/nerd`][4] page, I use [`markdown-it-anchor`][5] to insert `id` attributes for section headings (`h1`, `h2`, `h3`, etc.). 

That way, if I wanted to link to a particular portion of a post (like the above link to the "Technical" section of the `/nerd` page), I can do so.

And since `markdown-it-anchor` is taking care of the `id` attributes on the backend, I don't have to clutter my Markdown source with HTML5 cruft.

Still, as Dr. Drang notes, there's really no easy way to link to a particular paragraph without lots of `id`'s everywhere:

> I’m sure that through JavaScript’s access to the DOM, web authors and publishers could include a script that allows direct linking to, for example, the <i>nth</i> paragraph of any article. That would allow more specific linking without forcing the author to scatter `id` attributes throughout the documents. The script could also highlight the desired text, just like we do with textshots, to draw the reader’s attention. But this isn’t a universal solution because it would only work for documents that include such a script.

For what it's worth, I just remembered that [Dave Winer][6] [linked][7] to an admirer who tackled this very thing, if you're interested.

[1]: https://d.pr/i/15MMQ+ "Dr. Drang has some thoughts on Twitter's rumored 10k-character tweets"
[2]: https://geo.itunes.apple.com/us/app/oneshot-for-screenshots/id953724147?mt=8&at=1l3vx9s "OneShot on the App Store"
[3]: http://geekswithblogs.net/ihaynes/archive/2013/07/12/named-anchors-in-html5.aspx "Dr. Drang's link to 'id' attributes"
[4]: /nerd#technical "/nerd#technical Page"
[5]: https://www.npmjs.com/package/markdown-it-anchor "'markdown-it-anchor' on npmjs"
[6]: http://scripting.com/stories/2010/11/29/theNyTimesLeadsAgain.html "Dave Winer's post about the New York Times doing paragraph-level permalinks"
[7]: http://wordpress.org/extend/plugins/winerlinks/ "WinerLinks for WordPress"