document.querySelectorAll("[data-medusa-auth-form]").forEach((form) => {
  form.addEventListener("submit", () => {
    const submit = form.querySelector("[data-medusa-submit]");
    if (!submit) return;
    submit.disabled = true;
    submit.setAttribute("aria-disabled", "true");
    submit.dataset.originalText = submit.textContent;
    submit.textContent = "Authenticating…";
  });
});


document.querySelectorAll("[data-medusa-flag-form]").forEach((form)=>{form.addEventListener("submit",()=>{const submit=form.querySelector("button[type=submit]");if(!submit)return;submit.disabled=true;submit.setAttribute("aria-disabled","true");submit.textContent="Submitting…";});});
const challengeSearch=document.querySelector("[data-medusa-challenge-search]");const challengeCards=[...document.querySelectorAll("[data-challenge-card]")];const categoryButtons=[...document.querySelectorAll("[data-medusa-category]")];function filterChallenges(){const query=(challengeSearch?.value||"").trim().toLowerCase();const category=document.querySelector("[data-medusa-category].is-active")?.dataset.category||"all";challengeCards.forEach(card=>{card.hidden=!( (!query||card.textContent.toLowerCase().includes(query)) && (category==="all"||card.dataset.category===category) );});}challengeSearch?.addEventListener("input",filterChallenges);categoryButtons.forEach(button=>button.addEventListener("click",()=>{categoryButtons.forEach(item=>item.classList.remove("is-active"));button.classList.add("is-active");filterChallenges();}));

const scoreboardSearch=document.querySelector("[data-medusa-scoreboard-search]");
const scoreboardRows=[...document.querySelectorAll("[data-scoreboard-row]")];
scoreboardSearch?.addEventListener("input",()=>{const query=scoreboardSearch.value.trim().toLowerCase();scoreboardRows.forEach(row=>{row.hidden=Boolean(query)&&!row.textContent.toLowerCase().includes(query);});});


// MEDUSA responsive navigation: keep menu state synchronized with ARIA state.
const navToggle = document.querySelector("[data-medusa-nav-toggle]");
const primaryNav = document.querySelector("#medusa-primary-nav");

if (navToggle && primaryNav) {
  const closeNavigation = () => {
    primaryNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && primaryNav.classList.contains("is-open")) {
      closeNavigation();
      navToggle.focus();
    }
  });

  window.matchMedia("(min-width: 769px)").addEventListener("change", closeNavigation);
}


// MEDUSA notification center: accessible disclosure with focus restoration.
document.querySelectorAll("[data-medusa-notifications]").forEach((trigger) => {
  const panel = document.getElementById(trigger.getAttribute("aria-controls"));
  if (!panel) return;
  const close = () => { panel.hidden = true; trigger.setAttribute("aria-expanded", "false"); };
  trigger.addEventListener("click", () => { const open = panel.hidden; panel.hidden = !open; trigger.setAttribute("aria-expanded", String(open)); if (open) panel.querySelector("a,button")?.focus(); else trigger.focus(); });
  document.addEventListener("click", (event) => { if (!panel.hidden && !trigger.contains(event.target) && !panel.contains(event.target)) close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !panel.hidden) { close(); trigger.focus(); } });
});