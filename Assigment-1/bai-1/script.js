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
    document.write("<br>", "x = ", x);
}
window.onload = function () {
    // bài 1
    swapValues();
    // bài 2
    resultAverage();
    // bài 3
    resultFinX();
}