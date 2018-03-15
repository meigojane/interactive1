$(document).ready(function(){

	// try uncommenting (deleting the // before a line) to see its effects

	// $('.item').addClass('shrink');	


   $(window).on('scroll', function() {
                var scrollTop = $(this).scrollTop();

                $('img').each(function() {
                var topDistance = $(this).offset().top;

                if ( (topDistance) < scrollTop ) {
                        
                        $(this).next().show();
                    }
                });
            });

        });
    




	/* round corners on click */

	// $('.item').click(function() {
	// $('.this').toggleClass('round');
	// });	

	/* hover to rotate */

	// $('.item').hover(function() {
	// 	$(this).toggleClass('rotate');
	// });	

	/* clone an element */

	// $('.item').click(function() {
	// 	var item = $(this).clone();
	// 	$('#grid').append(item);
	// });	

	/* remove an element */

	// $('.item').click(function() {
	// 	$(this).remove();
	// });

	/* random backgrounds over time */		

	// setInterval(function(){
	// 	$redValue = Math.floor(Math.random()*255);
	// 	$greenValue = Math.floor(Math.random()*255);
	// 	$blueValue = Math.floor(Math.random()*255);	
	// 	$('.item').css(
	// 		'background', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
	// 	);
	// },500);
	
});