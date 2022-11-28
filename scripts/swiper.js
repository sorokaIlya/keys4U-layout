import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

// init Swiper:
const reviews = new Swiper('reviews-slider', {
    slidesPerView: 3,
    spaceBetween:20,
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
      },

});