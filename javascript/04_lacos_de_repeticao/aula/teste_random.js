

array = ['pedra', 'papel', 'tesoura']

function escolhaComputador(array){
  return array[Math.floor(Math.random()*array.length)]
}

console.log(escolhaComputador(array))