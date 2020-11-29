$(function () {
	$('.icon-menu').on('click', function () {
		$('.icon-menu').toggleClass('active'),
		$('.menu__body').toggleClass('active'),
		$('body').toggleClass('lock')
	});

	//Закрыть бургер меню по клику на ссылку, перетйти по ссылке
	$('.header__menu .menu__link').on('click', function (event) {
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	});

	//Slick-slider
	if($('.slider').length>0){
		$('.slider').slick({
			//autoplay: true,
			infinite: true,
			// dots: false,
			arrows: true,
			accessibility:false,
			slidesToShow:1,
			slidesToScroll:1,
			autoplaySpeed: 3000,
			// adaptiveHeight: true,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			// nextArrow:'<button type="button" class="slick-next"></button>',
			// prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]
		});
	}

	//Slick-slider
	if($('.slider-services').length>0){
		$('.slider-services').slick({
			//autoplay: true,
			infinite: true,
			// dots: false,
			arrows: true,
			accessibility:false,
			slidesToShow:1,
			slidesToScroll:1,
			autoplaySpeed: 3000,
			// adaptiveHeight: true,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			// nextArrow:'<button type="button" class="slick-next"></button>',
			// prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]
		});
	}
});