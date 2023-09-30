"use strict";

// pagination
let blogsContainer = document.querySelector(".blog-sect");
let blogs = Array.from(blogsContainer.children);
const pagination = document.querySelector(".pagination");
let currentPage = 1;
const recordsPerPage = 4;

// add pages to pagination container
function addPages() {
  const npage = Math.ceil(blogs.length / recordsPerPage);
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
      pages.forEach((ele) => {
        ele.classList.remove("activePage");
      });
      appendFilterdRooms(
        currentPage * recordsPerPage - recordsPerPage,
        currentPage * recordsPerPage
      );
      page.classList.add("activePage");
      window.scrollTo(0, blogsContainer.offsetTop - 70);
    });
  });
}
togglePages();

function appendFilterdRooms(fIndex, lIndex) {
  // remove roomsContainer html children
  blogsContainer.innerHTML = "";
  // append filtered rooms to roomsContainer
  blogs.slice(fIndex, lIndex).map((ele) => {
    return blogsContainer.append(ele);
  });
}
appendFilterdRooms(
  currentPage * recordsPerPage - recordsPerPage,
  currentPage * recordsPerPage
);
