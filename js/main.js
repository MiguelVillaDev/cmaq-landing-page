import { proyectos } from "./proyectos.js";

export const initNav = () => {
  const navBtn = document.getElementById("navBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  navBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("max-h-96");
  });

  mobileMenu.addEventListener("click", (event) => {
    mobileMenu.classList.remove("max-h-96");
  });
};

export const initPage = () => {
  //Código para que el navbar se posicione correctamente.

  const navBtn = document.getElementById("navBtn");
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const navHeightFull = document.querySelector("nav").offsetHeight;
      const navHeightMobile = 56;
      const isMobile = window.innerWidth < 768;

      if (targetElement) {
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition =
          elementPosition - (isMobile ? navHeightMobile : navHeightFull);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Cambio de Navbar de transparente a color.
  const hero = document.querySelector("#hero");
  const nav = document.querySelector("nav");

  if (hero) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (nav) {
          if (!entry.isIntersecting) {
            nav.classList.add("nav-scrolled");
          } else {
            nav.classList.remove("nav-scrolled");
          }
        }
      });
    });
    observer.observe(hero);
  } else {
    nav.classList.add("nav-scrolled");
  }

  const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation");
      } else {
        entry.target.classList.remove("animation");
      }
    });
  });

  const elementos = document.querySelectorAll(".animation-tw");
  if (elementos.length > 0) {
    elementos.forEach((sec) => observador.observe(sec));
  }

  const swiperWrapper = document.querySelector(".swiper-wrapper");

  if (swiperWrapper) {
    swiperWrapper.innerHTML = proyectos
      .map(
        (p) => `
    <div
                class="swiper-slide flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md"
              >
                <img src="${p.imagen}" alt="" class="aspect-5/4 bg-gray-200" />
                <div class="bg-white px-6 py-4">
                  <h3 class="text-xl font-semibold">
                    ${p.nombre}
                  </h3>
                  <p class="mt-2">${p.ubicacion}</p>
                </div>
              </div>
    `,
      )
      .join("");
  }

  if (document.querySelector(".swiper")) {
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
  }

  const proyectosHtml = document.getElementById("allProjects");
  if (proyectosHtml) {
    proyectosHtml.innerHTML = proyectos
      .map(
        (p) => `
    <div class="flex flex-col md:flex-row">
            <img src="${p.imagen}" alt="" class="aspect-5/4 object-cover bg-gray-200 md:w-4/5 md:max-h-80 shrink-0 " />
            <div class="w-full bg-white px-6 py-4 shadow border-l-4 md:rounded-r-lg">
              <h3 class="text-xl font-semibold">${p.nombre}</h3>
              <p class="mt-2">${p.ubicacion}</p>
              <p>${p.year}</p>
            </div>
          </div>`,
      )
      .join("");
  }

  const video = document.querySelector("#hero video");
  if (video) {
    const src =
      window.innerWidth < 768
        ? "./video/Hero-Mobile.mp4"
        : "./video/Hero-Full.mp4";
    video.src = src;
    video.load();
  }
};
