const tabs = [...document.querySelectorAll("[data-medusa-settings-tab]")];
const panels = [...document.querySelectorAll("[data-medusa-settings-panel]")];

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.medusaSettingsTab;
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.medusaSettingsPanel !== target;
    });
  });
});
