window.onload = function () {
  // var invoice = {
  //   taxRate: 0.13,
  //   log: function () {
  //     console.log(this.taxRate);
  //   },
  // };
  // invoice.taxRate = 0.1;
  // invoice.log = function () {
  //   console.log('tax Rate:', this.taxRate);
  // };
  // invoice.getSaleTax = function (subtotal) {
  //   return subtotal * this.taxRate;
  // };
  // invoice.getTotal = function (subtotal) {
  //   return subtotal + this.getSaleTax(subtotal);
  // };

  //cach 1: khoi tao constructor
  var Invoice = function (rate) {
    this.taxRate = rate;

    this.getSaleTax = function (subtotal) {
      return subtotal * this.taxRate;
    };
    this.getTotal = function (subtotal) {
      return subtotal + this.getSaleTax(subtotal);
    };
  };
  //add 1 method into constructor function
  Invoice.prototype.log = function () {
    console.log('taxRate:', this.taxRate);
  };
  // add 1 property into constructor function
  Invoice.prototype.dueDate = 30;
// khoi tao 1 object tu  constructor
  var invoice = new Invoice(0.1);
  console.log("🚀 ~ file: script.js:38 ~ invoice:", invoice)

  
  //############################
  //cach 2: dung object.create()
// tao prototype
  const invoicePrototype = {
    getTotal: function (subtotal) {
      return subtotal + subtotal * this.taxRate;
    },
    getSaleTax: function (subtotal) {
      return subtotal * this.taxRate;
    },
  };
  //tao cac object va gan cac prototype vao object
  var invoiceA = Object.create(invoicePrototype);
  invoiceA.taxRate = 0.1;
  console.log("🚀 ~ file: script.js:55 ~ invoiceA:", invoiceA)

};
