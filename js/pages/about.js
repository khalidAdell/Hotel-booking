"use strict";
// show video
let playVideo = document.querySelector(".play-video");
let videoContainer = document.querySelector(".video-container");

function showVideo() {
  videoContainer.classList.remove("video-hide");
}
playVideo.addEventListener("click", showVideo);
// hide video
let overlay = document.querySelector(".overlay");

function hideVideo() {
  videoContainer.classList.add("video-hide");
}
overlay.addEventListener("click", hideVideo);

// faq
let faqTitle = document.querySelectorAll(".faq-title");
let faqIcon = document.querySelectorAll(".faq-title i");
faqTitle.forEach((title) => {
  title.addEventListener("click", () => {
    if (!title.parentElement.hasAttribute("class", "active")) {
      faqTitle.forEach((ele) => {
        ele.parentElement.classList.remove("active");
      });
    }
    title.parentElement.classList.toggle("active");
    title.children[0].classList.toggle("fa-minus");
    title.children[0].classList.toggle("fa-plus");
  });
});
