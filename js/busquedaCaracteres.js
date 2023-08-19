const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');

(async function () {
  let driver;
  try {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://127.0.0.1:5500/index.html');
    await driver.manage().window().setRect({ width: 1280, height: 719 });

    const searchField = await driver.findElement(By.id('search'));

    async function searchAndEnter(value) {
      await searchField.click();
      await searchField.sendKeys(value);
      await searchField.sendKeys(Key.ENTER);
    }

    await searchAndEnter('"');
    await searchAndEnter('"');
    await searchAndEnter('@');
    await searchAndEnter('*');
    await searchAndEnter('&');

    // Add more search and enter actions as needed.

  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
