$(document).ready(function(){

	n = 1;
	var items = Array('/','|','-','+','=');

	$('body').on( "mousemove", function(e) {
		// move #position on mouse move
		$('#position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px' });
		// copy element on mousemove
		var clone = $('#position').clone();
		$('.page-'+n).append(clone);
	});

	$('body').click(function(){
		/*location.reload();*/
		/*n++;
		var item = items[Math.floor(Math.random()*items.length)];
		$('#position').html(item);*/
		$('body').append('<div class="break"></div><div class="page-'+n+'"></div>');
	});


});