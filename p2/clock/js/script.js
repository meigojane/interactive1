$(document).ready(function(){

	// try uncommenting (deleting the // before a line) to see its effects

	$('.item').addClass('shrink');	

	n = 1;
	$('body').click(function() {
		$('body').css("background-image", "url('img/Layer"+n+".png')");
		

		n = n+1;

		if(n == 6){
			n=1;
		}

	// $('clock').hover(function() {
	// 	$(this).toggleClass('show')
	// });


		//$(this).toggleClass('colorful');
	});	

function clock() {// We create a new Date object and assign it to a variable called "time".
	var time = new Date(),
   
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    
    
    seconds = time.getSeconds();

	document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
	document.querySelectorAll('.clock1')[0].innerHTML = harold(hours+2) + ":" + harold(minutes) + ":" + harold(seconds);
document.querySelectorAll('.clock2')[0].innerHTML = harold(hours+4) + ":" + harold(minutes) + ":" + harold(seconds);
document.querySelectorAll('.clock3')[0].innerHTML = harold(hours-2) + ":" + harold(minutes) + ":" + harold(seconds);
	document.querySelectorAll('.clock4')[0].innerHTML = harold(hours-4) + ":" + harold(minutes) + ":" + harold(seconds);
	document.querySelectorAll('.clock5')[0].innerHTML = harold(hours-6) + ":" + harold(minutes) + ":" + harold(seconds);
	document.querySelectorAll('.clock6')[0].innerHTML = harold(hours-8) + ":" + harold(minutes) + ":" + harold(seconds);
	document.querySelectorAll('.clock3')[0].innerHTML = harold(hours-10) + ":" + harold(minutes) + ":" + harold(seconds);
	function harold(standIn) {
    	if (standIn < 10) {
      	standIn = '0' + standIn
    	}
    	return standIn;
  	}
}

setInterval(clock, 1000);



// function clock1() {// We create a new Date object and assign it to a variable called "time".
// var time = new Date(),
    
//     // Access the "getHours" method on the Date object with the dot accessor.
//     hours = time.getHours(),
    
//     // Access the "getMinutes" method with the dot accessor.
//     minutes = time.getMinutes(),
    
    
//     seconds = time.getSeconds();

// document.querySelectorAll('.clock1')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
  
//   function harold(standIn) {
//     if (standIn < 10) {
//       standIn = '0' + standIn
//     }
//     return standIn;
//   }
// }
// setInterval(clock, 1000);
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