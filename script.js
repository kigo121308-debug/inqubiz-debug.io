'use strict';

// page anchor
const anchorTrigger = document.querySelectorAll('a[href^="#"]')

for (let i = 0; i < anchorTrigger.length; i++) {
  anchorTrigger[i].addEventListener('click', (e) => {
    e.preventDefault()
    let target = 0

    let href = anchorTrigger[i].getAttribute('href')

    if(href != '#') {
      let targetElement = document.getElementById(href.replace('#', ''))
      const rect = targetElement.getBoundingClientRect().top
      const offset = window.pageYOffset
      let header = document.getElementsByClassName('header')[0].clientHeight

      target = (rect + offset) - header
    }

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    })
  })
}

// sp menu
const spMenuBtn = document.getElementsByClassName('header__menu-btn')[0]
const spMenu = document.getElementsByClassName('header__sp-menu')[0]

spMenuBtn.addEventListener('click', function() {
  if(!spMenuBtn.classList.contains('isActive')) {
    spMenuBtn.classList.add('isActive')
    spMenu.classList.add('isActive')

  } else {
    spMenuBtn.classList.remove('isActive')
    spMenu.classList.remove('isActive')

  }
})


// fixed btn show
const fixedBtnTarget = document.getElementsByClassName('footer')[0]
if(fixedBtnTarget) ObserbeFixedBtn(fixedBtnTarget)

function ObserbeFixedBtn(elm) {
  let obsPc = new IntersectionObserver(onIntersectFixedBtn.bind(this))
  obsPc.observe(elm)
}

function onIntersectFixedBtn(elm){
  if (!elm[0].isIntersecting) {
    document.getElementsByClassName('fixed-nav')[0].classList.add('isShow')

  } else {
    document.getElementsByClassName('fixed-nav')[0].classList.remove('isShow')
  }
}

// accordion
const accBtn = [].slice.call(document.getElementsByClassName('c-acc__btn'));
const accContents = [].slice.call(document.getElementsByClassName('c-acc__con'));

for (let i = 0; i < accBtn.length; i++) {
  accBtn[i].addEventListener('click', (e) => {
    if(!accBtn[i].classList.contains('isOpen')) {
      accBtn[i].classList.add('isOpen')
      accContents[i].classList.add('isOpen')

    } else {
      accBtn[i].classList.remove('isOpen')
      accContents[i].classList.remove('isOpen')

    }
  });
}

// movie modal
const movieModalBtn = [].slice.call(document.getElementsByClassName('c-btn__movie'));
const movieModalSectionBtn = [].slice.call(document.getElementsByClassName('section-movie'));
const movieModa = document.getElementsByClassName('c-modal__movie')[0];
const movieModalCont = document.getElementsByClassName('c-modal__movie-cont')[0];
const movieModdalClose = [].slice.call(document.getElementsByClassName('c-modal__movie-close'));

if(movieModalBtn) {
  for (let i = 0; i < movieModalBtn.length; i++) {
    movieModalBtn[i].addEventListener('click', (e) => {
      let movieId = movieModalBtn[i].dataset.movie
      let frame = document.createElement("iframe");
      frame.setAttribute('frameborder', 0)
      frame.setAttribute('allowfullscreen', '')
      frame.classList.add('movie-iframe')
      frame.setAttribute('src', '/n/grandprix/compo/' + movieId + '.html')
      movieModalCont.appendChild(frame);
      movieModa.style.display = 'flex';
    });
  }
}

if(movieModalSectionBtn) {
  for (let i = 0; i < movieModalSectionBtn.length; i++) {
    movieModalSectionBtn[i].addEventListener('click', (e) => {
      let movieId = movieModalSectionBtn[i].dataset.movie
      let frame = document.createElement("iframe");
      frame.setAttribute('frameborder', 0)
      frame.setAttribute('allowfullscreen', '')
      frame.classList.add('movie-iframe')
      frame.setAttribute('src', '/n/grandprix/compo/' + movieId + '.html')
      movieModalCont.appendChild(frame);
      movieModa.style.display = 'flex';
    });
  }
}

if(movieModdalClose) {
  for (let i = 0; i < movieModdalClose.length; i++) {
    movieModdalClose[i].addEventListener('click', (e) => {
      movieModalCont.removeChild(movieModalCont.childNodes[0]);
      movieModa.style.display = 'none';
    });
  }
}

// pic modal
const picModalBtn = [].slice.call(document.getElementsByClassName('c-btn__pic-modal'));
const picModa = document.getElementsByClassName('c-modal__pic')[0];
const picModalCont = document.getElementsByClassName('c-modal__pic-cont')[0];
const picModdalClose = [].slice.call(document.getElementsByClassName('c-modal__pic-close'));

if(picModalBtn) {
  for (let i = 0; i < picModalBtn.length; i++) {
    picModalBtn[i].addEventListener('click', (e) => {
      let picSrc = picModalBtn[i].dataset.pic
      let image = document.createElement('img');
      image.setAttribute('src', '/n/grandprix/assets/images' + picSrc)
      picModalCont.appendChild(image);
      picModa.style.display = 'flex';
    });
  }
}

if(picModdalClose) {
  for (let i = 0; i < picModdalClose.length; i++) {
    picModdalClose[i].addEventListener('click', (e) => {
      picModalCont.removeChild(picModalCont.childNodes[0]);
      picModa.style.display = 'none';
    });
  }
}

// scroll animation trigger
let option = []
for (let i = 0; i <= 1.0; i += 0.01) {
  option.push(i);
}

const scrollAnimationTarget = [].slice.call(document.getElementsByClassName('thisAnimation'));
if(scrollAnimationTarget) {
  for( let i = 0 ; i < scrollAnimationTarget.length ; i++ ) ObserbeScroll(scrollAnimationTarget[i])
}

function ObserbeScroll(elm) {
  if(window.outerWidth >= 768){
    let obsPc = new IntersectionObserver(onIntersectScrollPc.bind(this),{ threshold: option})
    obsPc.observe(elm)

  } else {
    let obsPc = new IntersectionObserver(onIntersectScrollSp.bind(this),{ threshold: .15})
    obsPc.observe(elm)
  }
}

function onIntersectScrollPc(elm){
  if (elm[0].intersectionRatio > .3) {
    elm[0].target.classList.add('isAnimation')
  }
}

function onIntersectScrollSp(elm){
  if (elm[0].isIntersecting) {
    elm[0].target.classList.add('isAnimation')
  }
}

const orderShow = [].slice.call(document.getElementsByClassName('order-show'));
if(orderShow) {
  for( let i = 0 ; i < orderShow.length ; i++ ) ObserbeOrderShow(orderShow[i])
}

function ObserbeOrderShow(elm) {
  if(window.outerWidth >= 768){
    let obsPc = new IntersectionObserver(onIntersectOrderShowPc.bind(this),{ threshold: option})
    obsPc.observe(elm)

  } else {
    let obsPc = new IntersectionObserver(onIntersectOrderShowSp.bind(this),{ threshold: .15})
    obsPc.observe(elm)
  }
}

function onIntersectOrderShowPc(elm){
  if (elm[0].intersectionRatio > .11) {
    elm[0].target.classList.add('isAnimation')

  }
}

function onIntersectOrderShowSp(elm){
  if (elm[0].isIntersecting) {
    elm[0].target.classList.add('isAnimation')

  }
}

const thisFadeIn = [].slice.call(document.getElementsByClassName('thisFadeIn'));
if(thisFadeIn) {
  for( let i = 0 ; i < thisFadeIn.length ; i++ ) ObserbethisFadeIn(thisFadeIn[i])
}

function ObserbethisFadeIn(elm) {
  if(window.outerWidth >= 768){
    let obsPc = new IntersectionObserver(onIntersectthisFadeInPc.bind(this),{ threshold: option})
    obsPc.observe(elm)

  } else {
    let obsPc = new IntersectionObserver(onIntersectthisFadeInSp.bind(this),{ threshold: .15})
    obsPc.observe(elm)
  }
}

function onIntersectthisFadeInPc(elm){
  if (elm[0].intersectionRatio > .11) {
    elm[0].target.classList.add('isAnimation')

  }
}

function onIntersectthisFadeInSp(elm){
  if (elm[0].isIntersecting) {
    elm[0].target.classList.add('isAnimation')

  }
}

// -------------------- TOP --------------------
const headerBgTarget = document.getElementsByClassName('headerBgTarget')[0]
if(headerBgTarget) ObserbeHeaderBg(headerBgTarget)

function ObserbeHeaderBg(elm) {
  let obsPc = new IntersectionObserver(onIntersectHeaderBg.bind(this))
  obsPc.observe(elm)
}

function onIntersectHeaderBg(elm){
  if (!elm[0].isIntersecting) {
    document.getElementsByClassName('header')[0].classList.add('isBg')

  } else {
    document.getElementsByClassName('header')[0].classList.remove('isBg')
  }
}

if(document.getElementsByClassName('kv__slider')[0]) {
  if(document.querySelectorAll('.kv__slider .swiper-wrapper li').length >= 2) {
    const topSlider = new Swiper('.kv__slider', {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.kv__slider-pagination',
        clickable: true,
      },
    })
  }
}

// -------------------- support --------------------
if(document.getElementsByClassName('support-school')[0]) {
  const mapBtn = [].slice.call(document.getElementsByClassName('school-map-btn'));
  const mapArea = [].slice.call(document.getElementsByClassName('school-map'));
  const mapAreaBg = [].slice.call(document.getElementsByClassName('school-map-bg'));

  for (let i = 0; i < mapBtn.length; i++) {
    mapBtn[i].addEventListener('mouseover', () => {
      for (let c = 0; c < mapArea.length; c++) {
        if(!mapArea[c].classList.contains(mapBtn[i].classList[2])) {
          mapArea[c].classList.add('isNoActive');
          mapAreaBg[c].classList.add('isNoActive');
        }
      }

    }, false);

    mapBtn[i].addEventListener('mouseleave', () => {
      for (let c = 0; c < mapArea.length; c++) {
        mapArea[c].classList.remove('isNoActive');
        mapAreaBg[c].classList.remove('isNoActive');
      }
    }, false);
  }

  for (let i = 0; i < mapArea.length; i++) {
    mapArea[i].addEventListener('mouseover', () => {
      for (let c = 0; c < mapArea.length; c++) {
        if(!mapArea[c].classList.contains(mapArea[i].classList[1])) {
          mapArea[c].classList.add('isNoActive');
          mapAreaBg[c].classList.add('isNoActive');
        }
      }

    }, false);

    mapArea[i].addEventListener('mouseleave', () => {
      for (let c = 0; c < mapArea.length; c++) {
        mapArea[c].classList.remove('isNoActive');
        mapAreaBg[c].classList.remove('isNoActive');
      }
    }, false);
  }
}

// school modal
const schoolModalBtn = [].slice.call(document.getElementsByClassName('c-btn__school-modal'));
const schoolModal = document.getElementsByClassName('c-modal__school')[0];
const schoolModalCon = [].slice.call(document.getElementsByClassName('school-area__block'));
const schoolModdalClose = [].slice.call(document.getElementsByClassName('c-modal__school-close'));

const areaArrowBtn = [].slice.call(document.getElementsByClassName('area-arrow'));

if(schoolModalBtn) {
  for (let i = 0; i < schoolModalBtn.length; i++) {
    schoolModalBtn[i].addEventListener('click', (e) => {
      let area = schoolModalBtn[i].dataset.area;
      // prev dataset
      if(area == '01') {
        document.querySelector('.area-arrow.prev').dataset.area = '10'

      } else {
        document.querySelector('.area-arrow.prev').dataset.area = '0' + (Number(area) - 1)
      }

      // next dataset
      if(area == '10') {
        document.querySelector('.area-arrow.next').dataset.area = '01'

      } else {
        if('0' + (Number(area) + 1) != '010') {
          document.querySelector('.area-arrow.next').dataset.area = '0' + (Number(area) + 1)

        } else {
          document.querySelector('.area-arrow.next').dataset.area = Number(area) + 1

        }
      }

      document.getElementsByClassName('area' + area)[0].style.display = 'block'
      schoolModal.style.display = 'flex';
    });
  }
}

if(areaArrowBtn) {
  for (let i = 0; i < areaArrowBtn.length; i++) {
    areaArrowBtn[i].addEventListener('click', (e) => {
      let area = areaArrowBtn[i].dataset.area

      for (let i = 0; i < schoolModalCon.length; i++) {
        schoolModalCon[i].style.display = 'none'
      }

      // prev dataset
      if(area == '01') {
        document.querySelector('.area-arrow.prev').dataset.area = '10'
      } else {
        document.querySelector('.area-arrow.prev').dataset.area = '0' + (Number(area) - 1)
      }

      // next dataset
      if(area == '10') {
        document.querySelector('.area-arrow.next').dataset.area = '01'
      } else {
        if('0' + (Number(area) + 1) != '010') {
          document.querySelector('.area-arrow.next').dataset.area = '0' + (Number(area) + 1)

        } else {
          document.querySelector('.area-arrow.next').dataset.area = Number(area) + 1

        }
      }

      document.getElementsByClassName('area' + area)[0].style.display = 'block'
      document.querySelector('.c-modal__school .c-modal__scroll').scrollTo(0, 0)
    });
  }
}

if(schoolModdalClose) {
  for (let i = 0; i < schoolModdalClose.length; i++) {
    schoolModdalClose[i].addEventListener('click', (e) => {
      for (let i = 0; i < schoolModalCon.length; i++) {
        schoolModalCon[i].style.display = 'none'
      }

      schoolModal.style.display = 'none';
    })
  }
}

// -------------------- require_apply --------------------
document.addEventListener('DOMContentLoaded', function(){

  // const tab = this.getElementsByClassName("tab__box--1");
  const tab = [...document.getElementsByClassName('tab__box--content')];
  const panel = [...document.getElementsByClassName('panel__box--content')];

  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function() {
      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('is-active');
        panel[i].classList.remove('is-show');
      }
      tab[i].classList.add('is-active');
      panel[i].classList.add('is-show');
    })
  }


});

// -------------------- result --------------------

// examiner modal
const examinerModalBtn = [].slice.call(document.getElementsByClassName('c-btn__examiner'));
const examinerModal = document.getElementsByClassName('c-modal__examiner')[0];
const examinerModalCont = document.getElementsByClassName('c-modal__examiner-cont')[0];
const examinerModdalClose = [].slice.call(document.getElementsByClassName('c-modal__examiner-close'));

if(examinerModalBtn) {
  for (let i = 0; i < examinerModalBtn.length; i++) {
    examinerModalBtn[i].addEventListener('click', (e) => {
      let examinerId = examinerModalBtn[i].dataset.examiner
      let frame = document.createElement("iframe");
      frame.setAttribute('frameborder', 0)
      frame.setAttribute('allowfullscreen', '')
      frame.classList.add('examiner-iframe')
      frame.setAttribute('src', '/n/grandprix/compo/' + examinerId + '.html')
      examinerModalCont.appendChild(frame);
      examinerModal.style.display = 'flex';
      let doc = document.getElementsByClassName('examiner-iframe')[0]
      setTimeout(() => {
        doc.style.height = doc.contentWindow.document.body.scrollHeight + 'px'
      }, 500)
    });
  }
}

if(examinerModdalClose) {
  for (let i = 0; i < examinerModdalClose.length; i++) {
    examinerModdalClose[i].addEventListener('click', (e) => {
      examinerModalCont.removeChild(examinerModalCont.childNodes[0]);
      examinerModal.style.display = 'none';
    })
  }
}

// gallery slider
if(document.getElementsByClassName('result-gallery__pics')[0]) {
  const gallerySlider = new Swiper('.result-gallery__pics', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      }
    },
  })
}

if(document.getElementsByClassName('shcool-list__list')[0]) {
  let list = document.getElementsByClassName('shcool-list__list')[0],
      num = list.childElementCount / 3

  if(!Number.isInteger(num)) num = Math.floor(num) + 1

  list.style.gridTemplateRows = 'repeat('+ num +', auto)'
}

// program-slider
const programSliderItem = [].slice.call(document.getElementsByClassName('program-slider__wrap'));
if(programSliderItem) {
  for(let i = 0; i < programSliderItem.length; i++) {
    let programSlider = new Swiper(programSliderItem[i], {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      navigation: {
        nextEl: '.program-slider__btn.btn__next.program-slider' + (i + 1),
        prevEl: '.program-slider__btn.btn__prev.program-slider' + (i + 1),
      },
    })
  }
}

// -------------------- obog --------------------
const obogScheduleSliderItem = [].slice.call(document.getElementsByClassName('obog-schedule-slider'));
if(obogScheduleSliderItem) {
  for(let i = 0; i < obogScheduleSliderItem.length; i++) {
    let obogScheduleSlider = new Swiper(obogScheduleSliderItem[i], {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      navigation: {
        nextEl: '.obog-schedule-slider__btn.btn__next.obog-schedule-slider' + (i + 1),
        prevEl: '.obog-schedule-slider__btn.btn__prev.obog-schedule-slider' + (i + 1),
      },
    })
  }
}

// -------------------- voice --------------------
const voiceList = document.getElementsByClassName('voice-list__wrap')[0]
const voiceListMore = document.getElementsByClassName('voice-more')[0]
if(voiceList) {
  if(voiceList.childElementCount >= 16) {
    for(let i = 15; i < voiceList.childElementCount; i++) {
      voiceList.children[i].style.display = 'none'
    }
  } else {
    voiceListMore.style.display = 'none'
  }

  voiceListMore.addEventListener('click', () => {
    for(let i = 15; i < voiceList.childElementCount; i++) {
      voiceList.children[i].style.display = 'block'
    }
  })
}

// voice modal
const voiceModalBtn = [].slice.call(document.getElementsByClassName('voice-modal-btn'));
const voiceModal = document.getElementsByClassName('c-modal__voice')[0];
const voiceModalCont = document.getElementsByClassName('c-modal__voice-cont')[0];
const voiceModdalClose = [].slice.call(document.getElementsByClassName('c-modal__voice-close'));

if(voiceModalBtn) {
  for (let i = 0; i < voiceModalBtn.length; i++) {
    voiceModalBtn[i].addEventListener('click', (e) => {
      let voiceId = voiceModalBtn[i].dataset.voice
      let frame = document.createElement("iframe");
      frame.setAttribute('frameborder', 0)
      frame.setAttribute('allowfullscreen', '')
      frame.classList.add('voice-iframe')
      frame.setAttribute('src', '/n/grandprix/compo/' + voiceId + '.html')
      voiceModalCont.appendChild(frame);
      voiceModal.style.display = 'flex';
      let doc = document.getElementsByClassName('voice-iframe')[0]
      setTimeout(() => {
        doc.style.height = doc.contentWindow.document.body.scrollHeight + 'px'
      }, 500)
    });
  }
}

if(voiceModdalClose) {
  for (let i = 0; i < voiceModdalClose.length; i++) {
    voiceModdalClose[i].addEventListener('click', (e) => {
      voiceModalCont.removeChild(voiceModalCont.childNodes[0]);
      voiceModal.style.display = 'none';
    })
  }
}

// -------------------- form --------------------
if(document.getElementsByClassName('form__map')[0]) {
  const mapArea = [].slice.call(document.getElementsByClassName('form__map-item'));
  const mapBtn = [].slice.call(document.getElementsByClassName('form__map-btn'));

  for (let i = 0; i < mapArea.length; i++) {
    mapArea[i].addEventListener('mouseover', () => {
      for (let c = 0; c < mapArea.length; c++) {
        if(!mapArea[c].classList.contains(mapArea[i].classList[1])) {
          mapArea[c].classList.add('isNoActive');
        }
      }

    }, false);

    mapArea[i].addEventListener('mouseleave', () => {
      for (let c = 0; c < mapArea.length; c++) {
        mapArea[c].classList.remove('isNoActive');
      }
    }, false);
  }

  for (let i = 0; i < mapBtn.length; i++) {
    mapBtn[i].addEventListener('mouseover', () => {
      for (let c = 0; c < mapArea.length; c++) {
        if(!mapArea[c].classList.contains(mapBtn[i].classList[1])) {
          mapArea[c].classList.add('isNoActive');
        }
      }

    }, false);

    mapBtn[i].addEventListener('mouseleave', () => {
      for (let c = 0; c < mapArea.length; c++) {
        mapArea[c].classList.remove('isNoActive');
      }
    }, false);
  }
}

// form modal
if(document.getElementsByClassName('form__modal')[0]) {
  const modalBtn = [].slice.call(document.getElementsByClassName('forn__modal-btn'));
  const modal = document.getElementsByClassName('form__modal')[0];
  const modalClose = document.getElementsByClassName('form__modal-close')[0];
  const modalAreaInner = [].slice.call(document.getElementsByClassName('form__modal-area'));

  for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', (e) => {
      let area = modalBtn[i].classList[1]

      document.getElementsByClassName('form-area__' + area)[0].style.display = 'block'
      modal.style.display = 'block';
    })
  }

  modalClose.addEventListener('click', (e) => {
    for (let i = 0; i < modalAreaInner.length; i++) {
      modalAreaInner[i].style.display = 'none'
    }

    modal.style.display = 'none';
  })
}


window.onload = function() {
}
