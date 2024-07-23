// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
// Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados
// 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato.

// Façaça um programa que nos dê:

// 1.salário bruto.
// 2.quanto pagou ao INSS.
// 3.quanto pagou ao sindicato.
// 4. salário liquido
// 5. calcule os descontos e o salário liquido


let valor_hora = 150
let horas_trabalhadas = 100

let salario_bruto = valor_hora * horas_trabalhadas

let imposto_renda = Math.round(salario_bruto * 0.11)
let inss = Math.round(salario_bruto * 0.08)
let sindicato = Math.round(salario_bruto * 0.05)

let salario_liquido = salario_bruto - imposto_renda - inss - sindicato

console.log(`Seu salário bruto é de R$${salario_bruto}. O leão comeu R$${imposto_renda}. O INSS levou ${inss}. E o sindicato ${sindicato}. Seu salário líquido foi de R$${salario_liquido}`)



