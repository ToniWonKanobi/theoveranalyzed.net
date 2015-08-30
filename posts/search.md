@@ Title=Search  

<form method="get" id="search" action="http://duckduckgo.com/">
   <input type="hidden" name="sites"value="http://www.theoveranalyzed.net"/>
   <input type="hidden" name="kz" value="1"/>
   <input type="hidden" name="kc" value="1"/>
   <input type="hidden" name="kaf" value="1"/>
   <input type="hidden" name="kac" value="1"/>
   <input type="hidden" name="kh" value="1"/>
   <input type="hidden" name="kp" value="-1"/>
   <input type="hidden" name="k1" value="-1"/>
   <input type="text" name="q" maxlength="300" placeholder="Search TheOverAnalyzed"/>
   <input type="submit" value="DuckDuckGo Search" style="visibility: hidden;" />
</form>

<hr class="long" />

### Tips

Append `!g` to your search to use Google instead.

Consider this query:

```
!g apple
```

The result would be a *Google* search query for `apple site:theoveranalyzed.net`
