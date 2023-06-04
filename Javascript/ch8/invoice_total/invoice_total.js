'use strict';
var $ = function (id) {
  return document.getElementById(id);
};

var calculateDiscountPercent = function (customerType, subtotal) {
  let discountPercent = 0;
  switch (customerType) {
    case 'r':
      discountPercent = 0;
      break;
    case 'l':
      if (subtotal < 100) {
        discountPercent = 0;
      } else if (subtotal < 250) {
        discountPercent = 0.1;
      } else if (subtotal < 500) {
        discountPercent = 0.25;
      } else {
        discountPercent = 0.3;
      }
      break;
    case 'h':
      discountPercent = 0.4;
      break;
    default:
      discountPercent = 0;
      break;
  }
  return discountPercent;
};
var display = function (discountPercent, discountAmount, invoiceTotal, invoiceSubtotal) {
  $('subtotal').value = invoiceSubtotal;
  $('percent').value = discountPercent * 100;
  $('discount').value = discountAmount;
  $('total').value = invoiceTotal;
};
var processEntries = function () {
  var discountAmount = 0;
  var invoiceTotal = 0;
  var discountPercent = 0;
  const typeCustomer = $('type').value;
  let invoiceSubtotal = parseFloat($('subtotal').value.trim());
  if (isNaN(invoiceSubtotal)) {
    alert('please enter number of invoice!');
  } else {
    invoiceSubtotal = parseFloat(invoiceSubtotal.toFixed(2));
    discountPercent = calculateDiscountPercent(typeCustomer, invoiceSubtotal);
    discountAmount = parseFloat((invoiceSubtotal * discountPercent).toFixed(2));
    invoiceTotal = invoiceSubtotal - discountAmount;
    display(discountPercent, discountAmount, invoiceTotal, invoiceSubtotal);
  }
};

window.onload = function () {
  $('calculate').onclick = processEntries;
  $('type').focus();
};
