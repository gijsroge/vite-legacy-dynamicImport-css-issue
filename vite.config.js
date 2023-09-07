import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [legacy({})],
    build: {
      manifest: true,
      emptyOutDir: true,
      rollupOptions: {
        output: {},
        input: {
          main: "main.js",
        },
      },
    },
  };
});
