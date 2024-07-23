// 15 - Crie uma função que realiza a soma entre dois valores recebidos como parâmetros.

function soma(arg1=Number, arg2=Number){
    resultado = arg1 + arg2
    mensagem = `${arg1} + ${arg2} = ${resultado}`
    return mensagem
}

console.log(soma(18,27))