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
