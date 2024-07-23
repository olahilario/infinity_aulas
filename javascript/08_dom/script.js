// Imprimir o valor textual de cada paragrafo (utilizando getElementByTagName)
// Adicionar um escutador de eventos (addEventListener) em cada um dos parágrafos.
// Capturar o valor do input utilizando getElementsById

let paragrafos = document.getElementsByClassName('item');
let entrada = document.getElementById('inputzinho')
let especial = document.getElementById('especial')
for (let paragrafo of paragrafos){
    console.log(paragrafo.innerText)
    paragrafo.addEventListener('click', function(event){
        console.log(event.target.innerText)
        paragrafo.style.color = 'orange';

    })
}
entrada.addEventListener('input', function(){
    console.log(entrada.value)
    especial.innerText = entrada.value
    document.body.style.background = 'yellow'

})


// console.log(`O valor de entrada foi ${entrada}`)