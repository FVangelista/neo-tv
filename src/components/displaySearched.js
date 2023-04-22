import { cEl } from "../utils/funcs.js";

export const displaySearched = (searchWrapper, data) => {
  data.forEach((element) => {
    const {
      poster_path: image,
      overview,
      name,
      first_air_date: released,
      vote_average: rating,
    } = element;

    const infoWrapper = cEl("div");
    infoWrapper.classList.add("info-w");
    const infoImg = cEl("img");
    infoImg.classList.add("info-img");
    const textInfo = cEl("div");
    textInfo.classList.add("t-info");
    const desc = cEl("p");
    const title = cEl("h2");
    const date = cEl("p");

    // rating

    const ratings = cEl("div");
    ratings.classList.add("ratings");

    // content

    ratings.textContent = parseFloat(rating).toFixed(1);

    date.textContent = `${released} - First release`;
    title.textContent = name;
    desc.textContent = overview;

    if (image) {
      infoImg.src = `https://image.tmdb.org/t/p/w500/${image}`;
    } else {
      infoImg.src = `https://semantic-ui.com/images/wireframe/square-image.png`;
    }

    searchWrapper.appendChild(infoWrapper);
    infoWrapper.appendChild(infoImg);
    infoWrapper.appendChild(textInfo);
    textInfo.appendChild(title);
    textInfo.appendChild(desc);
    textInfo.appendChild(date);
    textInfo.appendChild(ratings);
  });
};
