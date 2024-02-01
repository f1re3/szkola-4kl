1.Usuwa wszystkie wypożyczenia ksiązki o id równym 10 (tabela wypozyczenia)
DELETE FROM wypozyczenia
WHERE id_ksiazka LIKE 10;

2.Wyświetla dostępne ksiązki (wybierz wersję): 
a)id autora, tytuł oraz kategorię (tabele autorzy i kategorie)
SELECT id_autor, tytul, kategorie.nazwa
FROM ksiazki 
    INNER JOIN kategorie ON ksiazki.id_kategoria=kategorie.id;

b)lub niżej punktowane zapytanie wyświetlajace tylko id_autor, tytul i id_kategoria z tabeli ksiazki 
3.Wyświetla id i tytul ksiązki z tabeli ksiazki
SELECT id, tytul 
FROM ksiazki;
