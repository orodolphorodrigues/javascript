var possuiGraduacao = true;
var possuiDoutorado = false;


if(possuiDoutorado){
  console.log('O usuario possui doutorado');
}
  else if(possuiGraduacao){
    console.log('O usuario possui graduacao')
  }
    else{
      console.log('O usuario nao possui graduacao')
    }

    var corFavorita = 'Preto';
    
    switch (corFavorita){
      case 'Vermelho':
        console.log('Vermelho');
        break;

        case 'Amarelo':
          console.log('Amarelo');
          break;

          case 'Azul':
            console.log('Azul');
            break;

            default:
              console.log('Parabens')
    }


