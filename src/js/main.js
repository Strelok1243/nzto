document.addEventListener("DOMContentLoaded", () => {
  var swiperThumbs = new Swiper(".mySwiperThumbs", {
    direction: 'vertical',
    slidesPerView: 2,
    freeMode: true,
  });
  var swiper = new Swiper(".mySwiper", {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    thumbs: {
      swiper: swiperThumbs
    },
  });
  var swiper = new Swiper(".about-manufactory", {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
