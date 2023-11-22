const imgE = document.querySelector('img')

imgE.addEventListener('mouseover', (event)=>{
    imgE.src = 'img/lato2.jpg'
})

imgE.addEventListener('mouseleave', (event)=>{
    imgE.src = 'img/lato1.jpg'
})