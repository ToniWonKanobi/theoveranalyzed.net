Title: Safari's Custom Style Sheet  
Date: 2018-03-16 13:00  
Description: I can finally stop pleading with the blogs and websites I follow to style things better 😅  
Tags: Power User, CSS  
Image: /images/safari-custom-style-sheet.jpg  

![I had no idea I could do this][1]
<!-- {.border} -->

This past weekend, I discovered a real rabbit hole of a thing: Desktop Safari has the ability to load custom style sheets!

😱

What does this mean, exactly?

1. It means I no longer have to harangue the proprietors of horribly designed websites to change things up 👍🏼

2. It means bye bye Arial, and hello Avenir 💯

3. It means I can finally read [Daring Fireball][2] without [Reader mode][3] 🤓

### The History of User-defined Style Sheets in Desktop Safari

As far as I can tell, Safari's had the option of loading a custom style sheet since version 1 was released in January 2003.

I scoured the web for official Safari release notes from those early days, but alas, I couldn't find any.

The best evidence I've found that custom style sheets have been an option since version 1 is Sven-S. Porst's snarky blog post from January 2003, entitled [Quarter Life Crisis][4]. In his post, Porst compares the newly-released Safari with [Chimera][5]:

> Then, everything that’s missing in Chimera is there: Font encoding menu? Check. Google search field? Check. Location bar/sheet that autocompletes, taking into account both the history and your bookmarks? Check. Popup window blocking that’s easy to toggle on and off in case there’s a stubborn site? Check. Same for cache cleaning? Check. (Well, that’d be rather useless, frankly, if Safari were cleverer about reloading pages. It’s cache seems to be a bit more reluctant to reload pages and see changes in them while Chimera has no troubles whatsoever with this.) Very easy preferences? Check. …that still **enables you to set a style sheet? Check. That one’s quite cool.** [emphasis added]

I checked the page source, but his post predates the convention of including a `<meta>` tag with the publishing time. So I checked the Wayback Machine. The earliest cached entry for Porst's post was [March 2004][6]. So while there's no cached version of the post from January 2003, March of the next year is definitely still pre-[Safari 2][7] (April 2005).

Of course I went to the source. [Gramps][8], also known as [Don Melton][9], is a former Director of Internet Technologies at Apple, and headed the teams behind Safari and WebKit development.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/donmelton?ref_src=twsrc%5Etfw">@donmelton</a> Gramps, I have a Safari history question for you.<br><br>I *just* discoverd/realized that Desktop Safari has the ability to load custom style sheets 😱<br><br>Was this in Safari 1 in ~2003?</p>&mdash; Anthony Craig (@ToniWonKanobi) <a href="https://twitter.com/ToniWonKanobi/status/973595645318762496?ref_src=twsrc%5Etfw">March 13, 2018</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I honestly don’t remember. Does it matter? I mean, it’s not like you’re going to use old versions of Safari now. :)</p>&mdash; Don Melton (@donmelton) <a href="https://twitter.com/donmelton/status/973597261979557888?ref_src=twsrc%5Etfw">March 13, 2018</a></blockquote>

So no help there, but it seems custom style sheets have been around since the beginning.

<aside class="update">

### Update: Safari Probably Had Custom Style Sheet Functionality Since the Betas

March 17, 2018
<!-- {.updatetime} -->

I got some good feedback regarding my speculative timeline.

Here's a tweet from Tim Tepaße, pointing me to an early CNET review of Safari 1 beta 2:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">PS: In this review it states that the custom style sheet in Safari exists since Safari 1.0 Beta 2 (⌘F for „style“):<a href="https://t.co/IXqdbl3hEL">https://t.co/IXqdbl3hEL</a></p>&mdash; Tim Tepaße (@ttepasse) <a href="https://twitter.com/ttepasse/status/974910309298262016?ref_src=twsrc%5Etfw">March 17, 2018</a></blockquote> 

And here's the CNET review itself:

> Safari Beta 2 added an advanced settings toolbar, which gives us hope for the future. For now, though, it lets you only choose a style sheet and change your proxy settings.

So, I think that helps solidify custom style sheets as a Safari 1 feature 🤗

</aside>

***

Although I'm elated the Safari/WebKit team decided to include this feature, part of me wonders why it was included at all.

Apple has never been *that* open of a company. Allowing users to make their own decisions about how things should function, or how things should look---or what they even want---that isn't exactly Apple's [M.O.][10]

Because my own Apple journey [started in 2006][11], Safari 1 was before my time. My hunch is that the Safari/WebKit team added a custom style sheet option because back then, most web designers were *not* utilizing CSS. From what I gather about [the early days of the web][12], referencing external style sheets was not commonplace at first. Moreover, having a nice-looking website [wasn't necessarily a priority back then][13]. Rather than have a sub-optimal web browsing experience, Safari/WebKit engineers let power users choose their own styles.

Of course, CSS eventually became more prominent, and then a web standard. It's 2018. The case for a custom style sheet option in today's Safari may not be as strong as it was 15 years ago. But it's probably one of those things that current Safari engineers look at every year and ask, "Why take it out now?"

*I* sure am glad it's there 😆

And that's it for my brief history of Safari's custom style sheet option.[^1]

<aside class="update">

### Update: Safari Probably Included Custom Style Sheet Functionality Because Competitor Browsers Had Custom Style Sheet Functionality---It Had Nothing To Do With An Unadoption of CSS

March 17, 2018
<!-- {.updatetime} -->

After publishing this post, I got some feedback offering me some perspective.

#### Competition from Other Browsers

I wrote this entire blog post from the point of view of an Apple luddite---I didn't even *consider* that Safari may not have been the first browser ever to include a custom style sheet option 😅

As Tim Tepaße [noted][u1], custom style sheets were available for Internet Explorer, Opera, and Mozilla [years before Safari had them][u2].

#### CSS Was A Standard by ~2000

Here's Tim Tepaße schooling me some more:

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Two things where your speculations are wrong, I think:<br>• In my recollection, yes before 2000 CSS had a rough beginning in the table layout era. But from then, at least for the Safari 1.0 timespan it was the default method. You&#39;re mixing two different eras …</p>&mdash; Tim Tepaße (@ttepasse) <a href="https://twitter.com/ttepasse/status/974905521915523072?ref_src=twsrc%5Etfw">March 17, 2018</a></blockquote>

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">… in your explanation, the links reference 1999 and before, not 2003. Between that there was an era of massive change.<br>• A simpler explanation of user stylesheets: It was in CSS 2.0 and every other browser supported it. If Safari wanted to make a splash, they had to mirror …</p>&mdash; Tim Tepaße (@ttepasse) <a href="https://twitter.com/ttepasse/status/974906535590662149?ref_src=twsrc%5Etfw">March 17, 2018</a></blockquote>

So, it was a little nearsighted of me to conflate Safari's custom style sheet functionality with a slow adoption of CSS, since by 2003, CSS was the norm 👍🏼

[u1]: https://twitter.com/ttepasse/status/974906898414821376 "Link to tweet in which Tepaße tells me about early browsers with custom style sheet functionality"
[u2]: https://dbaron.org/css/user/index.en.html "Blog post from David Baron, reviewing custom style sheet functionality in those browsers that predated Safari"

</aside>

Now let's talk about implementing the custom style sheet, so that you can make your web browsing [dreams come true][14].

### Implementing Safari's Custom Style Sheet

It's easy:

1. Create a style sheet and put it somewhere you'll remember

	Here's [mine][15] in [SCSS/Sass][16], because I forget whether CSS finally has variables:[^2]
	
	[![Never have I used so many \`!important\` value additions in my declarations 😞 (More on that later)][17]][18]
	<!-- {.border} -->
	
2. Open Safari preferences, and navigate to the Advanced tab
3. From the \`Style sheet\` dropdown menu, locate and select the style sheet you created in Step 1
4. Be happy.

### Issues

After spending the better part of last weekend tweaking my custom style sheet, I have to say: I'm pretty impressed with myself 🎉

I meant what I said earlier, though: this has been *such* a rabbit hole. I thought endlessly tweaking the minutia of my own websites was tiring. Little did I know it would be even more daunting to mess with everyone else's websites.

And in scratching that itch, I *have* run into a few walls 🏗️

#### All or Nothing

After fiddling with it a bit, I realized my custom style sheet was being applied to *all* websites I visited. (Duh 🤦🏼‍♂️) And the problem with that is some websites have great styles without my help---why would I want inject my own styles if their's were already okay?

And if I needed to selectively apply my styles, what was the best way to go about it?

##### Blacklisting vs./and/or Whitelisting Websites

At first, I was trying to target each website individually. I would peek at the page source, looking for `id`'s or `class`'s that were unique to each website, and target those specific websites in my style sheet---sort of like a blacklist. But then I realized---I did a lot of realizing this past weekend---that method would be untenable, because bad websites with horrible styles likely outnumber the good websites with pleasing styles---by a huge margin, no doubt.[^3]

So what about applying the *opposite* approach? Instead of targeting specific ugly websites and their specific ugly website selectors, I could just assume that most websites look like trash![^4] And then I could just apply my styles to *all* websites, and selectively un-style those sites that already looked good. In other words, I could have a whitelist.

What I ended up doing was something more like a blacklist, but with some whitelist characteristics mixed in.

I knew I didn't want to apply my generic website styles to *my* personal websites (or websites for which I am a quasi-administrator).

So I applied a class `toni` to the `<html>` elements of all my websites:

```html
<html class="toni">
```

That allowed me to use the negation pseudo-class `:not()` to prevent any of my custom styles from being applied to the websites I've made or administer:

```scss
html:not(.toni) {
	body {
		font-family: Avenir !important;
		font-weight: 500 !important;
		// (More styles)
	}
}
```

I'm effectively selecting-out the "good" (my) websites that need no styling---like a whitelist. Theoretically, I could have done the same for other websites with good styles, but I'm too lazy for that, and I think my styles generally look better than their's---even if they weren't that bad to begin with.[^5]

And for any situations where my styles are not specific enough, I've also included a few selectors targeting those stubborn sites---like a blacklist.

This is a portion of my style sheet targeting [Marco Arment's blog][19]. I had to adjust the size of his "masthead," because when I increased the `font-size` across the board, it overwhelms his colorful "masthead" at the top of the webpage:

```scss
#mastheadbackground {
  	height: 200px !important;
  	margin-bottom: -200px !important;
}
```

![Without specific Marco.org blacklisting. See how the title text isn't vertically centered in the brown masthead?][20]
<!-- {.border} -->

![With specific Marco.org blacklisting. See how the title text is now vertically centered in the brown masthead? That's because I made the masthead 'taller.' (Probably would have been better if Marco used \`display: flex;\` in this situation, but what do I know?)][21]
<!-- {.border} -->

That's just one example. If you dive into my [style sheet][22], you'll see more of what I'm talking about.

<aside class="update">

### There's An Extension for That

March 17, 2018
<!-- {.updatetime} -->

Tim Tepaße [suggested][u3] I try the Safari extension called [Stylish][u4].

Stylish is an extension that provides similar functionality to Safari's built-in custom style sheet option. I tried that extension! But the problem with that extension is that it functions mostly as a blacklist. I can choose what styles to apply, but I have to explicitly choose the domains I want to be effected by the style rules.

[u3]: https://twitter.com/ttepasse/status/974911583720804353 "Tepaße mentioning Stylish on Twitter"
[u4]: http://sobolev.us/stylish/ "Link to the Safari extension Stylish"

</aside>

#### JavaScript Ruins Everything

Most of the websites/blogs I follow adhere to web standards and common practices. They have semantic document models, with `id`'s and  `class`'s that make sense, and eschew inline styles for referenced external style sheets. Basically, I can style most websites easily enough.

However, the recent trend---especially for big publishers---is to dynamically generate content *and* styles using server-side and client-side JavaScript. Scripts running in the browser window collect data such as the browser type, and use that and other information to determine how to best present the content.

As far as styles go, that usually means [inlining][23]. If styles are based on classes that are generated by JavaScript, it's that much more difficult for me to isolate them and override them. Moreover, the big websites usually have super complex style sheets---some with thousands of lines of code.

JavaScript inlining and complex style sheets make for a [specificity][24] nightmare! In those situations, I may have Avenir for the title of the site, or maybe in the other headings, for instance, but the body text may still be whatever the author chose. You'll notice that I've included `!important` after *every* declaration. (That's sort of like the \`ignore everything else and just do what I said in this declaration\` CSS command.) Sometimes, *that's* not even enough to overcome the insane levels of specificity for some of these websites.

Still, mostly Avenir is better than mostly Arial <del>/</del>or Helvetica, Verdana, or Comic Sans (😖)---I'll take what I can get.

If you haven't already done so, try playing around with a custom style sheet in Safari---I think you'll be glad you did 💻

[1]: /images/safari-custom-style-sheet.jpg "Safari's preference tab 'Advanced'"
[2]: https://daringfireball.net/preferences/ "Daring Fireball's preferences page"
[3]: https://www.macworld.com/article/3206708/websites/how-to-use-reader-mode-in-safari-11.html "Link to Macworld piece explaining Safari Reader mode"
[4]: http://earthlingsoft.net/ssp/blog/2003/01/safari "A blog post by Sven-S Porst, substantiating my claim that Safari 1 had custom style sheets"
[5]: https://en.wikipedia.org/wiki/Camino_(web_browser) "Wikipedia entry for the Chimera web browser (redirects to Camino)"
[6]: http://web.archive.org/web/20040317120951/http://earthlingsoft.net/ssp/blog/2003/01/safari "The Wayback Machine's earliest entry for this blog post"
[7]: https://en.wikipedia.org/wiki/Safari_(web_browser)#Safari_2 "Wikipedia entry for Safari 2"
[8]: https://donmelton.com/2015/11/30/why-they-call-me-gramps/ "Don Melton's blog post wherein he explains the origins of 'Gramps'"
[9]: https://twitter.com/donmelton "Don Melton on Twitter"
[10]: https://www.bloomberg.com/news/articles/1998-05-25/steve-jobs-theres-sanity-returning "Business Week article featuring that famous quote from Steve Jobs about how people don't know what they want until Apple shows them"
[11]: https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-2-duo-2.33-17-specs.html "Link to an EveryMac page wherein you'll find my first Apple notebook: the newly Intel-powered MacBook Pro 17-inch"
[12]: https://alistapart.com/article/fear "ALA feature on the trepidation surrounding cascading style sheets"
[13]: https://www.warnerbros.com/archive/spacejam/movie/jam.htm "Space Jam website from the Warner Bros archive"
[14]: https://www.youtube.com/watch?v=EErSKhC0CZs "Hall & Oates 'You Make My Dreams Come True'"
[15]: https://gist.github.com/ToniWonKanobi/75542d646685fb355778d50f962086ed "Link to a `custom.scss` as a public gist on GitHub"
[16]: http://sass-lang.com "SCSS/Sass website"
[17]: /images/custom.scss.jpg "Screenshot of my custom style sheet"
[18]: https://gist.github.com/ToniWonKanobi/75542d646685fb355778d50f962086ed "Link to a `custom.scss` as a public gist on GitHub"
[19]: https://marco.org "Marco Arment's blog"
[20]: /images/marcoorg-without-blacklist.jpg "Marco.org without specific 'fixes' applied"
[21]: /images/marcoorg-with-blacklist.jpg "Marco.org with specific 'fixes' applied"
[22]: https://gist.github.com/ToniWonKanobi/75542d646685fb355778d50f962086ed "Link to a `custom.scss` as a public gist on GitHub"
[23]: https://www.w3.org/TR/html401/present/styles.html#h-14.2.2 "W3C post about inline styles"
[24]: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity "Smashing Magazine post on specificity"

[^1]: If there are any early Netscape/Chimera/Safari/WebKit engineers or historians or experts reading this blog post, please let me know whether my version of history is correct, and/or if I should add something for clarity 🤗
[^2]: Vanilla CSS [*does*][a] have variables, but CSS still doesn't have nesting, or that neat little [`&`][b] that makes SCSS/Sass so great.
[^3]: My style sheet would be littered with stupid selectors like this:

	```css
	#collection-55f20fcce4b00eb5577ba5e2.transparent-header.enable-nav-button.nav-button-style-outline.nav-button-corner-style-rounded.banner-button-style-outline.banner-button-corner-style-rounded.banner-slideshow-controls-arrows.meta-priority-date.hide-entry-author.hide-list-entry-footer.hide-sidebar-title.hide-blog-sidebar.center-navigation--info.hide-site-info.event-thumbnails.event-thumbnail-size-32-standard.event-date-label.event-date-label-time.event-list-show-cats.event-list-date.event-list-time.event-list-address.event-icalgcal-links.event-excerpts.event-item-back-link.gallery-design-grid.aspect-ratio-auto.lightbox-style-light.gallery-navigation-bullets.gallery-info-overlay-show-on-hover.gallery-aspect-ratio-32-standard.gallery-arrow-style-no-background.gallery-transitions-fade.gallery-show-arrows.gallery-auto-crop.product-list-titles-under.product-list-alignment-center.product-item-size-11-square.product-image-auto-crop.product-gallery-size-11-square.show-product-price.show-product-item-nav.product-social-sharing.newsletter-style-light.opentable-style-light.small-button-style-solid.small-button-shape-square.medium-button-style-solid.medium-button-shape-square.large-button-style-solid.large-button-shape-square.image-block-poster-text-alignment-center.image-block-card-dynamic-font-sizing.image-block-card-content-position-center.image-block-card-text-alignment-left.image-block-overlap-dynamic-font-sizing.image-block-overlap-content-position-center.image-block-overlap-text-alignment-left.image-block-collage-dynamic-font-sizing.image-block-collage-content-position-top.image-block-collage-text-alignment-left.image-block-stack-dynamic-font-sizing.image-block-stack-text-alignment-left.button-style-solid.button-corner-style-square.tweak-product-quick-view-button-style-floating.tweak-product-quick-view-button-position-bottom.tweak-product-quick-view-lightbox-excerpt-display-truncate.tweak-product-quick-view-lightbox-show-arrows.tweak-product-quick-view-lightbox-show-close-button.tweak-product-quick-view-lightbox-controls-weight-light.native-currency-code-usd.collection-type-page.collection-layout-default.collection-55f20fcce4b00eb5577ba5e2.homepage.mobile-style-available.has-banner-image.general-page
	```
	<!-- {.stupid-bigfoot-pre-overflow} -->
[^4]: 🤣
[^5]: I don't mean to imply that I'm some sort of amazing front-end designer or anything! I am not suggesting that someone else's style looks bad (okay, maybe a little). Mostly, I just know what I think looks good, and that's what done with my style sheet.

[a]: https://css-tricks.com/difference-between-types-of-css-variables/ "CSS-Tricks post about variables in CSS vs. SCSS/Sass"
[b]: https://css-tricks.com/the-sass-ampersand/ "CSS-Tricks on the & in SCSS/Sass"