//
// Front Landing
//
// A separate file for front-landing.html scripts
//

"use strict";

$(function() {
	//
	// 1. Navbar
	//
	$('.js-nav-toggle').on('click', function(e){
		e.preventDefault();
		$('.js-nav').toggleClass('is-visible');
		$(this).toggleClass('is-open');
	});
});

$('#intro').imagesLoaded( function() {
	$('.js-intro-img').addClass('is-animated');
});