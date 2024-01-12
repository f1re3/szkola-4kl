create database 4e_2_formularze;
use 4e_2_formularze;
create table klient
(
    ID int auto_increment primary key,
    imie varchar(50),
    nazwisko varchar(50)
);

INSERT INTO klient
(imie, nazwisko)
VALUES
('abdul','allah');