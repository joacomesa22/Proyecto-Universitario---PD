// Funcionalidad Barras
const btnMenu = document.querySelector(".btn");
const navMenu = document.querySelector(".nav");

btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  btnMenu.classList.toggle("fixed");
});

document.querySelectorAll(".nav__link").forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);

// Animacion Barras
document.querySelector(".btn").addEventListener("click", animacionBarras);

let line1 = document.querySelector(".btn__line1");
let line2 = document.querySelector(".btn__line2");
let line3 = document.querySelector(".btn__line3");

function animacionBarras() {
  line1.classList.toggle("btn__line1-active");
  line2.classList.toggle("btn__line2-active");
  line3.classList.toggle("btn__line3-active");
}

// Slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  // acá define qué elemento entra en el slider
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}

carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > x.length) {
    slideIndex = 1;
  }

  x[slideIndex - 1].style.display = "block";

  setTimeout(carousel, 2000); // Cambia la imagen cada 2 segundos
}
