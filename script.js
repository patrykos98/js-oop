

import Slider from "./Slider.js";

const slideList = [
  {
    img: "img/img1.jpg",
    text: "Pierwszy tekst",
  },
  {
    img: "img/img2.jpg",
    text: "Drugi tekst",
  },
  {
    img: "img/img3.jpg",
    text: "Trzeci tekst",
  },
];

const slider = new Slider(slideList,"img.slider","h1.slider",".dots span",2000);
slider.start();
