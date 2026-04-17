'use strict'

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

// header menu
const spMenuBtn = document.getElementsByClassName('header_menubtn')[0]
const spMenu = document.getElementsByClassName('header_menu')[0]

spMenuBtn.addEventListener('click', function() {
  if(!spMenuBtn.classList.contains('isActive')) {
    spMenuBtn.classList.add('isActive')
    spMenu.classList.add('isActive')

  } else {
    spMenuBtn.classList.remove('isActive')
    spMenu.classList.remove('isActive')

  }
})