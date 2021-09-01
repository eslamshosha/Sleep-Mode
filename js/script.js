$(document).ready(function() {
	new WOW().init();


	//phone size menu onclick
	if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeIn(300);
           $(".navgition").addClass("reset-left");
           $("body").addClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeOut(300);
           $(".navgition").removeClass("reset-left");
           $("body").removeClass("overflow");
       });

	   //dropdown inside menu
	   $('.cat-li.dropdown .cat-anchor, .lang-word, .navgition .dropdown>a, .hide-txt').click(function (e) {
		e.preventDefault()
		var item =  $(this).siblings(".dropdown-content");
		item.slideToggle(500);
		
		})

        
   	}
    
    // //main Slider Carousel
    ///////// ** main** /////////
    var specials = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
        },
    });
	

    // //product Slider Carousel
    ///////// ** product** /////////
    var specials = new Swiper('.product-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.product-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-slider .swiper-btn-next',
            prevEl: '.product-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });    

     // //reviews-section Slider Carousel
    ///////// ** reviews-section** /////////
    var specials = new Swiper('.reviews-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.reviews-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });

	

});