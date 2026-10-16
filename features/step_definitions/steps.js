const { Given, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let page;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});

After(async function () {
  await browser.close();
});

Given('que acesso o site', async function () {
  await page.goto('https://www.patrickataide.com.br');
});

Then('o título deve conter {string}', async function (title) {
  const pageTitle = await page.title();
  if (!pageTitle.includes(title)) {
    throw new Error(`Título esperado conter '${title}', mas foi '${pageTitle}'`);
  }
});

Then('deve exibir as tecnologias Playwright e Cypress', async function () {
  const content = await page.content();
  if (!content.includes('Playwright') || !content.includes('Cypress')) {
    throw new Error('Tecnologias não encontradas');
  }
});

Then('o e-mail de contato deve estar visível', async function () {
  const content = await page.content();
  if (!content.includes('patrickataide.ti@gmail.com')) {
    throw new Error('E-mail não encontrado');
  }
});
