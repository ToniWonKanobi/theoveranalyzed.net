Title: Selectively Smart Typography  
Date: 2016-02-24 19:26  
Link: http://bitsplitting.org/2016/02/24/selectively-smart-typography/  
Tags: Typography, Apps, Power User  
Image: http://bitsplitting.org/wp-content/uploads/2016/02/Keyboard.png  
Video: https://d.pr/v/6Cn7+  

<figure id="tweetbot-sub-video">
	<video controls autoplay title="Sigh.">
		<source src="https://d.pr/v/6Cn7+">
	</video>
	<figcaption>I wish Tweetbot wouldn't do this *all* of the time</figcaption>
</figure>

Daniel Jalkut, on OS X's "Smart Subsitutions" (e.g., replacing \`dumb\` quotes like `"` with smart ones like `“`):

> It’s a good thing.
>
> However, the feature can be vexing when typing in contexts where typographic beauty is clearly not the priority. For example the behavior would not make sense in a code editor like Xcode or BBEdit. These apps are more often used to write text that will please a programming language compiler or interpreter, where a string for example must be enclosed by "straight quotes", and “smart quotes” would only lead to a syntax error.

As Jalkut notes later, disabling substitutions system-wide *is* the easiest fix. But it's also akin to using a sledgehammer to hang a small canvas on the wall. Doing so would mean apps such as Tweetbot won't---[for better or for worse][1]---replace double/triple dashes and/or dumb quotes automatically.

So what does Jalkut suggest?

> Thanks to the flexibility of Apple’s “user defaults” system for registering preferences on a system-wide and app-specific basis, you can impose override preferences for these options on the specific apps of your choosing.

And if you hate the command line:

> Update: My old friend Chris DeSalvo, who also happens to work at Slack on the Mac Slack app points out that there is a much simpler solution for Slack in particular:
>
> > @danielpunkass @jsatk @SlackHQ You could also go to Edit > Substitutions within the app and disable them there.
> >
> > — Chris DeSalvo (@chrisdesalvo) February 24, 2016
> 
> I just confirmed that this seems to work well

Ah, the ol' `Edit` → `Substitutions`.

It's disheartening to know just how many things I've learned over the years, only to forget them later (👴🏾?)

[1]: #tweetbot-sub-video "Link back to video at the top"