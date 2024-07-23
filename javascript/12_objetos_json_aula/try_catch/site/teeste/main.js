const form = document.getElementById('form')


function captura(nome){

    // const botao = document.getElementById('botao-submit')
   nome = document.getElementById('name').value
    // const email = document.getElementById('email').value
    // const description = document.getElementById('description').value
    
}

form.addEventListener('submit', checkData, (e)=>{
    e.preventDefault()
})


function checkData(){

    try{
        captura(nome)
        console.log(nome)
        nome.toUpperCase()
    }catch(error){
        console.log(error)
    } finally{
        console.log('Finally executa de todo jeito!')
    }
}
