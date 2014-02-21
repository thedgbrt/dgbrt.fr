$(window).resize(function(){

	blocksHeightAdjustments();

});

$(window).load( function(){

	blocksHeightAdjustments();

});

function blocksHeightAdjustments(){
	
	$('#skills .skill').height('auto');
  	
  	if(($(window).width()) > 480)
    	$('#skills .skill').equalHeights();
    
}