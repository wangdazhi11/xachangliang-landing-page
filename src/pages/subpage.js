// 子页面通用入口
import { initHeroCarousel } from '../shared/hero-carousel.js';
import { initSidebar } from '../shared/sidebar.js';
import { initNav } from '../shared/nav.js';
import { initScrollReveal } from '../shared/scroll-reveal.js';
import { copyPhone } from '../shared/copy-phone.js';

// 绑定全局函数
window.copyPhone = copyPhone;

// 初始化
initNav();
initHeroCarousel();
initSidebar();
initScrollReveal();
