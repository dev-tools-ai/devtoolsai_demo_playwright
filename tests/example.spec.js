const base = require('@playwright/test');
const devtools = require('@devtools-ai/playwright-sdk');

// Extend basic test by providing a "todoPage" fixture.
const test = base.test.extend({
  page: async ({ page }, use, testInfo) => {
    await devtools.register_devtools(page, testInfo.title);
    await use(page);
  },
});

test('Enter username in Github', async ({ page }) => {
    await page.goto(`https://github.com/login`);
    (await page.$('//input[@id="login_field"]')).type('my_username');
  	await new Promise((r) => setTimeout(r, 2000));
});

test('Search on duck duck go', async ({ page }) => {
  await page.goto('https://duckduckgo.com');
  //var element = await page.findByAI('pw_search_box')
  //await element.type("Hellow World!");
  await new Promise((r) => setTimeout(r, 2000));
});


