let selecao = document.querySelectorAll(".item")

selecao.forEach(item => console.log(item.textContent))


function trocaTexto(){
  selecao.forEach(item => item.textContent = "Texto trocado! =)")
}

trocaTexto()