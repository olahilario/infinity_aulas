// 11 - Crie uma função que recebe como parâmetro um nome e imprime no console uma mensagem de boas vindas 

function boasVindas(nome=String){
    let resposta = `Bom dia, ${nome}`
    return resposta
}

boasVindas('Pedro')