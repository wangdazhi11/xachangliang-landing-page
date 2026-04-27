import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import ScrollReveal from 'scrollreveal';

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

// scroll reveal animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 700,
  delay: 50,
  viewFactor: 0.2,
});

// hero
sr.reveal(".hero__text", { origin: "top" });

// steps
sr.reveal(".steps__step__1", { distance: "100px", interval: 100 });
sr.reveal(".steps__step__2", { distance: "200px", interval: 100 });
sr.reveal(".steps__step__3", { distance: "300px", interval: 100 });

// about
sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__img", { origin: "right", delay: 800 });

// testimonial
sr.reveal(".testimonial__bg", { delay: 800 });
sr.reveal(".testimonial__title");
sr.reveal(".testimonial__slider", { delay: 1000 });

// brands
sr.reveal(".brands__img", { delay: 600, distance: "100px", interval: 100 });

// work
sr.reveal(".work__title");
sr.reveal(".work__subtitle", { delay: 800 });
sr.reveal(".work__grid", { delay: 1000 });

// stats
sr.reveal(".stats");
sr.reveal(".stats__item", { distance: "100px", interval: 100 });

//  news
sr.reveal(".news__title");
sr.reveal(".news__subtitle", { delay: 800 });
sr.reveal(".news__item", { distance: "100px", interval: 100, delay: 1000 });

// contact
sr.reveal(".contact__container");
sr.reveal(".contact__text", { delay: 800 });

// footer
sr.reveal(".footer__item", { distance: "100px", interval: 100, delay: 1000 });
sr.reveal(".footer__copyrights");