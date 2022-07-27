loadEvents();
// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteOrTick);

}
// submit data function
function submit(e){
  e.preventDefault();
  let taskList;
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

//Добавление задач
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class ="delete">x</span><input type="checkbox"><lable>${task}</lable>`;
  ul.appendChild(li);
  document.querySelector('.taskBoard').style.display = 'block';
}

//очистка листа
function clearList(e){
  let ul = document.querySelector('ul').innerHTML = '';
}

//удалить тикет
function deleteOrTick(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
    }
}

//удаление задчи
function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

//tick a task
function tickTask(e) {
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.twxtDecoration = "line-through";
    task.style.color = "#ff0000";
  } else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}
