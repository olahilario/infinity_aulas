// Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.
lista = []
for (n=100; n>=90; n-=1){
  lista.push(n)
}

console.log(lista)

i = 1
for (numero of lista){
  console.log(lista[lista.length-i])
  i += 1
}