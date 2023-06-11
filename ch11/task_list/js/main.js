function $(id) {
  return document.getElementById(id);
}
window.onload = function () {
  const addTaskBtn = $('add_task');
  const clearTaskBtn = $('clear_tasks');

  taskList.load();
  taskList.display();

  addTaskBtn.onclick = function () {
    taskList.add();
  };
  clearTaskBtn.onclick = function () {
    taskList.clear();
  };
};
/**
 1, get task from local storage
 2, get value from user enter
 3,save task to array and local storage
 4 displayTaskList 
 */
