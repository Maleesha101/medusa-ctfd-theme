import Alpine from "alpinejs";
import CTFd from "@ctfdio/ctfd-js";

CTFd.init(window.init);
window.Alpine = Alpine;

async function getJson(path) {
  const response = await CTFd.fetch(path);
  if (!response.ok) throw new Error("Unable to load dashboard data.");
  const body = await response.json();
  return body.data;
}

Alpine.data("MedusaDashboard", () => ({
  loading: true, error: "", team: {}, solves: [], scoreboard: [], totalChallenges: 0,
  get score() { const entry = this.currentEntry(); return entry?.score ?? this.team.score ?? 0; },
  get rank() { const entry = this.currentEntry(); return entry?.rank ?? (this.scoreboard.findIndex((x) => x.team_id === this.team.id || x.id === this.team.id) + 1 || null); },
  get progress() { return this.totalChallenges ? Math.min(100, Math.round((this.solves.length / this.totalChallenges) * 100)) : 0; },
  currentEntry() { return this.scoreboard.find((x) => x.team_id === this.team.id || x.id === this.team.id); },
  async init() { await this.refresh(); },
  async refresh() {
    this.loading = true; this.error = "";
    try {
      const [team, solves, scoreboard, challenges] = await Promise.all([
        getJson("/api/v1/teams/me"),
        getJson("/api/v1/users/me/solves"),
        getJson("/api/v1/scoreboard"),
        getJson("/api/v1/challenges?field=id"),
      ]);
      this.team = team || {}; this.solves = Array.isArray(solves) ? solves : []; this.scoreboard = Array.isArray(scoreboard) ? scoreboard : []; this.totalChallenges = Array.isArray(challenges) ? challenges.length : 0;
    } catch (error) { this.error = error.message || "Dashboard data could not be loaded."; }
    finally { this.loading = false; }
  },
}));
Alpine.start();