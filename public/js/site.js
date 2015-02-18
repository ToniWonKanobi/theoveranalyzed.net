$( document ).ready(function() {
/*
	$('.embed a').embedly({
		key: '34664769afba49b2aeb105bbf54b0a2a',
		display: function(obj){
			// Overwrite the default display.
			if (obj.type === 'video' || obj.type === 'rich'){
				var ratio = ((obj.height/obj.width)*100).toPrecision(4) + '%'
				var div = $('<div class="responsive-object">').css({ paddingBottom: ratio });
				div.html(obj.html);
				$(this).replaceWith(div);
			}
		}
	});
*/
	$.bigfoot({
		actionOriginalFN: "ignore",
		numberResetSelector: "article",
		buttonMarkup: (
			"<a href=\"#\" class=\"footnote-button\" " +
			"id=\"{{SUP:data-footnote-backlink-ref}}\" " +
			"data-footnote-identifier=\"{{FOOTNOTEID}}\" " +
			"data-footnote-style=\"default\"" +
			"alt=\"See Footnote {{FOOTNOTEID}}\" " +
			"rel=\"footnote\"" +
			"data-footnote-content=\"{{FOOTNOTECONTENT}}\">" +
			"{{FOOTNOTENUM}}" +
			"</a>"
		)
	});
});
