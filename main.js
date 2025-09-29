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
console.log('Hello world');

  document.querySelectorAll('.dropdown-toggle-custom').forEach(button => {
            let isPlus = true;
            
            button.addEventListener('click', function() {
                const icon = this.querySelector('.toggle-icon');
                const plusSrc = this.dataset.plusSrc;
                const minusSrc = this.dataset.minusSrc;
                
                isPlus = !isPlus;
                if (isPlus) {
                    icon.src = plusSrc;
                } else {
                    icon.src = minusSrc;
                }
            });
        });

        // 當下拉選單關閉時，重置圖標
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.addEventListener('hidden.bs.dropdown', function() {
                const button = this.querySelector('.dropdown-toggle-custom');
                const icon = button.querySelector('.toggle-icon');
                const plusSrc = button.dataset.plusSrc;
                
                icon.src = plusSrc;
                
                // 重置 isPlus 狀態（這需要存在按鈕的 data 屬性中）
                button.isPlusState = true;
            });
        });
