const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));

  await page.goto('http://localhost:4173/');
  await page.waitForTimeout(2000);
  
  console.log('Clicking search button...');
  await page.click('.DocSearch-Button, .VPNavBarSearch button');
  
  await page.waitForTimeout(2000);
  console.log('Done.');
  await browser.close();
})();
