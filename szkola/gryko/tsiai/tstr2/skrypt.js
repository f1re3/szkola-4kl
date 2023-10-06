let obrazki=[
    'img/f40.jpg'
]

const imageBtn = document.getElementById("imageBtn")
const obrazek = document.getElementById("obrazek")

imageBtn.addEventListener('click', ()=>{
    obrazek.src = obrazki[0]
})