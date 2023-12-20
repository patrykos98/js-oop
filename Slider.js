import Slide from "./Slide.js";

export default class Slider{
    constructor(slideList, imageSelector, titleSelector, dotsSelector,time,active=0){
        this.image = document.querySelector(imageSelector);
        this.title = document.querySelector(titleSelector);
        this.dots = [...document.querySelectorAll(dotsSelector)];

        this.time = time;
        this.active = active;
        this.slides = [];

        for(const slide of slideList){
            this.slides.push(
                new Slide(slide.img, slide.text)
            );
        }

        window.addEventListener("keydown", (e)=>{this.keyChangeSlide(e)});

    }
}



// Implementacje

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};
let indexInterval = setInterval(changeSlide, time);

// Klawisze
const keyChangeSlide = (e) => {
  console.log(e.keyCode);
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
};

