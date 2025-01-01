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
        allAnswers[k].disabled = true;
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
        allAnswers[k].disabled = true;
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
        allAnswers[k].disabled = true;
      }
      if (!questionFailed) {
        score++;
      }
    }
    else if (i === 3) {
      let form = document.querySelector('[name="question4"]');
      let allAnswers = form.querySelectorAll('select');
      const solutions = ['3', '1', '4', '2'];
      let questionFailed = false;


      for (let k = 0; k < allAnswers.length; k++) {
        if (allAnswers[k].value !== solutions[k]) {
          questionFailed = true;
        }
        if (allAnswers[k].value === solutions[k]) {
          allAnswers[k].classList.add('border-success');
        }
        else {
          allAnswers[k].classList.add('border-danger');
        }
        allAnswers[k].disabled = true;
      }
      if (!questionFailed) {
        score++;
      }
    }
    else if (i === 4) {
      let form = document.querySelector('[name="question5"]');
      let allAnswers = form.querySelector('input');
      let allAges = form.querySelectorAll('.age');
      const solutions = ['12', '14', '16'];
      let questionFailed = false;
      if (!solutions.includes(allAnswers.value)) {
        questionFailed = true;
      }

      for (let k = 0; k < allAges.length; k++) {
        if (solutions.includes(allAges[k].innerText)) {
          allAges[k].classList.add('text-success');
        }
        else {
          allAges[k].classList.add('text-danger');
        }
        allAnswers.disabled = true;
      }

      if (!questionFailed) {
        score++;
      }
    }
    else if (i === 5) {
      let form = document.querySelector('[name="question6"]');
      let allAnswers = form.querySelectorAll('input');
      const solutions = ['option2', 'option1', 'option1', 'option2'];
      let questionFailed = false;

      for (let k = 0; k < solutions.length; k++) {
        const option1 = allAnswers[k * 2];
        const option2 = allAnswers[k * 2 + 1];
        const rightAnswer = solutions[k];

        if (rightAnswer === 'option1') {
          option1.nextSibling.nextSibling.classList.add('border-success');
        } else {
          option2.nextSibling.nextSibling.classList.add('border-success');
        }

        if (option1.checked && rightAnswer === 'option2') {
          option1.nextSibling.nextSibling.classList.add('border-danger');
          questionFailed = true;
        }

        if (option2.checked && rightAnswer === 'option1') {
          option2.nextSibling.nextSibling.classList.add('border-danger');
          questionFailed = true;
        }
        allAnswers[k].disabled = true;
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
