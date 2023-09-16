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

// function changeBackgroundColor() {
//   const colors = ["white", "black"];
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   document.body.style.backgroundColor = randomColor;

//   if (randomColor === "black") {
//     document.body.style.color = "white"; // Set text color to white when background is black
//   } else {
//     document.body.style.color = "black"; // Set text color to black when background is orange
//   }
// }

// // setInterval(changeBackgroundColor, 1000);
