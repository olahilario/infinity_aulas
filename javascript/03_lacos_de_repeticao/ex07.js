//  7: Crie um algoritmo que ao receber uma lista imprima todos os itens que contenham uma letra determinada por você.

let lista = ['alface', 'tomate', 'manga', 'melancia']


let letra = 'g'
let contador_lista = 0
let contador_letra = 0

while (contador_lista < lista.length){
    while (contador_letra < lista[contador_lista].length){
        if (lista[contador_lista][contador_letra] !== letra){
            contador_letra += 1
            continue
        }else{
            console.log(lista[contador_lista])
            break
        }
    }
    contador_lista += 1
    contador_letra = 0
}