// 6 - Observe as seguintes listas:
const clientes = ["João", "Daniel", "Larissa", "Mariana", "Julia", "Luana", "Gustavo", "Luiz"]
const produtos = ["molho de tomate", "cenoura", "macarrão", "salame", "lâmpada", "água sanitária", "refrigerante", "suco"]
// Essas duas listas mostram quem comprou um determinado produto, por exemlpo, "João" comprou "molho de tomate" e assim por  diante.
// Crie um algoritmo que imprima a seguinte mensagem para cada cliente:
// "O cliente {nome do cliente} comprou {produto}"

for (let i = 0; i <= clientes.length - 1; i += 1){
    console.log(`O cliente ${clientes[i]} comprou ${produtos[i]}.`)
}

console.log("***********************************")

for (let i = 1; i <= clientes.length; i += 1){
    console.log(`O cliente ${clientes[i-1]} comprou ${produtos[produtos.length - i]}.`)
}