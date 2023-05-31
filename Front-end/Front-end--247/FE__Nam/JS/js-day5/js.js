// const form = document.getElementById('form');

// console.log(form.childNodes);

function $(id) {
    return document.getElementById(id);
}
function clickQuestion(question,questionListElement) {
    //dòng hết các answer 
  for (var index = 0 ; i < questionListElement.length ; index++ ) {
    // lay cac phần tử câu hỏi
    const questionElement = questionListElement[index];
    //remove clas của các câu trả lời
    questionElement.nextElementSibling.removeAttribute('class');
  }
  // set attribute class cho cái câu hỏi đang click
  const answer = question.nextElementSibling;
  answer.setAttribute('class','open');
}
// function clickQuestion() {
//     const question = this;
// }
window.onload = function() {
    // lấy faqs element
    const faqsElement = $("faqs");
    // lấy cả câu hỏi thông có cái tag
    const questionListElement = faqsElement.getElementsByTagName("h2");
    for (var index = 0 ; i < questionListElement.length ; index++ ) {
        const questionElement = questionListElement[index];
        // element.onclick = clickQuestion;
        questionElement.onclick = function() {
            clickQuestion(questionElement, questionListElement);
        };
    }
}