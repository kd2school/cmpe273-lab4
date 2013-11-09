$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	
	var URL = "/library/v1/books/" + isbn + "?status=lost";
	
    $.ajax({
        url: URL,
        type: 'PUT',    
        //data: JSON.stringify(dataObject),
        contentType: 'application/json',
        success: function(result) {
        	$("#"+isbn).attr("disabled","disabled");
        	alert("success?");
                    
            
        }
    });
    
});

