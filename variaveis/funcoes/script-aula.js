

function areaQuadrado(lado){
  return lado * lado;
}
console.log(areaQuadrado(8));


function pi(){
  return 3.14;
}
var total = 5 * pi();
console.log(total);
console.log(pi());


function imc(peso, altura){
  var imc = peso / (altura * altura)
  return imc
}
console.log(imc(115, 1.8))

function corFavorita(cor){
  if(cor === 'azul'){
  return 'Gosto da cor azul';
  } else if(cor === 'verde'){
  return 'Gosto da cor verde';
  } else if(cor === 'vermelho'){
    return 'Voce e SAFADO';
  } else {
    return 'Eu nao gosto de cores'
  }
}


addEventListener('click', function(){
  console.log('Clicou')
})


function clickConsole(){
  console.log('Clickou aqui ok')
}
addEventListener('click', clickConsole);


function terceiraIdade(idade){
  console.log(typeof idade);
  if(typeof idade !== 'number'){
    return 'Por favor, preenche com um numero'
}
 else if(idade >= 60){
    console.log('Ta velho')
    return true;
  } else {
    console.log('Ta novo')
    return false;
  }
}
console.log(terceiraIdade(300));


function faltaVisitar(paisesVisitados){
  var totalPaises = 193;

  console.log(`Falta visitar um total de ${totalPaises - paisesVisitados} paises`)

  return `Falta visitar um total de ${parseInt(totalPaises) - parseInt(paisesVisitados)} paises`
}
faltaVisitar(140);



var profissao = 'Designer';
function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); 