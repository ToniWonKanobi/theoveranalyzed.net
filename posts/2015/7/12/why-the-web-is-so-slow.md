@@ Title=Why The Web Is So Slow  
@@ Date=2015-07-12T14:00:00-07:00  
@@ Description=I've struggled with keeping TheOverAnalyzed's page load times to less than 2 seconds. I'm not alone: everyone wants a faster web. But not everyone is experiencing it. And it's mostly publishers' faults.
@@ Tags=culture, web design, web, design  
@@ Image=http://d.pr/i/1iLFm+  
@@ Video=http://d.pr/v/9TLn+  

When iPhone [launched in 2007][wikipedia 4] with a version of the venerable Safari web browser, the advertisement firms took advantage. That trend has only increased in the 8 years thereafter. Just visit any major .com news organization and you'll see what I mean. The browser window will no doubt be filled with advertisements, most of which look like shat. It's not just that most mobile ads have horribly-pixelated versions of whatever product or service the ad is peddling. No, moreover: those ads typically obscure a *major* portion of the content. 

<figure>
	<a class="nohover" href="http://d.pr/i/6WhJ+">
		<img class="lazy" data-original="http://d.pr/i/6WhJ+" width=" 100%" alt="Look at all those scripts" />
	</a>
	<figcaption>I couldn't even fit all of iMore's JavaScript extensions on this screenshot.</figcaption>
</figure>

And not all of those JavaScrips are lightweight. Even if they were, it still takes time for the browser to compile the scripts before rendering the page. On mobile especially, several seconds could be the difference between a reader enjoying *your* article or someone else's.

<figure>
	<a class="nohover" href="http://d.pr/i/14dQN+">
		<img class="lazy" data-original="http://d.pr/i/14dQN+" width="100%" alt="Regular page load of TheOverAnalyzed" />
	</a>
	<figcaption>A run-of-the-mill page load for TheOverAnalyzed</figcaption>
</figure>

<figure>
	<a class="nohover" href="http://d.pr/i/14ER8+">
		<img class="lazy" data-original="http://d.pr/i/14ER8+" width="100%" alt="No-JS page load of TheOverAnalyzed" />
	</a>
	<figcaption>A page load for TheOverAnalyzed with JavaScript disabled</figcaption>
</figure>

Disabling JavaScript yielded a quarter-second differential in page loading. Images were no different: around a quarter-second faster for the non-image version. 