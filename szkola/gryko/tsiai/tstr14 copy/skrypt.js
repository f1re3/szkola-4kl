const season1 = document.querySelector('#season1')
const season2 = document.querySelector('#season2')
const season3 = document.querySelector('#season3')
const season4 = document.querySelector('#season4')

const btn = document.querySelector('button')
const imgEl = document.querySelector('img')

btn.addEventListener('click', (event)=>{
    if(season1.checked)
        imgEl.src = 'img/wiosna.jpg'
    if(season2.checked)
        imgEl.src = 'img/lato.jpg'
    if(season3.checked)
        imgEl.src = 'img/jesien.jpg'
    if(season4.checked)
        imgEl.src = 'img/zima.jpg'
})