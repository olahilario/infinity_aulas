botao = document.getElementById('botao')
foto = document.getElementById('cat-photo')
botao.addEventListener('click', getCat)


// function getCat(){
//     const catUrl = 'https://api.thecatapi.com/v1/images/search';
//     fetch('https://api.thecatapi.com/v1/images/search')
//     .then(response => response.json())
//     .then(data=> foto.src = data[0].url)
// }

async function getCat (){
    try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        if (!response.ok) throw 'Erro!';
        const data = await response.json()
        .then(data => foto.src = data[0].url)

        console.log(data[0].url)
    }

    catch{
        console.error(Error)
    }
}
