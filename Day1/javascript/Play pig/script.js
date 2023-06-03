var $ = function (id) {
    return document.getElementById(id);
};

var getRandomNumber = function (max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random();
        random = Math.floor(random * max);
        random = random + 1;
    }
    return random;
};

var changePlayer = function () {
    if ($('current').firstChild.nodeValue == $("player1")) {
        $('current').firstChild.nodeValue = $("player2").value;
    } else {
        $('current').firstChild.nodeValue = $("player1").value;
    }
    $("die").value = "0";
    $("total").value = "0";
    $("roll").focus();
};

var newGame = function () {
    $("score1").textContent = "0";
    $("score2").textContent = "0";
    if ($("player1").value == "" || $("player2").value == "") {
        $("turn").removeAttribute("class");
        alert("please enter two player names.");
    } else {
        $("turn").setAttribute("class", "open");
        changePlayer();
    }
};

var rollDice = function () {
    var total = parseInt($("total").value);
    var numRolls = getRandomNumber(6); // random số từ 1 - 6
    var die;

    for (var i = 0; i < numRolls; i++) {
        die = getRandomNumber(6); // lăn xúc xúc
        if (die == 1) {
            total = 0;
            changePlayer();
            break; // kết thúc vòng lặp
        } else {
            total = total + die;
        }
    }

    $("die").value = die;
    $("total").value = total;
};

var holdTurn = function () {
    var score;
    var total = parseInt($("total").value);
    if ($("current").firstChild.nodeValue == $("player1").value) {
        score = $("score1");
    } else {
        score = $("score2");
    }
    var currentScore = parseInt(score.textContent);
    var newScore = currentScore + total;
    score.textContent = newScore;
    if (newScore >= 100) {
        alert($("current").firstChild.nodeValue + " WINS!");
        newGame();
    } else {
        changePlayer();
    }
};

window.onload = function () {
    $("new_game").onclick = newGame;
    $("roll").onclick = rollDice;
    $("hold").onclick = holdTurn;
};
