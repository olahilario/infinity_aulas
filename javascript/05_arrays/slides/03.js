// Utilizando listas, faça um programa que realize 5 perguntas para uma pessoa sobre um crime, ela deve responder com prompt S - Sim e N - Não.
// As perguntas são:
// 1 - "Telefonou para a vítima?"
// 2 - "Esteve no local do crime?"
// 3 - "Mora perto da vítima?"
// 4 - "Devia para a vítima?"
// 5 - "Já trabalhou com a vítima?"
// Ao final, o programa deve emitir uma classificação sobre a participação da pessoa no crime.
// Se a pessoa responder positivamente a 2 questões, ela deve ser classificada como "Suspeita";
// entre 3 e 4 respostas positivas como "Cúmplice"; e se responder positivamente a 5 questões, deve ser classificada como "Assassino".
// Caso contrário, será classificada como "Inocente".

resultado = document.getElementById("resultado")
respostas = []
positivas = []
alert("Responda com: S - Sim ou N - Não")
let resposta1 = prompt("Telefonou para a vítima?").toUpperCase();
let resposta2 = prompt("Esteve no local do crime?").toUpperCase();
let resposta3 = prompt("Mora perto da vítima?").toUpperCase();
let resposta4 = prompt("Devia para a vítima?").toUpperCase();
let resposta5 = prompt("Já trabalhou com a vítima?").toUpperCase();

respostas.push(resposta1, resposta2, resposta3, resposta4, resposta5);

for (let i = 0; i<respostas.length; i+=1){
  if(respostas[i] === "S"){
    positivas.push(respostas[i])
  }
}


if (positivas.length < 2){
  resultado.innerHTML = "Inocente"
}
else if (positivas.length == 2){
  resultado.innerHTML = "Suspeita"
}
else if (positivas.length >=3 && positivas.length !== 5){
  resultado.innerHTML = "Cúmplice"
}
else if (positivas.length == 5){
  resultado.innerHTML = "Assassino"
}
else{
  resultado.innerHTML = "Erro"
}