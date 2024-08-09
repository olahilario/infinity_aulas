const btn_new = document.getElementById('btn_new');
const foto = document.getElementById('user-photo')
const user_name = document.getElementById('user-name');
const email = document.getElementById('user-email');


btn_new.addEventListener('click', getUser)


async function getUser(){
  try{
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok){
      throw Error('Deu ruim no fetch!')
    }
    const userObject = await response.json()
    .then(user => {
      const userData = user.results[0];
      console.log(response)
      foto.src = userData.picture.large;
      user_name.textContent = `${userData.name.title} ${userData.name.first} ${userData.name.last}`
      email.textContent = userData.email
    })

  }

  catch{
    console.error()

  }
}