/// <reference types="vitest" />
import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      include: ["src/**/*.{test,spec}.{js,ts,svelte}"],
      coverage: {
        reporter: ["text", "json", "html"],
        exclude: ["node_modules/", "src/**/*.{test,spec}.{js,ts}"],
      },
      setupFiles: ["./tests/setup.ts"],
      typecheck: {
        tsconfig: "./tsconfig.app.json",
      },
    },
  })
);
