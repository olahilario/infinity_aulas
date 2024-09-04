const div_buttons = document.querySelector('.btn-group')
const buttonShowAllBreeds = document.querySelector('.btn-outline-info')
const div_cards = document.querySelector('.row')

async function getBreedsList(){
  try{
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    if (!response.ok){
      throw new Error('Fetch error in API response!')
    }
    else{
      const breedsObject = await response.json()
      const breedsList = breedsObject.message
      showBreedsButtons(breedsList)
    }
  }
  catch(error){
    debugError(error)
  }
}

function showBreedsButtons(breedsList){
  div_buttons.innerHTML = ''
  let count = 1
  Object.keys(breedsList).forEach(breed=>{
    const breedButton = document.createElement('input')
    breedButton.setAttribute('type', "checkbox")
    breedButton.setAttribute('id', `btncheck${count}`)
    breedButton.setAttribute('autocomplete', 'off')
    breedButton.setAttribute('isChecked', 'false')
    breedButton.className = 'btn-check'
    breedButton.addEventListener('click', ()=>{
      const breedButtonsList = document.querySelectorAll('.btn-check')
      breedButtonsList.forEach(button=>{
        if(button.checked){
          getBreedImage(breed)
        }
      })
  })
    const breedButtonLabel = document.createElement('label')
    breedButtonLabel.setAttribute('for', `btncheck${count}`)
    breedButtonLabel.textContent = breed
    breedButtonLabel.className = 'btn btn-outline-primary m-1'
    div_buttons.append(breedButton, breedButtonLabel)
    count += 1
  })
}

async function getBreedImage(breed){
  try{
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`)
    if (!response.ok){
      throw new Error('Fetch error getting Breed image list!')
    }
    else{
      const breedImagesObject = await response.json()
      const breedImagesList = breedImagesObject.message
      showImages(breedImagesList, breed)
    }
  }
  catch(error){
    debugError(error)
  }
}

function showImages(imageList, nameBreed){
  div_cards.innerHTML = ''
  count = 1
  imageList.forEach(image=>{
    const div_container = document.createElement('div')
    div_container.className = 'col-md-4 mb-4'
    const div_card = document.createElement('div')
    div_card.className = 'card'
    const div_card_image = document.createElement('img')
    div_card_image.className = 'card-img-top'
    div_card_image.src = image
    const div_card_body = document.createElement('div')
    const card_title = document.createElement('h5')
    card_title.className = 'card-title'
    card_title.textContent = `${nameBreed} #${count}`
    div_card_body.append(card_title)
    div_card.append(div_card_image, div_card_body)
    div_container.append(div_card)
    count += 1

    div_cards.append(div_container)
  })
}

function debugError(error){
  console.error('erro debugado: ', error.message)
  const errorMessage = document.createElement('p')
  errorMessage.className = 'text-danger'
  ErrorMessage.textContent = `Erro: ${error.name} - ${error.message}`
  div_cards.append(errorMessage)
}

buttonShowAllBreeds.addEventListener('click', getBreedsList)