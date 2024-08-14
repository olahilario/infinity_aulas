const urlBase = './acervo.json'

async function getBooksFromJson(){
  try{
    const response = await fetch(urlBase)
    if(!response.ok){
      throw new Error('Deu ruim no fetch:', Error)
    }
    else{
      const lista_acervo = await response.json()
      loadBooks(lista_acervo)
    }
  }
  catch(error){
    console.error("Deu ruim", error.message)
  }
  
}

function loadBooks(list){
  const tbody = document.getElementById('tbody')
  tbody.innerHTML = ''
  list.forEach((book)=>{
    const bookRow = document.createElement('tr')
    bookRow.innerHTML = `
      <td>${book.titulo}</td>
      <td>${book.autor}</td>
      <td>${book.genero}</td>
      <td>${book.ano}</td>
      <td>${book.avaliacao}</td>
    `
    tbody.append(bookRow)
  })
}

async function addBook(e){
  e.preventDefault()
  const title = document.getElementById('title').value
  const autor = document.getElementById('autor').value
  const genero = document.getElementById('genero').value
  const ano = document.getElementById('ano').value

  const newBook = {
    title : title,
    autor : autor,
    genero: genero,
    ano: ano,
  }
  resetAddInputs()

  try{
    const response = await fetch(urlBase, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newBook)
    })
  
    if(!response.ok){
      throw new Error('Deu ruim no POST!')
    }
    else{
      window.alert('Livro adicionado!')
      getBooksFromJson()
  }
}
catch(error){
  console.log('Deu ruim!', error.message)
}

}

function resetAddInputs(){
  document.getElementById('title').value = ''
  document.getElementById('autor').value = ''
  document.getElementById('genero').value = ''
  document.getElementById('ano').value = ''

}

async function searchBook() {
  const searchedBook = document.getElementById('search').value.toLowerCase();
  try {
    const response = await fetch(urlBase);
    if (!response.ok) {
      throw new Error('Erro ao buscar livros.');
    }
    else{
      const books = await response.json();
      const filteredBooks = books.filter(book =>
        book.titulo.toLowerCase().includes(searchedBook) ||
        book.autor.toLowerCase().includes(searchedBook) ||
        book.genero.toLowerCase().includes(searchedBook)
      );
      loadBooks(filteredBooks);
    }

  } catch (error) {
    console.error('Erro:', error.message);
  }
}

const listar_btn = document.getElementById('listar_btn')
listar_btn.addEventListener('click', getBooksFromJson)

const cadastro_btn = document.getElementById('cadastro_btn')
cadastro_btn.addEventListener('click', addBook)
const search_btn = document.getElementById('search_btn')
search_btn.addEventListener('click', searchBook)

getBooksFromJson()