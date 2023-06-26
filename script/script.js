const mobileNavBtn = document.querySelector(".mobile-navbar-btn");
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");

const toggleNavbar = () => {
  header.classList.toggle("active");
  navbar.classList.toggle("active");
};

mobileNavBtn.addEventListener("click", toggleNavbar);

