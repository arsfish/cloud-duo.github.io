let headerNav = document.getElementById("contain");
headerNav.addEventListener("click", headerNavToggler);

function headerNavToggler() {
  let burgerNav = document.getElementById("nav");
  burgerNav.classList.toggle("open");
  headerNav.classList.toggle("change");
}

let biographyBg = document.getElementById("biography");
this.addEventListener("scroll", function () {
  biographyBg.style.opacity = +this.pageYOffset / 700 + "";
  biographyBg.style.top = -this.pageYOffset + "px";
});
let introText = document.getElementById("intro-text");
this.addEventListener("scroll", function () {
  introText.style.opacity = 1 - +this.pageYOffset / 500 + "";
  introText.style.top = +this.pageYOffset + "px";
});
