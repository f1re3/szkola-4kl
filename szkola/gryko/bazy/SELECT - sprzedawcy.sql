1. Utwórz tabelę Sprzedawcy z polami: 

 

IDSprzedawcy - całkowity, klucz podstawowy , 
Nazwisko (tekst do 50 znaków, pole niepuste) , 
Miasto (tekst do 30 znaków), 
Prowizja (liczba z dwoma miejscami po przecinku i jednym przed przecinkiem, wartość domyślna 0.13.
CREATE TABLE Sprzedawcy
(
    IDSprzedawcy int PRIMARY KEY,
    Nazwisko varchar(50) NOT NULL,
    Miasto varchar(30),
    prowizja dec(3,2) default(0.13)
);

Wykonaj zapytania:

2. Utwórz tabelę  Zamowienia z polami: 

 

IDZamowienia (liczba całkowita, klucz podstawowy), 
Wartosc (liczba: pięć miejsc przed przecinkiem i dwa po przecinku), 
Data typ Date,
IDKlienta (liczba całkowita), 
IDSprzedawcy (liczba całkowita).
CREATE TABLE Zamowienia
(
    IDZamowienia int PRIMARY KEY,
    wartosc dec(7,2),
    Data Date,
    IDKlienta int,
    IDSprzedawcy int
);

Wykonaj kod:

3. utwórz tabelę Klienci z polami:

 

 

IDKlienta liczba całkowita, klucz podstawowy
Nazwa tekst do 50 znaków,
Miasto  tekst do 40 znaków
Ocena  liczba całkowita
IDSprzedawcy  liczba całkowita
CREATE TABLE Klienci
(
    IDKlienta int PRIMARY KEY,
    Nazwa varchar(50),
    Miasto varchar(40),
    Ocena int,
    IDSprzedawcy int
);

Wykonaj kod:

4. Wyświetl dane o wszystkich sprzedawcach.
SELECT *from Sprzedawcy;

5. Wyświetl nazwiska i prowizje sprzedawców.
SELECT Nazwisko, prowizja FROM Sprzedawcy;

6. Wyświetl dane o klientach z Paryża i Moskwy.
SELECT *from klienci where Miasto='Paris' OR miasto='Moscow';

7. Zmień powyższe tak, aby zapis warunku był krótszy (użyj IN)
SELECT *FROM klienci WHERE Miasto IN ('Paris','Moscow');

8. Wyświetl dane o klientach , którzy nie mieszkają ani w Paryżu, ani w Moskwie (użyj NOT i IN)
SELECT *FROM klienci WHERE Miasto NOT IN ('Paris','Moscow');

9.Wyświetl dane o klientach, których identyfikatory to 3007, 3008 lub 3009 (użyj IN)
SELECT *FROM Klienci WHERE IDKlienta IN (3007,3008,3009);

10. Wyświetl dane o sprzedawcach, których prowizja mieści się w zakresie od 0,12 do 0,14 (użyj BETWEEN ... AND...)
SELECT *FROM Sprzedawcy WHERE prowizja BETWEEN 0.12 AND 0.14;

11. Wyświetl  informacje o zamówieniach, których wartość mieści się w zakresie od 500 do 4000 (BETWEEN ... AND...)
SELECT *FROM Zamowienia WHERE Wartosc BETWEEN 500 AND 4000;

12. zmodyfikuj powyższe tak, aby dodatkowo wykluczyć zamówienia o wartości 948.50 i 1983.43 ( SELECT.... WHERE (... between .. and ...) and  ... not ... in(....,...) ;  )
SELECT *FROM Zamowienia WHERE Wartosc BETWEEN 500 AND 4000 AND Wartosc NOT IN (948.50,1983.43);

13. Wyświetl informacje o tych klientach, których nazwy zaczynają się na literę 'B'  ( ... LIKE '...%' )
SELECT *FROM Klienci WHERE Nazwa LIKE 'B%';

14. Wyświetl informacje o tych klientach, których nazwy kończą się na literę n
SELECT *FROM Klienci WHERE Nazwa LIKE '%N';

15. Wyświetl informacje o sprzedawcach, których pierwsza litera nazwiska to 'N', a czwarta to 'l'  (l jak liść)
SELECT *FROM Sprzedawcy WHERE Nazwisko LIKE 'N__l%';