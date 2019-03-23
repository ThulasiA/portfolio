//DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrand = document.querySelector(".menu-brand");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("open");
    menuBrand.classList.add("open");
    menuNav.classList.add("open");
    navItem.forEach(item => item.classList.add("open"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("open");
    menuBrand.classList.remove("open");
    menuNav.classList.remove("open");
    navItem.forEach(item => item.classList.remove("open"));
    showMenu = false;
  }
}
