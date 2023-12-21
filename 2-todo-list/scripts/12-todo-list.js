const todoList = [
  {
    name:'workout',
    date:'2023-11-30'
  },
  {
    name:'study',
    date:'2023-12-01'
  }
];
displayTodo();

function displayTodo(){
  let todoListHtml = '';

  todoList.forEach((todoObject,index) =>{
    const { name, date } = todoObject;
    todoListHtml += `
      <div>${name}</div>
      <div>${date}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
  });
  
  //console.log(todoListHtml);
  const divElement = document.querySelector('.js-todolist');
  divElement.innerHTML= `${todoListHtml}`;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
      displayTodo();
    });
  });
}
//adding event listener to add button
document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
  addTodo();
});

function addTodo(){
  const inputElement =document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;
  todoList.push({
    //name:name,
    //date:date
    name,
    date
  });
  //console.log(todoList);
  inputElement.value = '';
  displayTodo();

}
