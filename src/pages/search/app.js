import { createNav, createFooter } from "../../layout";
import createMainSearch from "../../components/createMainSearch.js";

window.addEventListener("DOMContentLoaded", () =>
  createNav("/neo-tv/", "/neo-tv/search.html")
);
window.addEventListener("DOMContentLoaded", createMainSearch);
window.addEventListener("DOMContentLoaded", () =>
  createFooter("/neo-tv/", "/neo-tv/search.html")
);
