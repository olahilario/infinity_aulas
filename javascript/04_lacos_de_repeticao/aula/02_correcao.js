let lista = ['Mariana', 'Luiz', 'João', 'Amanda']
let nova_lista = []

for (let nome of lista){
    let palavra = ''
    for(let i= nome.length - 1; i >= 0; i-=1){
        if(palavra === '')
        palavra = palavra + nome[i].toUpperCase()
        else{
            palavra = palavra + nome[i].toLowerCase()
        }
    }
    nova_lista.push(palavra)
}

console.log(nova_lista)