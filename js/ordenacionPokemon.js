const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

(async function() {
  let driver;

  try {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get("http://127.0.0.1:5500/docs/detalle.html?name=bulbasaur");
    await driver.manage().window().setRect({ width: 1280, height: 719 });

    await driver.findElement(By.linkText("Home")).click();
    await driver.findElement(By.css("#poke-bulbasaur .card-body")).click();
    await driver.findElement(By.id("nombre")).click();

    console.log("Ordenación de Pokémon exitosa");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
