const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
    loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 3,
    }
    },
  
  pagination: {
      el: '.pagination',
      bulletClass: 'pagination__btn',
      bulletActiveClass: 'pagination__btn--active',
  },
  navigation: {
    nextEl: '.slider-btn.next',
    prevEl: '.slider-btn.prev',
    },
  
  

});