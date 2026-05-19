import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { initNav } from './shared/nav.js';
import { initHeroCarousel } from './shared/hero-carousel.js';
import { initSidebar } from './shared/sidebar.js';
import { initScrollReveal } from './shared/scroll-reveal.js';
import { copyPhone } from './shared/copy-phone.js';

// 绑定全局函数
window.copyPhone = copyPhone;

// 初始化共享模块
initNav();
initHeroCarousel();
initSidebar();
initScrollReveal();

// swiper - 团队成员轮播（仅主页）
const swiperEl = document.querySelector(".swiper");
if (swiperEl) {
  const swiper = new Swiper(".swiper", {
    loop: true,
    modules: [Autoplay],
    autoplay: {
      delay: 500,
      disableOnInteraction: true,
      reverseDirection: false,
      stopOnLastSlide: false,
    },
    freeMode: {
      enabled: true,
      sticky: false,
    },
    speed: 4000,
    simulateTouch: true,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      960: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  // 用户交互后5秒恢复自动播放
  let autoplayTimer = null;
  const swiperContainer = document.querySelector(".swiper");
  const resumeAutoplay = () => {
    clearTimeout(autoplayTimer);
    autoplayTimer = setTimeout(() => {
      swiper.autoplay.start();
    }, 2000);
  };
  swiperContainer.addEventListener("touchend", resumeAutoplay);
  swiperContainer.addEventListener("mouseup", resumeAutoplay);
  swiper.on("slideChange", resumeAutoplay);
}
