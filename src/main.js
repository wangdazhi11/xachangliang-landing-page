import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");
const navLinks = document.querySelectorAll("#nav_menu a"); // Select all nav links

// Toggle nav menu when clicking the nav button
navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
  if (navMenu.classList.contains("nav-is-open")) {
    navMenu.style.height = "350px"; // Expand the menu when opened
  } else {
    navMenu.style.height = "0px"; // Collapse the menu when closed
  }
});

// Close the menu and smooth scroll to section on link click
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.querySelector(link.getAttribute("href"));

    // Smooth scroll to the section
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  modules: [Autoplay],
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: false,
    stopOnLastSlide: false,
  },
  freeMode: {
    enabled: true,
    sticky: false,
  },
  speed: 4000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// 确保自动播放一直运行
swiper.autoplay.start();

// 确保自动播放启动
swiper.autoplay.start();

// scroll reveal animation using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: "0px 0px -50px 0px",
  threshold: 0.1
};

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.revealDelay || 0;
      setTimeout(() => {
        el.classList.add("revealed");
      }, delay);
      observer.unobserve(el);
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

document.querySelectorAll(".hero__text, .steps__step__1, .steps__step__2, .steps__step__3, .about__text, .about__img, .testimonial__bg, .testimonial__title, .testimonial__slider, .brands__img, .work__title, .work__subtitle, .work__grid, .stats, .stats__item, .news__title, .news__subtitle, .news__item, .contact__container, .contact__text, .footer__item, .footer__copyrights").forEach((el, index) => {
  el.classList.add("reveal");
  el.dataset.revealDelay = index * 50;
  revealObserver.observe(el);
});