const { test, expect } = require("@playwright/test");

test("Extract values from ToggleButtons component", async ({ page }) => {
  // Replace with the URL where the component is rendered
  await page.goto("https://mui.com/material-ui/react-toggle-button/");

  const initialValue = await page.evaluate(
    () => document.querySelector('[aria-label="left aligned"]').value
  );

  console.log("initialValue", initialValue);
  expect(initialValue).toContain("left");
});
