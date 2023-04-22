import { cEl, gEl } from "../utils/funcs.js";

const bodyEl = gEl("body");

// MODAL

export const displayModal = (modalOverlay, data) => {
  const {
    name,
    poster_path: image,
    overview,
    number_of_seasons: seasons,
    number_of_episodes: ep,
  } = data;

  const modal = cEl("div");
  modal.classList.add("modal");
  const modalImg = cEl("img");
  modalImg.classList.add("modal-img");
  const modalTitle = cEl("h2");
  modalTitle.classList.add("modal-title");
  const description = cEl("p");
  description.classList.add("modal-description");
  const nSeasons = cEl("p");
  nSeasons.classList.add("modal-description");
  const nEp = cEl("span");
  nEp.classList.add("modal-description");

  nEp.textContent = `Episodes ${ep}`;
  nSeasons.textContent = `Seasons ${seasons} - `;
  description.textContent = overview;
  modalTitle.textContent = name;
  modalImg.src = `https://image.tmdb.org/t/p/w500/${image}`;

  modalOverlay.appendChild(modal);
  modal.appendChild(modalTitle);
  modal.appendChild(nSeasons);
  nSeasons.appendChild(nEp);
  modal.appendChild(modalImg);
  modal.appendChild(description);

  // Blocks body scroll when displaying modal
  bodyEl.style.overflow = "hidden";
};
