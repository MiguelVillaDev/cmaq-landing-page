const navBtn = document.getElementById("navBtn");
const mobileMenu = document.getElementById("mobileMenu");

navBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-96");
});

mobileMenu.addEventListener("click", (event) => {
  mobileMenu.classList.remove("max-h-96");
});

//Código para que el navbar se posicione correctamente.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const navHeightFull = document.querySelector("nav").offsetHeight;
    const navHeightMobile = 56;

    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition =
        elementPosition - (navBtn ? navHeightMobile : navHeightFull);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

const hero = document.querySelector("#hero");
const nav = document.querySelector("nav");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
});

observer.observe(hero);

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
