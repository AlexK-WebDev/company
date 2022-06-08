$(function () {

	// Menu opener hamburger
	$('.btn-open').click(function () {
		$('.collapse').toggleClass('d-none').css('order', '1');
		$('.nav').toggleClass('nav-opened');
	});

	// Preloader

	$('#preloader').fadeOut('slow',function(){
		// $'#preloader'.delay(200).fadeOut('1500');
		$(this).remove();
	});



	


	// Прокрутка 
	$('.go-to').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1200);
		});

	// Pop Up
	$('.btn-header-footer').click(function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	})

	// Slider
	$('.slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
    });

});

