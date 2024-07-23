// Crie um programa que solicita ao usuário um número e, em seguida,
// conta regressivamente até zero, imprimindo cada número no console.
// O programa deve terminar quando atingir zero.


let num_user = prompt('Digite um número');
let num = parseInt(num_user);
let num_span = document.getElementById('number')

num_span.innerHTML = num

while (num >= 0){
  console.log(num);
  num -= 1;
}






