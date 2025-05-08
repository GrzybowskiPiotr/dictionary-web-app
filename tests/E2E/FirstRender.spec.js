import {test, expect} from "@playwright/test";

test("Does the first stage of the application render correctly?", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  await expect(
    page.getByRole("textbox", {name: "Search for any word…"})
  ).toBeVisible();
  await expect(
    page.getByRole("button", {name: "Sans Serif Arrow icon"})
  ).toBeVisible();
  await expect(page.getByRole("button", {name: "search icon"})).toBeVisible();
  await expect(page.getByRole("img", {name: "theme icon"})).toBeVisible();
  await expect(page.getByRole("img", {name: "book icon"})).toBeVisible();
});
