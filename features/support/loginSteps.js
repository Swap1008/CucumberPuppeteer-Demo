const {Given,When,And,Then}=require('cucumber');
const expect=require('chai').expect;
const config=require('../../lib/config');

const {setDefaultTimeout}=require('cucumber')

setDefaultTimeout(60*1000);

Given("open the browser", async function() {
  this.browser = await puppeteer.launch({ headless: false });
  this.page = await this.browser.newPage();
});

When("open banking login page", async function() {
  await this.page.goto(config.scenario2BaseUrl);
});

When("Enter username and password", async function() {
  await this.page.type('[name="uid"]',config.username);
  await this.page.type('[name="password"]',config.password);
});

When("Click on login button", async function() {
  await this.page.click('[name="btnLogin"]');
});

Then("user should be redirected to homepage",async function() {
    await this.page.waitForNavigation();
//   console.log(await this.page.title());
    expect(await this.page.title()).to.be.an('string').includes("HomePage");    
});
