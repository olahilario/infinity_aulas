const apiURL = 'https://66bab8356a4ab5edd6360def.mockapi.io/api/Contacts'

async function reloadContactsFromAPI(){
  try{
    const response = await fetch(apiURL);
    if (!response.ok){
      throw new Error('Error loading API data!')
    }
    else{
      const contactList = await response.json()
      updateContactsInHTML(contactList)
    }
  }
  catch(error){
    console.error('Erro: ', error.message)
  }
}

function updateContactsInHTML(list){
  const tableData = document.querySelector('#table_data')
  tableData.innerHTML = ''
  list.forEach((element)=>{
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="contact_id">${element.id}</td>
      <td>${element.name}</td>
      <td>${element.phone}</td>
      <td>${element.email}</td>
      <td>${element.pet}</td>
      <td><button id="btn-edit" onclick="handleContactInForm(${element.id})">📝</button></td>
      <td><button id="btn-delete" onclick="deleteContact(${element.id})">🗑️</button></td>
    `
    tableData.append(tr)
  })

}

async function addNewContact(e){
  e.preventDefault()
  msg = document.querySelector('#msg')
  msg.innerHTML = ""

  try{
    const id = document.getElementById('id').value
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const pet = document.getElementById('pet').value

    if (name && phone && email && pet){
      const contact = {
        id: id,
        name: name,
        phone: phone,
        email: email,
        pet: pet
      }
      const response = await fetch(apiURL, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      })
      window.alert('Contato cadastrado!')
      document.getElementById('name').value = ''
      document.getElementById('phone').value = ''
      document.getElementById('email').value = ''
      document.getElementById('pet').value = ''
      reloadContactsFromAPI()
    }
    else{
    msg.innerHTML = "Fill all the fields!"
    }
  }
  catch(error){
    console.error('Error: ', error.message)
  }
}

async function handleContactInForm(id){
  const handleId = document.querySelector('#id')
  const name = document.getElementById('name')
  const phone = document.getElementById('phone')
  const email = document.getElementById('email')
  const pet = document.getElementById('pet')

  if (name && phone && email && pet){
    try{
      const response = await fetch(`${apiURL}/${id}`)
      if(!response.ok){
        throw new Error('Failed to fetch in handle function!')
      }
      else{
        const handleContactData = await response.json()
        handleId.value = handleContactData.id
        name.value = handleContactData.name
        phone.value = handleContactData.phone
        email.value = handleContactData.email
        pet.value = handleContactData.pet

      }
    }
    catch(error){
      console.error(`Error: ${error.message}`)
    }
  }
  else{
    console.log("Fill all the fields!")
  }
}

async function editContact(e){
  e.preventDefault()
  try{
    const editedContactId = document.querySelector('#id').value
    const editedContactName = document.querySelector('#name').value
    const editedContactPhone = document.querySelector('#phone').value
    const editedContactEmail = document.querySelector('#email').value
    const editedContactPet = document.querySelector('#pet').value
  
    const editedContact = {
      id: editedContactId,
      name: editedContactName,
      phone: editedContactPhone,
      email: editedContactEmail,
      pet: editedContactPet
    }
  
      const response = await fetch(`${apiURL}/${editedContactId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedContact)
      })
      if (!response.ok){
        throw new Error('Bad fetch request in edit function')
      }
      else{
        window.alert('Contato editado com sucesso!')
        document.getElementById('name').value = ''
        document.getElementById('phone').value = ''
        document.getElementById('email').value = ''
        document.getElementById('pet').value = ''
        reloadContactsFromAPI()
      }
  }
  catch(error){
    console.error('Error: ', error.name, '|', error.message)
  }
}

async function deleteContact(id){
  try{
    const response = await fetch(`${apiURL}/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok){
      throw new Error('Failed fetch trying to delete contact from API')
    }
    else{
      window.alert('Contato deletado com sucesso!')
      reloadContactsFromAPI()
    }
  }
  catch(error){
    console.error('Error: ', error.name, '|', error.message)
  }
}

reloadContactsFromAPI()
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', addNewContact)
const updateBtn = document.querySelector('#updateBtn')
updateBtn.addEventListener('click', editContact)
