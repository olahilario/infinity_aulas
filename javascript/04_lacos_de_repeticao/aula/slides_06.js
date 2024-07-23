// Escreva uma programa que irá receber um texto e mostrará no console se esse texto é um palíndromo ou não.
// (palíndromos são palavras que são lidas da mesma forma de trás pra frente) Ex:arara

let palavra = 'AniLina'
let invertida = ''
n = 1
for (letra of palavra){
  invertida += palavra[palavra.length - n]
  n+=1
}

if (palavra.toLowerCase() == invertida.toLowerCase()){
  console.log(`A palavra ${palavra} é palídromo`)
} else{console.log(`A palavra ${palavra} não é palíndromo.`)}