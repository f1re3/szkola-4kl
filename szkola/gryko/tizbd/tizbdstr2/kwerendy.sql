1.Usuwa wszystkie wypożyczenia czytelnika o id równym 2 (tabela wypozyczenia)
DELETE FROM wypozyczenia
WHERE id_czytelnika = 2
2.Wyświetla dostępne ksiązki (wybierz wersję): 

tytuł oraz imię i nazwisko autora (tabele autorzy i ksiazki)
SELECT tytul, imie, nazwisko
FROM autorzy
    inner join ksiazki on autorzy.id=ksiazki.id_autor;
lub niżej punktowane zapytanie wyświetlajace tylko id_autor, tytul i id_wydawnictwo z tabeli ksiazki 

3.Wyświetla id i imię i nazwisko czytelnika z tabeli czytelnicy
SELECT id, imie, nazwisko
FROM czytelnicy;