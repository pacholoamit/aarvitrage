import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],

    server: {
      port: 3000,
      https: false,
      hmr: {
        host: process.env.DOMAIN_URL ?? "localhost",
        port: 443,
        protocol: "wss",
      },
    },
  });
};
