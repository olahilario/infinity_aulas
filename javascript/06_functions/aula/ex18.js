// 18 - Crie um programa que realiza a divisão entre dois valores recebidos como parâmetros.

function divisao(arg1=Number, arg2=Number){
    if (arg2 !==0){
        resultado = arg1 / arg2
        mensagem = `${arg1} / ${arg2} = ${resultado.toFixed()}`
        return mensagem
    }
    else{console.log(`Não existe divisão por zero!`)}

}

console.log(divisao(12,6))