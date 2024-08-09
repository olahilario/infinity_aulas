const url = 'https://api.thecatapi.com/v1/images/search'

const button = document.getElementsByClassName('btn btn-primary')[0]
const catImg = document.getElementById('cat-photo')

getCatImage()


button.addEventListener('click', getCatImage)

async function getCatImage(){
  try{
    const catObject = await fetch(url)
    if(!catObject.ok){
      throw new Error('Deu ruim no fetch')
    }
    else{
      const catData = await catObject.json()
      const cat = catData[0]
      catLinkImage = cat.url
      catImg.src = catLinkImage
    }
  }
  catch(error){
    console.log(error)
  }
}