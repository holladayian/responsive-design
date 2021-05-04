// const leftButton = document.querySelector(".ab-left");
// const rightButton = document.querySelector(".ab-right");
// const currentImg = document.querySelector(".current-image");
// const dot0 = document.querySelector(".dot-0");
// const dot1 = document.querySelector(".dot-1");
// const dot2 = document.querySelector(".dot-2");
const homeButton = document.querySelector(".logo-container");
const aboutButton = document.querySelector(".about");
const projectsButton = document.querySelector(".projects");
const contactButton = document.querySelector(".contact");
const landingView = document.querySelector(".landing-view");
const aboutView = document.querySelector(".about-view");
const projectsView = document.querySelector(".projects-view");
const contactView = document.querySelector(".contact-view");
const darkMode = document.querySelector(".dark-mode");
const navLinks = document.querySelectorAll(".nav-link");
const modeChangers = document.querySelectorAll(".mode");
const body = document.querySelector(".body");

// let imgIterator = 0;
// let imgIndex = [
//   './img/headshot.jpg',
//   './img/london.jpeg',
//   './img/headshot.jpg'
// ]

// leftButton.addEventListener("click", cycleLeft)
// rightButton.addEventListener("click", cycleRight)
aboutButton.addEventListener("click", viewAbout)
projectsButton.addEventListener("click", viewProjects)
contactButton.addEventListener("click", viewContacts)
homeButton.addEventListener("click", viewHome)
darkMode.addEventListener("click", toggleDark)

function toggleDark() {
  navLinks.forEach(navLink => {
    navLink.classList.toggle("darkWhite")
  })
  // for (var i = 0; i < navLinks.length; i++) {
  //   navLinks[i].classList.toggle("darkWhite")
  // }
  // for (var i = 0; i < modeChangers.length; i++) {
  //   modeChangers[i].classList.toggle("darkWhite")
  // }
  modeChangers.forEach(modeChange => {
    console.log(modeChange)
    modeChange.classList.toggle("darkWhite")
  })
  body.classList.toggle("dark")
  darkMode.classList.toggle("darkWhite")
}

// function cycleLeft() {
//   if (imgIterator > 0) {
//     imgIterator --;
//     currentImg.src = imgIndex[imgIterator];
//     dotChanger();
//   }
// }

// function cycleRight() {
//   if (imgIterator < 2) {
//     imgIterator ++;
//     currentImg.src = imgIndex[imgIterator]
//     dotChanger();
//   }
// }

// function dotChanger() {
//   dot0.src = "./img/dot-full.svg";
//   dot1.src = "./img/dot-full.svg";
//   dot2.src = "./img/dot-full.svg";
//   if (!imgIterator) {
//     dot0.src = "./img/dot.svg";
//   }
//   else if (imgIterator === 1) {
//     dot1.src = "./img/dot.svg";
//   }
//   else {
//     dot2.src = "./img/dot.svg";
//   }
// }

function viewAbout() {
  landingView.classList.add("hidden");
  projectsView.classList.add("hidden");
  contactView.classList.add("hidden");

  aboutView.classList.remove("hidden");
}

function viewProjects() {
  landingView.classList.add("hidden");
  aboutView.classList.add("hidden");
  contactView.classList.add("hidden");

  projectsView.classList.remove("hidden");
}

function viewContacts() {
  landingView.classList.add("hidden");
  projectsView.classList.add("hidden");
  aboutView.classList.add("hidden");

  contactView.classList.remove("hidden");
}

function viewHome() {
  contactView.classList.add("hidden");
  projectsView.classList.add("hidden");
  aboutView.classList.add("hidden");

  landingView.classList.remove("hidden");
}

