import Alpine from "alpinejs";
import CTFd from "@ctfdio/ctfd-js";

window.Alpine = Alpine;
CTFd.init(window.init);

function externalizeLinks(html) {
  const dom = new DOMParser().parseFromString(html || "", "text/html");
  dom.querySelectorAll('a[href*="://"]').forEach((link) => { link.target = "_blank"; link.rel = "noopener noreferrer"; });
  return dom.body.innerHTML;
}

function normalizeChallenge(challenge) {
  return { ...challenge, html: externalizeLinks(challenge.html || challenge.description || ""), description: challenge.description || "", files: challenge.files || [], hints: challenge.hints || [] };
}

Alpine.data("MedusaChallengeBoard", () => ({
  challenges: [], selected: null, query: "", category: "all", loading: true, submitting: false, submission: "", response: null,

  async init() {
    this.challenges = await CTFd.pages.challenges.getChallenges();
    this.loading = false;
    const hash = decodeURIComponent(window.location.hash.replace("#", ""));
    if (hash) {
      const challengeId = Number(hash.split("-").pop());
      if (Number.isInteger(challengeId)) await this.openChallenge(challengeId);
    }
  },

  categories() { return [...new Set(this.challenges.map((c) => c.category).filter(Boolean))].sort(); },

  visibleChallenges() {
    const q = this.query.trim().toLowerCase();
    return this.challenges.filter((c) => {
      const categoryMatch = this.category === "all" || c.category === this.category;
      const textMatch = !q || [c.name, c.category, c.type, c.description].join(" ").toLowerCase().includes(q);
      return categoryMatch && textMatch;
    });
  },

  stripHtml(value) {
    const node = document.createElement("div"); node.innerHTML = value;
    return (node.textContent || "").trim().slice(0, 150);
  },

  filename(value) { return value.split("?")[0].split("/").pop() || value; },

  async openChallenge(id) {
    this.response = null;
    const result = await CTFd.pages.challenge.getChallenge(id);
    if (!result?.data) return;
    this.selected = normalizeChallenge(result.data);
    this.submission = "";
    window.history.replaceState(null, "", "#" + encodeURIComponent(this.selected.name) + "-" + id);
    this.$nextTick(() => document.querySelector("#medusa-flag")?.focus());
  },

  closeChallenge() { this.selected = null; window.history.replaceState(null, "", window.location.pathname); },

  async submitFlag() {
    if (!this.selected || this.submitting) return;
    this.submitting = true;
    this.response = await CTFd.pages.challenge.submitChallenge(this.selected.id, this.submission);
    this.submitting = false;
    if (this.response?.data?.status === "authentication_required") {
      window.location.href = CTFd.config.urlRoot + "/login?next=" + encodeURIComponent(window.location.pathname + window.location.hash);
      return;
    }
    if (this.response?.data?.status === "correct") {
      this.submission = "";
      const index = this.challenges.findIndex((c) => c.id === this.selected.id);
      if (index >= 0) this.challenges[index].solved_by_me = true;
      this.selected.solved_by_me = true;
    }
  },

  responseMessage() { return this.response?.data?.message || this.response?.message || "Submission completed."; },
  responseClass() {
    const status = this.response?.data?.status;
    return status === "correct" || status === "already_solved" ? "is-success" : status === "paused" ? "is-warning" : "is-danger";
  },
}));

Alpine.start();