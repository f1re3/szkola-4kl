// 1. trzy cyfry obok siebie gdziekolwiek
console.log('1')
const wyr1 = /[0-9]{3}/i
console.log(wyr1.test("as123dgfdgsdgrtbs")) //true
console.log(wyr1.test("ljk5657")) //true
console.log(wyr1.test("ni46n56jhn5")) //false

// 2. trzy cyfry  tylko i wyłącznie
console.log('2')
const wyr2 = /^[0-9]{3}$/
console.log(wyr2.test("123dgfdgsdgr654")) //true
console.log(wyr2.test("ljk56fa")) //false
console.log(wyr2.test("342")) //false
console.log(wyr2.test("7653")) //false

// 3. trzy cyfry obok siebie na początku i dodatkowe trzy obok siebie  na końcu
console.log('3')
const wyr3 = /^[0-9]{3}.*[0-9]{3}$/
console.log(wyr3.test("dsa123dgfdgsdgr654")) //false
console.log(wyr3.test("54ljk56fa543")) //false
console.log(wyr3.test("342564")) //true
console.log(wyr3.test("7653")) //false

// 4. co najmniej cztery znaki alfanumeryczne
console.log('4')
const wyr4 = /\w{4,}/
console.log(wyr4.test("dsa2")) //true
console.log(wyr4.test("54l")) //false
console.log(wyr4.test("342564")) //true
console.log(wyr4.test("765%")) //false

// 5. wyłącznie małe lub wielkie litery a, b, d lub f
console.log('5')
const wyr5 = /^[abdf]*$/i
console.log(wyr5.test("abDf")) //true
console.log(wyr5.test("akjsdh")) //false
console.log(wyr5.test("AbDf")) //true
console.log(wyr5.test("765dsa%")) //false

// 6. na początku nie może być litery x ani litery z
console.log('6')
const wyr6 = /^[^xz]/
console.log(wyr6.test("abDf")) //true
console.log(wyr6.test("zgdsfz")) //false
console.log(wyr6.test("AbDf")) //true
console.log(wyr6.test("xdsa")) //false

// 7. kod pocztowy
console.log('7')
const wyr7 = /^[0-9]{2}-[0-9]{3}$/
console.log(wyr7.test("12-412")) //true
console.log(wyr7.test("1243-12")) // false
console.log(wyr7.test("1a-31f")) //false

// 8. można wpisać tylko cyfry
console.log('8')
const wyr8 = /^[0-9]*$/
console.log(wyr8.test("96789789798467")) //true
console.log(wyr8.test("zgdsfz534534534")) //false
console.log(wyr8.test("Ab63456356Df")) //false
console.log(wyr8.test("0192")) //true

// 9. we wzorcu musi wystąpić znak / (np. AC/DC)
console.log('9')
const wyr9 = /[/]/
console.log(wyr9.test("96789789/798467")) //true
console.log(wyr9.test("zg/dsfz534534534")) //true
console.log(wyr9.test("Ab63456356Df")) //false
console.log(wyr9.test("0192")) //false

// 10. we wzorcu musi być kropka
console.log('10')
const wyr10 = /[/]/
console.log(wyr10.test("967.89789/798467")) //true
console.log(wyr10.test("zg/dsfz5.34534534")) //true
console.log(wyr10.test("Ab63456356Df")) //false
console.log(wyr10.test("0192")) //false

// 11. we wzorcu musi być na końcu kropka i od 2 do 3 liter od a do z (duże też pasują)

// 12. adres e-mail znaki(litera, cyfra,_.-), małpa, znaki alfanumeryczne razem z _ kroka i od 2 do 3 znaków (liter bez _)

// 13. imię i nazwisko (co najmniej dwie litery, biały znak, co najmniej dwie litery). I dlaczego to nie jest takie proste?