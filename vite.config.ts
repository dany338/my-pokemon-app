import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import { defineConfig as testConfig } from "vitest/config";

// Vite configuration
const config = defineConfig({
  plugins: [react()],
});

// Vitest configuration
const tstConfig = testConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});

// Merge configurations
export default {
  ...config,
  ...tstConfig,
};