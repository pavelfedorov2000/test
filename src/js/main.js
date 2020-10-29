$(function(){

    $('.main__slider').slick({
        prevArrow: '<button class="slider-btn main__slider-btn main__slider-btn--prev"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.600098 9L9.60009 0L10.8601 1.26L3.1201 9L10.8601 16.74L9.60009 18L0.600098 9Z" fill="black" fill-opacity="0.8"/></svg></button>',
        nextArrow: '<button class="slider-btn main__slider-btn main__slider-btn--next"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4001 9L1.40014 18L0.140137 16.74L7.88014 9L0.140137 1.26L1.40014 0L10.4001 9Z" fill="black" fill-opacity="0.8"/></svg></button>'
    });

    $('.activities__slider').slick({
        prevArrow: '<button class="slider-btn activities__slider-btn activities__slider-btn--prev"><svg width="18" height="30" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.600098 9L9.60009 0L10.8601 1.26L3.1201 9L10.8601 16.74L9.60009 18L0.600098 9Z" fill="black" fill-opacity="0.5"/></svg></button>',
        nextArrow: '<button class="slider-btn activities__slider-btn activities__slider-btn--next"><svg width="18" height="30" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4001 9L1.40014 18L0.140137 16.74L7.88014 9L0.140137 1.26L1.40014 0L10.4001 9Z" fill="black" fill-opacity="0.5"/></svg></button>'
    });

    $('.partners__slider').slick({
        slidesToShow: 2,
        dots: true,
        prevArrow: '<button class="slider-btn partners__slider-btn partners__slider-btn--prev"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.600098 9L9.60009 0L10.8601 1.26L3.1201 9L10.8601 16.74L9.60009 18L0.600098 9Z" fill="black" fill-opacity="0.5"/></svg></button>',
        nextArrow: '<button class="slider-btn partners__slider-btn partners__slider-btn--next"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4001 9L1.40014 18L0.140137 16.74L7.88014 9L0.140137 1.26L1.40014 0L10.4001 9Z" fill="black" fill-opacity="0.5"/></svg></button>',
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger--active')
        $('.header__menu').toggleClass('header__menu--active')
    });
});