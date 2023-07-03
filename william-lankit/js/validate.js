const $ = (id) =>  {
   return document.getElementById(id);
}


const form = $("form-1");
const nameInput = $("name");
const emailInput = $("email");
const passwordInput = $("password");
const nameError = $("nameError");
const emailError = $("emailError");
const passwordError = $("passwordError");
const submitButton = $("submitButton");



function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Vui lòng nhập tên của bạn.";
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Vui lòng nhập email.";
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = "Vui lòng nhập email hợp lệ: abc123@gmail.com.";
        isValid = false;
    }

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Vui lòng nhập mật khẩu của bạn.";
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Mật khẩu phải dài ít nhất 8 ký tự.";
        isValid = false;
    } else if (!isValidPassword(passwordInput.value.trim())) {
        passwordError.textContent = "Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường, một chữ số và một ký tự đặc biệt.";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}
function isValidPassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/;
    return passwordRegex.test(password);
}
function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();
    validateForm();
});