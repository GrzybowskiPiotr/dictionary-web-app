import { test, expect } from "@playwright/test";

test("Dose no Defenition Found message displayes", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("textbox", { name: "Search for any word…" }).click();
  await page
    .getByRole("textbox", { name: "Search for any word…" })
    .fill("dupa");
  await page
    .getByRole("textbox", { name: "Search for any word…" })
    .press("Tab");
  await page.getByRole("button", { name: "search icon" }).press("Enter");
  await page.getByRole("button", { name: "search icon" }).click();
  await expect(page.getByRole("img", { name: "sad_face emoji" })).toBeVisible();
  await expect(page.getByTestId("heading")).toContainText(
    "No Definitions Found"
  );
});
