async function getStoriesFromAPI(){
  try{
    const GETURL = 'https://66bab8356a4ab5edd6360def.mockapi.io/api/NotFunnyStory'
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
      const POSTURL = 'https://66bab8356a4ab5edd6360def.mockapi.io/api/NotFunnyStory'
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
      <td><button onclick="deleteStory(${story.id})">Excluir</button></td>
      <td><button onclick="handleUpdatedStory(${story.id})">Editar</button></td>
      <td></td>
    `
    tbody.append(storyRow)

  })
}

async function handleUpdatedStory(id){

  try{
    const handleIdStory = document.getElementById('id-editar');
    handleIdStory.value = id
    const handleDescriptionStory = document.getElementById('descricao-nova')
    const response = await(fetch(`https://66bab8356a4ab5edd6360def.mockapi.io/api/NotFunnyStory/${id}`))
    if (!response.ok){
      throw new Error('Deu ruim no handle da Story!')
    }
    else{
      let oldStory = await response.json()
      handleDescriptionStory.value = oldStory.description
    }
  }
  catch(error){
    console.log(error.message)
  }
}

async function editStory(e){
  e.preventDefault()
  try{
    const handleIdStory = document.getElementById('id-editar').value
    const newDescription = document.getElementById('descricao-nova').value
    const newStory = {
      id: handleIdStory,
      description: newDescription,
      likes: 0
    }
    const response = await fetch(`https://66bab8356a4ab5edd6360def.mockapi.io/api/NotFunnyStory/${handleIdStory}`, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newStory)
    })
    document.getElementById('descricao-nova').value = ''

    getStoriesFromAPI()
  }

  catch(error){
    console.log(error)
  }
  
}

function resetEditedDescription(){
  document.getElementById('descricao-nova').value = ''
}

async function deleteStory(id){
  try{
    const response = await fetch(`https://66bab8356a4ab5edd6360def.mockapi.io/api/NotFunnyStory/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok){
      throw new Error("Deu ruim no fetch pra deletar!")
    }
    else{
      getStoriesFromAPI()
      console.log('Deletado com sucesso!')
    }
  }
  catch(error){
    console.log(error.message)
  }

}

const addBtn = document.querySelector('#form-adicionar button')
addBtn.addEventListener('click', postNewStory)

const editBtn = document.querySelectorAll('#form-editar button')[0]
editBtn.addEventListener('click', editStory)

const editCancelBtn = document.querySelectorAll('#form-editar button')[1]
editCancelBtn.addEventListener('click', resetEditedDescription)


getStoriesFromAPI()