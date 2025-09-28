import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

// 首頁顧客回饋輪播圖
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal", // 投影片的方向為水平方向
  loop: false, // 不使用循環播放
  allowTouchMove: false, // 不要拖曳投影片

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 24,

  //   RWD
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
