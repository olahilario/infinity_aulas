// Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

notas = [7,8,6,6]
soma = 0
for (nota of notas){
  soma += nota
}

media = soma / notas.length

console.log(`A média das notas foi de ${media}`)