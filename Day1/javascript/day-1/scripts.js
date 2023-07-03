var $ = function (id) {
    return document.getElementById(id);
}

function addStudent() {

    let code = $("student_code").value;
    let name = $("student_name").value;
    let age = $("student_age").value;
    let sex = $("student_sex").value;

    //  tạo 1 một student mới
    let student = {
        code: code,
        name: name,
        age: age,
        sex: sex
    };

    // in thông tin student ra màn hình
    printStudentInfo(student);

    // Clear the form fields
    $("student_code").value = "";
    $("student_name").value = "";
    $("student_age").value = "";
}

// Function in thông tin màn hình ra
function printStudentInfo(student) {
    var studentListElement = document.getElementById("student_list");
    studentListElement.innerHTML += "<li>Code: " + student.code + ", Name: " + student.name + ", Age: " + student.age + ", Sex: " + student.sex + "</li>";
}

// Function xử lý sự kiện khi nhấn add student
function handleKeyPress(event) {
    if (event.key === "Escape") return;
    let inputValue = event.target.value;
    console.log("Input Value: " + inputValue);
}

window.addEventListener("keydown", handleKeyPress);

// Function to be called when the window is loaded
window.onload = function () {
    $('add_student').onclick = addStudent;
    $("student_code").focus();
};