import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    manifest: "manifest.json",
    outDir: "static",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "assets/scss/main.scss"),
        app: resolve(__dirname, "assets/js/app.js"),
        challenges: resolve(__dirname, "assets/js/challenges.js"),
        dashboard: resolve(__dirname, "assets/js/dashboard.js"),
        scoreboard: resolve(__dirname, "assets/js/scoreboard.js"),
        settings: resolve(__dirname, "assets/js/settings.js"),
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
