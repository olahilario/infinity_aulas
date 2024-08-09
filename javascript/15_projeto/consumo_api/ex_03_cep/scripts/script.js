const btnSub = document.getElementsByClassName('btn-btn-primary')[0];
const form = document.getElementById('cep-form');

form.addEventListener('submit', preventSubmit)
btnSub.addEventListener('click', handleCEP);


function preventSubmit(e){
    e.preventDefault()
}

async function handleCEP(){
  try{
    const inputCep = document.getElementById('cep').value;
    if (inputCep === ''){
      throw new Error('Digite seu CEP!')
    }
    else{
      const CEP_user = inputCep;
      const url = `http://viacep.com.br/ws/${CEP_user}/json/`;
      try{
        const objectCEP = await fetch(url);
        if (!objectCEP.ok){
          throw new Error('Deu ruim no fetch!')
        }
        else{
          const address = await objectCEP.json();
          document.getElementById('logradouro').value = address.logradouro
          document.getElementById("bairro").value = address.bairro
          document.getElementById('localidade').value= address.localidade
          document.getElementById('uf').value = address.uf
        }
      }
      catch(err){
        console.error(err)
      }
    }
  }
  catch(err){
    console.error(err)
  }
}








