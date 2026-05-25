const navBtn = document.getElementById("navBtn");
const mobileMenu = document.getElementById("mobileMenu");

navBtn.addEventListener("click", () => {
  /* mobileMenu.classList.toggle("max-h-0"); */
  mobileMenu.classList.toggle("max-h-96");
});

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    form.reset();
    const ctnBtn = document.getElementById("contactBtn");

    ctnBtn.textContent = "ENVIADO";
    ctnBtn.classList.toggle("bg-green-300");
  } else {
    const msjError = document.getElementById("errorMsj");

    msjError.classList.remove("hidden");
  }
});
