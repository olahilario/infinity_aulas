
const nome = 42

function checkData(){
    // const nome = document.getElementById('name').value
    // const email = document.getElementById('email').value
    // const description = document.getElementById('description').value
    try{
        if (nome === 'pedro'){
            console.log('Olá, Pedro');
        }
    }catch(error){
        console.log(error.name);
    } finally{
        console.log('vou logar de todo jeito');
    }
}

checkData()