// Faça um programa que leia 20 números inteiros e armazene-os em um vetor. Armazene os números pares no vetor 'PAR'
// e os números ímpares no vetor 'ímpar'. Imprima os três vetores.

numeros = []
pares = []
impares = []
for (n=0; n<=20; n+=1){
  numeros.push(n)
}

for (numero of numeros){
  if (numero === 0){
    pares.push(numero)
  }
  else if (numero % 2 === 0){
    pares.push(numero)
  } else{
    impares.push(numero)
  }
}

console.log(numeros)
console.log(pares)
console.log(impares)
  