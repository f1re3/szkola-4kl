const obrazekE = document.querySelector('main img')
const obrazkiTab = document.querySelectorAll('#left img')

for(let obrazkiE of obrazkiTab){
    obrazkiE.addEventListener('click', (event)=>{
        obrazekE.src=obrazkiE.src
    })
}

const serducho = document.querySelector('#right img')

let serduchoOn = false
serducho.addEventListener('click', (event)=>{
    serduchoOn =! serduchoOn
    if (serduchoOn)
        serducho.src='img2/icon-on.png'
    else
        serducho.src='img2/icon-off.png'
})