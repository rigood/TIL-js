const SHOWING_CLASS = "showing";

const firstSlide = document.querySelector(".slide:first-child");

function moveSlide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

moveSlide();
setInterval(moveSlide, 2000);
