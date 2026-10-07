import Alpine from "alpinejs";
import CTFd from "@ctfdio/ctfd-js";

CTFd.init(window.init);
window.Alpine = Alpine;

Alpine.data("SettingsTabs", () => ({
  tabs: [],
  init() {
    this.tabs = [...this.$root.querySelectorAll('[data-medusa-settings-tab]')];
    this.tabs.forEach((tab, index) => {
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        let next = index;
        if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % this.tabs.length;
        if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + this.tabs.length) % this.tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = this.tabs.length - 1;
        this.activate(this.tabs[next]);
        this.tabs[next].focus();
      });
    });
  },
  activate(tab) {
    const target = tab.dataset.medusaSettingsTab;
    this.tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    });
    this.$root.parentElement.parentElement.querySelectorAll("[data-medusa-settings-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.medusaSettingsPanel !== target;
    });
  },
}));

Alpine.start();