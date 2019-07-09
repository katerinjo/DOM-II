// Your code goes here

const debugLog = (...anything) => document.querySelector('.logo-heading').textContent = anything

const allImgs = document.querySelectorAll('img')

allImgs.forEach(img => img.addEventListener('mouseenter', e => e.target.setAttribute('style', 'visibility: hidden')))