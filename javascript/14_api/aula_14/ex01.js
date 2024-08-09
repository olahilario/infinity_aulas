fetch('https://randomfox.ca/floof/')
.then(response => response.json())
.then(data => foto.src = data.image)
.catch(error => console.error('Erro:', error));


function randomFox () {
    fetch('https://randomfox.ca/floof/')
  .then(response => response.json())
  .then(data => foto.src = data.image)
  .catch(error => console.error('Erro:', error));
}

const foto = document.getElementById('fox-photo')
const botao = document.getElementById('botao')

botao.addEventListener('click', randomFox)