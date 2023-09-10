function $(id) {
  return document.getElementById(id);
}
function checkLoad() {
  console.log('window loaded!');
}
function handleClickButton() {
  const username = $('username').value;
  const password = $('password').value;
  const usernameErr = $('username-error');
  const passwordErr = $('password-error');

  if (username.trim().length == 0) {
    usernameErr.innerText = 'This field is required';
  } else {
    usernameErr.innerHTML = '';
  }

  if (password.trim().length == 0) {
    passwordErr.innerText = 'This field is required';
  } else {
    passwordErr.innerText = '';
  }
  if (username.trim().length > 0 && password.trim().length > 0) {
    console.log('login', username, password);
  }
}

function onChangeValue(event) {
  console.log('value', event.target.value);
}
window.onload = function () {
  checkLoad();
  const usernameEl = $('username');
  usernameEl.focus();
  const btnElement = $('btn');
  //click
  btnElement.onclick = handleClickButton;
  //change
  usernameEl.onchange = onChangeValue;
  // double click
  btnElement.ondblclick = function () {
    console.log('double click');
  };
  //moveOver
  btnElement.onmouseover = function () {
    console.log('onmouseover');
  };
  //move out
  btnElement.onmouseout = function () {
    console.log('onmouseout');
  };
  btnElement.onmousedown = function () {
    console.log('onmousedown');
  };
    btnElement.onmouseup = function () {
      console.log('onmouseup');
    };
};
