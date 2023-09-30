const swiper = new Swiper(".swiper-rooms", {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const swiperOffers = new Swiper(".swiper-offers", {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 360px
    360: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

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
