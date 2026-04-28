// Hero轮播图自动滑动（始终右滑，无限循环）
export function initHeroCarousel() {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;

  let currentSlide = 0;
  const totalSlides = slider.children.length;
  const realSlideCount = totalSlides - 1;
  let sliding = false;

  function slideNext() {
    if (sliding) return;
    sliding = true;

    currentSlide++;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    setTimeout(() => {
      if (currentSlide >= realSlideCount) {
        currentSlide = 0;
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        slider.offsetHeight;
        slider.style.transition = 'transform 1s ease-in-out';
      }
      sliding = false;
    }, 1000);
  }

  setInterval(slideNext, 4000);
}
