'use strict'

const FAQ_question = document.getElementById('FAQ_question');
const FAQ_answer = document.getElementById('FAQ_answer');

FAQ_question.addEventListener('click', () => {
    FAQ_answer.classList.toggle('appear');
});
