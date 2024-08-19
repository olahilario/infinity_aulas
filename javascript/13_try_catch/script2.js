function checkAge(){
  try{
    const userAge = document.getElementById('age').value
    const age = Number(userAge)
    if (!(typeof(age) === 'number') || isNaN(age)){
      console.log(age instanceof Number)
      throw new Error('Digite uma idade válida')
    }
    else if (age < 18){
      throw new Error('Idade informada menor do que 18!')
    }
    console.log('Tudo certo por aqui! Idade informada: ', age)
  }
  catch(error){
    console.log(error.message)
  }
  finally{
    console.log("Função terminou de executar!")
  }
}
