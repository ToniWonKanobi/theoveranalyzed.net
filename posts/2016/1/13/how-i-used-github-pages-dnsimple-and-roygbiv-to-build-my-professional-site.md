Title: How I Used GitHub Pages, DNSimple, and ROYGBIV to Build My Professional Site  
Date: 2016-01-13 19:40  
Description: Here's how I built my dental website.  
Tags: Web Design, Dentistry  
Image: https://d.pr/i/w8T4+  

![GitHub is my new jam.][1]

A few days ago I [linked][2] to my professional site, <http://anthonycraigdds.com>.

Although the entire site only weighs 461 KB, and although it is only as single "page" with a more-or-less centered layout, it took me a while to get up and running because I had to learn some things. That, of course, led to some experimentation with DNS, etc. You'll see.

### GitHub Pages

As I eluded in its introductory post, [Camel][3] wasn't going to suit me for my dental website. I asked Casey Liss if he had any recommendations, and he pointed me to GitHub Pages---a service I knew nothing about before the conversation with Casey.

When I finally dove into GitHub Pages, it all went pretty smoothly.

The instructions provided by GitHub couldn't be any plainer:

1. Create an account on GitHub (if you don't already have one)
	
	(I'm [@toniwonkanobi][4] on GitHub.)
	
2. Create a new repository for the webpage you want to create

	(The repository for my professional website is located here: <https://github.com/ToniWonKanobi/anthonycraigdds>)
	
3. In this new repository, create a new branch (distinct from the `master` branch) called `gh-pages`

	(GitHub  also recommends setting the `gh-pages` branch as the default branch)

4. Create file called `index.html` (which would serve as the homepage for the site) and `commit` the change

After that, the project page is available at `http://username.github.io/repository`, or, for me: <http://toniwonkanobi.github.io/anthonycraigdds/>

So, for exactly $0/month, I had a blank slate for which to build my website 👌🏿

### DNSimple

Now, I don't know about you, but the `username.github.io` subdomain-y stuff wasn't really what I was going for with my dental website.

Imagine this scenario:

> Hello, potential patient I just recently met in a non-dental setting.
>
> Oh, you'd like some contact information?
>
> Sure, just head on over to <q>toniwonkanobi dot github dot eye ohh.</q>
>
> Oh, you don't know how to spell that?
>
> Oh, okay. Sorry about that.
>
> It's just <q>TEE, OH, EHN, EYE, DOUBLE-EW---</q>
>
> Oh, you think that's a super long and hard-to-remember URL?
>
> Oh, okay. Sorry about that.
>
> ...
>
> Oh---sure I know the addresses to several nearby dentists whose URL is easier to speak and remember.
> <!-- {blockquote:.convo} -->

All kidding aside, I would never dream of putting that URL under my name.

I purchased `anthonycraigdds.com` a while ago, and I always intended on using that domain for my dental website. So that's what I did.

[Hover][5] has been my domain registrar for a while now, and I've been plenty happy with them.[^1] The interface isn't terribly difficult to navigate, and their customer service is quite great. Whenever I've had a problem, I launch the chat window, and moments later, someone smarter than me is just a few keystrokes away.

However, one thing I've been wanting since I [left Squarespace][6] is a website without the `www`. 

So, when my users navigate to

```nohighlight
http://www.anthonycraigdds.com
```

I wish it would direct to

```nohighlight
http://anthonycraigdds.com
```

The problem is that the type of DNS record that enables this nifty modern web preference---`ALIAS` or `ANAME`---is *not* a record that Hover has implemented.

I looked into this seriously a few weeks ago, but gave up when I realized that Hover couldn't do what I wanted.

Then, a few days ago, I read a blog post by [Manton Reece][7], in which he mentioned [DNSimple][8]:

> Feels like years in the making, but I’ve finally moved all my domain names to a single provider: DNSimple.

So, I checked them out. And guess what? DNSimple supports `ALIAS` and `ANAME` records! 

Goodbye `www`.

#### SSL

I went as far as purchasing an SSL certificate from DNSimple, only to realize that GitHub Pages [does *not* support][9] the `https` protocol for *custom domains.*[^2]

So, as long as my dental site is hosted on GitHub Pages, it'll be `http` for me.

![Where have you seen this before?][10]
<!-- {.small} -->

### Design

If you haven't yet visited <http://anthonycraigdds>, go ahead and do so now.

Notice anything?

It’s hard to miss.

I’m sure you know what I’m talking about: my professional site is completely monotone. You know, a lot of grays, some darker grays, etc.

\<fullstop\>

In actuality, my dental website somehow became what is likely to be the most colorful website I will ever build.

My original concept was basically the current layout, but with a bunch of blue shades.

But then I realized I should step out of my comfort zone and do something different.

### Dentistry

I wanted my website to be more than just a contact page—I wanted my website to embody my ethos as a dental professional.

Just as much as the next dentist, I thoroughly enjoy clean preparations and generally a job well done. That said, I could never touch a tooth again and die a happy man.

I don’t really care about working on people’s teeth.

Part of that is because it’s really not rocket science. There are millions of dollars pumped into the dental research industry every year, all with the same goal: invent something new that makes patients and dentists happier. But here’s the thing: despite the research endeavors, dentistry is basically the same as it has been for the past 50 years. Sure, there are breakthroughs like implants and CAD/CAM, but really, it’s the essentially the same story:

1. Patient has messed up teeth because of laziness and/or lack of education, environmental, genetic problems, etc.
2. Patient may or may not have pain/concern related to dental problems
3. Dentist examines tooth issues, informs patient of options, and both decide on a treatment plan based on patient’s level of concern
4. Dentist removes grunge-y tooth structure and replaces it with plastic or metal or zirconia or ceramic glass or titanium or acrylic
5. Patient leaves office
6. Some amount of time later, patient returns, and
7. Go back to Step 1.
8. And so, and so forth.

It’s all the same.

Because so much of dentistry is old hat, it can be boring and/or tiresome if one only focuses on teeth.

That’s why my fulfillment as a dentist comes from patient interactions, instead.

The teeth are easy. Learning about the patients preference in cars, or about their job, or their family, or their favorite movie—that’s way better than fixing their teeth.

### ROYGBIV

I'm not just Dr. Anthony Craig. I'm a dentist who cares about the person behind the teeth.

And I'm a nerd.

Ask any of my patients (or co-workers). They'd [know it to be true][11] (if they searched their feelings).

Therefore, [ROYGBIV][12].

Or, if it's been a while: 

<span style="color:red">Red</span>  
<span style="color:orange">Orange</span>  
<span style="color:yellow">Yellow</span>  
<span style="color:green">Green</span>  
<span style="color:blue">Blue</span>  
<span style="color:indigo">Indigo</span>  
<span style="color:violet">Violet</span>  

These are the colors generally regarded as comprising the [visible light portion][13] of the [electromagnetic spectrum][14].

What better way to project pure nerdome than that!?

I applied each color of ROYGBIV to a different horizontal section of my layout. After doing that, I toned-down the colors by converting to [RGBA][15] and setting the [alpha channel][16] to around 50%.

***

So, [have some fun][17] exploring my simple new site. <span id="fun">On desktop browsers, hover around some of the hyperlinks and see what pops up.</span>

<style>
	span#fun:hover:after {
		content: ' ✨';
	}
</style>

Oh, and if you need some dental help, [come see me][18].

[^1]: I first heard about Hover on---you guessed it---a podcast. I would link to which podcast, but I couldn't possibly remember which. I've listened to the hosts of various podcasts sell ads for Hover for the past three years. It probably is one of the most frequent sponsors of the podcasts I listen to, along with Squarespace, Harry's, and Casper (in that order, probably).
[^2]: According to [Eric Mill][a], as of early 2014, GitHub Pages *does* support the `https` protocol on non-custom domains, sort of. Again, I don't want to use that URL for the canonical version of my website, so this isn't an option for me.

[a]: https://konklone.com/post/github-pages-now-sorta-supports-https-so-use-it "'GitHub Pages Now (Sorta) Supports HTTPS, So Use It'"

[1]: https://d.pr/i/w8T4+ "GitHub is my new jam."
[2]: /2016/1/3/my-second-website-anthony-craig-dds "My linked post to my professional website"
[3]: /tags/Camel "Posts tagged 'Camel'"
[4]: https://github.com/ToniWonKanobi "Me on GitHub"
[5]: https://hover.com/Pji0Qlok "Hover"
[6]: /tags/Leaving%20Squarespace "Posts tagged 'Leaving Squarespace'"
[7]: http://www.manton.org/2016/01/dns-consolidation.html "Manton Reece's blog post mentioning DNSimple"
[8]: https://dnsimple.com "DNSimple"
[9]: https://github.com/isaacs/github/issues/156 "'Add HTTPS support to Github Pages #156'"
[10]: https://d.pr/i/1cD79+ "Blue color scheme for TheOverAnalyzed"
[11]: https://www.youtube.com/watch?v=Lbjru5CQIW4&feature=youtu.be&t=2m15s "'Search your feelings, you know it to be true"
[12]: https://en.wikipedia.org/wiki/ROYGBIV "Wikipedia: ROYGBIV"
[13]: https://en.wikipedia.org/wiki/Visible_spectrum "Wikipedia: Visible spectrum"
[14]: https://en.wikipedia.org/wiki/Electromagnetic_spectrum "Wikipedia: Electromagnetic specturm"
[15]: https://en.wikipedia.org/wiki/RGBA_color_space "Wikipedia: RGBA color space"
[16]: https://en.wikipedia.org/wiki/Alpha_compositing "Wikipedia: Alpha compositing"
[17]: http://anthonycraigdds.com "My dental website"
[18]: http://maps.apple.com/?q=Hospitality+Dental+Group+San+Bernardino "Apple Maps link to my dental office"