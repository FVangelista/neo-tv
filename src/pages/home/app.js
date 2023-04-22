import { createNav, createFooter } from "../../layout";
import createHero from "../../components/createHero.js";
import createMain from "../../components/createMain.js";

// Project Init

window.addEventListener("DOMContentLoaded", () =>
  createNav("/neo-tv/", "/neo-tv/search.html")
);
window.addEventListener("DOMContentLoaded", createHero);
window.addEventListener("DOMContentLoaded", createMain);
window.addEventListener("DOMContentLoaded", () =>
  createFooter("/neo-tv/", "/neo-tv/search.html")
);
