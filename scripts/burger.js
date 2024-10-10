const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navButtons = document.querySelector(".nav-buttons");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navButtons.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

$(document).ready(function () {
  $("hamburger-icon").click(function () {
    $("hamburger-icon").toggleClass("active-one");
  });
});
