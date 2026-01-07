import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      // Allow your ngrok domain
      "acrodrome-zeugmatically-coreen.ngrok-free.dev",
      "deliquescent-kyle-absorbedly.ngrok-free.dev",

      // Allow ANY future ngrok domains automatically
      "*.ngrok-free.dev",
      "*.ngrok-free.app",
      "*.ngrok.io"
    ]
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
