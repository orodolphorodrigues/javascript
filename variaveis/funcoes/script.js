// Crie uma função para verificar se um valor é Truthy
function verificarTruthy(valor){
  return !!valor;
  }
console.log(verificarTruthy(null));

  // Crie uma função matemática que retorne o perímetro de um quadrado
  // lembrando: perímetro é a soma dos quatro lados do quadrado
  function perimetroQuadrado(lado){
      return lado * 4;
  }
  console.log(perimetroQuadrado(5))

    // Crie uma função que retorne o seu nome completo
    // ela deve possuir os parâmetros: nome e sobrenome
    function nomeCompleto(nome, sobrenome){
      return `${nome} ${sobrenome}`;
    }
    console.log(nomeCompleto('Rodolpho', 'Rodrigues'))


      // Crie uma função que verifica se um número é par
      function numPar(num){
        if((num % 2) === 0){
          return  `${num} e um numero par`;
        } else{
          return  `${num} e um numero impar`;
        }
      }
      console.log(numPar(5))


        // Crie uma função que retorne o tipo de
        // dado do argumento passado nela (typeof)
        function tipoDado(dado){
          return typeof dado;
        }
        console.log(tipoDado(10))

          // addEventListener é uma função nativa do JavaScript
          // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
          // utilize essa função para mostrar no console o seu nome completo
          // quando o evento 'scroll' ocorrer.

          addEventListener('scroll', function (){
            console.log('Rodolpho Rodrigues')
          })



// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20))
