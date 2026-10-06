import { defineConfig } from "vite";
import { resolve } from "path";
import { ctfdCssManifestPlugin } from "./vite.ctfd-manifest.js";

export default defineConfig({
  plugins: [ctfdCssManifestPlugin()],
  build: {
    manifest: true,
    outDir: "static",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "assets/scss/main.scss"),
        app: resolve(__dirname, "assets/js/app.js"),
        challenges: resolve(__dirname, "assets/js/challenges.js"),
        scoreboard: resolve(__dirname, "assets/js/scoreboard.js"),
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
