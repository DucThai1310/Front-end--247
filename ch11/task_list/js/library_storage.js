var storagePrototype = {
  getStorage: function () {
    var data = localStorage.getItem(this.key) || '';
    if (data == '') {
      return [];
    } else {
      return data.split('|');
    }
  },

  setStorage: function (arr) {
    if (Array.isArray(arr)) {
      const arrString = arr.join('|');
      localStorage.setItem(this.key, arrString);
    } else {
      alert('please add an array!');
    }
  },

  clearStorage: function () {
    localStorage.removeItem(this.key);
  },
};
var StorageLibrary = function (key) {
  this.key = key;
  var storage = Object.create( storagePrototype );
  return storage;
};
