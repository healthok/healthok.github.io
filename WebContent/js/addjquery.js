$(document).ready(function(){
    $("#one").click(function(){
        $("#p2").hide();
         $("#p3").hide();
         $("#p4").hide();
        $("#p1").toggle();
    }); 
    $("#two").click(function(){
        $("#p1").hide();
         $("#p3").hide();
         $("#p4").hide();
        $("#p2").toggle();
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
	var p = $( "#ser" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#scroll2').click(function(){
	var p = $( "#ser" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#scroll3').click(function(){
	var p = $( "#ser" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#scroll4').click(function(){
	var p = $( "#ser" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#about').click(function(){
	var p = $( "#aboutus" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#services').click(function(){
	var p = $( "#atservices" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#contact').click(function(){
	var p = $( "#contactus" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#healthok').click(function(){
	$(this).addClass('active');
	 $('html, body').animate({scrollTop: 0}, 'slow');
	return false;
}); 
$('#home').click(function(){
	 $('html, body').animate({scrollTop: 0}, 'slow');
	return false;
}); 

});