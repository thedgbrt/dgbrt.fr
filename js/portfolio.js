$(window).load( function(){

	portfolioIsotope();

});

function portfolioIsotope(){
	var $container = $('#project-wrapper');
	// init
	$container.isotope({
	// options
	itemSelector: '.project',
	layoutMode: 'fitRows',
	getSortData: {
	  date: '.date'
	},
	sortAscending: {
	  date: false
	}
	});

	$('#project-filters').on( 'click', 'li', function( event ) {
	var filterValue = $(this).attr('data-filter-value');
	$container.isotope({ filter: filterValue });
	$('#project-filters').children('li').removeClass('active');
	$(this).addClass('active');
	});

	$('#project-sorts').on( 'click', 'button', function() {
	var sortValue = $(this).attr('data-sort-value');
	$container.isotope({ sortBy: sortValue });
	});

	$container.isotope( 'on', 'layoutComplete', function(){
	setTimeout(function () {
	  $('#project-count span').html($('.project:visible').length);
	  }, 100);
	});
}