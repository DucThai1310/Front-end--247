function $(id) {
  return document.getElementById(id);
}
function register() {
  let emailVal, phoneVal, countryVal, acceptVal, contactVal;
  const emailAddress = $('email_address').value.trim();
  const phone = $('phone').value.trim();
  const country = $('country').value.trim();
  const contacts = document.getElementsByName('contact');
  let isAccept = $('terms').checked;
  let contact = '';
  let isError = false;
  for (let index = 0; index < contacts.length; index++) {
    const element = contacts[index];
    if (element.checked == true) {
      contact = element.value;
    }
  }

  // table
  const headerTable = 'Please review your entries and complete all required fields';
  const messageRequired = '<span>Required field.</span>';
  const tableEl = $('registration_info');
  const headerEl = $('registration_header');

  //validate
  if (emailAddress == '') {
    emailVal = messageRequired;
    isError = true;
  } else {
    emailVal = emailAddress;
  }
  if (phone == '') {
    phoneVal = messageRequired;
    isError = true;
  } else {
    phoneVal = phone;
  }
  if (country == '') {
    countryVal = messageRequired;
    isError = true;
  } else {
    countryVal = country;
  }
  if (contact == '') {
    contactVal = messageRequired;
    isError = true;
  } else {
    contactVal = contact;
  }
  if (isAccept == false) {
    acceptVal = messageRequired;
    isError = true;
  } else {
    acceptVal = 'Yes';
  }
  //
  if (isError == true) {
    //reset table
    tableEl.innerHTML = '';
    //set text for header
    headerEl.innerText = headerTable;
    //insert one row
    const rowEmail = tableEl.insertRow(-1);
    rowEmail.innerHTML = `<td>Email:</td><td>${emailVal}</td>`;
    const rowPhone = tableEl.insertRow(-1);
    rowPhone.innerHTML = `<td>Phone:</td><td>${phoneVal}</td>`;
    const rowCountry = tableEl.insertRow(-1);
    rowCountry.innerHTML = `<td>Country:</td><td>${countryVal}</td>`;
    const rowContact = tableEl.insertRow(-1);
    rowContact.innerHTML = `<td>Contact:</td><td>${contactVal}</td>`;
    const rowAccept = tableEl.insertRow(-1);
    rowAccept.innerHTML = `<td>Accept:</td><td>${acceptVal}</td>`;
  } else {
    $('registration_form').submit();
  }
}
function reset() {
  $('registration_form').reset();
  $('registration_info').innerHTML = '';
  $('registration_header').innerHTML = '';
}
window.onload = function () {
  $('register').onclick = register;
  $('reset_form').onclick = reset;
  $('email_address').focus();
};
