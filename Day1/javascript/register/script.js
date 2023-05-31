var $ = function (id) {
    return document.getElementById(id);
};
let isRegistered = false;
var joinList = function () {
    let header = "";
    let html = "";
    let required = "<span>Required field</span>";
    let submitComment = "Please review your entries and complete all required field";

    let emailElement = $('email').value;
    let phoneElement = $('phone').value;
    let countryElement = $('country').value;

    let contact = "text";
    if ($('email-contact').checked) {
        contact = "Email";
    }; 
    if ($('dont-contact').checked) {
        contact = "None";
    };
    let terms = $("term-checkbox").checked;

    if (emailElement.trim() == "") {
        emailElement = required;
        header = submitComment;
    }
    if (phoneElement.trim() == "") {
        phoneElement = required;
        header = submitComment;
    }
    if (countryElement == "") {
        countryElement = required;
        header = submitComment;
    }
    if (terms == false) {
        terms = required;
        header = submitComment;
    }
    console.log("hello :", emailElement);
    $("register_bottom_header").firstChild.nodeValue = header;
    if (header == submitComment) {
        html = html + "<tr><td>Email:  </td><td> " + emailElement + "</td></tr>";
        html = html + "<tr><td>Phone:  </td><td> " + phoneElement + "</td></tr>";
        html = html + "<tr><td>Country:  </td><td> " + countryElement + "</td></tr>";
        html = html + "<tr><td>Contact:  </td><td> " + contact + "</td></tr>";
        html = html + "<tr><td>Terms:  </td><td> " + terms + "</td></tr>";
        $("register_info").innerHTML = html;
        if (isRegistered) {
            window.location.href = "finish.html"; 
            // Thay đổi URL tới trang khác ở đây
        } else {
            isRegistered = true;
        }
    } else {
        $("register_info").innerHTML = "";
        $("email_form").submit();
    }
};
window.onload = function () {
    $('register').onclick = joinList;
    $('email').focus();
};