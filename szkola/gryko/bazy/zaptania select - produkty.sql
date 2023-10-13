PRODUKTY
id
nazwa
cena
id_sklepu
 
1. napisz zapytanie, które wyświetli nazwę i  cenę produktów
SELECT nazwa,cena FROM produkty;

2. wyświetl nazwy i ceny produktów, posortowane malejąco według ceny;
SELECT nazwa,cena FROM produkty ORDER BY cena desc;

3. wyświetl nazwy i ceny produktów, posortowane malejąco według ceny, ale tylko te produkty, których cena jest mniejsza od 5
SELECT nazwa,cena from produkty WHERE cena<5 ORDER BY cena desc;

4. dodatkowo interesują nas tylko produkty na literę B
SELECT nazwa,cena from produkty WHERE cena<5 AND nazwa LIKE 'b%' ORDER BY cena desc;
 
5.jak wyżej, ale oprócz produktów na B zainteresowani jesteśmy produktami na literę S
SELECT nazwa,cena from produkty WHERE cena<5 AND nazwa LIKE 's%' ORDER BY cena desc;

6. interesują nas produkty o cenie pomiędzy 5 a 10 złotych
SELECT *FROM produkty WHERE cena BETWEEN 5 AND 10;
 
7. chcemy wypisać nazwy i ceny produktów, które są bułeczkami, sokami, chipsy (nazwa:  chleb, sok, chipsy)
SELECT nazwa,cena FROM produkty WHERE nazwa IN ('chleb', 'sok', 'chipsy');