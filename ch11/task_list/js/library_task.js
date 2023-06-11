var Task = function (task) {
  this.text = task;
};
Task.prototype.isValid = function () {
  if (this.text.trim() == '') {
    return false;
  }
  return true;
};
///task1 => Task1
Task.prototype.toString = function () {
  const first = this.text.substring(0, 1);
  return first.toUpperCase() + this.text.substring(1);
};

