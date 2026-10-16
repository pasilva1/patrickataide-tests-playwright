# Testes Automatizados com Playwright + Cucumber/Gherkin - Patrick Ataíde Portfolio

## Objetivo

Projeto de testes funcionais automatizados (incluindo BDD com Gherkin) para o site [https://www.patrickataide.com.br/](https://www.patrickataide.com.br/) utilizando Playwright + Cucumber.js.

## Tecnologias

- [Playwright](https://playwright.dev/)
- [@cucumber/cucumber](https://cucumber.io/) (BDD/Gherkin)
- JavaScript
- GitHub Actions (CI/CD)

## Plano de Testes

O plano de testes funcionais está disponível em `plano-testes.csv`.
Arquivos Gherkin: `features/*.feature`

## Como executar localmente

```bash
npm install
npx playwright install
npx playwright test          # testes Playwright
npm run test:bdd             # testes Cucumber/Gherkin
```

## CI/CD

Os testes (incluindo BDD) são executados automaticamente via GitHub Actions.

## Autor

Patrick Ataíde - [patrickataide.com.br](https://www.patrickataide.com.br/)
