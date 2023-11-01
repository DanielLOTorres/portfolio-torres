function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleMode(){
  const $html = document.querySelector('html')
  const $button = document.querySelector('#mode_switch')
  const mobileMenuItem = document.querySelector('.dark-mobile-menu-item')
  
  mobileMenuItem.textContent = mobileMenuItem.textContent === "Dark Mode" ? "Light Mode" : "Dark Mode";

  $html.classList.toggle('dark-mode')
}