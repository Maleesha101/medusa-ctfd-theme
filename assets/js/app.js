document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector("[data-medusa-board]");
  if (!board) return;

  const cards = board.querySelectorAll("[data-challenge-card]");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const route = card.dataset.challengeUrl;
      if (route) {
        window.location.href = route;
      }
    });
  });

  const scoreboard = document.querySelector("[data-scoreboard]");
  if (scoreboard) {
    scoreboard.setAttribute("data-loaded", "true");
  }
});
