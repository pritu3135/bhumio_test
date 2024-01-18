const { test, expect } = require("@playwright/test");

test("Test Autocomplete input element", async ({ page }) => {
  // Replace with the URL where the component is rendered
  await page.goto("https://mui.com/material-ui/react-autocomplete/");
  const autocomplete = page.locator("#combo-box-demo");
  await autocomplete.click(); // Open the dropdown
  const desiredMovieOption = page.locator("text=The Shawshank Redemption");
  await desiredMovieOption.click();

  const initialValue = await autocomplete.inputValue();

  console.log("Autocomplete", initialValue); // Output: Array of option values
  expect(initialValue).toContain("The Shawshank Redemption");
});
