var idade = 2e10;

console.log(idade);

var soma = 100 + 50;
console.log('soma de 100 + 50 =',soma);
var substracao = 100 - 50;
console.log('substracao de 100 - 50 =',substracao);
var multiplicacao = 100 * 2;
console.log('multiplicacao 100 * 2 =',multiplicacao);
var divisao = 100 / 2;
console.log('divisao de 100 / 2 =',divisao);
var expoente = 2 ** 4; //2*2*2*2
console.log('expoente de 2 ** 4 =',expoente);
var modulo = 14 % 5; //resto da divisao
console.log('modulo de 14 % 5 =',modulo) ;


var somaString = '100' + 50
console.log('Soma de string e numero',somaString);

var subtracaoString = '100' - 50;
console.log('Subtracao de string e numero', subtracaoString)

var multiplicacaoString = '100' * 3;
console.log('Multiplicacao de string e numero', multiplicacaoString)

var divisaoString = '100' / 5;
console.log('Divisao de string e numero', divisaoString)

var testeNan = 'aqui tem 100' + 10;
console.log(testeNan)

// Qual o resultado da seguinte expressão?
var totalEx = 10 + 5 * 2 / 2 + 20;
console.log(totalEx)

// Crie duas expressões que retornem NaN
var nunReturn = '115';
var unidade = 'kg'
var peso = nunReturn + unidade;
console.log(peso)
var nanReturn = peso / 2;
console.log(nanReturn)

// Somar a string '200' com o número 50 e retornar 250
var num1 = '200'
var num2 = 50
var somaNum = parseInt(num1) + num2;
console.log(somaNum)
// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x)
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
//var pesoPorDois = peso / 2; // NaN (Not a Number)

var pesoPorDois = parseInt(numero) / 2 + unidade;
console.log(pesoPorDois)
