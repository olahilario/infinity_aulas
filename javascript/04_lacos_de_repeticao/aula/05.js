// 5 - Observe as seguintes listas: 
let nomes = ['Bruna', 'Gabriel', 'Marcos', 'Jéssica', 'Fernando']
let sobrenomes = ['Oliveira', 'Santos', 'Marques', 'Castro', 'Silva']
let nomes_completos = []
let nome_completo = ''
//Crie um algirtmo que combine o valor do nome com o sobrenome formando o nome completo.
// O programa deve iterar sobre as listas fornecidas e juntar os valores correspondentes.

for (i=0; i < nomes.length; i += 1){
    nome_completo += `${nomes[i]} ${sobrenomes[i]}`
    nomes_completos.push(nome_completo)
    nome_completo = ''
}

console.log(nomes_completos)