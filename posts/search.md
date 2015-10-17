@@ Title=Search  

<form method="get" id="search" action="http://duckduckgo.com/">
   <input type="hidden" name="sites"value="http://www.theoveranalyzed.net">
   <input type="hidden" name="kz" value="1"/>
   <input type="hidden" name="kc" value="1"/>
   <input type="hidden" name="kaf" value="1"/>
   <input type="hidden" name="kac" value="1"/>
   <input type="hidden" name="kh" value="1"/>
   <input type="hidden" name="kp" value="-1"/>
   <input type="hidden" name="k1" value="-1"/>
   <input type="text" name="q" placeholder="why is the author so awesome">
   <input type="submit" value="DuckDuckGo Search" style="visibility: hidden">
</form>

<h3>Options</h3>

To search with another search provider instead of the default, DuckDuckGo, append the appropriate [`!bang`][bang] to your search string.

Consider the following examples:

Instead of the more default string

```
apple
```

which leads to results like this

<a href="http://duckduckgo.com/?q=apple+site:theoveranalyzed.net"><img class="screenshot" src="http://d.pr/i/1htib+" alt="DuckDuckGo results"></a>

you could append `!g` to your search string

```
!g apple
```

which would call for a *Google* search, leading to the results similar to the following:

<a href="https://encrypted.google.com/search?hl=en&q=apple%20site%3Ahttp%3A%2F%2Fwww.theoveranalyzed.net"><img class="screenshot" src="http://d.pr/i/1bE2M+" alt="Google results"></a>

Or, alternatively, you could append `!y` to search for TheOverAnalyzed content using Yahoo!, or `!b` to search Bing instead.[^not]

</div>

[^not]: I'm not sure what value there is to be had in these last two examples

[bang]: https://duckduckgo.com/bang

