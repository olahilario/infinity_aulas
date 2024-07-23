const botao = document.getElementById('botao-submit')


botao.addEventListener('click', checkData)

function checkData(){
    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    const description = document.getElementById('description').value
    try{
        nome/0
    }catch(erro){
        console.log(erro)
    } finally{
        console.log('vou logar de todo jeito')
    }
}






    
   