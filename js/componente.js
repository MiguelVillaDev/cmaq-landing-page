import { initNav, initPage } from "./main.js";

const loadComponent = async (id, path) => {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
};

await Promise.all([
  loadComponent("navbar", "./componentes/navbar.html"),
  loadComponent("footer", "./componentes/footer.html"),
]);

initNav();
initPage();
