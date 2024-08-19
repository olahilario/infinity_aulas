function teste(){
  try{
    const x = 10;
    console.log(y)
  }
  catch(error){
    console.log(error.name, error.message)
  }
  finally{
    console.log("Vou logar isso de toda forma!")
  }
}
function conversion(number){
  try{
    const convertedNumber = Number(number)
    if (!convertedNumber){
      throw new Error("Falha na conversão! Confira se digitou apenas números!")
    }
    console.log("Conversão de ", convertedNumber, " feita com sucesso!")
  }
  catch(error){
    console.error(error.message)
  }
  finally{
    console.log("Função terminou de executar!")
  }

}

teste()
conversion("84587")



