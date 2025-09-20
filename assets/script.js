// let canvas = document.querySelector(".canvas");
// let menuIcon = document.querySelector(".fa-bars");

// menuIcon.addEventListener("click", () => {
//   canvas.classList.toggle("show");
// });

// scroll bottom
let scrollButton = document.querySelector(".page-scroll-button");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollButton.classList.remove("d-none");
  } else {
    scrollButton.classList.add("d-none");
  }
});

// scroll bottom
scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//swiper testimonial
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1500,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// fancybox
Fancybox.bind("[data-fancybox]", {});

// login and register password
let passwordInput = document.querySelector(".password-input");
let svg = document.querySelector(".fa-eye-slash");

console.log(svg);

svg.addEventListener("click", () => {
  console.log("click");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    svg.classList.remove("fa-eye-slash");
    svg.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    svg.classList.remove("fa-eye");
    svg.classList.add("fa-eye-slash");
  }
});
