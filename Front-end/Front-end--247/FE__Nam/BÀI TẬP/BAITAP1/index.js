// Bài 1
// var a = 1;
// var b = 2;
// var c = 0;
// c = a;
// a = b;
// b = c;
// document.write("a:", a + "<br>");
// document.write("b:", b + "<br>");
// Bài 2
// var toan = parseFloat(prompt("Vui lòng nhập điểm toán"));
// var li = parseFloat(prompt("Vui lòng nhập điểm lí"));
// var hoa = parseFloat(prompt("Vui lòng nhập điểm hoá"));
// var avg = parseFloat((toan + li + hoa) / 3);
// avg = avg.toFixed(2);

// if (avg >= 8) {
//     document.write("Xếp loại A: ", avg);
// } else if (avg >= 6.5) {
//     document.write("Xếp loại B: ", avg);
// } else if (avg >= 5.0) {
//     document.write("Xếp loại C: ", avg);
// } else if (avg < 5.0) {
//     document.write("Xếp loại D: ", avg);
// }
//Bài 3
// var a = parseFloat(prompt("Vui lòng nhập số a"));
// var b = parseFloat(prompt("Vui lòng nhập số b"));

// if (a == 0 && b == 0) {
//     alert('Phương trình vô số nghiệm');
// } else if (a != 0 && b == 0) {
//     alert('Phương trình có nghiệm x = 0');
// } else if (a == 0 && b != 0) {
//     alert("Phương trình vô nghiệm");
// } else {
//     alert('Phương trình có nghiệm x = ' + (-b / a));
// }
//Bài 4
// var a = parseFloat(prompt("Vui lòng nhập số a"));
// var b = parseFloat(prompt("Vui lòng nhập số b"));
// var c = parseFloat(prompt("Vui lòng nhập số c"));
// var detal = (b * b) - 4 * a * c;
// detal = detal.toFixed(2);
// let x1, x2, x;
// if (a == 0 && b == 0 && c == 0) {
//     alert('Phương trình vô số nghiệm');
// } else if (a == 0 && b == 0 && c != 0) {
//     alert('Phương trình Vô Nghiệm');
// } else if (a == 0 && b != 0 && c == 0) {
//     x = -c / b
//     alert("Phương trình có nghiệm là: x = " + x);
// }
// if (detal < 0) {
//     alert('Phương trình vô nghiệm');
// }
// if (detal == 0) {
//     alert('Phương trình có nghiệm kép');
//     alert(`${x = -b / (2 * a)}`)
// }
// if (detal > 0) {
//     alert('Phương trình có 2 nghiệm phân biệt');
//     alert(`${x1 = (-b + Math.sqrt(detal))/2*a}`)
//     alert(`${x2 = (-b - Math.sqrt(detal))/2*a}`)
// }
//bài 5
// //  nhập n
// var n = parseInt(prompt("Vui lòng nhập n"));
// var s = 0;
// // nhập n=50
// if (n < 51) {
//     document.write("Số n: " + n);
// } else {
//     alert("lỗi");
// }
// for (var i = 0; i < n; i++) {
//     if (i > n) {
//         document.write("Kết thúc", n);
//     }
// }
//bài 6
// nhập n
// const n = parseInt(prompt('Enter the number of terms: '));
// if (n < 21) {
//     let n1 = 0,
//         n2 = 1,
//         nextTerm;
//     document.write('Fibonacci Series:');
//     // vòng lặp cộng dồn
//     for (let i = 1; i <= n; i++) {
//         document.write(n1 + "<br>");
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
// } else {
//     alert("lỗi");
// }
// bài 7
//cách 1
var ThongTin1 = {
    studentCode: 1,
    studentName: 'Nam',
    studentAge: 20,
    studentSex: 'Nam',
    getStudentCode: function() {
        return this.studentCode;
    }
}
var ThongTin2 = {
    studentCode: 2,
    studentName: 'Nụ',
    studentAge: 19,
    studentSex: 'Nữ',
}
var ThongTin3 = {
    studentCode: 3,
    studentName: 'Hiền',
    studentAge: 19,
    studentSex: 'Nụ',
}
console.log(ThongTin1);
//cách 2
// function User(studentCode, studentName, studentAge, studentSex) {
//     this.studentCode = studentCode;
//     this.studentName = studentName;
//     this.studentAge = studentAge;
//     this.studentSex = studentSex;
// }
// var ThongTin1 = new User("1", "Nam", "20", "Nam");
// console.log(ThongTin1);