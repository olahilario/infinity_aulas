//  9: Crie um algoritmo que ao receber um número calcule a tabuada deste número até 10 e exiba cada uma das multiplicações no terminal
// Ex: numero = 3
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

let numero = 15
contador = 1
while (contador <= 10){
    console.log(`${numero} * ${contador} = ${numero*contador}`)
    contador += 1
}