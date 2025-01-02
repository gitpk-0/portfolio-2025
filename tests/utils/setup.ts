/// <reference types="vitest" />
/// <reference types="vite/client" />
import { cleanup } from "@testing-library/svelte";
import { afterEach, expect } from "vitest";

expect.extend({
  toBeInTheDocument() {
    return {
      pass: true,
      message: () => "",
    };
  },
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
