const addbtn = document.getElementById('add-button');
const task_list = document.getElementById('order-list');


function addTask(){
  const task = document.getElementById('input-task').value;
  if (task !== ''){
    const div_task = document.createElement('div')
    const item = document.createElement('li');
    const check = document.createElement('input');
    const upbtn = document.createElement('button');
    const downbtn = document.createElement('button');
    const removebtn = document.createElement('button');

    div_task.classList.add('div-task');
    task_list.append(div_task);

    item.classList.add('task-list');
    item.innerText = task;
    upbtn.textContent = '🔼';
    downbtn.textContent = '🔽';
    removebtn.textContent = '❌';
    check.type = 'checkbox';

    div_task.append(check, item, upbtn, downbtn, removebtn);

    document.getElementById('input-task').value = '';

    removebtn.addEventListener('click', deleteTask);

    check.addEventListener('change', checkTask)
    item.addEventListener('click', checkClick)



    upbtn.addEventListener('click', getIndex);
    // upbtn.addEventListener('click', moveUp);

  }
}

function deleteTask(e){
  let removed = e.target.parentElement;
  removed.remove()
}

function checkTask(e){
  e.target.checked ? e.target.parentElement.children[1].style.textDecoration = 'line-through' : 
  e.target.parentElement.children[1].style.textDecoration = 'none'
}

function checkClick(e){
  e.target.parentElement.children[1].style.textDecoration === 'line-through' ? 
  e.target.parentElement.children[1].style.textDecoration = 'none':
  e.target.parentElement.children[1].style.textDecoration = 'line-through';
  e.target.parentElement.children[0].checked ? e.target.parentElement.children[0].checked = false :
                                               e.target.parentElement.children[0].checked = true
}



const getIndex = (e) => {
  const target = e.target
  const parent = target.parentElement
  const lista = parent.parentElement
  const elemento_usuario = parent.children[1].textContent
  console.log(elemento_usuario)

}



addbtn.addEventListener('click', addTask)




