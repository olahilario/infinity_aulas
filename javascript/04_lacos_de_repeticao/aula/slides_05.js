// Escreva um programa que irá solicitar ao usuário uma palavra e que imprimirá no console a palavra sem vogais.

let palavra = 'ALMOFADA'.toLowerCase()
let nova_palavra = ''

for (letra of palavra){
  if (letra != 'a' && letra != 'e' && letra !='i' && letra != 'o' && letra != 'u'){
    nova_palavra += letra}
}
console.log(nova_palavra)