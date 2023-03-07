var pessoa = {
  nome: 'Rodolpho',
  idade: 28,
}
console.log(pessoa.nome, pessoa.idade)


var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado){
    return this.lados * lado;
  },
  testeFunction(){ //nao precisa mais usar o function para criar a function
    return 5;
  }
}
console.log(quadrado.area(8))
console.log(quadrado.perimetro(7))
console.log(quadrado.testeFunction())


console.log(Math.random()) //funcao propria do javascript
console.log(Math.PI)