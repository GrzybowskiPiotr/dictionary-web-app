import {expect, test} from "@playwright/test";

test("Does the word typed on the keyboard return a definition ?", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("textbox", {name: "Search for any word…"}).click();
  await page
    .getByRole("textbox", {name: "Search for any word…"})
    .fill("keyboard");
  await page.getByRole("button", {name: "search icon"}).click();
  await expect(page.getByRole("main")).toContainText("/ˈkiːbɔːd/");
  await expect(
    page
      .locator("section")
      .filter({hasText: "nounMeaning(etc.) A set of"})
      .locator("h3")
  ).toBeVisible();
  await expect(
    page.getByLabel("dictionary application").getByRole("link")
  ).toContainText("https://en.wiktionary.org/wiki/keyboard");
});
