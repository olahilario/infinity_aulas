const btn = document.getElementsByClassName('btn btn-primary')[0]

btn.addEventListener('click', getPokemon)

async function getPokemon(){
  const inputNumber = document.getElementById('pokemon-number').value
  const url = `https://pokeapi.co/api/v2/pokemon/${inputNumber}`
  try{
    const response = await fetch(url)
    if (!response.ok){
      throw new Error('Deu ruim no fetch')
    }
    else{
      const data = await response.json()
      document.getElementById('name').value = data.name
      document.getElementById('type').value = data.types.map(e=>e.type.name)
      document.getElementById('numberReadonly').value = data.order
      document.getElementById('image').src = data.sprites.front_default
      console.log(data)
    }
  }
  catch(error){
    console.log(error)
  }
}




