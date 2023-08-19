const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');

(async function () {
  let driver;
  try {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://127.0.0.1:5500/index.html');
    await driver.manage().window().setRect({ width: 1280, height: 719 });

    // Realiza una serie de acciones para interactuar con la página web.
    const element = await driver.findElement(By.css('html'));

    await driver.actions({ bridge: true })
      .moveToElement(element)
      .clickAndHold()
      .perform();

    await driver.actions({ bridge: true })
      .moveToElement(element)
      .perform();

    await driver.actions({ bridge: true })
      .moveToElement(element)
      .release()
      .perform();

    await driver.findElement(By.css('#poke-wigglytuff .card-body')).click();
    await driver.findElement(By.id('nombre')).click();

  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
