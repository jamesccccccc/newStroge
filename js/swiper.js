let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    autoplay:{
          delay:3500,
          disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });