const checkbox = document.getElementById('btn__count');
const span = document.getElementById('number');

let currentValue = 49;
let count = 0;
let decreasing = true;
let intervalId = null;


checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        decreasing = true;
        currentValue = 49;
        span.innerText = currentValue.toString();
        clearInterval(intervalId);
    } else {
        decreasing = false;
        currentValue = 29;
        span.innerText = currentValue.toString();
        clearInterval(intervalId);
    }
});

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        intervalId = setInterval(decreaseValue, 100);
    } else {
        intervalId = setInterval(increaseValue, 100);
    }
});

function decreaseValue() {
    currentValue -= 2;
    span.innerText = currentValue.toString();
    if (currentValue <= 29) {
        clearInterval(intervalId);
    }
}

function increaseValue() {
    currentValue += 2;
    span.innerText = currentValue.toString();
    if (currentValue >= 49) {
        clearInterval(intervalId);
    }
}

// count 0 - 100%

const spanElement = document.querySelector('.Satisfaction');
const spanElement1 = document.querySelector('.number-sales');
let value = 0;

function incrementValue() {
    spanElement.textContent = value + '%';
    spanElement1.textContent = value + 'k+';
    value += 10;

    if (value > 100) {
        clearInterval(interval);
    }
}

const interval = setInterval(incrementValue, 500);