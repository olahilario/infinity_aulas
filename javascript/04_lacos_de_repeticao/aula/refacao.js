// 2 - Crie um algoritmo que lê uma lista de palavras e inverte as palavras, sem alterar a ordem da lista original. 
// Ex: lista = ['Mariana', 'Luiz', 'João', 'Amanda']
// output esperado: ['Anairam', 'Ziul', 'Oãoj', 'Adnama']

const lista = ['Brunelle', 'Pedro', 'Cláudio']
const lista_invertida = []

for (nome of lista){
  let invertido = ''
  for (let i = nome.length - 1; i >=0; i-=1){
    if (invertido === ''){
      invertido += nome[i].toUpperCase()
    } else{
      invertido += nome[i].toLowerCase()
    }
  }
  lista_invertida.push(invertido)
}

console.log(lista_invertida)