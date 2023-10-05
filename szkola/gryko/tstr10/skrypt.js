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
    console.log(im)
})