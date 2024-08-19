const msg_saque = document.getElementById('erro_saque')
const msg_saldo = document.getElementById('msg_saldo')
const msg_deposito = document.getElementById('msg_deposito')

// const saldo_btn = document.getElementById('saldo_btn')
// saldo_btn.addEventListener('click', showSaldo)

// const botao_saque = document.getElementById('botao_saque')
// botao_saque.addEventListener('click', saque)

// const botao_deposito = document.getElementById('deposito_btn')
// botao_deposito.addEventListener('click', depositar)


function setSaldo(){
  if (!sessionStorage.getItem('saldo')){
    let saldo = 1000;
    sessionStorage.setItem('saldo', saldo)
  }
  else{
    let saldo = sessionStorage.getItem('saldo')
  }

}

function saque() {
  setSaldo()
  try{
    let saldo = parseFloat(sessionStorage.getItem('saldo'))
    let valor = document.getElementById('saque').value
    valor.replace(',', '.')
    valor = parseFloat(valor)
    if (!valor){
      throw new Error("Digite o valor!")
    }
    else{
      try{
        if (typeof(valor) === 'number' && (!isNaN(valor))){
          try{
            const resultado = saldo - valor
            if (resultado < 0){
              document.getElementById('saque').value = ''
              msg_saque.innerText = `Você não tem saldo suficiente! Saldo atual: ${sessionStorage.getItem('saldo')}`
              throw new Error("Saldo insuficiente!")
            }
            else{
              sessionStorage.setItem('saldo', resultado)
              console.log(typeof(valor))
              document.getElementById('saque').value = ''
              msg_saque.innerText = `Você logrou êxito! Saldo atual: ${sessionStorage.getItem('saldo')}`
            }
            }
          catch(error){
            console.log(error.message)
          }
          }
        else{
          throw new Error("Você precisa digitar números!")
        }
      }
      catch(error){
        console.log(error)
        msg_saque.innerText = error
      } 
    }
  }
  catch(error){
    console.log(error.message)
    msg_saque.innerText = error
  }
}

function showSaldo(){
  setSaldo()
  let saldo = parseFloat(sessionStorage.getItem('saldo'))
  msg_saldo.textContent = `Seu saldo é: R$${saldo}`
}

function depositar (){
  try{
    let saldo = parseFloat(sessionStorage.getItem('saldo'))
    let valor = document.getElementById('deposito').value
    valor.replace(',', '.')
    valor = parseFloat(valor)
    if(!valor){
      throw new Error("Digite um valor!")
    }
    else{
      try{
        if(typeof(valor) === 'number' && (!isNaN(valor))){
          const resultado = saldo + valor
          sessionStorage.setItem('saldo', resultado)
          saldo = resultado
          document.getElementById('deposito').value = ''
          msg_deposito.innerText = `Depositado com sucesso! Saldo restante: ${sessionStorage.getItem('saldo')} `
        }
      }
      catch(error){
        console.log("Digite apenas números e .")
        msg_deposito.innerText = error.message
      }
    }
  }
  catch(error){
    console.log(error)
    msg_deposito.innerText = error.message

  }
}



