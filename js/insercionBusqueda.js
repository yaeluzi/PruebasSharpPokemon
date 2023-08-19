const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');

(async function() {
  let driver;

  try {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get("http://127.0.0.1:5500/index.html");
    await driver.manage().window().setRect({ width: 1280, height: 719 });

    await driver.findElement(By.id("search")).click();
    await driver.findElement(By.id("search")).sendKeys("kakuna");
    await driver.findElement(By.id("search")).sendKeys(Key.ENTER);

    await driver.findElement(By.id("nombre")).click();
    await driver.findElement(By.linkText("Home")).click();

    await driver.findElement(By.id("search")).click();
    await driver.findElement(By.id("search")).sendKeys("charmander");
    await driver.findElement(By.id("search")).sendKeys(Key.ENTER);

    console.log("Inserción y búsqueda exitosas");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
