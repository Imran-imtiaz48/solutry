'use strict';

/**
 * Navbar Toggle
 */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

const toggleNav = () => {
  navToggleBtn.classList.toggle("active");
  header.classList.toggle("nav-active");
};

navToggleBtn.addEventListener("click", toggleNav);

navLinks.forEach(link => {
  link.addEventListener("click", toggleNav);
});


/**
 * Header Scroll Active State & Go to Top Button
 */
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  const isActive = window.scrollY >= 100;
  header.classList.toggle("active", isActive);
  goTopBtn.classList.toggle("active", isActive);
});
