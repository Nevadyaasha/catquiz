

let confirmButtons = document.querySelectorAll('.btn_confirm');
let nextQuestionButtons = document.querySelectorAll('.btn_nextquestion');
let questionList = document.querySelector('.question-list');
let resultsButton = document.querySelector('.btn_results')

for (let i = 0; i < confirmButtons.length; i++) {
    confirmButtons[i].onclick = function () {

        if (i < (confirmButtons.length - 1) ) {
            confirmButtons[i].classList.add('btn_hidden');
            nextQuestionButtons[i].classList.remove('btn_hidden');
        }

        else {
            confirmButtons[i].classList.add('btn_hidden');
            resultsButton.classList.remove('btn_hidden')
        }

    }
}

for (let i = 0; i < nextQuestionButtons.length; i++) {
    nextQuestionButtons[i].onclick = function () {
        questionList.style.marginLeft = '-' + (i + 1) + '00%';
    }
}
