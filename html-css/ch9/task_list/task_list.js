function $(id) {
  return document.getElementById(id);
}

var TASK_KEY = 'task';
var taskList = [];

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
  const task = $('task').value.trim();
  taskList.push(task);
  saveTask();
  display();
}

function clearTask() {
  localStorage.removeItem(TASK_KEY);
  taskList = getTasks();
  display();
}

function display() {
  const taskListEl = $('task_list');
  let listHTML = '';
  taskList.forEach(task => {
    listHTML += `<p>${task}</p></br>`;
  });
  taskListEl.innerHTML = listHTML;
}
window.onload = function () {
  const addTaskBtn = $('add_task');
  const clearTaskBtn = $('clear_tasks');

  taskList = getTasks();

  display();

  addTaskBtn.onclick = addTask;
  clearTaskBtn.onclick = clearTask;
};
/**
 1, get task from local storage
 2, get value from user enter
 3,save task to array and local storage
 4 display 
 */
