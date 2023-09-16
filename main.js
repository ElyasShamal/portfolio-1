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

const moonSun = document.getElementById("icon");
const body = document.body;
const paragraphs = document.querySelectorAll("p");
const allheading3 = document.querySelectorAll("h3");

moonSun.addEventListener("click", () => {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    moonSun.className = "fa fa-sun-o";
    allheading3.forEach((heading) => {
      heading.style.color = "black";
    });
    paragraphs.forEach((paragraph) => {
      paragraph.style.color = "rgb(85, 85, 85)";
    });
  } else {
    moonSun.className = "fa fa-moon-o";
    body.style.backgroundColor = "black";
    paragraphs.forEach((paragraph) => {
      paragraph.style.color = "white";
    });
    allheading3.forEach((heading) => {
      heading.style.color = "white";
    });
  }
});
