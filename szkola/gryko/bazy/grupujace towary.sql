1.policz ilość wszystkich rekordów (zapisów) ;

2.z opisami - największą i najmniejsza CENĘ, oraz średnią arytmetyczną CENY ;

3.sumę wartości towarów, średnią arytmetyczną wartości (ILOSC * CENA) ;

4.policz średnią arytmetyczną ceny, a później policz ręcznie średnią arytmetyczną ceny = suma CENY / ilość rekordów. 

5.Wyświetl średnią cenę wszystkich towarów o cenie pomiędzy 10 a 1000 zł

6.wyświetl sumę masy (ilosc * waga) , ale tylko dla rodzaju  GD i TR

7.Wyświetl łączną ilość wszystkich zamówionych produktów,

8.wyświetl największą wartość (ilosc * cena)  towarów wyprodukowanych w 1997 roku

9.policz ile rekordów jest w każdym RODZAJU 

10.policz ile rekordów jest w każdym RODZAJU, posortuj malejąco wg RODZAJU;
SELECT rodzaj, COUNT(*) FROM towar GROUP BY rodzaj ORDER BY rodzaj desc;

11.policz sumę i średnią arytmetyczną wartości (ilość * cena) i minimalnej i maksymalnej masie (ilość * waga) dla każdego RODZAJU towaru ;
SELECT rodzaj, SUM(ilosc*cena),AVG(ilosc*cena),MIN(ilosc*waga),MAX(ilosc*waga) FROM towar GROUP BY rodzaj;

12.policz ile rekordów jest w każdym RODZAJU - wyświetl ilości rekordów większe od 15 ;
SELECT rodzaj, COUNT(*) FROM towar GROUP BY rodzaj HAVING COUNT(*)>15;

13.policz średnią arytmetyczną ceny dla każdego RODZAJU - wyświetl średnie mniejsze od 500;
SELECT rodzaj, AVG(cena) FROM towar GROUP BY rodzaj HAVING AVG(cena)>500;

14.dla każdego rodzaju towarów wyświetl ilość rekordów, średnią wagę, średnią ilość, maksymalną i minimalną cenę dla ilości rekordów w RODZAJU mniejszej od 15.
SELECT rodzaj,COUNT(*), AVG(waga), AVG(ilosc),MIN(cena),MAX(cena) FROM towar GROUP BY rodzaj HAVING COUNT(*);

15.dla każdego rodzaju towarów wyświetl maksymalną cenę dla ilości rekordów w RODZAJU większe od 10. Uwzględnij tylko towary zamówione.
SELECT rodzaj, MAX(cena) FROM towar WHERE zamow = 'PRAWDA' GROUP BY rodzaj HAVING COUNT(*)>10;

16.Oblicz minimalną cenę towarów niezamówionych dla każdego rodzaju. 
SELECT rodzaj, MIN(cena) FROM towar WHERE zamow != 'PRAWDA' GROUP BY rodzaj;

17.oblicz średnią cenę towarów zamówionych (zamow) i nie zamówionych
SELECT zamow, AVG(cena) FROM towar GROUP BY zamow;

18.oblicz średnią cenę towarów wyprodukowanych w 1999 roku  dla poszczególnych rodzajów towaru
SELECT rodzaj,data_prod,AVG(cena) FROM towar WHERE data_prod = 1999 GROUP BY rodzaj;