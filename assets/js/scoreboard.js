document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("[data-rank-row]");
  rows.forEach((row, index) => {
    row.dataset.rank = index + 1;
  });
});
