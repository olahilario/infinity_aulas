async function getTasksFromAPI(){
    try{
        const response = await fetch('https://66bab8356a4ab5edd6360def.mockapi.io/api/Tarefas');
        if (!response.ok){
            throw new Error('Deu ruim no fetch do GET!')
        }
        else{
            const taskList = await response.json()
            loadTasksInHTML(taskList)
        }
    }
    catch(error){
        console.log(error.message)
    }
}

function loadTasksInHTML(list){
    const cards_container = document.querySelector('#cards-container')
    cards_container.innerHTML = ''
    list.forEach((item)=>{
        const task_div = document.createElement('div')
        task_div.classList.add('col-md-4','mb-4')
        task_div.innerHTML = `
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.titulo}</h5>
                <p class="card-text">
                ${item.descricao}
                </p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <button
                class="btn btn-warning btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
                onclick="editData(${item.id})"
                >
                Editar
                </button>
                <button
                class="btn btn-danger btn-sm"
                onclick="deleteData(${item.id})"
                >
                Excluir
                </button>
            </div>
            </div>
        `
        cards_container.append(task_div)
    })
}

async function addTask(e){
    e.preventDefault()
    const titulo = document.getElementById('titulo').value
    const descricao = document.getElementById('descricao').value
    const task = {
        titulo : titulo,
        descricao: descricao
    }
    try{
        const response = await fetch('https://66bab8356a4ab5edd6360def.mockapi.io/api/Tarefas',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        if (!response.ok){
            throw new Error('Deu ruim no POST!')
        }
        else{
            document.getElementById('titulo').value = ''
            document.getElementById('descricao').value = ''
            getTasksFromAPI()
        }
    }
    catch(error){
        console.log(error.message)
    }
}

async function deleteData(id){
  try{
    const response = await fetch(`https://66bab8356a4ab5edd6360def.mockapi.io/api/Tarefas/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok){
      throw new Error('Deu ruim no DELETE!')
    }
    else{
      getTasksFromAPI()
    }

  }
  catch(error){
    console.log(error.message)
  }
}

async function editData(id){
    try{
        const response = await fetch(`https://66bab8356a4ab5edd6360def.mockapi.io/api/Tarefas/${id}`)
        if (!response.ok){
            throw new Error('Deu ruim no edit')
        }
        else{
            const editedTask = await response.json()
            document.getElementById('edit-titulo').value = editedTask.titulo
            document.getElementById('edit-descricao').value = editedTask.descricao
            document.getElementById('edit-id').value = editedTask.id
        }
    }
    catch(error){
        console.log(error.message)
    }

}

async function saveChanges(){
    try{
        const editedId = document.getElementById('edit-id').value
        const editedTitle = document.getElementById('edit-titulo').value
        const editedDescription = document.getElementById('edit-descricao').value
        const editedTask = {
            id: editedId,
            titulo: editedTitle,
            descricao: editedDescription
        }
        const response = await fetch(`https://66bab8356a4ab5edd6360def.mockapi.io/api/Tarefas/${editedId}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(editedTask)
        })
        getTasksFromAPI()

    }
    catch(error){
        console.log(error)

    }
}

const addBtn = document.querySelector('#crud-form button')
addBtn.addEventListener('click', addTask)

getTasksFromAPI()
