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

menuToggle.addEventListener("click", () => {
  if (menuToggle) {
    const firstchild = menuToggle.firstElementChild;
    firstchild.style.transform = "rotate(45deg) translate(10px, 5px)";
    const secondChild = document.querySelectorAll("span")[1];
    secondChild.style.opacity = 0;
    const thirdChild = document.querySelectorAll("span")[2];
    thirdChild.style.transform = transform =
      "rotate(-45deg) translate(10px, -5px)";
  } else {
    menuToggle.classList.add("menu-toggle");
  }
});
