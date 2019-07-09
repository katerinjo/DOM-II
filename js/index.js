// Your code goes here

const debugLog = (...anything) => document.querySelector('.logo-heading').textContent = anything

// Functions

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

function yikes() { document.body.style = 'background-color: red' }

function scream() {
    document.querySelector('.destination:last-child p').textContent += ' A'
}

// 1) 'mouseenter'; Section Images disappear on hover.

const allImgs = document.querySelectorAll('section img')

allImgs.forEach(img => img.addEventListener('mouseenter', e => e.target.setAttribute('style', 'visibility: hidden')))

// 2, 3, 4) 'keydown', 'click', 'dblclick'; Page size changes depending on how quickly you click the title, and resets on keydown.

const stretchyContainer = Stretchy(document.querySelector('.container.home'), n => `max-width: ${n}px`, 800)

document.addEventListener('keydown', () => stretchyContainer.set(800))
document.querySelector('h1').addEventListener('click', () => stretchyContainer.change(9))
document.querySelector('h1').addEventListener('dblclick', () => stretchyContainer.change(-70))

// Links are blocked, but clicking between navbar items makes the screen red.

document.querySelector('nav').addEventListener('click', yikes)
document.querySelectorAll('nav a').forEach(e => {
    e.addEventListener('click', e => { e.preventDefault(); e.stopPropagation() })
})

// 5) 'onwheel'; Scroll wheel use causes screaming in the last panel.

document.onwheel = scream

// 6) 'dragend'; Dragging the top image will make it disappear.

document.querySelector('header img').addEventListener('dragend', e => e.target.style = 'visibility: hidden')

// 7) 'onload'; Title will change text after the page loads.

window.onload = event => {
    event.target.querySelector('h1').textContent = 'Click Me!'
}

// 8) 'onresize'; Resizing the page cycles the background through color space.

const background = Stretchy(document.body, n => `background-color: #${Math.max(n, 0).toString(16).padStart(6, '0')}`, 16777215)

window.onresize = () => background.change(-999)