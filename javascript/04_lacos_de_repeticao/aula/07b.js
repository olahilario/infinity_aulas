let escolha = prompt('Informe sua escolha: pedra, papel ou tesoura?');
let opcoes = ['pedra', 'papel', 'tesoura']

function escolhaComputador(array){
  return array[Math.floor(Math.random()*array.length)]
}
computador = escolhaComputador(opcoes)

escolha_usuario = document.getElementById('escolha');
escolha_usuario.innerHTML = escolha;


if (escolha == computador){
  veredito = 'empatou!'
} else if (computador == 'pedra' && escolha == 'papel' || computador == 'papel' && escolha == 'tesoura' || computador == 'tesoura' && escolha == 'pedra'){
  veredito = 'você ganhou!'
} else{
  veredito = 'você perdeu!'
}

resultado = document.getElementById('resultado')
resultado.innerHTML = `O computador jogou ${computador}. Portanto ${veredito}`