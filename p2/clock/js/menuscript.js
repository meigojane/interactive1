$(document).ready(function(){

	var secondhand = document.getElementById('second-hand'),
    minutehand = document.getElementById('minute-hand'),
    hourhand = document.getElementById('hour-hand'),
    readabletime = document.getElementById('readable-time');

function alwaysTwoDigits(digits) {
  if (digits < 10) {
    digits = "0" + digits;
  }
  
  return digits;
}

function twoDigitTime(hour,minute,second) {
  var minutes = alwaysTwoDigits(minute);
  var seconds = alwaysTwoDigits(second);
  
  return hour + ":" + minutes + ":" + seconds;
}

function moveHands(time) {
  var time = new Date(),
      seconds = (360/60) * time.getSeconds(),
      minutes = (360/60) * time.getMinutes(),
      hours = ( (360/12) * time.getHours() ) + (minutes/60);
  
  
  secondhand.style.transform = "rotate(" + seconds + "deg)";
  minutehand.style.transform = "rotate(" + minutes + "deg)";
  hourhand.style.transform = "rotate(" + hours + "deg)";
  
  readabletime.innerHTML = "Clock Time: " + twoDigitTime(time.getHours(), time.getMinutes(), time.getSeconds());
  
}

var clockItUp = setInterval( 'moveHands()', 1000);


}


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