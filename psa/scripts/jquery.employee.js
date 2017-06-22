$(document).ready(function(){
			var open = false; 
       			 $("#showemployee").click(function() {
       			 	$("#employee .buttons").toggle("slow");
       			 	if (open == 0) {
       			 		$(this).css("backgroundPosition","0 -54px");
       			 		open = true;
       			 	}
       			 	else {
       			 		$(this).css("backgroundPosition","0 0");
       			 		open = false;
       			 	}
       			 });
			});