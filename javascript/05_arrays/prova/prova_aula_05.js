// [JS-A05] Você foi convidado(a) a desenvolver um aplicativo web para ajudar a gerenciar as tarefas domésticas de uma família agitada.
// O objetivo é criar um "Gerenciador de Tarefas Domésticas" que permita que todos os membros da família adicionem, removam e atualizem
// suas tarefas diárias, garantindo que tudo seja feito de forma organizada.

let tarefa = document.getElementById('add_tarefa')
let botao_add = document.getElementById('adicionar')
let lista_tarefas = document.getElementById('afazeres')
let tarefa_removida = document.getElementById('tarefa_removida')
let tarefas = []

function adicionarTarefa(){
  let tarefa_usuario = tarefa.value
  tarefas.push(tarefa_usuario)
  let item = document.createElement('li')
  item.innerText = tarefa_usuario
  lista_tarefas.append(item)
  tarefa.value = ''
}

function removerTarefa(){
  let removida = tarefa_removida.value
  for (item of tarefas){
    if (item.toLowerCase() == removida.toLowerCase()){
      const indice = tarefas.indexOf(item)
      tarefas.splice(indice, 1)
      }
      tarefa_removida.value = ''
    }
  lista_tarefas.innerHTML = ''
  for (item of tarefas){
    let item_lista = document.createElement('li')
    item_lista.innerText = item
    lista_tarefas.append(item_lista)
  }
}