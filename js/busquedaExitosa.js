const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');

(async function() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get("http://127.0.0.1:5500/index.html");
    await driver.manage().window().setRect({ width: 1280, height: 719 });

    await driver.findElement(By.id("search")).click();
    await driver.findElement(By.id("search")).sendKeys("pikachu");
    await driver.findElement(By.id("search")).sendKeys(Key.ENTER);

    const nombreElement = await driver.findElement(By.id("nombre"));
    const nombreText = await nombreElement.getText();
    
    assert.strictEqual(nombreText, "Pikachu");

    console.log("La búsqueda fue exitosa");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
