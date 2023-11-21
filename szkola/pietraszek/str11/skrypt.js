//zadanie1
document.write('zadanie1 <br>')

const body = document.querySelector('body')
const tableElement = document.createElement('table')
body.appendChild(tableElement)
const table = document.querySelector('table')
const tableRow = document.createElement('tr')
table.appendChild(tableRow)

let i=0
while(i<10){
    i++
    const randomInt = Math.floor(Math.random() * 100)
    const tableData = document.createElement('td')
    tableData.innerText = randomInt
    tableRow.appendChild(tableData)
}

//zadanie2
document.write('<br> zadanie2 <br>')

const result = document.getElementById('result')

let j=0
while(j<5){
    document.write('oto moj skrypt! <br>')
    j++
}