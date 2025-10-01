const swiper = new Swiper(".swiper", {
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".slider__button-prev",
    nextEl: ".slider__button-next",
  },
});
