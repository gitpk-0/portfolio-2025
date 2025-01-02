import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import Button from "../../../../../src/shared/components/ui/Button.svelte";

describe("Button", () => {
  it("renders with default props", () => {
    const { getByRole } = render(Button, { props: { children: "Click me" } });
    const button = getByRole("button");
    expect(button).toBeTruthy();
  });
});
