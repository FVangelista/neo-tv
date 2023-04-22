import { gEl, cEl } from "../utils/funcs.js";
import { displayForm } from "./displayForm.js";

const bodyEl = gEl("body");

// Search - Main Content

export default function createMainSearch() {
  const searchWrapper = cEl("section");
  searchWrapper.classList.add("search-wrapper");

  bodyEl.appendChild(searchWrapper);

  displayForm(searchWrapper);
}
