//Requisito 1: Verificação de login e a senha.
//Defina qual ou quais são as senhas e emails corretos 
//Caso o usuario acerte a senha exiba a mensagem "Login bem sucedido"
//Caso a senha esteja incorreta exiba a mensagem "Senha incorreta, tente novamente"

let senha = '12345'
let email = 'email@email.com'
let mensagem

let botao_login = document.getElementById('botaologin')
botao_login.addEventListener('click', verificaSenha)



function verificaSenha(){
  email === document.getElementById('email_input').value
  && senha === document.getElementById('password_input').value
  ? mensagem = 'Login bem sucedido' : mensagem = 'Senha incorreta. Tente novamente.'
  console.log(mensagem)
  document.getElementById('controle_acesso').innerText = mensagem
}