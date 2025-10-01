document.querySelectorAll(".nav__item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".nav__item")
      .forEach((el) => el.classList.remove("nav__item--active"));
    item.classList.add("nav__item--active");
  });
});
