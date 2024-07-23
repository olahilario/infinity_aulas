pedra = document.getElementById('pedra').value
tesoura = document.getElementById('tesoura').value
papel = document.getElementById('papel').value
botao_jogo = document.getElementById('botao')

campo_maquina = document.getElementById('maquina')
campo_jogador = document.getElementById('jogador')
campo_resultado = document.getElementById('resultado')

function escolha(arg1){
  escolha_jogador = arg1
}

function jogar(){
  if (!escolha){
    alert('Escolha uma opção');
    return;
  }
  campo_jogador.innerText = `Você escolheu ${escolha_jogador}`
}