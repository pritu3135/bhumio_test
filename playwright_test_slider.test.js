const { test, expect } = require("@playwright/test");

test("Extract values from sliders", async ({ page }) => {
  await page.goto("https://mui.com/material-ui/react-slider/"); // Replace with the actual URL

  // Interact with the first slider (enabled)
  const initialFirstValue = await page.evaluate(
    () => document.querySelector('[aria-label="Volume"]').value
  );

  console.log("slider_value", initialFirstValue);
  expect(initialFirstValue).toContain("30");
});
