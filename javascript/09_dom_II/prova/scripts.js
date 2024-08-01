const btn_add = document.getElementById('btn_add');
const user_note = document.getElementById('current_note');
const list_notes = document.getElementById('list_notes');
const notes = document.getElementById('notes')


btn_add.addEventListener('click', createNote)
user_note.addEventListener('keydown', handleEnter)

function handleEnter(e){
    if (e.key == 'Enter'){
      createNote();
    }

}

function createNote(){

  if (user_note.value){

    const div_current_note = document.createElement('div');
    const current_note = document.createElement('li');
    const btn_del_note = document.createElement('button');
    const btn_check_note = document.createElement('button');
  
    current_note.classList.add('current_note');
    div_current_note.classList.add('div_current_note');
    btn_check_note.classList.add('btn_check_note');
    btn_del_note.classList.add('btn_del_note');
  
  
    div_current_note.append(current_note, btn_check_note, btn_del_note);
    list_notes.append(div_current_note);
    
    current_note.textContent = user_note.value;
    btn_check_note.textContent = '✅';
    btn_del_note.textContent = '🗑️';
    document.getElementById('current_note').value = '';
  
    btn_check_note.addEventListener('click', ()=>{
      current_note.style.textDecoration === 'line-through' ?
      current_note.style.textDecoration = 'none' :
      current_note.style.textDecoration = 'line-through';
    })

    btn_del_note.addEventListener('click', ()=>{
      div_current_note.remove()
    })

  }
}