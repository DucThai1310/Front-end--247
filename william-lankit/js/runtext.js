const animatedText = document.querySelector('.animated-text');
const originalText = "ever created for developer";
const textLength = originalText.length;
let currentIndex = 1;
let isReversing = false;

function animateText() {
    const slicedText = originalText.slice(0, currentIndex);
    animatedText.innerText = slicedText;

    if (!isReversing) {
        currentIndex++;
        if (currentIndex > textLength) {
            currentIndex = textLength;
            isReversing = true;
            setTimeout(animateText, 2000);
        } else {
            setTimeout(animateText, 200);
        }
    } else {
        currentIndex--;
        if (currentIndex < 1) {
            currentIndex = 1;
            isReversing = false;
            setTimeout(animateText, 2000);
        } else {
            setTimeout(animateText, 200);
        }
    }
}

window.onload = () =>{
    animateText();
}