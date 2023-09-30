"use strict";

let navMenu = document.querySelector(".nav-menu");
let navList = document.querySelector(".bottom-header ul");
navMenu.onclick = function () {
  navList.classList.toggle("showHeight");
};
