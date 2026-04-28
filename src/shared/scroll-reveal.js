// 滚动动画（IntersectionObserver）

export function initScrollReveal() {
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
}
