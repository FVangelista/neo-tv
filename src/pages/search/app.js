import { createNav, createFooter } from "../../layout";
import createMainSearch from "../../components/createMainSearch.js";

window.addEventListener("DOMContentLoaded", () =>
  createNav("/", "/search.html")
);
window.addEventListener("DOMContentLoaded", createMainSearch);
window.addEventListener("DOMContentLoaded", () =>
  createFooter("/", "/search.html")
);
