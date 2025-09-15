let canvas = document.querySelector(".canvas");
let menuIcon = document.querySelector(".fa-bars");

menuIcon.addEventListener("click", () => {
  canvas.classList.toggle("show");
});
