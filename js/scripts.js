"use stric";

const toggleBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav-container");
const backdrop = document.querySelector(".backdrop");
const mobileNavEls = document.querySelectorAll(
  ".mobile-nav-container .nav-link"
);

mobileNavEls.forEach(function (link) {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    backdrop.style.display = "none";
  });
});

toggleBtn.addEventListener("click", function openMobileNav() {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
});

backdrop.addEventListener("click", function closeMobileNav() {
  mobileNav.classList.remove("open");
  backdrop.style.display = "none";
});
