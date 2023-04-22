import { cEl } from "../utils/funcs.js";

export const displayCards = (
  item,
  sliderWrapper,
  slider,
  sliderInner,
  category,
  cat_name
) => {
  category = cEl("h2");
  category.classList.add("category");
  slider = cEl("div");
  slider.classList.add("slider");
  sliderInner = cEl("div");
  sliderInner.classList.add("slider-inner");
  const wrapper = cEl("div");
  wrapper.classList.add("wrapper");
  const navWrapper = cEl("div");
  navWrapper.classList.add("navWrapper");
  const btnsWrapper = cEl("div");
  btnsWrapper.classList.add("btnsWrapper");
  const prevBtn = cEl("button");
  prevBtn.classList.add("prevBtn");
  const nextBtn = cEl("button");
  nextBtn.classList.add("nextBtn");

  prevBtn.textContent = "<";
  nextBtn.textContent = ">";

  nextBtn.addEventListener("click", () => {
    window.innerWidth > 1500
      ? (slider.scrollLeft += 1400)
      : (slider.scrollLeft += 700);

    if (window.innerWidth < 700) {
      slider.scrollLeft += 400;
    }
  });

  prevBtn.addEventListener("click", () => {
    window.innerWidth > 1500
      ? (slider.scrollLeft -= 1400)
      : (slider.scrollLeft -= 700);

    if (window.innerWidth < 700) {
      slider.scrollLeft -= 400;
    }
  });

  category.textContent = `${cat_name}`;

  btnsWrapper.appendChild(prevBtn);
  btnsWrapper.appendChild(nextBtn);
  navWrapper.appendChild(category);
  navWrapper.appendChild(btnsWrapper);
  wrapper.appendChild(navWrapper);
  slider.appendChild(sliderInner);
  wrapper.appendChild(slider);
  sliderWrapper.appendChild(wrapper);

  item.forEach((element) => {
    const movieCard = cEl("div");
    movieCard.classList.add("movie-card");
    movieCard.setAttribute("id", `${element.id}`);
    const movieCardImg = cEl("img");
    movieCardImg.classList.add("card-img");
    const ratings = cEl("div");
    ratings.classList.add("ratings");
    const rateBar = cEl("div");
    rateBar.classList.add("rate-bar");
    const rateBarInner = cEl("div");
    rateBarInner.classList.add("rate-inner");

    rateBarInner.style.height = `${element.vote_average * 10}%`;

    ratings.textContent = `${element.vote_average}`;

    movieCardImg.src = `https://image.tmdb.org/t/p/w500/${element.poster_path}`;

    sliderInner.appendChild(movieCard);
    movieCard.appendChild(ratings);
    movieCard.appendChild(rateBar);
    movieCard.appendChild(movieCardImg);
    rateBar.appendChild(rateBarInner);
  });
};
