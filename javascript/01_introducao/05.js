// Crie um programa que solicite ao usuário que insira um valor em dólares
// usando o prompt. Em seguida, converta esse valor para euros (1 dólar =
// 0,85 euros) e exiba o resultado no console.

let valor_dolar = 200
const cotacao = 0.85

let valor_euro = valor_dolar * cotacao

console.log(`${valor_dolar} dólares equivalem a ${valor_euro} euros.`)
