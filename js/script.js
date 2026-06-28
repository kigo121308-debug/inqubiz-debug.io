'use strict';

history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const loading = document.getElementById('loading');
const content = document.getElementById('contents');
const video = document.getElementById('loadingvideo');

if (window.matchMedia('(max-width: 768px)').matches) {
  video.src = '../videos/802968779.740666_0.mp4';
} else if (window.matchMedia('(max-width: 1024px)').matches) {
  video.src = '../videos/inQubiz_introduction.mp4';
} else {
  video.src = '../videos/IMG_2996.mp4';
}

if (sessionStorage.getItem('introplayed')) {
  loading.remove();
  content.style.display = 'block';
} else {
  sessionStorage.setItem('introplayed', 'true');
  video.addEventListener('ended', () => {
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.remove();
      content.style.display = 'block';
    }, 2000);
  });
}

window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
});

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
