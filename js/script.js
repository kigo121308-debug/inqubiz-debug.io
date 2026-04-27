'use strict';

// HamMenu
const ham = document.querySelector('#js_Ham');
const nav = document.querySelector('#js_Nav');

ham.addEventListener('click', function() {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});
// HamMenuここまで

// FAQ
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.FAQ_item');

  faqItems.forEach(item => {
    const questionWrap = item.querySelector('.FAQ_Question_wrap');
    const answerWrap = item.querySelector('.FAQ_Answer_wrap');
    const plusIcon = item.querySelector('.plus_icon');

    questionWrap.addEventListener('click', () => {
      // 回答表示の切り替え
      answerWrap.classList.toggle('active');

      // アイコンの切り替え
      plusIcon.classList.toggle('active');
    });
  });
});

// FAQここまで
