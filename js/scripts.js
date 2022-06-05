"use stric";

const toggleBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav-container");
const backdrop = document.querySelector(".backdrop");

toggleBtn.addEventListener("click", function openMobileNav() {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
});

backdrop.addEventListener("click", function closeMobileNav() {
  mobileNav.classList.remove("open");
  backdrop.style.display = "none";
});
