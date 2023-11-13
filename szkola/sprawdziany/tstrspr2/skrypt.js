// function isSpecialArray(x){
//     for(var i=0; i=10; i+2){
//         if(x[i]%2==0){
//             if(x[i+1]%2!=0)
//                 return true
//         }
//         else
//             return false
//     }
// }

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) //➞ true
// // parzyste indeksy: [2, 4, 6, 6]; nieparzyste indeksy: [7, 9, 1, 3]

// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) //➞ false
// // na miejscu o indeksie 2 jest nieparzysta liczba 9.

// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) //➞ false
// // na miejscu o indeksie 3 jest parzysta liczba 8.



function czyNieparzyste(x){
    x.forEach(element => {
        if(element%2==0)
            return element
    });
}

console.log(czyNieparzyste([2,7,12,1,8]));



// var inicjaly = ['DS','MK','JK','MB','BW']

// console.log(inicjaly[0], inicjaly[3])



// function wycinek(x){
//     return x.slice(0,4)
// }

// console.log(wycinek("koWal"));



// function inicjaly(x){
//     return x.slice(0,6)+x.slice(25,30)
// }

// console.log(inicjaly('chmury okrywają ziemię i morza'));



// var imie = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// console.log(imie)

// imie.forEach(element => {
//     console.log(element*2)
// });

// imie.forEach(element =>{
//     if(element>10)
//         console.log(element)
// })