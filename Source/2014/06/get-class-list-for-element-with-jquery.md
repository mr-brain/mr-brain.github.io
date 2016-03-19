Get Class list for element with jQuery
---

You can iterate and find the one you want:

	var classList = $('#divId').attr('class').split(/\s+/);
	$.each( classList, function(index, item){
	    if (item === 'someClass') {
	       //do something
	    }
	});