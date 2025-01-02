import { test, expect } from "@playwright/test";

test("basic navigation test", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Patrick Kell/);
});
