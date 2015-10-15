@@ Title=Toni Footnote Test

<p>Sample text.<sup class="footnote-ref"><a href="#fn:attr" id="fnref:attr">[1]</a></sup></p>

<div class="footnotes">
	<hr />
	<ol>
		<li id="fn:attr">
			<p>Are you wondering why the <code>replace</code> works when the links I&#8217;ve shown above don&#8217;t have an attribute with a value of <code>data-footnote-ref</code>? It&#8217;s because a function call (<code>cleanFootnoteLinks</code>) between Lines 128 and 142 assigns that attribute to all the footnote links.&#160;<a href="#fnref:attr" rev="footnote">&#8617;</a></p>
		</li>
	</ol>
</div>