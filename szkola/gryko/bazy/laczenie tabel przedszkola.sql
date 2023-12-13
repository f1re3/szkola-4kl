1.  Wykonaj zapytania sql wyszukujące odpowiedzi na poniższe pytania:
A. Ile jest chętnych do przyjęcia do poszczególnych przedszkoli? Wyświetl nazwę przedszkola i ilość chętnych.
SELECT nazwa_przedszkola, count(*)
FROM przedszkola
    INNER JOIN dzieci ON przedszkola.idprzedszkola=dzieci.idprzedszkola
GROUP BY dzieci.idprzedszkola;

B. Ilu jest chętnych do przyjęcia do poszczególnych przedszkoli, uwzględnij wyłącznie trzylatków


C. Wyświetl imiona i nazwiska dzieci, które mają na liście preferencji przedszkole mające w nazwie "Zuch". 


D. Wyświetl imiona i nazwiska dzieci, które chodzą do przedszkola o identyfikatorze 16, 14, 8,28, 27 . Użyj operatora IN.


E. Zmodyfikuj zapytanie z części D tak, aby zamiast numerów przedszkoli były wyświetlane ich nazwy.
laczenie tabel przedszkola


F. Policz, ilu jest kandydatów do poszczególnych przedszkoli (wystarczą identyfikatory, uwzględnij tylko chłopców. Dane uporządkuj malejąco według ilości chętnych. Wyświetl tylko te wiersze, w których  ta ilość jest większa od 15.


G. Policz, ilu jest chętnych do poszczególnych przedszkoli. Wyświetl nazwy przedszkoli i liczbę miejsc w przedszkolach. Czy są takie przedszkola, w których liczba chętnych jest różna od ilości miejsc? 


H. Utwórz uporządkowaną alfabetycznie według nazwisk, listę pięcioletnich dziewczynek, które są zapisane do przedszkola Smerf lub Stokrotka.
