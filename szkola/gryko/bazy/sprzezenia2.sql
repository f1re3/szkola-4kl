8. Właściciel wypożyczalni filmów (online) potrzebuje raportu o ich popularności (ile razy dany film został wypożyczony). Niestety przygotowane zestawienie nie uwzględniało filmów nigdy nie wypożyczonych. Napraw to. Przygotuj kwerendę wyświetlającą tytuły filmów nigdy nie wypożyczonych (tabele: Filmy, Wypożyczenia; pola w kwerendzie: Tytul, Gatunek, Data_wyp)
SELECT Tytul, Gatunek, Data_wyp
FROM filmy 
    LEFT JOIN wypozyczenia ON filmy.id_filmu = wypozyczenia.id_filmu
WHERE Data_wyp is NULL;
 

9. Poprawiasz bazę danych pewnej przychodni. Twoim zadaniem jest wymusić więzy integralności między tabelami Pacjenci i Wizyty.

 

A. Odszukaj wiersze, które naruszają więzy integralności (tzn.w tabeli Wizyty występuje ID_pacjenta, którego nie ma w tabeli Pacjenci)
B. Być może w bazie brakuje pacjenta pacjenta Antoniego Mizerskiego (ubezpieczony), którego ktoś omyłkowo usunął z tabeli Pacjenci. Niestety nikt nie pamięta jaki miał identyfikator. Jeśli go odszukasz (przygotuj kwerendę), to dopisz Antoniego do tabeli Pacjenci.