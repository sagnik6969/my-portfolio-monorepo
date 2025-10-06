import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  base: "/my-portfolio/",
  plugins: [
    react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
    build: {
    outDir: '../../public/my-portfolio',
    emptyOutDir: true, // also necessary
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
