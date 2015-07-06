@@ Title=Draft Tester  
@@ Date=2015-07-05 23:21  
@@ HideHeader=true  

<form method="post" action="/render-draft">
	<p>
		<input id="go" type="submit" value="Render Draft" />&nbsp;
		<input id="clear" type="submit" value="Clear" onClick="this.form.reset(); return false;" /><br />
		<textarea id="markdown" name="markdown" cols="80" rows="30" wrap="on"></textarea>
	</p>
</form>