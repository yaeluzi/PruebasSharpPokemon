const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');

(async function() {
  let driver;

  try {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get("http://127.0.0.1:5500/index.html");
    await driver.manage().window().setRect({ width: 1280, height: 719 });

    await driver.findElement(By.id("search")).click();
    await driver.findElement(By.id("search")).sendKeys("ekans");
    await driver.findElement(By.id("search")).sendKeys(Key.ENTER);

    await driver.findElement(By.linkText("Home")).click();
    
    const h1Element = await driver.findElement(By.css("h1"));
    const h1Text = await h1Element.getText();
    
    assert.strictEqual(h1Text, "Pokemons");

    console.log("Navegación hacia atrás exitosa");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
