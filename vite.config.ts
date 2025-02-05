import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",  // 👈 שימוש בנתיב יחסי, עובד גם בלוקאל וגם ב-GitHub Pages
});

