let headerNav = document.getElementById("contain");
headerNav.addEventListener("click", headerNavToggler);

function headerNavToggler() {
  let burgerNav = document.getElementById("nav");
  burgerNav.classList.toggle("open");
  headerNav.classList.toggle("change");
}

let biographyBg = document.getElementById("bio-both");
this.addEventListener("scroll", function () {
  biographyBg.style.opacity = +this.pageYOffset / 600 + "";
  biographyBg.style.top = -this.pageYOffset + "px";
});
let introText = document.getElementById("intro-text");
this.addEventListener("scroll", function () {
  introText.style.opacity = 1 - +this.pageYOffset / 500 + "";
  introText.style.top = +this.pageYOffset + "px";
});
let introBg = document.getElementById("bg");
this.addEventListener("scroll", function () {
  introBg.style.opacity = 0.9 - this.pageYOffset / 500 + "";
});

let bioBlock = document.getElementById("bio");
let bioAyg = document.getElementById("bio-ayg");
let distanceAyg = bioAyg.getBoundingClientRect().top;
this.addEventListener("scroll", function () {
  let topDistance = this.pageYOffset;
  if (topDistance > distanceAyg) {
    bioBlock.classList.add("active");
    bioBlock.style.opacity = +bioBlock.pageYOffset / 600 + "";
    bioBlock.style.top = -bioBlock.pageYOffset + "px";
  } else {
    bioBlock.classList.remove("active");
  }
});
