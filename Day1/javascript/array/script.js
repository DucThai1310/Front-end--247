var scores = [];
var total = 0;
var show = "The test scores:" + "<br>";

do {
    var entry = parseInt(prompt("Enter test score\n" +
        "or enter 999 to end entries", 999));

    if (entry >= 0 && entry <= 100) {
        scores.push(entry); //add giá trị vào mảng scores.
    } else if (entry !== 999) {
        alert("Entry must be a valid number from 0 through 100\n" +
            "Or enter -1 to end entries");
    }
} while (entry !== 999);

for (var i = 0; i < scores.length; i++) {
    total += scores[i];
    show += scores[i] + "\n";
}

var average = total / scores.length;

document.write(show+ "<br>" + "\nAverage score is: " + average.toFixed(2));