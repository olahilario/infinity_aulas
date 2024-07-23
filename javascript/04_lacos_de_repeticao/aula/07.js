// 7 - Desafio - Jogo de Pedra Papel Tesoura:
// O usuário deve poder escolher entre 3 opções: "pedra", "papel" ou "tesoura"
// A máquina deve escolher aleatoriamente entre as opções "pedra", "papel" ou "tesoura"
// O algoritmo deve fazer a comparação para descobrir quem foi o vencedor da partida.
// Lembrando:
// Pedra vence tesoura;
// Tesoura vence papel;
// Papel vence pedra;

function captura(){
  let radios = document.getElementsByName('jogada');
  for (let i=0; i<radios.length; i +=1){
    if (radios[i].checked){
      return radios[i].value;
    }
  }
  
  let escolha = document.getElementsByName('jogada').value
  document.getElementById("escolha_usuario").innerHTML = captura()
  }