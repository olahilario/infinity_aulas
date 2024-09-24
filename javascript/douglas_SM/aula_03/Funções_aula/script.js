const btn = document.getElementById('btn1')

function declaracaoSaudacao (e){
    e.preventDefault()
    const nome = document.getElementById('nome1').value
    const saudacao = document.getElementById('saudacao').value
    const resultado = document.getElementById('resultado')
    resultado.innerText = `${saudacao}, ${nome}!`
}

btn.addEventListener('click', declaracaoSaudacao)

const btn2 = document.getElementById('btn2')


const expressaoSaudacao = function(e){
    e.preventDefault()
    const nome = document.getElementById('nome2').value
    const saudacao = document.getElementById('saudacao2').value
    const resultado = document.getElementById('resultado2')
    resultado.innerText = `${saudacao}, ${nome}!`
}

btn2.addEventListener('click', expressaoSaudacao)


const btn3 = document.getElementById('btn3')

const arrowSaudacao = (e)=> {
    e.preventDefault()
    const nome = document.getElementById('nome3').value
    const saudacao = document.getElementById('saudacao3').value
    const resultado = document.getElementById('resultado3')
    resultado.innerText = `${saudacao}, ${nome}!`
}

btn3.addEventListener('click', arrowSaudacao)

const btn4 = document.getElementById('btn4')

btn4.addEventListener('click', function(e){
    e.preventDefault()
    const nome = document.getElementById('nome4').value
    const saudacao = document.getElementById('saudacao4').value
    const resultado = document.getElementById('resultado4')
    resultado.innerText = `${saudacao}, ${nome}!`

})

const btn5 = document.getElementById('btn5')

function exibeSaudacao(msg){
    const resultado = document.getElementById('resultado5')
    resultado.innerText = msg
    return msg
}

function capturaExibe(e, callback){
    e.preventDefault()
    const nome = document.getElementById('nome5').value
    const saudacao = document.getElementById('saudacao5').value
    const msg = `${saudacao}, ${nome}!`
    callback(msg)
}

btn5.addEventListener('click', (e)=>capturaExibe(e, exibeSaudacao))

