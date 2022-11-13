// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const OUTROS = 19849.153;

const TOTAL = SP + RJ + MG + ES + OUTROS;

const percentual = (distribuidora, total) => {
  return (distribuidora * 100) / total;
};

const proporcao = percentual(OUTROS, TOTAL);

console.log(`Proporção de ${proporcao.toFixed(2)}% do total`);
