const { test, expect } = require("@playwright/test");

test("Check and uncheck checkbox", async ({ page }) => {
  // Replace with the URL where the component is rendered
  await page.goto("https://mui.com/material-ui/react-checkbox/");

  // Assuming all checkboxes have the same aria-label:
  const initialFirstValue = await page.evaluate(
    () => document.querySelector('[aria-label="Checkbox demo"]').value
  );
  console.log("checkboxes", initialFirstValue);
  expect(initialFirstValue).toContain("on");
});
