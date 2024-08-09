const userPhoto = document.getElementById('user-photo')
const userName = document.getElementById('user-name')
const userEmail = document.getElementById('user-email')
const button = document.getElementsByClassName('btn btn-primary')[0]


button.addEventListener('click', getUserData)
getUserData()


async function getUserData(){
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0]
    userPhoto.src = user.picture.large
    userName.textContent = user.name.first + ' ' + user.name.last
    userEmail.textContent = user.email

}
