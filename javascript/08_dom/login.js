// CRIAR UMA PÁGINA DE LOGIN COM DOIS INPUTS (EMAIL E SENHA) E UM BOTÃO "LOGIN"
// CRIAR UM ARQUIVO JS , DEFINIR QUAIS É A SENHA E O EMAIL CORRETO.
// QUANDO O BOTÃO LOGIN FOR CLICADO A SENHA E O EMAIL DEVEM SER CHECADOS
// CASO INCORRETOS UMA MESNSAGEM DE ERRO DEVE SER EXIBIDA ABAIXO DO INPUT
// CASO BEM SUCEDIDO UMA MENSAGEM DE SUCESSO DEVE SER EXIBIDA ABAIXO DO INPUT.

function addH1(){
  let h1 = document.createElement('h1')
  document.body.appendChild(h1)
  h1.textContent = 'PÁGINA DE LOGIN'
}

function addInputs(){
  let emailLabel = document.createElement('label')
  let inputEmail = document.createElement('input')
  let passwordLabel = document.createElement('label')
  let inputPassword = document.createElement('input')
  let button = document.createElement('button')
  inputEmail.type = 'email'
  inputPassword.type = 'password'
  button.textContent = 'Fazer login'
  emailLabel.textContent = 'Email: '
  passwordLabel.textContent = 'Senha: '
  document.body.append(emailLabel, inputEmail, passwordLabel, inputPassword, button)

}






addH1()
addInputs()

