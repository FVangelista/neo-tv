import { gEl, cEl } from "../utils/funcs.js";

const bodyEl = gEl("body");

// Home Hero

export default function createHero() {
  const hero = cEl("section");
  hero.classList.add("hero");
  const heroRight = cEl("div");
  heroRight.classList.add("r-wrapper");
  const heroLeft = cEl("div");
  heroLeft.classList.add("l-wrapper");
  const heroImg = cEl("img");
  heroImg.classList.add("hero-img");
  const logo = cEl("h1");
  logo.classList.add("logo");

  heroImg.src =
    "https://images.unsplash.com/photo-1597002973885-8c90683fa6e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3528&q=80";

  logo.innerHTML = `.neo <span class="sub">by filippo</span>`;

  bodyEl.appendChild(hero);
  hero.appendChild(heroLeft);
  hero.appendChild(heroRight);
  heroLeft.appendChild(heroImg);
  heroRight.appendChild(logo);
}
