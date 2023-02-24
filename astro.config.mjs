import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@styles": path.resolve(process.cwd(), "src/styles"),
        "@layouts": path.resolve(process.cwd(), "src/layouts"),
        "@components": path.resolve(process.cwd(), "src/components"),
      },
    },
  },
});
