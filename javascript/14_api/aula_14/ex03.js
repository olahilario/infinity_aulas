const btn_submit = document.getElementById('btn_submit');
const form = document.getElementById('form_cep');
const logradouro = document.getElementById('logradouro');
const bairro = document.getElementById('bairro');
const localidade = document.getElementById('localidade');
const uf = document.getElementById('uf')


btn_submit.addEventListener('click', getAddress)
form.addEventListener('submit', (e)=>{
    e.preventDefault()})


async function getAddress(){
  const user_cep = document.getElementById('cep').value
  let custom_url = `https://viacep.com.br/ws/${user_cep}/json/`

  try{
    const response = await fetch(custom_url);
      if (!response.ok) throw Error('Erro no fetch!');
    const data = await response.json()
      .then(dados_cep => {
        logradouro.value = dados_cep.logradouro;
        bairro.value = dados_cep.bairro;
        localidade.value = dados_cep.localidade;
        uf.value = dados_cep.uf;
      })
  }
  catch{
    console.error(Error)
  }
}
