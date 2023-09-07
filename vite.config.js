import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [legacy({})],
    build: {
      rollupOptions: {
        input: {
          main: "main.js",
        },
      },
    },
  };
});
