//1
function comp(x,y){
    if(x.length == y.length)
        return true
    return false
}

console.log(comp("AB", "CD") ); // ➞ true
console.log(comp("ABC", "DE")); // ➞ false
console.log(comp("hello", "edabit")); // ➞ false

//2
function getWord(x,y){
    
    return x[0].toUpperCase()+x.slice(1,3)+y
}

console.log(getWord("seas", "onal")); // ➞ "Seasonal"
console.log(getWord("comp", "lete")); // ➞ "Complete"
console.log(getWord("lang", "uage")); // ➞ "Language"

//3
function makeTitle(a){

}

console.log(makeTitle("This is a title")); // ➞ "This Is A Title"
console.log(makeTitle("capitalize every word")); // ➞ "Capitalize Every Word"
console.log(makeTitle("I Like Pizza") ); //➞ "I Like Pizza"
console.log(makeTitle("PIZZA PIZZA PIZZA")); // ➞ "PIZZA PIZZA PIZZA"