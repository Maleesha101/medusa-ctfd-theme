import Alpine from "alpinejs";
import CTFd from "@ctfdio/ctfd-js";

CTFd.init(window.init);
window.Alpine = Alpine;

Alpine.data("MedusaScoreboard", () => ({
  standings: [], brackets: [], activeBracket: "", query: "", loading: true, error: "", lastUpdated: "", timer: null,

  async init() {
    await this.update();
    this.timer = window.setInterval(() => this.update(), 300000);
  },

  async update() {
    try {
      const [brackets, standings] = await Promise.all([
        CTFd.pages.scoreboard.getBrackets(CTFd.config.userMode),
        CTFd.pages.scoreboard.getScoreboard(this.activeBracket || null),
      ]);
      this.brackets = Array.isArray(brackets) ? brackets : [];
      this.standings = Array.isArray(standings) ? standings : [];
      this.error = "";
      this.lastUpdated = new Date().toLocaleTimeString();
    } catch (error) {
      this.error = "Live standings could not be refreshed. Showing the last successful update.";
    } finally {
      this.loading = false;
    }
  },

  filtered() {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.standings;
    return this.standings.filter((team) => [team.name, team.affiliation, team.university].join(" ").toLowerCase().includes(q));
  },

  destroy() {
    if (this.timer) window.clearInterval(this.timer);
  },
}));

Alpine.start();