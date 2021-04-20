const leftButton = document.querySelector(".ab-left");
const rightButton = document.querySelector(".ab-right");
const currentImg = document.querySelector(".current-image");

let imgIterator = 0;
let imgIndex = [
  './img/headshot.jpg',
  './img/london.jpeg',
  './img/headshot.jpg'
]

leftButton.addEventListener("click", cycleLeft)
rightButton.addEventListener("click", cycleRight)

function cycleLeft() {
  if (imgIterator > 0) {
    imgIterator --;
    currentImg.src = imgIndex[imgIterator]
  }
}

function cycleRight() {
  if (imgIterator < 2) {
    imgIterator ++;
    currentImg.src = imgIndex[imgIterator]
  }
}

