/// <reference types="vitest" />
import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";
import path from "path";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      include: ["tests/unit/**/*.test.ts", "tests/integration/**/*.test.ts"],
      coverage: {
        reporter: ["text", "json", "html"],
        exclude: ["node_modules/", "src/**/*.{test,spec}.{js,ts}"],
      },
      setupFiles: ["./tests/utils/setup.ts"],
      typecheck: {
        tsconfig: "./tsconfig.app.json",
      },
    },
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "./src") },
        {
          find: "@shared",
          replacement: path.resolve(__dirname, "./src/shared"),
        },
        { find: "@core", replacement: path.resolve(__dirname, "./src/core") },
        {
          find: "@features",
          replacement: path.resolve(__dirname, "./src/features"),
        },
        {
          find: "@routes",
          replacement: path.resolve(__dirname, "./src/routes"),
        },
        { find: "@app", replacement: path.resolve(__dirname, "./src/app") },
      ],
    },
  })
);
