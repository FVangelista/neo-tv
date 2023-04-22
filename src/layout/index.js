import { gEl, cEl } from "../utils/funcs.js";

const bodyEl = gEl("body");

//  Nav

export function createNav(home, search) {
  const nav = cEl("nav");
  nav.classList.add("nav");
  const title = cEl("h2");
  const menuItems = ["home", "search"];

  const ul = cEl("ul");
  ul.classList.add("nav-list");

  // menu list
  menuItems.forEach((item) => {
    const li = cEl("li");
    const a = cEl("a");
    a.classList.add("list-text");
    a.textContent = item;
    ul.appendChild(li);
    li.appendChild(a);
  });
  ul.children[0].firstChild.href = home;
  ul.children[1].firstChild.href = search;

  title.classList.add("title");
  title.textContent = "tv show";

  bodyEl.appendChild(nav);
  nav.appendChild(title);
  nav.appendChild(ul);
}

// Footer

export function createFooter(home, search) {
  const footer = cEl("section");
  footer.classList.add("footer");
  const menuItems = ["home", "search", "contact"];
  const ul = cEl("ul");
  ul.classList.add("footer-list");
  const logo = cEl("h3");
  logo.classList.add("footer-logo");

  logo.innerHTML = "&copy; by filippo ";

  menuItems.forEach((item) => {
    const li = cEl("li");
    const a = cEl("a");
    a.textContent = item;
    ul.appendChild(li);
    li.appendChild(a);
  });
  ul.children[0].firstChild.href = home;
  ul.children[1].firstChild.href = search;
  ul.children[2].firstChild.href = "https://github.com/FVangelista";

  bodyEl.appendChild(footer);
  footer.appendChild(logo);
  footer.appendChild(ul);
}
