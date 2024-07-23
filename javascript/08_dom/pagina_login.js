// CRIAR UMA PÁGINA DE LOGIN COM DOIS INPUTS (EMAIL E SENHA) E UM BOTÃO "LOGIN"
// CRIAR UM ARQUIVO JS , DEFINIR QUAIS É A SENHA E O EMAIL CORRETO.
// QUANDO O BOTÃO LOGIN FOR CLICADO A SENHA E O EMAIL DEVEM SER CHECADOS
// CASO INCORRETOS UMA MESNSAGEM DE ERRO DEVE SER EXIBIDA ABAIXO DO INPUT
// CASO BEM SUCEDIDO UMA MENSAGEM DE SUCESSO DEVE SER EXIBIDA ABAIXO DO INPUT.

let email_user = document.getElementById('email')
let password_user = document.getElementById('password')
let botao = document.getElementById('botao')

let email_correto = 'email@email.com'
let password_correto = 'password'

botao.addEventListener('click', function(){
  if(email_user.value === email_correto && password_user.value === password_correto){
    document.getElementById('mensagem').textContent = 'Login realizado com sucesso!'
  }
  else if(!email_user.value || !password_user.value){
    document.getElementById('mensagem').textContent = 'Preencha todos os campos!'
  }
  else{
    document.getElementById('mensagem').textContent = 'Dados incorretos!'
  }
})



