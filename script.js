"use strict";

const openButton = document.querySelector(".icon-menu");
const closeButton = document.querySelector(".menu-close");

const openMenu = function () {
  document.querySelector("nav").classList.remove("closed");
  document.querySelector("nav").classList.add("opening");
  document.querySelector(".backshadow").classList.add("overlay");
  document.querySelector(".backshadow").classList.add("show-overlay");
  setTimeout(function () {
    document.querySelector("nav").classList.remove("opening");
    document.querySelector("nav").classList.add("opened");
  }, 300);
};

const closeMenu = function () {
  document.querySelector("nav").classList.remove("opened");
  document.querySelector("nav").classList.add("closing");
  document.querySelector(".backshadow").classList.add("hide-overlay");
  document.querySelector(".backshadow").classList.remove("show-overlay");
  setTimeout(function () {
    document.querySelector("nav").classList.remove("closing");
    document.querySelector("nav").classList.add("closed");
    document.querySelector(".backshadow").classList.remove("hide-overlay");
  }, 300);
};

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

function checkWidth() {
  if (window.innerWidth > 800) {
    // document.querySelector('nav').removeAttribute('class'); - if navbar has only one class then sure
    document.querySelector("nav").classList.remove("opened");
    document.querySelector("nav").classList.remove("closed");
    document.querySelector(".backshadow").classList.remove("show-overlay");
  }
}

window.onresize = checkWidth;
