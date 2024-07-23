// Escreva um programa que solicite um número e verifique se ele é um número primo.

let x = 397
let divisores = []

for (n=1; n<=x; n+=1){
  if (x % n == 0){
    divisores.push(n)
  } else {continue}
}

if (divisores.length == 2){
  console.log(`O número ${x} é primo.`)
} else{console.log(`O número ${x} não é primo.`)}

console.log(divisores)