//bài swap

function swapValues(a, b) {
    var a = parseFloat(prompt("swapper\n" +
        "enter a:"));
    var b = parseFloat(prompt("swapper\n" + "enter b:"));
    document.write("bài 1 ; swapper ", "<br>", "<br>");
    document.write("Before swapping:", "<br>");
    document.write("a =", a, "<br>");
    document.write("b =", b, "<br>");
    var c;
    for (var i = 0; i < 1; i++) {
        c = a;
        a = b;
        b = c;
    }
    document.write("After swapping:", "<br>");
    document.write("a =", a, "<br>");
    document.write("b =", b, "<br>");
}

//bài 2 
function calculateAverage(math, physics, chemistry) {
    var average = (parseFloat(math) + parseFloat(physics) + parseFloat(chemistry)) / 3.0;
    return average;
}
function assignRank(average) {
    if (average >= 8.0) {
        return "A";
    } else if (average >= 6.5) {
        return "B";
    } else if (average >= 5.0) {
        return "C";
    } else {
        return "D";
    }
}
function resultAverage() {
    var mathScore = prompt("calculateAverage\n" + "Enter the math score: ");
    var physicsScore = prompt("calculateAverage\n" + "Enter the physics score : ");
    var chemistryScore = prompt("calculateAverage\n" + "Enter the chemistry score: ");
    // tính trung bình
    var averageScore = calculateAverage(mathScore, physicsScore, chemistryScore);
    // xếp hạng a,b,c,d
    var rank = assignRank(averageScore);
    // in kết quả
    document.write("<br>", "<br>", "bài 2: calculate Average", "<br>", "<br>");
    document.write("Average score:", averageScore, "<br>");
    document.write("Rank:", rank, "<br>");
}


// bài 3 tìm nghiệm ax + b = 0

function findX(a, b) {
    if (a === 0) {
        if (b === 0) {
            return "Vô số nghiệm";
        } else {
            return "không có nghiệm";
        }
    } else {
        var x = -b / a;
        return x;
    }
}

function resultFinX() {
    var a = parseFloat(prompt("find X\n" + "enter the values of a: "));
    var b = parseFloat(prompt("find X\n" + "enter the values of b: "));
    // Giải phương trình và tìm giá trị của x
    var x = findX(a, b);
    // Hiển thị kết quả
    document.write("<br>", "<br>", "bài 3 : Find ax - b = 0");
    document.write("<br>", "a =", a);
    document.write("<br>", "b =", b);
    document.write("<br>", "x = ", x, "<br>");
}

// bài 4 ax2 + b + c = 0

function findX2(a, b, c) {
    // hàm delta có công thứ b^2 - 4ac
    // Nếu discriminant > 0, phương trình có hai nghiệm thực phân biệt.
    // Nếu discriminant = 0, phương trình có một nghiệm kép(có hai nghiệm trùng nhau).
    // Nếu discriminant < 0, phương trình có hai nghiệm phức phân biệt.
    var delTa = b * b - 4 * a * c;

    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                return "Vô số nghiệm";
            } else {
                return "không có nghiệm";
            }
        } else {
            var x = -c / b;
            return "Nghiệm duy nhất: x = " + x.toFixed(2);
        }
        // Nếu delta > 0: Chương trình sẽ tính và trả về hai nghiệm thực phân biệt x1 và x2, được tính theo công thức x1 = (-b + √delta) / (2a) và x2 = (-b - √delta) / (2a).
    } else if (delTa > 0) {
        var x1 = (-b + Math.sqrt(delTa)) / (2 * a);
        var x2 = (-b - Math.sqrt(delTa)) / (2 * a);
        return "Hai nghiệm thực: x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2);
        // Nếu delta = 0: Chương trình sẽ tính và trả về nghiệm kép x = -b / (2a).
    } else if (delTa === 0) {
        var x = -b / (2 * a);
        return "Nghiệm kép: x = " + x.toFixed(2);
        // Nếu delta < 0: Chương trình sẽ tính và trả về hai nghiệm phức phân biệt x1 và x2, được hiển thị dưới dạng phần thực và phần ảo.
    } else {
        var realPart = -b / (2 * a);
        var imaginaryPart = Math.sqrt(-delTa) / (2 * a);
        return "<br>" + "nghiệm phức :" + "<br>" + "x1 = " + realPart.toFixed(2) + " + " + imaginaryPart.toFixed(2) + "i" + "<br>" +
            " x2 = " + realPart.toFixed(2) + " - " + imaginaryPart.toFixed(2) + "i";
    }
}

function resultFinX2() {
    var numEquations = parseInt(prompt("nhập số lần muốn thực hiện nghiệm : "));
    // Solve each quadratic equation
    for (var i = 1; i <= numEquations; i++) {
        document.write("giải phương trình #" + i);

        // nhập giá trị a b c
        var a = parseFloat(prompt("nhập giá trị của A cho phương trình # " + i + ": "));
        var b = parseFloat(prompt("nhập giá trị của B cho phương trình #" + i + ": "));
        var c = parseFloat(prompt("nhập giá trị của C cho phương trình #" + i + ": "));

        // Gọi hàm giải phương trình và in result
        var result = findX2(a, b, c);
        document.write(result);
    }
}
// bài 5 tính cộng 50 số nguyên
function sum50Number() {
    var sum = 0;
    for (var i = 1; i <= 50; i++) {
        sum += i;
        console.log(sum)
    }
    return sum;
}
function resultSum() {
    var sum = sum50Number();
    document.write("Sum of the first 50 integer numbers: " + sum);
}


function fibonacciNumbers(count) {
    // Khởi tạo với hai số Fibonacci đầu tiên
    var fib = [0, 1];
    // Tạo các số Fibonacci
    for (var i = 2; i < count; i++) {
        var nextNumber = fib[i - 1] + fib[i - 2];
        fib.push(nextNumber);
    }
    // In ra các số Fibonacci
    for (var i = 0; i < count; i++) {
        console.log(fib[i]);
    }
}




// bài 7 add student 
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
window.onload = function () {
    // // bài 1
    // swapValues();
    // document.write('\n--------------------------\n');
    // // bài 2
    // resultAverage();
    // document.write('\n--------------------------\n');
    // // bài 3
    // resultFinX();
    // document.write('\n--------------------------\n');
    // bài 4
    // resultFinX2();
    // document.write("<br>" + '--------------------------\n');
    //bài 5
    // resultSum();
    //bài 6
    // fibonacciNumbers(20);
    //bài 7 
    $('add_student').onclick = addStudent;
    $("student_code").focus();
}