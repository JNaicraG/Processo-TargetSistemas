//
// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const separaString = (s) => s.split("");

//String a ser invertida
let frase = "String para exercício 5 do teste!";

const stringSeparada = separaString(frase);

frase = "";
for (let i = stringSeparada.length - 1; i >= 0; i--) {
  frase += stringSeparada.pop();
}

console.log(frase);
