const btn = document.querySelectorAll('.btn-btn-primary')[0]
const catImage = document.querySelector('#cat-photo')

btn.addEventListener('click', getCatImage)

getCatImage()
  
  
async function getCatImage() {
  try{
    const response = await fetch('https://randomfox.ca/floof/');
    if (!response.ok){
      throw new Error('Deu ruim no fetch!')
    }
    else{
      const data = await response.json()
      const dataImage = data.image
      catImage.src = dataImage
    }
  }
  catch(error){
    console.log(error)
  }
}

