$(document).ready(function(){
    $("#two").click(function(){
     $("#p1").slideUp();
       $("#p3").slideUp(); 
       $("#p4").slideUp();
     $("#p2").slideDown(10);
    });
    $("#one").click(function(){
        $("#p2").hide();
         $("#p3").hide();
         $("#p4").hide();
        $("#p1").toggle();
    }); 
$("#three").click(function(){
        $("#p2").hide();
         $("#p1").hide();
         $("#p4").hide();
        $("#p3").toggle();
    }); 
$("#four").click(function(){
    $("#p2").hide();
     $("#p1").hide();
     $("#p3").hide();
    $("#p4").toggle();
}); 
$('#scroll1').click(function(){
	var p = $( "#p1" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#scroll2').click(function(){
	var p = $( "#p2" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#scroll3').click(function(){
	var p = $( "#p3" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#scroll4').click(function(){
	var p = $( "#p4" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
});