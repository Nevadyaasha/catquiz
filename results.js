const score = Number(new URLSearchParams(location.search).get('score'));
if (score > 4) {
    let result1 = document.querySelector('.result1');
    result1.classList.add('result1_visible');
    result1.querySelector('h1').innerText += score;
    document.body.classList.add('result1background')
} else {
    let result2 = document.querySelector('.result2');
    result2.classList.add('result2_visible');
    result2.querySelector('h1').innerText += score;
    document.body.classList.add('result2background')
}