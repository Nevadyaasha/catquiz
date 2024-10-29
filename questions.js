

let confirmButtons = document.querySelectorAll('.btn_confirm');
let nextQuestionButtons = document.querySelectorAll('.btn_nextquestion');
let questionList = document.querySelector('.question-list');
let resultsButton = document.querySelector('.btn_results')
let score = 0;

for (let i = 0; i < confirmButtons.length; i++) {
    confirmButtons[i].onclick = function () {
        //STOGO NE POSLEDNAYA I
        if (i < (confirmButtons.length - 1)) {
            confirmButtons[i].classList.add('btn_hidden');
            nextQuestionButtons[i].classList.remove('btn_hidden');
        }

        else {
            confirmButtons[i].classList.add('btn_hidden');
            resultsButton.classList.remove('btn_hidden')
        }
        if (i === 0) {
            let form = document.querySelector('[name="question1"]');
            let allAnswers = form.querySelectorAll('input');
            const solutions = [true,false,true,true,false];
            let questionFailed = false;

            form.children[0].classList.remove('border');

            for (let k = 0; k < allAnswers.length; k++) {
                allAnswers[k].parentElement.classList.remove('border-bottom');
                allAnswers[k].parentElement.classList.add('border');


                if (allAnswers[k].checked !== solutions[k]) {
                    questionFailed = true;
                }
            }
            let rigthAnswers = form.querySelectorAll('input[value="option1"],input[value="option3"],input[value="option4"]');
            for (let j = 0; j < rigthAnswers.length; j++) {
                rigthAnswers[j].parentElement.classList.add('border-success');
            }
            let wrongAnswers = form.querySelectorAll('input[value="option2"],input[value="option5"]');
            for (let j = 0; j < wrongAnswers.length; j++) {
                if (wrongAnswers[j].checked === true) {
                    wrongAnswers[j].parentElement.classList.add('border-danger');
                }
            }

            if (questionFailed === false) {
                score++
            }
        }
    }

}

for (let i = 0; i < nextQuestionButtons.length; i++) {
    nextQuestionButtons[i].onclick = function () {
        questionList.style.marginLeft = '-' + (i + 1) + '00%';
    }
}
