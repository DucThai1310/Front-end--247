function $(id) {
    return document.getElementById(id);
}

function SubmitForm(e) {
    e.preventDefault();
    //get element
    let firstNameElement = $('first-name')
    let commentElement = $("comment");
    let countryElement = $("country");
    let contactElements = document.getElementsByName("contact")
    let termEl = $("term");
    //get value input
    let firstName = firstNameElement.value;
    //get value textarea
    let comment = commentElement.value;
    //get value select
    let country = countryElement.value;

    //get value checked
    let contact;
    let termAccept = termEl.checked;
    for (let index = 0; index < contactElements.length; index++) {
        const element = contactElements[index];
        if (element.checked == true) {
            contact = element.value;
        }

    }
    document.write({ firstName, comment, country, termAccept });
}

function createTable() {
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const table = $('table');
    table.appendChild(tbody);
    table.appendChild(thead);

    const row = tbody.insertRow(-1);
    const cell = row.insertCell(-1);
    const textNode = document.createTextNode("this is text node");
    cell.appendChild(textNode);

    const row1 = tbody.insertRow(-1);
    row1.innerHTML = "<a>ta</a>"
}
window.onload = function() {
    $('submit').onclick = SubmitForm;
    // $('first-name').focus();
    createTable()
};