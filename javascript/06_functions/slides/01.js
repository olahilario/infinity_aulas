// Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário.
// Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).

function contaVogais(arg1){
  contador = 0
  for (letra of arg1.toLowerCase()){
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u')
      contador += 1
  }
  console.log(`A palavra ${arg1} tem ${contador} vogais.`)
  return contador
}


contaVogais('riachuelo')