const soma = (x,y)=>{
  if (typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('x e y precisam ser números')
  }
  try{
    return console.log(x-y);
  }catch(Error){
    console.log(Error);
  }
  console.log('Programa encerrou aqui!');

}

soma(1,3)
