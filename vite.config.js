import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/simple-weather-app/", // 👈 adicione esta linha!
  plugins: [react()],
});
