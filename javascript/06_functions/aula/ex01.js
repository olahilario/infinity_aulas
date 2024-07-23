// 1 - Crie um programa que calcula o somatório do número 6
let ref = 6
let soma = 0
for (let i = 1; i <= ref; i+=1){
    soma += i
}
// console.log(soma)

function somaNumeros(ref=Number){
    let soma = 0
    for (let i = 1; i <= ref; i+=1){
        soma += i
    }
    console.log(soma)
}

somaNumeros(12)