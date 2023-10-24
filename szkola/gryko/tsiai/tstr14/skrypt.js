const season1 = document.querySelector('#season1')
const season2 = document.querySelector('#season2')
const season3 = document.querySelector('#season3')
const season4 = document.querySelector('#season4')

const imgEl = document.querySelector('img')

season1.addEventListener('click', (event)=>{
    imgEl.src = 'img/wiosna.jpg'
})

season2.addEventListener('click', (event)=>{
    imgEl.src = 'img/lato.jpg'
})

season3.addEventListener('click', (event)=>{
    imgEl.src = 'img/jesien.jpg'
})

season4.addEventListener('click', (event)=>{
    imgEl.src = 'img/zima.jpg'
})