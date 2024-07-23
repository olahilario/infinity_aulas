// 17 - Crie um programa que realiza a multiplicação entre dois valores recebidos como parâmetros.


function multiplica(arg1=Number, arg2=Number){
    resultado = arg1 * arg2
    mensagem = `${arg1} x ${arg2} = ${resultado}`
    return mensagem
}

console.log(multiplica(18,27))