const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

(async function() {
  let driver;

  try {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get("http://127.0.0.1:5500/index.html");
    await driver.manage().window().setRect({ width: 1280, height: 719 });

    await driver.findElement(By.css("#poke-squirtle #a")).click();
    await driver.findElement(By.linkText("Home")).click();

    await driver.findElement(By.css("#poke-psyduck #a")).click();
    await driver.findElement(By.linkText("Home")).click();

    await driver.findElement(By.css("#poke-wigglytuff .card-body")).click();
    await driver.findElement(By.linkText("Home")).click();

    await driver.findElement(By.css("#poke-parasect #a")).click();

    console.log("Navegación a detalles exitosa");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
