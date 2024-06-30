const toggles = document.querySelectorAll(".navbar-toggler");

toggles.forEach(toggle => {
    toggle.onclick = () => {
        toggle.classList.toggle("open");
    };
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});


$('.hero-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["<img class='left-side' src='assets/images/icon/left-arrow.svg'/>", "<img class='left-side' src='assets/images/icon/right-arrow.svg'/>"],
    autoHeight: false,
    // smartSpeed: 3000,
    // autoplay: true,
    // autoplayHoverPause: false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.owl-carousel_1').owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    // autoHeight: false,
    // smartSpeed: 3000,
    // autoplay: true,
    // autoplayHoverPause: false,
    // animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1,
            margin: 20,
        },
        600:{
            items:2,
            margin: 15,
        },
        1000:{
            items:4,
            margin: 25,
        }
    }
})

$('.client-testimonial').owlCarousel({
    loop: true,
    dots: true,
    nav: true, 
    // autoHeight: false,
    // smartSpeed: 3000,
    // autoplay: true,
    // autoplayHoverPause: false,
    // animateOut: 'fadeOut',
    navText: [
		'<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6"><path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd"></path></svg>',
		'<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd"></path></svg>'
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1,
            nav: true, 
        }
    }
})


$('.our-team').owlCarousel({
    loop: true,
    dots: false,
    nav: true, 
    margin: 20,
    autoHeight: false,
    smartSpeed: 3000,
    autoplay: true,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    navText: [
		'<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6"><path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd"></path></svg>',
		'<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd"></path></svg>'
	],
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1399: {
            items: 4
        }
    }
})