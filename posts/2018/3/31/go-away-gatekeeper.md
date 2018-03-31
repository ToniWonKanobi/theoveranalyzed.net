Title: Go Away, Gatekeeper  
Date: 2018-03-31 08:00  
Description: 😠  
Tags: Power User  
Image: /images/gatekeeper-disabled.png  

![Where's the option to "Please never harass me about installing applications again" ❓][1] <!-- {figcaption:.hidden} -->

(🤬)

[[toc]]

### What is Gatekeeper?

Apple introduced [Gatekeeper][2] "Wikipedia entry for \"Gatekeeper\"") in [Mac OS X Lion][3]. Gatekeeper prevents users from accidentally opening applications that aren't from the Mac App Store, as well as applications from non-Apple-signed developers.

Users can get around the block by secondary clicking the application and invoking the Context Menu `Open` command.

This additional step forces users to *explicitly* acknowledge that they're about to open something Apple hasn't at least indirectly approved.

In the ~6 years since its implementation, Gatekeeper hasn't had that much of an impact on my computing life. At most, it's a slight annoyance once in a while. But I always figured my small irritations were worth it if it helps prevent a disaster for the novice computer user.

And that's really what Gatekeeper's about: it's a feature that's aimed *squarely* at the less technologically savvy amongst us. You know---grandparents and the like.

### Gatekeeper: Front and Center

Gatekeeper didn't mean that much to me until this past weekend, when I was forced to deal with it's incessant dialogs.

This past weekend, while having the [greatest hamburger experience ever][4], I also visited a Leica retailer to try the M (Typ 240). Ever the M rangefinder, the M240 has no real way of determining the aperture of the lens. It *does* try and approximate it, though. Trouble is, the approximation is usually off ± 1 stop.

Therefore, all the EXIF data for those pictures shot on the M240 had incorrect aperture values 😒 Unsurprisingly, this irks me a great deal.
	
All was not lost, though. All of the lenses I tried with the M240 were [6-bit coded][5], so I could tell from EXIF data which shots were taken with which lens. Also, I knew what aperture I used with each lens---ƒ/1.4 with the [Summilux 50mm][6], ƒ/2.0 with the [Summicron 50mm][7], and ƒ/0.95 (😱) with the [Noctilux 50mm][8].
	
Armed with that information, I knew what corrections needed to be made in the EXIF data for those M240 shots.
	
Problem: there's no easy way to edit the aperture EXIF data with any of Apple's built-in apps.

I had to download this ancient and quasi-broken (though beloved by many) [non-Retina] application called [pyExifToolGui][9], which is a GUI wrapper for a CLI utility called [`exiftool`][10].

And guess what happened when I tried to open the utility:

![Dialog box that pops up when trying to install an app that Apple hasn't previously condoned][11] <!-- {figcaption:.hidden} -->

Sigh.

After getting past this initial roadblock, I had to download something else (I forget what exactly), and when I tried to open *that* application, there was *another* stupid dialog. Long story short: this happened several times over an hour period.

It was exhausting.

I had the idea that I should check System Preferences to see if I had somehow un-selected the "Allow apps downloaded from [Anywhere]" setting:![This is a screenshot of System Preferences "Security & Privacy" tab, before disabling Gatekeeper][12] <!-- {figcaption:.hidden} -->

Turns out: I hadn't somehow accidentally selected a less permissible option in that Security & Privacy tab. In macOS Sierra, Apple *removed* the ability for power users to select the "Anywhere" setting. 

This madness had to end.

### Disabling Gatekeeper

"Google is your friend."

It took less than 5 seconds of searching to find [this solution][13]:

```bash
$ sudo spctl --master-disable
```

This \`superuser do\` command is setting the "[SecAssessment system policy security][14]" to \`disabled\` mode---allowing apps to be installed from anywhere.

🎉

![This is a screenshot showing the \"Allow apps downloaded from \[Anywhere\]\" option as available][15]

Now, when I try to open that same utility, I get *this* dialog:

![Image of the dialog after \`spctl\` was disabled][16] <!-- {figcaption:.hidden} -->

Sure: still annoying, but at least I don't have to do the right-click-`Open` dance anymore. I guess Apple can't make it *too* easy for power users 🙄

[1]: /images/pyexiftoolgui-before-disable.png "Screenshot of macOS System Preferences Security Pane, with Gatekeeper disabled"
[2]: https://en.wikipedia.org/wiki/Gatekeeper_(macOS
[3]: https://support.apple.com/en-us/HT202491 "Apple support page on Gatekeeper"
[4]: /2018/3/29/i-had-the-impossible-burger-and-it-was-amazing "Link to my post about having tried Impossible Burger"
[5]: https://www.dpreview.com/articles/0669712115/leicamdlenses "Digital Photography Review of Leica's 6-bit codings, circa 2006"
[6]: https://us.leica-camera.com/Photography/Leica-M/M-Lenses/Summilux-M-50mm-f-1.4-ASPH "Leica Summilux-M 50mm f/1.4 ASPH. on Leica's website"
[7]: https://us.leica-camera.com/Photography/Leica-M/M-Lenses/Summicron-M-50mm-f-2 "Leica Summicron-M 50mm f/2.0 ASPH. on Leica's website"
[8]: https://us.leica-camera.com/Photography/Leica-M/M-Lenses/Noctilux-M-50mm-f-0.95-ASPH "Leica Summilux-M 50mm f/1.4 ASPH. on Leica's website"
[9]: https://hvdwolf.github.io/pyExifToolGUI/ "pyExifToolGui's webpage"
[10]: https://sno.phy.queensu.ca/~phil/exiftool/ "exiftool's webpage"
[11]: /images/pyexiftoolgui-before-disable.png "Dialog before disabling Gatekeeper"
[12]: /images/system-preferences-before-disable.png "Screenshot of System Preferences \"Security & Privacy\" tab, before disabling Gatekeeper"
[13]: https://www.tekrevue.com/tip/gatekeeper-macos-sierra/ "Blog post with the Gatekeeper fix"
[14]: https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/spctl.8.html "OS X Man Page for \`spctl\`"
[15]: /images/system-preferences-after-disable.png "System Preferences screenshot showing the \"Allow apps downloaded from \[Anywhere\]\" option as available"
[16]: /images/pyexiftoolgui-after-disable.png "Screenshot of the dialog after \`spctl\` was disabled"