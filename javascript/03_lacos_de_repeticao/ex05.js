//  5: Dada a seguinte lista:
//  produtos = ["aveia", "maçã", "uva", "abóbora", "leite", "pão", "sabonete", "desodorante", "amaciante", "chuveiro"]
//  Crie um algoritmo que ao receber essa lista imprima os itens que iniciam com a letra "a"

let produtos = ["aveia", "maçã", "uva", "abóbora", "leite", "pão", "sabonete", "desodorante", "amaciante", "chuveiro"];

let contador = 0;


while (contador < produtos.length){
    if (produtos[contador][0] == 'a'){
        console.log(produtos[contador])
    }
    contador += 1
}

