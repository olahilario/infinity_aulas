// 6 - Crie um programa que filtra uma lista de produtos e conta quantas palavras possuem a letra "o"

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
        if (letra == 'o' || letra == 'O'){
            contador += 1
            break
        } 
    }
}

console.log(`Existem ${contador} palavras que têm a letra O`);