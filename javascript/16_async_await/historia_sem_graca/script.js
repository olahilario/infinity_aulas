async function getStoriesFromAPI(){
  try{
    const GETURL = 'https://66ba000ffa763ff550fa6ec0.mockapi.io/api/historias'
    const response = await fetch(GETURL);
    if (!response.ok){
      throw new Error('Deu ruim no GET!')
    }
    else{
      const storiesList = await response.json()
      loadStoriesInHTML(storiesList)
    }
  }
  catch(error){
    console.error(error.message)
  }
}

async function postNewStory(e){
  e.preventDefault()
  const userStory = document.querySelector('#descricao').value
  if (userStory){
    const story = {
      description: userStory,
      likes: 0
    }
    document.querySelector('#descricao').value = ''
    try{
      const POSTURL = 'https://66ba000ffa763ff550fa6ec0.mockapi.io/api/historias'
      const response = await fetch(POSTURL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(story)
      })
      window.alert('História adicionada!')
      getStoriesFromAPI()
    }
    catch{
      console.log('Erro no POST!')
    }
  }
  else{
    window.alert('Digite alguma coisa!')
  }
}


function loadStoriesInHTML(list){
  const tbody = document.querySelector('#lista-historias')
  tbody.innerHTML = ''
  list.forEach((story)=>{
    const storyRow = document.createElement('tr')
    storyRow.innerHTML = `
      <td>${story.id}</td>
      <td>${story.description}</td>
      <td>${story.likes}</td>
      <td></td>
    `
    tbody.append(storyRow)
  })
}

const addBtn = document.querySelector('#form-adicionar button')
addBtn.addEventListener('click', postNewStory)

getStoriesFromAPI()