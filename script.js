const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks) {
  const ul = document.querySelector('.tasks__list');

  ul.innerHTML = ''; // Limpa a lista antes de renderizar novamente

  for (let i = 0; i < tasks.length; i++) {
    const listItem = createTaskItem(tasks[i], i);
    ul.appendChild(listItem);
  }
}
renderElements(tasks);

function createTaskItem(task, index) {
  const listItem = document.createElement("li");
  const div = document.createElement('div');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const button = document.createElement('button');

  listItem.classList.add("task__item");
  div.classList.add("task-info__container");
  button.classList.add("task__button--remove-task");

  p.innerText = task.title;

  if (task.type === "Urgente") {
    span.classList.add("task-type", "span-urgent");
  } else if (task.type === "Importante") {
    span.classList.add("task-type", "span-important");
  } else {
    span.classList.add("task-type", "span-normal");
  }

  button.addEventListener("click", function() {
    tasks.splice(index, 1); // Remove o item da matriz tasks no índice correspondente
    renderElements(tasks); // Renderiza novamente os elementos após remover o item
  });

  div.appendChild(span);
  div.appendChild(p);
  listItem.appendChild(div);
  listItem.appendChild(button);

  return listItem;
}

function newTask(){
  const addButton = document.querySelector(".form__button--add-task");

  addButton.addEventListener("click", function(event) {
    event.preventDefault();  
    const taskTitle = document.getElementById("input_title").value;
    const taskType = document.querySelector(".form__input--priority").value;
    const treatedTaskType = taskType[0].toUpperCase() + taskType.substring(1);
    
    const newItem = { title: taskTitle, type: treatedTaskType }; 
    
    if(taskTitle === "" || taskType === ""){
      alert("Preencha todos os campos");
    }
    else{
      tasks.push(newItem);
      renderElements(tasks);
    }
  });
}
newTask();
