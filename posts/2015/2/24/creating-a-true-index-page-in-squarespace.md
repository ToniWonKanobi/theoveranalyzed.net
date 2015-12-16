Title: Creating a True Index Page in Squarespace  
Date: 2015-02-24 23:26  
Description: Here's how I hacked Squarespace to have a true Index page.  
Tags: Squarespace  
Image: http://d.pr/i/1iXJC+  

#### Preamble

I thought I should do a quick post outlining how I crafted my Index page. My main motivation for doing this was to have an easy-to-type URL slug that contained permalinks to all of my content. True, `/archive` contains the same information as an index page. But when I am looking for a permalink to my content, it is much faster to navigate to an `/index` page and Command-F to query a string of words that might fit the title.

### Dealing With Content Management Systems

As you may or may not know, Squarespace does *not* offer a truly unlimited-length index page. Some templates do include an [Index page,][1][^1] which is sort of like the [Summary block][2], but neither of those act as true indices. 

Moreover, if you have Linked-style posts, the native Index page and Summary blocks present the *external URL* as the post title---not the post's *permalink.* Proper support of Daring Fireball style [linked][3] content came [late][4] for Squarespace, maybe as late as Squarespace 6. Thing is: I don't think it ever made it off of the back burner. There seem to be quite a few things that haven't---and probably won't---make it off of the back burner.

Having used this content management system (CMS) for over a year, it is painfully apparent to me that having managed content comes with its good and its bad. The good is obvious: I don't have to stress about my site. I never worry about server maintenance or anything of that nature. And I have complete control of the content that I publish. 

But the bad is just as obvious: I have relatively *little* control in how that content is presented. Admittedly, I have spent more time in the last month tweaking the template(s) than I have spent actually creating content. I have spent the past month largely coding *against* the Squarespace platform in order to achieve my design goals.

Squarespace's lack of a true index page, as well as its so-so support of Linked content, are examples of the bad aspects of both this particular platform, as well as CMS in general. If it didn't seem so daunting to do so, I would gladly switch to a static, text files-based system like what [Marco Arment][5] and [Casey Liss][6] are doing.

But until then, I will make do.

### How I Made A True Index Page

First, I should give tremendous credit where credit's due: [Sid O'Neill][7] from [Crate of Penguins][8] posted the how-to over [a year ago][9]. I stumbled upon his Index [how-to][10] while looking for help with Bigfoot footnotes in Squarespace, a topic which he also [covered][11].[^2]

In a nutshell, implementing this Index page involves the following:

1. Find the `CollectionID` of the blog you want to index
2. Create a Code block and load the script
3. Paste the Sid's script into the `Code block`
4. Replace the `CollectionID` Sid populated in his script with the one you found in step 1
5. Enjoy

#### 1. Find the `CollectionID` of the Blog You Want to Index

Pre-Squarespace 7, the `CollectionID`[^3] was  much easier to find. But in their newest version of Layout Engine, finding the `CollectionID` is harder than it has to be.

In order to do this, I navigated to my blog page and [viewed the source][12] for the page. 

I then searched the source for `"collectionid"`. I found several entries. The one I wanted was the one that contained this bit of text:
 
 ```js
 {"title":"Archive","id":"52eda1d5e4b0d08405a037de","fullUrl":"/"}`
 ```

Interesting.[^4]
 
#### 2. Create a Code Block and Load the Script

Here is the content of the `Code block` I used to make the Index:[^5]

```html
<h1>Index</h1>

<p>This page contains permalinks to all my Posts and every Link I have shared.</p>

<p>The black entry titles denote Posts, while red entry titles with an arrow (&rarr;) denote Linked content.</p>

<hr width="80%">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<script>$(document).ready(function() {
	var url = "/api/open/GetItemsByDates?collectionId=52eda1d5e4b0d08405a037de &startDate=0000000000000&endDate=9999999999999";
		$.getJSON(url, function(data){
		$.each(data.items, function(){
		$('#allarchive').append('<p>');
	var date = new Date(this.publishOn);

	var month_names = new Array ( );
		month_names[month_names.length] = "January";
		month_names[month_names.length] = "February";
		month_names[month_names.length] = "March";
		month_names[month_names.length] = "April";
		month_names[month_names.length] = "May";
		month_names[month_names.length] = "June";
		month_names[month_names.length] = "July";
		month_names[month_names.length] = "August";
		month_names[month_names.length] = "September";
		month_names[month_names.length] = "October";
		month_names[month_names.length] = "November";
		month_names[month_names.length] = "December";

		var day_names = new Array ( );
		day_names[day_names.length] = "Sunday";
		day_names[day_names.length] = "Monday";
		day_names[day_names.length] = "Tuesday";
		day_names[day_names.length] = "Wednesday";
		day_names[day_names.length] = "Thursday";
		day_names[day_names.length] = "Friday";
		day_names[day_names.length] = "Saturday";

	var stringdate = ( month_names[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() );
		
	if (this.passthrough === false) {
		$('#allarchive').append('<div class="archiveposttitle" style="text-transform: uppercase; font-family: 'futura-pt'; line-height: 1.3em; letter-spacing: -.2px; font-weight: 800; font-style: normal; margin: 1.5em 0 .5em 0;"><a href="' + this.fullUrl + '">' + this.title + '</a>' + '<p><span class="archivedate"><FONT COLOR="#828282">' + stringdate + '</FONT></span></p></div>');
	}else {
		$('#allarchive').append('<div class="archivelinktitle" style="text-transform: uppercase; font-family: 'futura-pt'; line-height: 1.3em; letter-spacing: -.2px; font-weight: 800; font-style: normal; margin: 1.5em 0 .5em 0;"><a href="' + this.fullUrl + '">' + this.title + ' </a></b><span><FONT COLOR="#828282">&rarr;</FONT></span>' + '<p><span class="archivedate"><FONT COLOR="#828282">' + stringdate + '</FONT></span></p></div>');
	}
				
		});
	});
  
});  
</script>
<div id="allarchive"></div>
```

### Ahh.

<figure>
	<img src="http://d.pr/i/1iXJC+" alt="Finished" title="Finished">
	<figcaption>Finished.</figcaption>
</figure>

<div class="check"><p>✔︎</p></div>

[^1]: You can also hack one if you are a part of the Developer Platform.
[^2]: Funnily enough, Sid has an entire page dedicated to Squarespace hacks. (I'm not alone in this universe.)
[^3]: Is [CamelCase][a] appropriate here?
[^4]: "Archive" is the name of my blog page. Your string should have whatever you  chose for the name of your blog in place of "Archive".
[^5]: I tweaked Sid's code slightly to better suit my needs

[a]: https://en.wikipedia.org/wiki/CamelCase "Wikipedia: CamelCase"

[1]: http://help.squarespace.com/guides/using-the-index-page "Squarespace help topic for using the Index page"
[2]: http://answers.squarespace.com/questions/30592/summary-block "Squarespace Answers forum on using the Summary block"
[3]: http://daringfireball.net/linked/ "John Gruber's 'Linked List'"
[4]: http://help.squarespace.com/guides/linking-a-post-title-to-external-content "Squarespace help topic for linked posts support"
[5]: http://www.marco.org/secondcrack "Marco Arment's static blogging engine, 'SecondCrack'"
[6]: http://www.caseyliss.com/2014/5/2/camel-open-sourced "Casey Liss open-sourcing Camel"
[7]: http://sidoneill.com "More help with Squarespace problems"
[8]: http://crateofpenguins.com/ "Blog that helped me with some Squarespace problems"
[9]: http://crateofpenguins.com/blog/2013-9-squarespace-post-index-non-hacky-version "Where I cribbed the text for my post index"
[10]: http://crateofpenguins.com/blog/2013-9-squarespace-post-index-non-hacky-version "Where I cribbed the text for my post index"
[11]: http://crateofpenguins.com/blog/2013-12-add-bigfoot-to-squarespace-sites "This helped me add Bigfoot footnotes to Squarespace"
[12]: http://appletoolbox.com/2013/04/how-to-view-html-source-code-in-safari/ "How to view HTML source in Safari"