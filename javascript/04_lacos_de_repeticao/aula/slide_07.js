// Escreva um programa que irá solicitar ao usuário uma palavra e conte o número de vogais presentes.

let palavra = 'riachuelo'.toLowerCase()
let contador = 0
for (letra of palavra){
  if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
    contador += 1}
}

console.log(`A palavra ${palavra} tem ${contador} vogais.`)
