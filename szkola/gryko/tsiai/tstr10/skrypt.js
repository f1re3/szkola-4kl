//1
var imie = [1,2,3,4,5,6,7,8]

imie.forEach((kazdy) =>{
    console.log(kazdy)
})

imie.forEach((square) =>{
    console.log(square**2)
})

imie.forEach((plus) =>{
    if(plus>=1)
        console.log(plus)
})

imie.forEach((parzyste) =>{
    if(parzyste%2==0)
        console.log(parzyste)
})

//2
let suma = 0
imie.forEach((el) =>{
    suma += el
    console.log(suma)
})

let im=imie[0]
imie.forEach((el) =>{
    if(el<im)
        console.log(el)
    else
        console.log(im)
})

//a
var nazwisko = [1,2,3,4534,5,6,7,8,9,52]

let iloczyn = 1
nazwisko.forEach((el) =>{
    iloczyn *= el
    console.log(iloczyn)
})

//b
function calcmax(table){
    let naz = nazwisko[0]
    table.forEach((el) =>{
        if(naz<el)
            naz=el
    })
    return naz
}

console.log(calcmax(nazwisko))

//4
nazwisko.forEach((el, i, tab) =>{
    tab = nazwisko
    // for(i=0, i>10, i++){
    //     el=nazwisko[i]-1
    //     console.log(el)
    // }
})