// Your code goes here

const debugLog = (...anything) => document.querySelector('.logo-heading').textContent = anything

const allImgs = document.querySelectorAll('section img')

allImgs.forEach(img => img.addEventListener('mouseenter', e => e.target.setAttribute('style', 'visibility: hidden')))

function Stretchy(element, styleFun, start) {
    let count = start
    function update() {
        element.style = styleFun(count)
    }
    function change(amt) {
        count += amt
        update()
    }
    function selectCount() {
        return count
    }
    function set(amt) {
        count = amt
        update()
    }
    update()
    return { change, selectCount, set }
}

function yikes() { document.querySelector('body').style = 'background-color: red' }

function scream() {
    document.querySelector('.destination:last-child p').textContent += ' A'
}

const stretchyContainer = Stretchy(document.querySelector('.container.home'), n => `max-width: ${n}px`, 800)

document.addEventListener('keydown', () => stretchyContainer.set(800))
document.querySelector('h1').addEventListener('click', () => stretchyContainer.change(9))
document.querySelector('h1').addEventListener('dblclick', () => stretchyContainer.change(-70))

document.querySelector('nav').addEventListener('click', e => { yikes() })
document.querySelectorAll('nav a').forEach(e => {
    e.addEventListener('click', e => { e.preventDefault(); e.stopPropagation() })
})

document.onwheel = scream

document.querySelector('header img').addEventListener('dragend', e => e.target.style = 'visibility: hidden')

window.onload = event => {
    event.target.querySelector('h1').textContent = 'Click Me!'
}

document.querySelectorAll('.btn')[1].addEventListener('focus', scream)

const background = Stretchy(document.body, n => `background-color: #${Math.max(n, 0).toString(16).padStart(6, '0')}`, 16777215)

window.onresize = () => background.change(-999)