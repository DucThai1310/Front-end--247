var TASK_KEY = 'task';
taskList = [];
function getTasks() {
  //task1|task2
  const tasksFromLocal = localStorage.getItem(TASK_KEY);
  var taskArr = [];
  if (tasksFromLocal != null) {
    taskArr = tasksFromLocal.split('|');
  }
  return taskArr;
}

function saveTask() {
  const listTaskString = taskList.join('|');
  localStorage.setItem(TASK_KEY, listTaskString);
}

function addTask() {
  const task = document.getElementById('task').value.trim();
  taskList.push(task);
  saveTask(taskList);
  display(taskList);
}

function clearTask() {
  localStorage.removeItem(TASK_KEY);
  taskList = getTasks();
  display(taskList);
}

function display() {
  const taskListEl = document.getElementById('task_list');
  let listHTML = '';
  taskList.forEach(task => {
    listHTML += `<p>${task}</p></br>`;
  });
  taskListEl.innerHTML = listHTML;
}
window.onload = function () {
  const addTaskBtn = document.getElementById('add_task');
  const clearTaskBtn = document.getElementById('clear_tasks');

  taskList = getTasks();

  display(taskList);

  addTaskBtn.onclick = function () {
    addTask(taskList);
  };
  clearTaskBtn.onclick = function () {
    clearTask(taskList);
  };
};
/**
 1, get task from local storage
 2, get value from user enter
 3,save task to array and local storage
 4 display 
 */
