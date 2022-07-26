// Hamburge
const Hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu-items");
const hamburgerClose = document.getElementById("hamburger-close");
const hamburgerParent = document.querySelector("hamburger-parent");

const slide = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const dotsContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slide.length;

const goToSlide = function (cs) {
  slide.forEach((slide, index) => {
    const xValue = (index - cs) * 100;
    slide.style.transform = `translateX(${xValue}%)`;
  });
};

const activateDot = function (slde) {
  document.querySelectorAll(".dots-list").forEach((dot) => {
    dot.classList.remove("bg-BrightRed");
    document
      .querySelector(`.dots-list[data-slide="${slde}"]`)
      .classList.add("bg-BrightRed");
  });
};

const nexSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = 0;
  } else {
    curSlide--;
    activateDot(curSlide);
  }
  goToSlide(curSlide);
};
btnRight.addEventListener("click", nexSlide);
btnLeft.addEventListener("click", prevSlide);

const generateDots = function () {
  slide.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<li class=" bg-BrightRed w-3 h-3 rounded-full dots-list border-2 border-BrightRed" data-slide="${i}"></li>`
    );
  });
};

generateDots();

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots-list")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

goToSlide(0);
activateDot(curSlide);

//hamburge menu working
Hamburger.addEventListener("click", function (e) {
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
