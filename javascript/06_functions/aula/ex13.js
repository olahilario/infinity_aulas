// 13  - Crie uma função que receba como parâmetro uma lista de palavras e uma letra e filtra a lista a partir dessa letra.

function filtrarLista(lista=Array, letra=String){
    listaFiltrada = []
    for (item of lista){
        if (item.includes(letra)){
            listaFiltrada.push(item)
        }
    }
    

    for (item of listaFiltrada){
        console.log(item)
    }
    return listaFiltrada
}

const produtos = [
    "Café",
    "Arroz",
    "Feijão",
    "Azeite de Oliva",
    "Pão",
    "Leite",
    "Queijo",
    "Manteiga",
    "Macarrão",
    "Chocolate"
];

filtrarLista(produtos, 'r')