// 2 - Crie um algoritmo que lê uma lista de palavras e inverte as palavras, sem alterar a ordem da lista original. 
// Ex: lista = ['Mariana', 'Luiz', 'João', 'Amanda']
// output esperado: ['Anairam', 'Ziul', 'Oãoj', 'Adnama']


let lista = ['Mariana', 'Luiz', 'João', 'Amanda']
let lista_inv = []

let palavra = 'Mariana'
let palavra_invertida = ''
let contador_caractere = 1

for (palavra of lista){
    for (caractere of palavra){
        palavra_invertida += palavra[palavra.length - contador_caractere]
        contador_caractere += 1
    }
    lista_inv.push(palavra_invertida)
    palavra_invertida = ''
    contador_caractere = 1
}


console.log(lista_inv)
