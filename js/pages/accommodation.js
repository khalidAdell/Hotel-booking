"use strict";
let filterByElement = document.querySelectorAll(".rooms-header input");
let roomsContainer = document.querySelector(".rooms-container");
let roomsAndSuites = Array.from(roomsContainer.children);

// toggle active between filter inputs
function toggleActive() {
  filterByElement.forEach((e) => {
    e.classList.remove("active");
  });
}

// filter rooms and suites
let filtered = roomsAndSuites;
function filterRooms(inpValue) {
  switch (inpValue) {
    case "Rooms":
      filtered = roomsAndSuites.filter((room) => {
        return room.getAttribute("data-place") === "room";
      });
      break;
    case "Suites":
      filtered = roomsAndSuites.filter((room) => {
        return room.getAttribute("data-place") === "suite";
      });
      break;
    default:
      filtered = roomsAndSuites;
      break;
  }
}

// sort by price
let sortByElement = document.querySelector(".rooms-header select");
function sortByPrice(a, b) {
  switch (sortByElement.value) {
    case "lowPrice":
      return a.getAttribute("data-price") - b.getAttribute("data-price");
    case "highPrice":
      return b.getAttribute("data-price") - a.getAttribute("data-price");
    case "default":
      return a.getAttribute("data-price") - b.getAttribute("data-price");
  }
}
sortByElement.addEventListener("change", () => {
  filtered.sort(sortByPrice);
  appendFilterdRooms(
    null,
    currentPage * recordsPerPage - recordsPerPage,
    currentPage * recordsPerPage
  );
});
// add filterd rooms to rooms container
function appendFilterdRooms(inpValue, fIndex, lIndex) {
  inpValue && filterRooms(inpValue);
  // remove roomsContainer html children
  roomsContainer.innerHTML = "";
  // append filtered rooms to roomsContainer
  filtered.slice(fIndex, lIndex).map((ele) => {
    return roomsContainer.append(ele);
  });
}
// pagination
const pagination = document.querySelector(".pagination");
let currentPage = 1;
const recordsPerPage = 4;

// add pages to pagination container
function addPages() {
  const npage = Math.ceil(filtered.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  pagination.innerHTML = "";
  for (let n of numbers) {
    let span = document.createElement("span");
    span.textContent = n;
    if (n == currentPage) span.className = "activePage";
    pagination.append(span);
  }
}
addPages();
// toggle active pagination
function togglePages() {
  let pages = document.querySelectorAll(".pagination span");
  pages.forEach((page) => {
    page.addEventListener("click", () => {
      currentPage = page.textContent;
      appendFilterdRooms(
        null,
        currentPage * recordsPerPage - recordsPerPage,
        currentPage * recordsPerPage
      );
      pages.forEach((ele) => {
        ele.classList.remove("activePage");
      });
      page.classList.add("activePage");
      window.scrollTo(0, roomsContainer.offsetTop - 70);
    });
  });
}
togglePages();
// apply functions
appendFilterdRooms(
  "All",
  currentPage * recordsPerPage - recordsPerPage,
  currentPage * recordsPerPage
);
filterByElement.forEach((inp) => {
  inp.addEventListener("click", () => {
    // reset paginatio
    currentPage = 1;
    // remove active fun
    toggleActive();
    // add active
    inp.classList.add("active");
    // filter fun
    appendFilterdRooms(
      inp.value,
      currentPage * recordsPerPage - recordsPerPage,
      currentPage * recordsPerPage
    );
    // update pages
    addPages();
    togglePages();
  });
});
