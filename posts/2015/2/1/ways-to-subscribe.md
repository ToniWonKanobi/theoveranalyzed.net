@@ Title=Ways To Subscribe  
@@ Date=2015-02-01 12:00  
@@ Description=I've changed the RSS feeds (again).  
@@ Tags=meta  

I spent an inordinate amount of time tweaking the website this weekend. One change I am quite proud of are my alterations to the <s>RSS</s> [Subscribe](http://www.theoveranalyzed.net/subscribe/) page.

* I made some rather clever uses of Squarespace tags to differentiate my [Articles](http://www.theoveranalyzed.net/posts?tag=articles) and [Linked List ](http://www.theoveranalyzed.net/posts?tag=linked) items. This was mainly an attempt to cater to different portions of my audience[^1]. This made it possible to have separate RSS feeds.

	* The previous RSS feed contained every post made on this site. This was a problem for some of my audience, because RSS in and of itself is not an immediately familiar concept. 
	
		There are now **two** feeds:
	
		* [The 'Main' feed](feed://theoveranalyzed.net/posts?format=rss)
		* [The 'Articles-only' feed](feed://theoveranalyzed.net/posts?format=rss)
	 
* I tried previously to use [MailChimp](mailchimp.com) to automatically send out a new email when the RSS feed updates. Squarespace has a MailChimp plugin, so this seemed rather ideal. However, it ended up *not* being ideal thanks to the [CAN-SPAM Act of 2003](http://en.wikipedia.org/wiki/CAN-SPAM_Act_of_2003)[^2]. 

	Thank goodness for IFTTT:
	
	* [Email generated for all posts](https://ifttt.com/recipes/253106-new-post-from-theoveranalyzed-generate-an-email)
	* [Email generated for Articles-only posts](https://ifttt.com/recipes/253111-new-post-from-theoveranalyzed-articles-only-generate-an-email)

# Update 03/08/15 #

Much of the information on this page has either been changed or deprecated since its inception.

Visit this link for information regarding subscribing to TheOverAnalyzed:

[http://www.theoveranalyzed.net/subscribe/](http://www.theoveranalyzed.net/subscribe/)

[^2]: The Act requires email campaigns to include a physical mailing/contact address in the footer of the email. The intended effect here is to discourage SPAM. However, small sites like my own get caught in the crosshairs. I do not want to advertise my physical address. Accordingly, an email campaign was out. 

[^1]: Unlike most of the blogs I follow, at this early stage of development, the majority of my readers are likely less technologically inclined than my target audience (people like myself). As such, I needed a way to reach them without alienating the more techy portion of the audience