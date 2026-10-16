# Testes Automatizados com Playwright - Patrick Ataíde Portfolio

## Objetivo

Projeto de testes funcionais automatizados para o site [https://www.patrickataide.com.br/](https://www.patrickataide.com.br/) utilizando Playwright.

Este repositório faz parte de uma série de projetos de demonstração de ferramentas de teste (Cypress, Playwright, Selenium, Robot Framework e BDD com Cucumber).

## Tecnologias

- [Playwright](https://playwright.dev/)
- JavaScript
- GitHub Actions (CI/CD)

## Plano de Testes

O plano de testes funcionais está disponível em `plano-testes.csv`.

## Como executar localmente

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
npx playwright install
```

### Executar testes

```bash
npx playwright test
npx playwright test --ui
```

## CI/CD

Os testes são executados automaticamente via GitHub Actions.

## Autor

Patrick Ataíde - [patrickataide.com.br](https://www.patrickataide.com.br/)
