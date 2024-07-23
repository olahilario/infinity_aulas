repo exercicios/aulas: https://github.com/thiagooshiro/js-classes

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Documento HTML</title>
</head>
<body>
    <p class="item">Este é o primeiro parágrafo.</p>
    <p class="item">Este é o segundo parágrafo.</p>
    <p class="item">Este é o terceiro parágrafo.</p>
     <p id="especial"></p>
    <input type="text" id="inputzinho" placeholder="Escreva algo">0
   <button id="btn-add">Click</button>
    
<script src="script.js"/>
</body>
</html>


// Imprimir o valor textual de cada paragrafo (utilizando getElementsByTagName)
SCRIPT.JS

let inputEscrever = document.getElementById('inputzinho')
let paragraphList = document.getElementsByTagName('p')

for (let i = 0; i < paragraphList.length; i+= 1){
    console.log(paragraphList[i].innerText)
}

for (let p of paragraphList){
    console.log(p.innerText)
}


// Adicionar um escutador de eventos (addEventListener) em cada um dos parágrafos.

// Quando um paragrafo for clicado , a cor dele deve ser alterada para uma cor a sua escolha.

for (let p of paragraphList){
    p.addEventListener()
}


//Capturar o valor do input utilizando getElementById 
// Quando um usuario digitar algo no input esse valor deve ser replicado no paragrafo "especial"


// Utilizar o botão "btn-add" para adicionar o texto do input no paragrafo "especial"


button.addEventListener('click', function(){
   let valor = inputEscrever.value
   especial.innerText = valor
})