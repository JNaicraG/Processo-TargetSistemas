// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

//Popula o vetor com parte da sequência
function popularFibonacci(v, qtd) {
  for (let i = 2; i < qtd; i++) {
    let soma = v[i - 1] + v[i - 2];
    v.push(soma);
  }
}

//Valor a ser verificado
const valor = 144;
const fib = [0, 1];
let quantidade = 200;
popularFibonacci(fib, quantidade);

const filtro = fib.filter((e) => e === valor).pop();

if (filtro === valor)
  console.log(`O número ${valor} pertence a sequência Fibonacci`);
else console.log(`O número ${valor} não pertence a sequência de Fibonacci`);

/*
 * para maior otimização, utilizar i < fib.lenght na busca,
 * com break quando encontrar o valor necessário
 *
 * Ou ainda, invés de popular vetor - dentro do próprio for de geração utilizar somente
 * 0 e 1 iniciais para encontrar próximos números, sem popular vetor (somente trocando os valores de v[0] e v[1],
 * ou armazenando em temps) e utilizar break quando chegar no número desejado ou quando ultrapassar o valor do mesmo
 * (caso não exista na sequência)
 */
function SegundaVersao(valor) {
  const pertence = (v) =>
    console.log(`O número ${v} pertence a sequência de Fibonacci`);
  const naoPertence = (v) =>
    console.log(`O número ${v} não pertence a sequência de Fibonacci`);

  const qtd = 500;
  let temp1 = 1,
    temp2 = 2;

  if (valor === 0 || valor === 1 || valor === 2) pertence(valor);
  else {
    let bool = false;
    for (let i = 2; i < qtd; i++) {
      let soma = temp1 + temp2;
      if (soma === valor) {
        bool = true;
        break;
      }
      temp1 = temp2;
      temp2 = soma;
    }
    if (bool) pertence(valor);
    else naoPertence(valor);
  }
}

console.log("Segunda versão do algoritmo");
SegundaVersao(valor);
