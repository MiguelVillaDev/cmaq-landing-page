const navBtn = document.getElementById("navBtn");
const mobileMenu = document.getElementById("mobileMenu");

navBtn.addEventListener("click", () => {
  /* mobileMenu.classList.toggle("max-h-0"); */
  mobileMenu.classList.toggle("max-h-96");
});

const swiper = new Swiper(".swiper", {
  slidesPreview: 1,
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,

      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
