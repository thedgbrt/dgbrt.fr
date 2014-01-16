$(document).ready( function(){
	
	heroResize();

});

$( window ).resize(function() {
	heroResize();
});

function heroResize(){	
	if($(window).height() > 500 && $(window).height() < 993){
		var heroHeight =  $(window).height() / 5.2360679775 * 4.2360679775;
		$(".hero-unit img").css("height", heroHeight);
	}
}