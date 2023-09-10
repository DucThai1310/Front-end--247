function $(id) {
  return document.getElementById(id);
}

var TASK_KEY = 'task';
var taskList = [];

function addTask() {
  const task = $('task').value.trim();
  taskList.push(task);
  setStorage(TASK_KEY, taskList);
  displayTaskList();
}

function clearTask() {
  clearStorage(TASK_KEY);
  taskList = getStorage();
  displayTaskList();
}

function displayTaskList() {
  const taskListEl = $('task_list');
  let listHTML = '';
  taskList.forEach((task, index) => {
    listHTML += `<span><button onclick="deleteTask(${index})" >Delete</button> ${task}</span></br>`;
  });
  taskListEl.innerHTML = listHTML;
}
function deleteTask(index) {
  taskList.splice(index, 1);
  displayTaskList();
}
window.onload = function () {
  const addTaskBtn = $('add_task');
  const clearTaskBtn = $('clear_tasks');

  taskList = getStorage(TASK_KEY);

  displayTaskList();

  addTaskBtn.onclick = addTask;
  clearTaskBtn.onclick = clearTask;
};
/**
 1, get task from local storage
 2, get value from user enter
 3,save task to array and local storage
 4 displayTaskList 
 */
