var getStorage = function (key) {
  var data = localStorage.getItem(key) || '';
  if (data == '') {
    return [];
  } else {
    return data.split('|');
  }
};

var setStorage = function (key, arr) {
  if (Array.isArray(arr)) {
    const arrString = arr.join('|');
    localStorage.setItem(key, arrString);
  } else {
    alert('please add an array!');
  }
};

var clearStorage = function (key) {
  localStorage.removeItem(key);
};
