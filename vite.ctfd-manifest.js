export function ctfdCssManifestPlugin() {
  return {
    name: "ctfd-css-manifest",
    generateBundle(_options, bundle) {
      const manifest = {};

      for (const asset of Object.values(bundle)) {
        if (asset.type !== "asset" || !asset.fileName.endsWith(".css")) {
          continue;
        }

        const name = asset.fileName.split("/").pop();
        if (name) {
          manifest[name] = { file: asset.fileName };
        }
      }

      this.emitFile({
        type: "asset",
        fileName: "manifest-css.json",
        source: JSON.stringify(manifest, null, 2) + "\n",
      });
    },
  };
}
