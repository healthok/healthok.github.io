$(document).ready(function(){
	$('#one').click(function(){
		var p=$("#pharma");
		var offset=p.offset();
		 $('html, body').animate({scrollTop: offset.top }, 'slow');
		return false;
	}); 
	$('#two').click(function(){
		var p=$("#pharma");
		var offset=p.offset();
		 $('html, body').animate({scrollTop: offset.top }, 'slow');
		return false;
	});
$('#about').click(function(){
	var p = $( "#aboutus" );
	var offset = p.offset();
	 $('html, body').animate({scrollTop: offset.top}, 'slow');
	return false;
}); 
$('#services').click(function(){
	var p = $( "#refill" );
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