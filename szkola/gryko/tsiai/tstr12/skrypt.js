let koty = ["Błażej", "Ares", "Faflun"];

let koty4 = koty.filter(  (kot) => {
     if (kot.length >4 ) return true;  
}   )
console.log(koty4);

//1
function bezNieparzystych(a){
    return a.filter((el)=>{
        if(el%2==0)
            return el
    })
}

console.log (bezNieparzystych([1, 2, 3, 4, 5, 6, 7, 8])); // ➞ [2, 4, 6, 8]
console.log(bezNieparzystych([43, 65, 23, 89, 53, 9, 6])); // ➞ [6]
console.log(bezNieparzystych([718, 991, 449, 644, 380, 440])); // ➞ [718, 644, 380, 440]

//2
console.log("2")
console.log(" ")

// function getlength(number) {
//     return number.toString().length();
//   }

function filtrujDlugosc(a, b){
    return a.filter((el)=>{
        if(el.toString().length == b) return true
    })
}

console.log(filtrujDlugosc([88, 232, 4, 9721, 555], 3)); // ➞ [232, 555]
// zwraca tablicę trzy cyfrowych liczb
console.log(filtrujDlugosc([2, 7, 8, 9, 1012], 1)); // ➞ [2, 7, 8, 9]
// zwraca tylko jednocyfrowe liczby
console.log(filtrujDlugosc([32, 88, 74, 91, 300, 4050], 1)); // ➞ []
// nie ma liczb jednocyfrowych - zwraca pustą tablicę
console.log(filtrujDlugosc([5, 6, 8, 9], 1)); // ➞ [5, 6, 8, 9]
// wszystkie liczby są jednocyfrowe - zwraca oryginalną tablicę

//3
console.log("3")
console.log(" ")

function filtrujTablice(a){
    return a.filter((el)=>{
    if(Number.isInteger(el))
        return true
    return false
    })
}

console.log(filtrujTablice([1, 2, "a", "b"])); // ➞ [1, 2]
console.log(filtrujTablice([1, "a", "b", 0, 15])); // ➞ [1, 0, 15]
console.log(filtrujTablice([1, 2, "aasf", "1", "123", 123])); // ➞ [1, 2, 123]

//4
console.log("4")
console.log(" ")

function indeksZnaku(a,b){
    
}

console.log(indeksZnaku("hello", "l")); // ➞ [2, 3]
// pierwsze "l" ma indeks 2, ostatnie "l" ma indeks 3.

console.log(indeksZnaku("circumlocution", "c")); // ➞ [0, 8]
// pierwsze "c" ma indeks 0, ostatnie "c" ma indeks 8.

console.log(indeksZnaku("happy", "h")); // ➞ [0, 0]
// jest tylko jedno "h" , więc indeks pierwszego i ostatniego wystąpienia to 0 

console.log(indeksZnaku("happy", "e")); // ➞ undefined
// litery "e" nie ma w tekście "happy", więc zwraca undefined.