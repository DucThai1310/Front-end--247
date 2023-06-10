function sortASC(a, b) {
  return a - b;
}
function sortDESC(a, b) {
  return b - a;
}
function forEachCustom(arr, func) {
  for (let index in arr) {
    func(arr[index], index);
  }
}
function mapCustom(arr, func) {
  const newArr = [];
  for (let index in arr) {
    const newValue = func(Number(arr[index]), Number(index));
    newArr.push(newValue);
  }
  return newArr;
}

function filterCustom(arr, func) {
  const newArr = [];
  for (let index in arr) {
    const newValue = func(Number(arr[index]), Number(index));
    if (newValue != undefined) {
      newArr.push(newValue);
    }
  }
  return newArr;
}
window.onload = function () {
  let arr = [1, 2, 3, 43, 43, 54, 6, 89, 13, 4];
  arr.sort(sortASC);
  console.log(arr);
  arr.sort(sortDESC);
  console.log(arr);
  //forEach
  arr.forEach(function (value, index) {
    console.log('🚀 ~ file: script.js:15 ~ value:', value, index);
  });
  forEachCustom(arr, function (value, index) {
    console.log('value func custom', value, index);
  });

  //map
  var arr2 = arr.map(function (value, index) {
    return index + value;
  });
  console.log(arr2);
  var arr3 = mapCustom(arr, function (value, index) {
    if (value > 1) {
      return value;
    }
  });
  console.log('arr3', arr3);
  // filter

  var arr4 = arr.filter(function (value, index) {
    if (value > 1) {
      return value;
    }
  });
  console.log('arr4: ', arr4);

  var arr5 = filterCustom(arr, function (value, index) {
    if (value > 1) {
      return value;
    }
  });
  console.log('🚀 ~ file: script.js:70 ~ arr5 ~ arr5:', arr5);
  // save storage
  //local storage
  localStorage.setItem('newKey', 'this is value');
  //session storage
  sessionStorage.setItem('newKey', 'this is value');
  // localStorage.removeItem('newKey');
  // sessionStorage.removeItem('newKey');
  const value = sessionStorage.getItem('newKey');
  console.log('🚀 ~ file: script.js:79 ~ value:', value);
  localStorage.clear();
};
