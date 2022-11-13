// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require("fs");
const faturamentos = JSON.parse(Buffer.from(fs.readFileSync("dados.json")));

const getValor = (f) => f.valor;
const menorValor = (f, fAtual) => (f.valor < fAtual.valor ? f : fAtual);
const menorValorDesconsiderandoFDS = (f, fAtual) =>
  f.valor < fAtual.valor && !fAtual.valor ? f : fAtual;
const maiorValor = (f, fAtual) => (f.valor > fAtual.valor ? f : fAtual);
const maiorQueMedia = (valor, media) => valor > media;

let soma = 0;
faturamentos.map(getValor).forEach((e) => (soma += e));
const media = soma / faturamentos.length;

let v = faturamentos.reduce(menorValor);
console.log(
  `O dia com menor faturamento foi o ${v.dia}º,faturando R$ ${v.valor
    .toFixed(2)
    .replace(".", ",")}`
);

v = faturamentos.reduce(menorValorDesconsiderandoFDS);
console.log(
  `Desconsiderando finais de semana, o dia com menor faturamento foi o ${
    v.dia
  }º,faturando R$ ${v.valor.toFixed(2).replace(".", ",")}`
);

v = faturamentos.reduce(maiorValor);
console.log(
  `O dia com maior faturamento foi o ${v.dia}º, faturando R$ ${v.valor
    .toFixed(2)
    .replace(".", ",")}`
);

//v = faturamentos.map(getValor).filter((e) => e > media);
v = faturamentos.map(getValor).filter((e) => maiorQueMedia(e, media));
console.log(
  `Este mês tiveram ${v.length} dias em que os faturamentos bateram a média mensal`
);
