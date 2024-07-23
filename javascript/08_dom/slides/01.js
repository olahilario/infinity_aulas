let entrada = document.getElementById('input');
let botao = document.getElementById('button')


function getValue(){
  botao.addEventListener('click', function(){
    console.log(entrada.value)
    let teste = document.getElementById('paragrafo')
    if (!teste){
      let paragrafo = document.createElement('p')
      document.body.appendChild(paragrafo)
      paragrafo.id = 'paragrafo'
      document.getElementById('paragrafo').innerText = entrada.value
    }
    else{
      document.getElementById('paragrafo').innerText = entrada.value
    }
  })
}

getValue()