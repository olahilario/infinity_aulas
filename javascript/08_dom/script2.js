// Imprimir o valor textual de cada paragrafo (utilizando getElementByTagName)
// Adicionar um escutador de eventos (addEventListener) em cada um dos parágrafos.
// Capturar o valor do input utilizando getElementsById

let paragrafos = document.getElementsByClassName('item');
let entrada = document.getElementById('inputzinho')
let especial = document.createElement('p')
let corpo = document.getElementById('corpo_paragrafos')
let botao = document.getElementById('btn-add')

especial.classList.add('item')
corpo.appendChild(especial)

for (let paragrafo of paragrafos){
    console.log(paragrafo.innerText)
    paragrafo.addEventListener('click', function(event){
        console.log(event.target.innerText)
        paragrafo.style.color = 'orange';

    })
}
// keyup ou input
entrada.addEventListener('input', function(){
    console.log(entrada.value)
    especial.innerText = entrada.value
    document.body.style.background = 'yellow'

})

botao.addEventListener('click', function(){
    let valor = entrada.value
    especial.innerText = valor
})



// console.log(`O valor de entrada foi ${entrada}`)