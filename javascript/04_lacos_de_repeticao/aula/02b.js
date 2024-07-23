// 2 - Crie um algoritmo que lê uma lista de palavras e inverte as palavras, sem alterar a ordem da lista original. 
// Ex: lista = ['Mariana', 'Luiz', 'João', 'Amanda']
// output esperado: ['Anairam', 'Ziul', 'Oãoj', 'Adnama']


let lista = ['Mariana', 'Luiz', 'João', 'Amanda'];
let lista_invertida = [];
let nome_invertido = '';

for (let n=0; n<lista.length; n+=1){

    for (let caractere = 0; lista[n]){
        if (caractere == caractere.toUpperCase()){
            caractere = caractere.toLowerCase()
            nome_invertido += caractere
        }
        else{
            nome_invertido += caractere
        }
        
    }
    lista_invertida.push(lista[n])
}

console.log(lista_invertida)