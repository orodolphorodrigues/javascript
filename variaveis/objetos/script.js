// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoal ={
  nome: 'Rodolpho',
  sobrenome: 'Rodrigues',
  idade: 29,
}
console.log(dadosPessoal)

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoal.nomeCompleto = `${dadosPessoal.nome}  ${dadosPessoal.sobrenome}`;
console.log(dadosPessoal.nomeCompleto, ', realizando pela variavel')

dadosPessoal.nomeInteiro = function (){
  return `${this.nome} ${this.sobrenome}`;
}
console.log(dadosPessoal.nomeInteiro(), ', realizando pela funcao')

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
console.log(carro)
carro.preco = 3000;
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if (pessoa === 'homem'){
      return 'Latir'
    } else {
      return 'Nada'
    }
  }
}
console.log(cachorro)
console.log(cachorro.latir('homem'))
console.log(cachorro.latir('mulher'))
