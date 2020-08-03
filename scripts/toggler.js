let headerNav = document.getElementById("contain");
headerNav.addEventListener("click", headerNavToggler);

function headerNavToggler() {
  let burgerNav = document.getElementById("nav");
  burgerNav.classList.toggle("open");
  headerNav.classList.toggle("change");
}
