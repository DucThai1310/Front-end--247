var taskList = {
  key: 'TASK_KEY',
  tasks: [],
  storage: new StorageLibrary(this.key),
  update: function () {
    this.storage.setStorage(this.tasks);
  },
  add: function () {
    console.log(this);
    const taskName = $('task').value.trim();
    const task = new Task(taskName);
    if (task.isValid() == false) {
      alert('please add task!');
    } else {
      this.tasks.push(task);
      this.update();
      this.display();
    }
  },
  display: function () {
    const taskListEl = $('task_list');
    let listHTML = '';
    this.tasks.forEach((task, index) => {
      listHTML += `<span><button onclick="taskList.delete(${index})" >Delete</button> ${task}</span></br>`;
    });
    taskListEl.innerHTML = listHTML;
  },
  load: function () {
    if (this.tasks.length == 0) {
      var newTask = this.storage.getStorage();
      newTask.forEach(task => {
        this.tasks.push(new Task(task));
      });
    }
  },
  clear: function () {
    this.storage.clearStorage();
    this.tasks = [];
    this.display();
  },
  delete: function (index) {
    this.tasks.splice(index, 1);
    this.update();
    this.display();
  },
};
