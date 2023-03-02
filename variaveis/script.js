var nome = 'Rodolpho';
var idade = 28;
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade)

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(preco,totalComprado,totalPreco)

var sobrenome = "Rafael", cidade = "Rio de Janeiro", idade2 = 43;
console.log(sobrenome, cidade, idade2)

var semDefinir;
console.log(semDefinir)

var time = 'Corinthians'
console.log(time)
time = 'Corinthians2'
console.log(time)

let time2 = 'CorinthiansLet'
console.log(time2)
time2 = 'CorinthiansLet2'
console.log(time2)

const senhaUsuario = 'abcd12345678'
console.log(senhaUsuario)
// senhaUsuario = 'mudei'
// console.log(senhaUsuario)

//TIPOS DE DADOS
var nomeTeste = 'Rodolpho';
let numTeste = 88;
console.log(typeof nomeTeste, nomeTeste, typeof numTeste, numTeste)

//soma de variaveis
var gols = 1000;
var jogador = 'Romario';
var frase = 'O jogador ' + jogador + ' fez ' + gols + ' em sua carreira '
console.log(frase) 

//template string
var frase2 = `Romario fez ${gols} gols`
console.log(frase2)
var frase2 = `Romario fez ${gols * 2} gols` //multiplicando a stirng do template
console.log(frase2)

//como mostrar caractere com funcao no codigo
var fraseTeste = 'Esse e o \"melhor\" jogo do mundo';
console.log(fraseTeste)

//e possivel por a string direto no console.log sem declarar antes como variavel
console.log('teste de impressao direta no console')

