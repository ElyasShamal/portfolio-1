const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1200 && nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let cvBtn = document.getElementById("CV");
  cvBtn.addEventListener("click", () => {
    window.open("./images/Fake Resume.pdf");
  });
});
