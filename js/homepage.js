$(document).ready(function(){

    portfolioPanelParallax();
    testimoniesPanelCarousel();
    $('.scroll-for-more').smoothScroll();

});

function portfolioPanelParallax(){
  $('#scene').parallax({
    scalarX: 10,
    scalarY: 10
  });
}

function testimoniesPanelCarousel(){
  $("#testimonies-carousel").owlCarousel({
    transitionStyle : "fade",
    autoPlay: 10000,
    items : 2, 
    itemsDesktop : [1200, 2],
    itemsDesktopSmall : [992, 1],
    itemsTablet: false,
    itemsMobile : false
  });
}