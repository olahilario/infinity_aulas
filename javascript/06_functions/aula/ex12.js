// 12 - Crie uma função que recebe como parâmetro uma string e a divide em seus caracteres e imprime os caracteres de forma individual.

function divideCaractere(palavra=String){
    for (letra of palavra){
        console.log(letra)
    }
}

divideCaractere('riachuelo')


function maisTrabalhoso(palavra){
    let dividido = palavra.split('')
    for (letra of dividido)
        console.log(letra)
}