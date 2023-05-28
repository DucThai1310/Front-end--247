
function $(id) {
    return document.getElementById(id);
}

window.onload = function() {
    const btnClick = $('btn')
    btnClick.onclick = clickButton;
}

function clickButton() {
    const username = $('username').value;
    const password = $('password').value;
    const usernameErr = $('username-error');
    const passwordErr = $('password-error');

    if(username.trim().length == 0) {
        usernameErr.innerHTML = "this entry must oqual first ontry"
    }else {
        usernameErr.innerHTML = "";
    }

    if(password.trim().length == 0) {
        passwordErr.innerHTML = "this entry must oqual ontry"
    }else {
        passwordErr.innerHTML = "";
    }

    if(username.trim().length > 0 && password.trim().length > 0) {
        console.log(username,password);
    }
}