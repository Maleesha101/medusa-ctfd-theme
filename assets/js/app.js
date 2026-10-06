const navToggle = document.querySelector("[data-medusa-nav-toggle]");
const primaryNav = document.querySelector("#medusa-primary-nav");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    primaryNav.classList.toggle("is-open", !expanded);
  });
}

document.querySelectorAll("[data-medusa-notifications]").forEach((trigger) => {
  const panelId = trigger.getAttribute("aria-controls");
  const panel = panelId ? document.getElementById(panelId) : null;
  if (!panel) return;

  trigger.addEventListener("click", () => {
    const expanded = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });
});
