// event
function checkLoad() {
    console.log("Window loaded!");
}
// window.onload = (envent) => {
//     console.log(event);
//     checkLoad();
// }
//button
function $(id) {
    return document.getElementById(id);
}
function handleClickButton() {
  const username = $("username").value;
  const password = $("password").value;
  const usernameErr = $('username-error');
  const passwordErr = $('password-error');

  if (username.trim().length == 0) {
    usernameErr.innerText = "this field is required"
  }else {
    usernameErr.innerText = "";
  }
  
  if (password.trim().length == 0) {
    passwordErr.innerText = "this field is required"
  }else {
    passwordErr.innerText = "";
  }
  
  if (username.trim().length > 0 && password.trim().length > 0) {
    console.log(username,password)
  }
  console.log('btn click', username , password);
}
window.onload = function () {
  checkLoad();
  const usernameEl = $("username");
  usernameEl.focus();
  const btnElement = $('btn');
  //click
  btnElement.onclick = handleClickButton;
  //change
  usernameEl.onchange = onChangeValue;
  //double click
  btn.Element.ondblclick = function () {
    console.log("double click");
  }
  //mouSeOver
  btnElement.onmouseover = function () {
    console.log("onmouseover");
  }
  //mouSeOut
  btnElement.onmouseout = function () {
    console.log("onmouseout");
  }
  //mouSeDown
  btnElement.onmousedown = function () {
    console.log("onmousedown");
  }
  // $('btn').click = () => {
  //   console.log('btn click');
  // }
}
