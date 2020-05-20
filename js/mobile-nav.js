function toggleMenu() {
  let menu = document.querySelector(".mobile-nav");
  menu.classList.toggle("toggleMenu");
}

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", toggleMenu);
