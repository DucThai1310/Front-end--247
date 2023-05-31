function $(id) {
    return document.getElementById(id);
}

function resetForm() {
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('country').value = "";
}

function submitForm(e) {
    e.preventDefault();
    //get value giá trị input
    const emailElement = $('email').value;
    const phoneElement = $('phone').value;
    const countryElement = $('country').value;
    //get lỗi giá trị
    const spanEmailEr = $('emails-error');
    const spanPhoneEr = $('phones-error');
    const spanCountryEr = $('countrys-error');
    const spanContactEr = $('contacts-error');
    const spanTermEr = $('terms-error');
    //get giá trị in ra màn hình
    const emailSpan = $('span-email');
    const phoneSpan = $('span-phone');
    const countrySpan = $('span-country');
    const contactSpan = $('span-contact');
    const termsSpan = $('span-term');
    // 
    let contactElements = document.getElementsByName("contact")
    let termEl = $("term");
    let contact = "";
    let termAccept = termEl.checked;
    for (let index = 0; index < contactElements.length; index++) {
        const element = contactElements[index];
        if (element.checked == true) {
            contact = element.value;
        }
    }
    // in tham số ra màn hình. tham chiếu vào nhiều giá trị
    emailSpan.innerHTML = "Email:" + emailElement;
    phoneSpan.innerHTML = "Phone:" + phoneElement;
    countrySpan.innerHTML = "Country:" + countryElement;
    contactSpan.innerHTML = "Contact:" + contact;
    termsSpan.innerHTML = "Terms:" + termAccept;
    // điều kiện lỗi form
    if (emailElement.trim().length == 0) {
        spanEmailEr.innerText = "this field is required"
        spanEmailEr.style.color = "red"
    } else {
        spanEmailEr.innerText = "";
    }

    if (phoneElement.trim().length == 0) {
        spanPhoneEr.innerText = "this field is required"
        spanPhoneEr.style.color = "red"
    } else {
        spanPhoneEr.innerText = "";
    }

    if (countryElement.trim().length == 0) {
        spanCountryEr.innerText = "this field is required"
        spanCountryEr.style.color = "red"
    } else {
        spanCountryEr.innerText = "";
    }

    if (contact.trim().length == 0) {
        spanContactEr.innerText = "this field is required"
        spanContactEr.style.color = "red"
    } else {
        spanContactEr.innerText = "";
    }
    // nếu điều kiện lớn hơn 0 sẽ in ra màn hình
    if (emailElement.trim().length > 0 && phoneElement.trim().length > 0 && countryElement.trim().length > 0 && contact.trim().length > 0) {
        document.write(emailElement, phoneElement, countryElement, contact, termAccept)
    }

}

window.onload = function() {
        $('submit').onclick = submitForm;
        $('reset').onclick = resetForm;
    }
    // if (emailElement.trim().length == 0) {
    //     emailEr.innerText = "this field is required"
    //     emailEr.style.color = "red"
    // } else {
    //     emailEr.innerText = "";
    // }

// if (phoneElement.trim().length == 0) {
//     phoneEr.innerText = "this field is required"
//     phoneEr.style.color = "red"
// } else {
//     phoneEr.innerText = "";
// }

// if (countryElement.trim().length == 0) {
//     countryEr.innerText = "this field is required"
//     countryEr.style.color = "red"
// } else {
//     countryEr.innerText = "";
// }

// if (contact.trim().length == 0) {
//     contactEr.innerText = "this contact"
//     contactEr.style.color = "red"
// } else {
//     contactEr.innerText = "";
// }

// function createTable(emailElement, phoneElement, countryElement, termAccept) {
//     // const thead = document.createElement("thead");
//     const tbody = document.createElement("tbody");
//     const ttd = document.createElement("ttd");
//     const table = $('table');
//     table.appendChild(tbody);
//     table.appendChild(ttd);

//     const row1 = tbody.insertRow(-1);
//     const row2 = tbody.insertRow(-1);
//     const row3 = tbody.insertRow(-1);
//     const row4 = tbody.insertRow(-1);
//     const row5 = tbody.insertRow(-1);
//     const row6 = tbody.insertRow(-1);
//     row1.innerHTML = "<h2>Please review your entries and complete all requied fields</h2>"
//     row2.innerHTML = "Email:" + emailElement;
//     row3.innerHTML = "Phone:" + phoneElement;
//     row4.innerHTML = "Country:" + countryElement;
//     row5.innerHTML = "Contact:";
//     row6.innerHTML = "Terms:" + termAccept;
// }