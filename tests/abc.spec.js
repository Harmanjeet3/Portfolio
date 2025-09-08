const { test, expect } = require('@playwright/test');

test('should login successfully', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://harmanjeet3.github.io/Portfolio/');


});
