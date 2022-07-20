const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
const slider = document.querySelector("#slider");
const buttons = document.querySelectorAll(".button")
let img, maxImgs;
let imgs = [
  "imgs/chrono.jpg",
  "imgs/inuyasha.jpg",
  "imgs/ippo.png",
  "imgs/tenchi.jpg",
  "imgs/tenjhotenge.jpg",
  "imgs/yuyuhakusho.jpg",
];

const showButton = (event) => event.target.classList.add('active')
const hiddenButton = (event) => event.target.classList.remove('active')

const nextImage = () => {
  img++;
  loadImage(imgs, img);
};

const prevImage = () => {
  img--;
  if (img == -1) {
    img = maxImgs - 1;
  } 
  loadImage(imgs, img);
};

const returnFirstImage = () => {
  if (img > maxImgs) {
    img = 0;
    loadImage(imgs, img);
  }
};

const loadImage = (imgs, img) => {
  slider.style.backgroundImage = `url(${imgs[img]})`;
  returnFirstImage();
};

const preLoading = () => {
  img = 0;
  loadImage(imgs, img);
  maxImgs = imgs.length - 1;
};

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);
buttons.forEach((button) => button.addEventListener('mouseover', showButton))
buttons.forEach((button) => button.addEventListener('mouseout', hiddenButton))

window.addEventListener("load", preLoading);