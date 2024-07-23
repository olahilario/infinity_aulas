// 5 - Crie um programa que filtra uma lista de produtos e conta quantas palavras possuem a letra "e"

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

let contador = 0
for (produto of produtos){
    for (letra of produto){
        if (letra == 'e' || letra == 'E'){
            contador += 1
            break
        } 
    }
}

console.log(`Existem ${contador} palavras que têm a letra E!`)