let koty = ["Błażej", "Ares", "Faflun"];
let koty2 = koty.map( (kot) => { return kot.toUpperCase(); } );
let koty3 = koty.map(  (kot) => {return `${kot} to dobry kotek`; }    );
console.log(koty,koty2, koty3);

let koty4 = koty.filter(  (kot) => {
    if (kot.length >4 ) return true;  
}   )
console.log(koty4);
// tablicę liczb   
// przemapujcie na tablice kwadratow  tych liczb


let liczby  = [1, 3, 8,5 ,8 ,10, 8 , 9];

let kwadraty = liczby.map( (liczba) => { return liczba**2;}     );

console.log(liczby, kwadraty)
 

//1
function zwiekszElementy(a){
    a.map((el) =>{
        console.log(el+1)
    })
}

zwiekszElementy([0, 1, 2, 3]) //➞ [1, 2, 3, 4]
zwiekszElementy([2, 4, 6, 8]) //➞ [3, 5, 7, 9]
zwiekszElementy([-1, -2, -3, -4]) //➞ [0, -1, -2, -3]

//2
console.log("2")
console.log(" ")

function pomnozElementy(a){
    a.map((el)=>{
        console.log(el*2)
    })
}

pomnozElementy([2, 5, 3]) //➞ [4, 10, 6]
pomnozElementy([1, 86, -5]) //➞ [2, 172, -10]
pomnozElementy([5, 382, 0]) //➞ [10, 764, 0]

//3
console.log("3")
console.log(" ")

function dlugoscWyrazow(a){
    return a.map((el)=>{
        return el.length
    })
}

console.log(dlugoscWyrazow(["hello", "world"])) //➞ [5, 5]
console.log(dlugoscWyrazow(["Halloween", "Thanksgiving", "Christmas"])) //➞ [9, 12, 9]
console.log(dlugoscWyrazow(["She", "sells", "seashells", "down", "by", "the", "seashore"])) //➞ [3, 5, 9, 4, 2, 3, 8]

//4
console.log("4")
console.log(" ")

function goraDol(a){
    return a.map((el)=>{
        if(el%2==0)
            return el-1
        return el+1
    })
}
console.log(goraDol([1, 2, 3, 4, 5])) //➞ [2, 1, 4, 3, 6]
console.log(goraDol([3, 3, 4, 3])) //➞ [4, 4, 3, 4]
console.log(goraDol([2, 2, 0, 8, 10])) //➞ [1, 1, -1, 7, 9]

//5
console.log("6")
console.log(" ")

function rozszerzenia(a){
    return a.map((el)=>{
        let kropka=el.indexOf('.')
        return el.slice(kropka+1)
    })
}

console.log(rozszerzenia(["code.html", "code.css"])) //➞ ["html", "css"]
console.log(rozszerzenia(["project1.jpg", "project1.pdf", "project1.mp3"])) //➞ ["jpg", "pdf", "mp3"]
console.log(rozszerzenia(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])) //➞ ["rb", "cpp", "py", "js"]