const leftButton = document.querySelector(".ab-left");
const rightButton = document.querySelector(".ab-right");
const currentImg = document.querySelector(".current-image");
const dot0 = document.querySelector(".dot-0");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");

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
    currentImg.src = imgIndex[imgIterator];
    dotChanger();
  }
}

function cycleRight() {
  if (imgIterator < 2) {
    imgIterator ++;
    currentImg.src = imgIndex[imgIterator]
    dotChanger();
  }
}

function dotChanger() {
  dot0.src = "./img/dot-full.svg";
  dot1.src = "./img/dot-full.svg";
  dot2.src = "./img/dot-full.svg";
  if (!imgIterator) {
    dot0.src = "./img/dot.svg";
  }
  else if (imgIterator === 1) {
    dot1.src = "./img/dot.svg";
  }
  else {
    dot2.src = "./img/dot.svg";
  }
}

