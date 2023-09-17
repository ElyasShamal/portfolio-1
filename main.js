document.addEventListener("DOMContentLoaded", () => {
  let cvBtn = document.getElementById("CV");
  cvBtn.addEventListener("click", () => {
    window.open("./images/Fake Resume.pdf");
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const moonSun = document.getElementById("icon");
const body = document.body;
const paragraphs = document.querySelectorAll("p");
const allheading3 = document.querySelectorAll("h3");
const mail = document.getElementById("mailicon");
const mymail = document.getElementById("myemail");
const allheading2 = document.querySelectorAll("h2");

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
    mail.style.color = "white";
    mymail.style.color = "white";
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
