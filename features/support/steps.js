const { Given, When, Then, After } = require("cucumber");
const expect = require("chai").expect;
const puppeteer = require("puppeteer");
const config=require("../../lib/config");

var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

Given("the browser is open", async function() {
  this.browser = await puppeteer.launch({ headless: false });
  this.page = await this.browser.newPage();
});

When("open the google page", async function() {
  await this.page.goto(config.scenario1BaseUrl);
});

When("Search for flipkart", async function() {
  await this.page.waitForSelector("[name='q']");
  await this.page.type('[name="q"]', "flipkart");
  await this.page.keyboard.press('Enter');
//   await this.page.click('[name="btnK"]');
  await this.page.waitForNavigation();
});

Then("count the results", async function() {
  let linkTexts = await this.page.$$eval(".plan-features a", elements =>
    elements.map(item => item.textContent)
  );

  console.log(linkTexts.count);
});
