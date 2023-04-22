import { GET, GET_3 } from "../utils/api.js";
import { gEl, cEl, randomNum } from "../utils/funcs.js";
import { displayCards } from "./displayCards.js";
import { displayModal } from "./displayModal.js";

const bodyEl = gEl("body");

// Home Page - Main content

export default function createMain() {
  const modalOverlay = cEl("div");
  modalOverlay.classList.add("modal-overlay");
  const sliderWrapper = cEl("section");
  sliderWrapper.classList.add("slider-wrapper");

  bodyEl.appendChild(sliderWrapper);
  bodyEl.appendChild(modalOverlay);

  Promise.all([
    GET_3("top_rated", `${randomNum}`),
    GET_3("popular", `${randomNum}`),
    GET_3("on_the_air", `${randomNum}`),
  ])
    .then((data) => {
      displayCards(
        data[0].results,
        sliderWrapper,
        "slider_first",
        "sliderInner_first",
        "category_first",
        "top rated"
      );
      displayCards(
        data[1].results,
        sliderWrapper,
        "slider_second",
        "sliderInner_second",
        "category_second",
        "popular"
      );
      displayCards(
        data[2].results,
        sliderWrapper,
        "slider_third",
        "sliderInner_third",
        "category_third",
        "on the air"
      );
    })
    .then(() => {
      const cards = document.querySelectorAll(".movie-card");

      cards.forEach((card) =>
        card.addEventListener("click", () => {
          modalOverlay.classList.add("show");
          GET(card.id).then((selectedCard) => {
            displayModal(modalOverlay, selectedCard);
          });
        })
      );
    });

  modalOverlay.addEventListener("mousedown", () => {
    const modalCard = gEl(".modal");
    modalOverlay.classList.remove("show");

    bodyEl.style.overflow = "scroll";

    modalCard.remove();
  });
}
