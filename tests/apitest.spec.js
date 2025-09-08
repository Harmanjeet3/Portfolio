import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const response = await page.request.post('https://portfoliowithchatbot.onrender.com/ask', {
    data: {
      "message": "Hi"
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log('Response body:', responseBody);
  
  // Check if the response matches the expected format
  expect(responseBody).toHaveProperty('response');
  expect(responseBody.response).toContain('Hello');
    expect(responseBody.response).toContain('How can I help ');

  // Alternative without checking for the exact newline character
  // expect(responseBody.response.trim()).toBe('Hello! How can I help you?');
});