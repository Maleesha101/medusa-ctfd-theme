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