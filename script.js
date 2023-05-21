// For typing animation
var typed = new Typed(".change", {
  strings: ["Student", "Developer", "Designer", "Learner"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

// For Hamburger Menu
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

// For Hamburger open and close
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

// For Hamburger auto close
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// For showing background color when we start to scroll
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "rgba(31, 30, 30, 0.24)";
  }
});

// for 3D hover effect
VanillaTilt.init(document.querySelectorAll(".img-box"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});
