# APS - 20 Casos de Teste no Software de Delivery

Trabalho da disciplina de Teste de Software (UNIFAMETRO) com o Prof. Jonh Sousa.

## Integrante

- Lôhan do Carmo Macedo Soares

## Sobre o trabalho

O DeliveryExpress é um sistema de delivery que precisava de testes automatizados antes de ir pra produção. Recebi 20 casos de teste (CT-01 a CT-20), cada um com seu critério de aceitação no formato DADO / QUANDO / ENTÃO, e a missão foi:

1. Escrever os 20 testes no Jest (`delivery.test.js`)
2. Implementar as 5 funções em `delivery.js` até tudo passar
3. Entregar pelo GitHub

### As funções

| Função | O que faz | Casos |
|---|---|---|
| `autenticar(usuarios, email, senha)` | Retorna `true` só se o e-mail existe, a senha bate e a conta está ativa | CT-01 a CT-04 |
| `forcaSenha(senha)` | Menos de 8 caracteres é `fraca`. Com 8 ou mais: 1 a 2 tipos de caractere é `media`, 3 a 4 tipos é `forte` | CT-05 a CT-08 |
| `podeLogar(usuario)` | Só loga se o status é `ativo` e tem menos de 3 falhas | CT-09 a CT-12 |
| `calcularFrete(distanciaKm)` | Até 3 km custa 5. Depois disso, mais 1,50 por km. Distância menor ou igual a zero dá erro `Distância inválida` | CT-13 a CT-16 |
| `aplicarCupom(valor, cupom)` | Sem cupom, o valor não muda. `PRIMEIRA10` dá 10% e `VIP20` dá 20%. Qualquer outro dá erro `Cupom inválido` | CT-17 a CT-20 |

Os casos de fronteira (CT-10/CT-11 e CT-13/CT-14) estão lá pra pegar erro de `<` trocado por `<=`.

## Como rodar

```bash
npm install
npm test
```

Pra ver a cobertura:

```bash
npx jest --coverage
```

## Resultado da cobertura

```
-------------|---------|----------|---------|---------|-------------------
File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------|---------|----------|---------|---------|-------------------
All files    |     100 |      100 |     100 |     100 |
 delivery.js |     100 |      100 |     100 |     100 |
-------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       20 passed, 20 total
```
