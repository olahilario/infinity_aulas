//  4: Crie um algoritmo que lê uma lista contendo as notas bimestrais de um estudante e imprime 
//  a média das notas desse estudante.

let notas = [6, 8, 6, 7];

let contador = 0;
let soma = 0;
while (contador < notas.length){
    soma += notas[contador]
    contador += 1
};

let media = soma/notas.length;

console.log(`A média foi de ${media}`);