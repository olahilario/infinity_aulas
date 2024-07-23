// 4 - Crie um programa que filtra uma lista de produtos e conta quantas palavras possuem a letra "a"

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
// let contador = 0
// for (produto of produtos){
//     for (letra of produto){
//         if (letra == 'a' || letra == 'A'){
//             contador += 1
//             break
//         } 
//     }
// }

// console.log(`Existem ${contador} palavras que têm a letra A!`)

function procurarLetra(lista, letra){
    contador = 0
    for(let item of lista){
        if (item.includes(letra)){
            contador += 1
        }
    }
console.log(`Existem ${contador} palavras que têm a letra A!`)
}



procurarLetra(produtos, 'e')


