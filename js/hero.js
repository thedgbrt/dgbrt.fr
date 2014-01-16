$(document).ready( function(){

	heroResize();

});

$( window ).resize(function() {
	heroResize();
});

function heroResize(){	
	
	// resizing the hero height to make sure people see an inviting amount of white space bellow it
	var wh = $(window).height(); //window's height
	var hh = $(".hero-unit").height(); // hero's height

	var ws = (wh - hh); // white space available
	var wsReq = hh / 6.85410196625; // white space required
	var hhReq = wh - wsReq; // hero unit height we need to make width fit
	// console.log(ws + " vs " + wsReq);

	if(ws < wsReq){
		console.log(hhReq);
		$(".hero-unit").css("height", hhReq);
	} 
	// if(spaceToHeroRatio > 6.85410196625)
	// 	console.log("trop petit!");
	// else
		// console.log("bien");
	// console.log($(window).height() / $(window).width());
	// if($(window).height() > 197 && $(window).height() < 920){
	// 	var heroHeight =  $(window).height() / 7.85410196625 * 6.85410196625;
	// 	$(".hero-unit").css("height", heroHeight);
	// }
}

// 6.85410196625 / 1.61803398875