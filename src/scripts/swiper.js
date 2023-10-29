new Swiper('.team-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    grabCursor: true,
    loop: true,
    loopedSlides: 4,
    mousewheel: true,
    watchOverflow: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true
    }, 
    
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
});

new Swiper('.reviews__slider', {
    loop: true,
    slidesPerView: 1,
    speed: 800,
    grabCursor: true,
    mousewheel: true,
    watchOverflow: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    keyboard: {
      enabled: true
  }, 
});