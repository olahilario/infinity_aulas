// Desenvolva um programa que solicita ao usuário que insira suas
// notas de uma série de disciplinas. O programa deve calcular e
// imprimir a média das notas, o usuário pode continuar adicionando
// notas até decidir parar.

let notas = [10,8,6,6,5];

contador = 0
let soma = 0

while (contador < notas.length){
  soma += notas[contador]
  contador += 1
}

media = soma / notas.length

console.log(`Sua média foi ${media}`)