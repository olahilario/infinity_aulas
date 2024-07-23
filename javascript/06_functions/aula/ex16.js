// 16 - Crie uma função que realiza a subtração entre dois valores recebidos como parâmetros.

function subtracao(arg1=Number, arg2=Number){
    resultado = arg1 - arg2
    mensagem = `${arg1} - ${arg2} = ${resultado}`
    return mensagem
}

console.log(subtracao(18,27))