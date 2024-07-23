// 14 - Crie um programa que conta quantas vogais possui uma palavra.

// function contaVogais(palavra){
//     contador = 0
//     for (letra of palavra.toLowerCase()){
//         if (letra=='a'|| letra=='e'||letra=='i'||letra=='o'||letra=='u')
//             contador +=1
//     }
// texto = `A palavra ${palavra} tem ${contador} vogais.`
// return texto
// }

// console.log(contaVogais('riachuelo'))

let palavra = 'Qualquer'


function contarVogais(palavra){
    let contador = 0
    let vogais = ['a', 'e', 'i', 'o', 'u']
    for (letra of palavra){
        if (vogais.includes(letra)){
            contador +=1
        }
    }
    return contador 
}

console.log(contarVogais('riachuelo'))