const imglist = [
    'https://previews.123rf.com/images/jaboy/jaboy1302/jaboy130200261/18047832-liczba-god%C5%82o-z%C5%82oty-1.jpg',
    'https://media.istockphoto.com/id/475229113/pl/wektor/3-d-b%C5%82yszcz%C4%85cy-z%C5%82oty-numer-2.jpg?s=612x612&w=0&k=20&c=q9miXowJBEHqZfCfDaWobr3Dm5nlNWKW0dRLQ1LElMA=',
    'https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D195062158W8333H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/3-czerwony-numer-trzy-cyfra-naklejka.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/59/4NumberFourInCircle.png',
    'https://media.istockphoto.com/id/182813265/pl/zdj%C4%99cie/liczba-5.jpg?s=612x612&w=0&k=20&c=5PXDpt1D1NxlI_OqWLgyIbLHfP1l6hHVzyUC4A0eGto=',
    'https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D159841426W8333H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/numer-6-urodziny-szesc-cyfra-naklejka.jpg'
]

const btnT = document.querySelector('#top button')
const btnM = document.querySelector('#middle button')
const mainE = document.querySelector('main')

btnT.addEventListener('click', (event)=>{
    for(let i in imglist){
        let divE = document.createElement('div')
        let h2E = document.createElement('h2')
        h2E.innerHTML = Number(i)+1
        divE.appendChild(h2E)
        let imgE = document.createElement('img')
        imgE.src=imglist[i]
        divE.appendChild(imgE)
        mainE.appendChild(divE)
    }
})

btnM.addEventListener('click', (event)=>{
    
})