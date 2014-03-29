$('#scene').prepend('<li class="layer" data-depth="1.00"><img src="/images/homepage/lossy/parallax/depth-1.png" alt="portfolio webdesigner image 1"></li><li class="layer" data-depth="0.75"><img src="/images/homepage/lossy/parallax/depth-0-75.png" alt="portfolio webdesigner image 2"></li><li class="layer" data-depth="0.50"><img src="/images/homepage/lossy/parallax/depth-0-5.png" alt="portfolio webdesigner image 3"></li><li class="layer" data-depth="0.25"><img src="/images/homepage/lossy/parallax/depth-0-25.png" alt="portfolio webdesigner image 4"></li><li class="layer" data-depth="0.05"><img src="/images/homepage/lossy/parallax/depth-0.png" alt="portfolio webdesigner image 5"></li>');

$(document).ready(function(){
    portfolioPanelParallax();
    testimoniesPanelCarousel();
    $('.scroll-for-more').smoothScroll();
})

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