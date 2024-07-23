function teste(nome) {

    try{console.log(nome.toUpperCase());
        
    }catch(error){
        console.log(error.name)
    } finally{
        console.log('vou logar de todo jeito')
    }
}

teste(42)