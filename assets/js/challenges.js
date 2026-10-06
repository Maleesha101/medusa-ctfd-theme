document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll("[data-filter]");
  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("is-active"));
      filter.classList.add("is-active");
    });
  });
});
