import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    https: false,
    hmr: {
      host: "aarvitrage.arch-server.com",
      port: 443,
      protocol: "wss",
    },
  },
  plugins: [react()],
});
