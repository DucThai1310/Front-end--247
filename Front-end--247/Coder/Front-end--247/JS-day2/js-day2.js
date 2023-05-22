// var nhap = parseInt(prompt("Vui lòng bạn nhập vào"));

// if(isNaN(nhap)) {
//     alert("bạn đã nhập sai");
// }else if(nhap < 5) {
//     alert("bạn được nhập từ 1 đến 4");
// }else if(nhap < 10) {
//     alert("bạn được nhập từ 5 đến 9");
// }else {
//     alert("bạn vừa nhập là: " + nhap + '.');
// }

// var count = 1,
//  sum = 0;
// while(count < 5) {
//     sum += count;
//     count++;
// }
// alert(sum);

// var again = "y"
// do {
//     var miles = parseInt(prompt("Vui lòng bạn nhập miles"));
//     var gallons = parseInt(prompt("Vui lòng bạn nhập gallons"));
// }
// while(again == "y");
// let again = "y"
// while(again == "y" || again == "yes") {
    // const nhap = parseInt(prompt("Vui lòng bạn nhập vào"));
//     if(isNaN(nhap)) {
//         alert("bạn đã nhập sai");
//     }else if(nhap < 5) {
//         alert("bạn được nhập từ 1 đến 4");
//     }else if(nhap < 10) {
//         alert("bạn được nhập từ 5 đến 9");
//     }else {
//         alert("bạn vừa nhập là: " + nhap + '.');
//     }
//     again = prompt("enter again (yes or y): ");
// }
// alert("exit!");

// document.write(money);
// document.write(rate);
// document.write(yeah);
let amount = parseInt(prompt("Enter amout: "))
let rate = parseFloat(prompt("Enter rate(%): "))
let years = parseInt(prompt("Enter years: "))

if( isNaN(amount) || isNaN(rate) || isNaN(years)) {
    alert("Your enter not");
}else {
    let future_value = amount;
    for(let index = 1; index < years ; index++) {
        future_value += future_value * rate;
    }

    document.write("Amount = " + amount);
    document.write("rate = " + rate);
    document.write("years = " + years);

    document.write("future = " + future_value);
    document.write("future okkkkkk ");
}