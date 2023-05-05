function soma(a, b) {
  return a + b;
}

let valors = soma(5, 5);

console.log(valors);

function multiplicacao(a, b) {
  return a * b;
}

let valorm = multiplicacao(5, 5);

console.log(valorm);

function divisao(a, b) {
  return a / b;
}
let valord = divisao(15, 2);

console.log(valord);

function subtracao(a, b) {
  return a - b;
}
let valorsub = subtracao(10, 5);

console.log(valorsub);

function modulo(a, b) {
  return a % b;
}

let valormod = modulo(8, 3);

console.log(valormod);

function max(a, b) {
  return Math.max(a, b);
}

let valormax = (10, 20);

console.log(valormax);

function strConcat(a, b) {
  return (a + " " + b);
}

let resultadoconcat = strConcat("Hello", "World");

console.log(resultadoconcat);

function retornaNumero(numero) {
  if(numero > 10){
    return 'Maior que 10'
  }else if(numero < 10){
    return 'Menor que 10'
  }else {
    return 'Igual a 10'
  }
}

let numero = retornaNumero(19);

console.log(numero);

function ehPositivo(num) {
  if(num > 0){
    return true
  }else {
    return false
  }
}

let num = ehPositivo(-5);

console.log(num);

module.exports = 
{ 
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};
