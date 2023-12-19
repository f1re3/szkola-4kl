const obrazekE = document.querySelector('main img')
const obrazkiTab = document.querySelectorAll('#left img')

for(let obrazkiE of obrazkiTab){
    obrazkiE.addEventListener('click', (event)=>{
        obrazekE.src=obrazkiE.src
    })
}

const serducho = document.querySelector('#right img')

serducho.addEventListener('click', (event)=>{
    
})