Firma remontowa potrzebuje bazy danych do obsługi klientów.  Wymagania:

1. Tabela Klienci. 
A. ID całkowite, autoinkrementacja, klucz podstawowy
B. Imie - tekst do 30 znaków, pole nie może być puste
C. Nazwisko - tekst do 50 znaków, pole nie może być puste
D. e-mail - tekst do 50 znaków, wartości w polu nie mogą się powtarzać, w środku musi wystąpić znak @
CREATE TABLE Klienci
(
    ID int auto_increment PRIMARY KEY,
    Imie varchar(30) NOT NULL,
    Nazwisko varchar(50) NOT NULL,
    email varchar(50) UNIQUE check(email like '%@%')
);

2. Tabela Uslugi
A. ID całkowite, autoinkrementacja, klucz podstawowy
B. nazwa - tekst do 50 znaków, 
C. opis - teksty do 512 znaków
D. cena - stałoprzecinkowy typ: ceny do 7 znaków przed przecinkiem i 2 znaków po przecinku, 
CREATE TABLE Uslugi
(
    ID int auto_increment PRIMARY KEY,
    nazwa varchar(50),
    opis varchar(512),
    cena dec(9,2)
);

3. Do tabeli Usługi dodaj więzy integralności: 
A. do pola nazwa: wartości w polu nie mogą się powtarzać, pole nie może być puste
ALTER TABLE Uslugi
MODIFY nazwa varchar(50) NOT NULL UNIQUE;

B. do pola cena: wpisywane wartości muszą być większe od 10
ALTER TABLE Uslugi
ADD constraint ch_cena check(cena>10);

4. Połącz obie tabele:
A. określ typ związku i sposób przejścia do postaci relacyjnej
B. dodaj potrzebne pole i/lub tabele, pokaż projekt na zrzucie
C. dodaj więzy integralności referencyjnej
CREATE TABLE klucze
(
    ID int PRIMARY KEY auto_increment,
    ID_Klienci int,
    ID_Uslugi int
);

ALTER TABLE kluczem
ADD constraint fk_Klienci foreign KEY
(ID_Klienci) references Klienci(ID);

ALTER TABLE kluczem
ADD constraint fk_Uslugi foreign KEY
(ID_Uslugi) references Uslugi(ID);

5. Wprowadź dane dwóch klientów i dwie usługi
INSERT INTO Klienci(imie,nazwisko,email )
VALUES
    ('Wojtek','PANDA','panda.wuj@gmail.com'),
    ('Tomek','BUY','pandaBuy@gmeil.com');
INSERT INTO Uslugi(nazwa, cena)
VALUES
    ('sprzatanie', 2137),
    ('remont',18);

6. Upewnij się, że działają więzy integralności (nie puste, wartości się nie powtarzają, check)
A. w tabeli Klienci


B. w tabeli Uslugi


7. Zamów i wyprowadź do bazy danych wykonanie usług: 
A. pierwszy klient zamawia pierwszą usługę, przy wprowadzaniu danych posługuj się nazwami usług
INSERT INTO Kluczem(ID_Klienci, ID_Uslugi)
VALUES
    (1, (SELECT id FROM Uslugi WHERE nazwa='sprzatanie'));

B. Drugi klient zamawia obie usługi, przy wprowadzaniu danych posługuj się nazwami usług
INSERT INTO Kluczem(ID_Klienci, ID_Uslugi)
VALUES
    (2, (SELECT id FROM Uslugi WHERE nazwa='sprzatanie')),
    (2, (SELECT id FROM Uslugi WHERE nazwa='remont'));

8. Upewnij się, że działają więzy integralności referencyjnej
A. usuń dane pierwszego klienta z tabeli klienci,
DELETE FROM klienci
WHERE ID=1;

 B. z tabeli klienci usuń dane pierwszego klienta stosując podejście wyważone
UPDATE Kluczem
SET ID_Klienci=NULL
WHERE ID_Klienci=1;

C. z tabeli klienci usuń dane drugiego klienta stosując podejście kaskadowe usuwanie powiązanych pól
DELETE FROM Kluczem
WHERE ID_Klienci=2;

DELETE FROM Klienci
WHERE ID = 2;