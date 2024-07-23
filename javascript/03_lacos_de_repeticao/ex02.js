//  2: Dada a seguinte lista:
//  animais = ["foca", "golfinho", "leão", "tartaruga"]
//  Crie um algoritmo que imprima o primero e o último item da lista.

let animais = ["foca", "golfinho", "leão", "tartaruga"];

let controle = 0

while (controle < animais.length){
    if (animais[0] === animais[controle] || animais[animais.length -1] === animais[controle])
        console.log(animais[controle])
    controle += 1
}



