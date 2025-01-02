import type { RenderOptions } from "@testing-library/svelte";
import { render } from "@testing-library/svelte";

const customRender = (ui: any, options?: Omit<RenderOptions, "queries">) => {
  return render(ui, {
    ...options,
  });
};

// Re-export everything
export * from "@testing-library/svelte";

// Override render method
export { customRender as render };

// Example test helper
export function createMockTheme(override = {}) {
  return {
    mode: "light",
    style: "modern",
    ...override,
  };
}
