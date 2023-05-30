// ------- HAMBURGER MENU TOGGLE -------
const menuBtn = document.querySelector(".navbar-toggle");
const closeBtn = document.querySelector(".navbar-close");
const navMenuCtn = document.querySelector(".navbar-menu-container");
const navItems = document.querySelectorAll(".navbar-menu .navbar-item");

menuBtn.addEventListener("click", () => {
    navMenuCtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navMenuCtn.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navMenuCtn.classList.remove("active");
    });
});

// ------- STICKY NAVIGATION -------
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

// ------- SLIDESHOW -------
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// ------- ACCORDION -------
const accordions = Array.from(document.querySelectorAll('.accordion'));

accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.aHeader');

  accordionHeader.addEventListener('click', e => {
    accordion.classList.toggle('isOpen');
  })
})

