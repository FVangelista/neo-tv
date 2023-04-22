import { GET_2 } from "../utils/api.js";
import { cEl, removeBefore } from "../utils/funcs.js";
import { displaySearched } from "./displaySearched.js";

export const displayForm = (searchWrapper) => {
  const form = cEl("form");
  form.classList.add("search-form");
  const searchInput = cEl("input");
  searchInput.classList.add("search-movie");
  searchInput.type = "text";
  searchInput.placeholder = "search";
  const inputSubmit = cEl("input");
  inputSubmit.classList.add("btn");
  inputSubmit.type = "submit";
  inputSubmit.value = "enter";

  searchWrapper.appendChild(form);
  form.appendChild(searchInput);
  form.appendChild(inputSubmit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  inputSubmit.addEventListener("click", () => {
    GET_2(searchInput.value).then((data) =>
      displaySearched(searchWrapper, data.results)
    );

    removeBefore();
  });
};
