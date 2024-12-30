

let confirmButtons = document.querySelectorAll('.btn_confirm');
let nextQuestionButtons = document.querySelectorAll('.btn_nextquestion');
let questionList = document.querySelector('.question-list');
let resultsButton = document.querySelector('.btn_results')
let score = 0;

for (let i = 0; i < confirmButtons.length; i++) {
    confirmButtons[i].onclick = function () {
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
            const solutions = [true, false, true, true, false];
            let questionFailed = false;

            form.children[0].classList.remove('border');

            for (let k = 0; k < allAnswers.length; k++) {
                allAnswers[k].parentElement.classList.remove('border-bottom');
                allAnswers[k].parentElement.classList.add('border');

                if (allAnswers[k].checked !== solutions[k]) {
                    questionFailed = true;
                }
                if (solutions[k]) {
                    allAnswers[k].parentElement.classList.add('border-success');
                }
                else if (allAnswers[k].checked) {
                    allAnswers[k].parentElement.classList.add('border-danger');
                }
            }
            if (!questionFailed) {
                score++;
            }
        }
        else if (i === 1) {
            let form = document.querySelector('[name="question2"]');
            let allAnswers = form.querySelectorAll('input');
            const solutions = [false, false, true, false];
            let questionFailed = false;


            for (let k = 0; k < allAnswers.length; k++) {

                if (allAnswers[k].checked !== solutions[k]) {
                    questionFailed = true;
                }
                if (solutions[k]) {
                    allAnswers[k].nextSibling.nextSibling.classList.add('border-success');
                }
                else if (allAnswers[k].checked) {
                    allAnswers[k].nextSibling.nextSibling.classList.add('border-danger');
                }
            }
            if (!questionFailed) {
                score++;
            }
        }
        else if (i === 2) {
            let form = document.querySelector('[name="question3"]');
            let allAnswers = form.querySelectorAll('input');
            const solutions = [false, false, true, false, false];
            let questionFailed = false;

            form.children[0].classList.remove('border');


            for (let k = 0; k < allAnswers.length; k++) {
                allAnswers[k].parentElement.classList.remove('border-bottom');
                allAnswers[k].parentElement.classList.add('border');
                if (allAnswers[k].checked !== solutions[k]) {
                    questionFailed = true;
                }
                if (solutions[k]) {
                    allAnswers[k].parentElement.classList.add('border-success');
                }
                else if (allAnswers[k].checked) {
                    allAnswers[k].parentElement.classList.add('border-danger');
                }
            }
            if (!questionFailed) {
                score++;
            }
        }
    }

}

for (let i = 0; i < nextQuestionButtons.length; i++) {
    nextQuestionButtons[i].onclick = function () {
        questionList.style.marginLeft = '-' + (i + 1) + '00%';
    }
}
