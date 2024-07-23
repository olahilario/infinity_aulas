// [JS-A02] Escreva um programa em JavaScript que solicite ao usuário o nome, altura em centímetros e peso de uma pessoa.

// O programa deve calcular o índice de massa corporal (IMC) dessa pessoa, considerando a fórmula

// IMC = peso / (altura * altura), onde a altura deve ser convertida de centímetros para metros.

// Em seguida, o programa deve classificar o peso com base no IMC calculado, de acordo com a tabela a seguir:

// Menor que 16: Baixo peso muito grave
// De 16 a 16.99: Baixo peso grave
// De 17 a 18.49: Baixo peso
// De 18.50 a 24.99: Peso normal
// De 25 a 29.99: Sobrepeso
// De 30 a 34.99: Obesidade grau I
// De 35 a 39.99: Obesidade grau II
// Maior ou igual a 40: Obesidade grau III

// O programa deve exibir o nome da pessoa, o índice de massa corporal calculado e a classificação correspondente.

let nome_usuario = prompt('Informe o seu nome.')
let altura_usuario = prompt('Informe sua altura em centímetros.')
let peso_usuario = prompt('Informe seu peso, em quilogramas')

let altura_metros = parseFloat(altura_usuario) / 100
let peso = parseFloat(peso_usuario)
let imc = peso / (altura_metros ** 2)
let imc_string = imc.toFixed(2)

if (imc < 16){
    msg = 'Baixo peso. Muito grave.'
}
else if (16 <= imc && imc < 17){
    msg = 'Baixo peso. Grave.'
}
else if (17 <= imc && imc < 18.5){
    msg = 'Baixo peso.'
}
else if (18.5 <= imc && imc < 25){
    msg = 'Peso normal.'
}
else if (25 <= imc && imc < 30){
    msg = 'Sobrepeso'
}
else if (30 <= imc && imc < 35){
    msg = 'Obesidade grau I'
}
else if (35 <= imc && imc < 40){
    msg = 'Obesidade grau II'
}
else if (imc >= 40){
    msg = 'Obesidade grau III'
}
else{
    msg = 'Erro no código'
};


let nome = document.getElementById('nome');
nome.innerHTML = nome_usuario;
indice = document.getElementById('imc');
indice.innerHTML = imc_string;

let diagnostico = document.getElementById('diagnostico');
diagnostico.innerHTML = msg


console.log(`Olá, ${nome_usuario}! Seu IMC é de ${imc_string}. E sua classificação é: ${msg}`);

