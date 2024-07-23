//  10:  Crie um algoritmo que ao receber duas listas:
// cliente = ["João", "Daniel", "Larissa", "Mariana", "Julia", "Luana", "Gustavo", "Luiz"]
// produto = ["molho de tomate", "cenoura", "macarrão", "salame", "lâmpada", "água sanitária", "refrigerante", "suco"]
// Imprima os valores no seguinte formato:
// O cliente {cliente} comprou este produto: {produto}

let cliente = ["João", "Daniel", "Larissa", "Mariana", "Julia", "Luana", "Gustavo", "Luiz"]
let produto = ["molho de tomate", "cenoura", "macarrão", "salame", "lâmpada", "água sanitária", "refrigerante", "suco"]

let contador = 0

while (contador < 8){
    console.log(`O cliente ${cliente[contador]} comprou este produto: ${produto[contador]}`)
    contador += 1
}

