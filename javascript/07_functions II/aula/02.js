function saudacao(nome){
  alert(`Olá, ${nome}!`)
}

function chamadaCallBack(callback){
  let nome = prompt(`Por favor insira seu nome.`)
  callback = nome
}

chamadaCallBack(saudacao)