import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/English-Learning-Platform/", // 👈 חשוב ל-GitHub Pages
});
