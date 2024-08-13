const apiURL = 'https://66bab8356a4ab5edd6360def.mockapi.io/api/contacts'

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
      <td>${element.name}</td>
      <td>${element.phone}</td>
      <td>${element.email}</td>
      <td>${element.pet}</td>
    `
    tableData.append(tr)
  })

}

async function addNewContact(e){
  e.preventDefault()
  try{
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const pet = document.getElementById('pet').value

    const contact = {
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
  catch(error){
    console.error('Error: ', error.message)
  }
}

reloadContactsFromAPI()
const addbtn = document.getElementById('addBtn')
addbtn.addEventListener('click', addNewContact)