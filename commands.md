# Comandos Essenciais - Playwright + Cucumber

## Instalação completa

```bash
npm install
npx playwright install --with-deps
```

## Rodar todos os testes Playwright

```bash
npx playwright test
```

## Rodar todos os testes BDD (Cucumber)

```bash
npm run test:bdd
```

## Rodar somente um arquivo de teste Playwright

```bash
npx playwright test tests/portfolio.spec.js
```

## Rodar somente um arquivo .feature (Cucumber)

```bash
npx cucumber-js features/portfolio.feature
```

## Rodar somente um cenário (pelo nome)

```bash
npx cucumber-js features/portfolio.feature --name "FT-001"
```

## Rodar em modo UI

```bash
npx playwright test --ui
```

## Limpar e reinstalar

```bash
rm -rf node_modules package-lock.json
npm install
npx playwright install
```
