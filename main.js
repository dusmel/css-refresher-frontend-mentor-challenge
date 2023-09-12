const navToggleButton = document.querySelector(".mobile-nav-toggle");
const navOpenedIcon = document.querySelector(".mobile-nav-toggle .nav-icon-close");
const navClosedIcon = document.querySelector(".mobile-nav-toggle .nav-icon-open");
const primaryNav = document.querySelector(".primary-navigation");
const header = document.querySelector(".header");

navToggleButton.addEventListener("click", () => {
  const isNavVisible = primaryNav.hasAttribute("data-visible");
  navToggleButton.setAttribute("aria-expended", !isNavVisible);

  if (isNavVisible) {
    // showing and hiding appropriate icons 
    navClosedIcon.classList.remove('hide');
    navOpenedIcon.classList.add('hide');

    // adding overly for the opacity background
    header.classList.remove('overlay');
  } else {
    navClosedIcon.classList.add('hide');
    navOpenedIcon.classList.remove('hide');
    header.classList.add('overlay');
  }

  primaryNav.toggleAttribute("data-visible");
});


