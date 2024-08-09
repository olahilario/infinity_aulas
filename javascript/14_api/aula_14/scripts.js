const foto = document.getElementById('fox-photo')
const botao = document.getElementById('botao')

function randomFox () {
  const urlApi = 'https://randomfox.ca/floof/'
  fetch(urlApi)
    .then(response => response.json())
    .then(data => foto.src = data.image)
  .catch(error => console.error('Erro:', error));
}




botao.addEventListener('click', randomFox)