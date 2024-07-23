// 1 - Crie um algoritmo que imprima todos os números de 1 até um valor alvo.
// Ex: Se o valor alvo é 10, o programa deve imprimir: 1, 2, 3, 4, 5, 6, 7, 8, 9 e 10;

let contador = 1
for (let i = 15; i > 0 ; i -= 1){ 
    console.log(i - (i - contador))
    contador += 1
}

