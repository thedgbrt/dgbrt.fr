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
	var ww = $(window).width(); //window's width
	var hw = $(".hero-unit img").width(); // hero's width

	var ws = (wh - hh); // white space available
	var wsReq = hh / 6.85410196625; // white space required
	var hhReq = Math.round(wh - wsReq); // hero unit height we need to make width fit

	if(ws < wsReq){ // if there is not enough white space below
		console.log("pas assez d'espace");
		$(".hero-unit").height(hhReq);
		$(".hero-unit img").css("max-width", "");
		$(".hero-unit img").css("max-height", "100%");
	} 
	else{ // there is enough white space
		console.log("assez d'espace");

		if(ww == hw){ // if the width of the window matches the width of the image (danger of cropping)
			console.log("trop serré");
			$(".hero-unit").height("");
			$(".hero-unit img").css("max-height", "");
			$(".hero-unit img").css("max-width", "100%");
				// we need to go back to width: 100% so it doesn't crush the image ratio
		}
		else{ // we check that the height is at it's max
			if(hh != hhReq){
				console.log(hh + " " + hhReq + " ne remplit pas bien"); // the screen isn't filled properly height wise
				$(".hero-unit").height(hhReq);
				$(".hero-unit img").css("max-width", "");
				$(".hero-unit img").css("max-height", "100%");
			}
		}
	}

	// if(spaceToHeroRatio > 6.85410196625)
	// 	console.log("trop petit!");
	// else
	// 	console.log("bien");
	// console.log($(window).height() / $(window).width());
	// if($(window).height() > 197 && $(window).height() < 920){
	// 	var heroHeight =  $(window).height() / 7.85410196625 * 6.85410196625;
	// 	$(".hero-unit").css("height", heroHeight);
	// }
}

// 6.85410196625 / 1.61803398875