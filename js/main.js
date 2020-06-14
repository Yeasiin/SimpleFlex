(function ($) {
"use strict";


//Preloader

$(window).load(function() {
      $(".preloader").fadeOut(1000, function() {
          $('body').removeClass('loading');
      });
    });









// ProgressBar
  $('.pro-bar').circleProgress().on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('span').text(stepValue.toFixed(2).substr(2));
  });

// Counter 
	$('.counter').counterUp({
		// delay: 10,
		time: 1000
	});

	
	
	// MixITUp
	var containerEl = document.querySelector('.mix-it-up');

	var mixer = mixitup(containerEl);
	
	
	
	
	
	
	
	
	
// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "767"
});






// owlCarousel
$('.slider-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})
// owlCarousel
$('.review-active').owlCarousel({
    loop:true,
    margin:200,
	items:1,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})


// owlCarousel
$('.project-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})
    


//for menu active class
$('.mix-button button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});





})(jQuery);