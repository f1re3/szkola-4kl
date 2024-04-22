CREATE TABLE Kategorie
(
    ID int PRIMARY KEY AUTO_INCREMENT,
    nazwa varchar(50) UNIQUE
);

CREATE TABLE Produkty
(
    ID int PRIMARY KEY AUTO_INCREMENT,
    nazwa varchar(255) UNIQUE,
    cena DEC(7,2) CHECK(cena>0),
    ID_Kategori int
);

CREATE TABLE Czesci
(
    ID int PRIMARY KEY AUTO_INCREMENT,
    nazwa varchar(255) UNIQUE,
    cena DEC(7,2) CHECK(cena>0)
);

ALTER TABLE Produkty
ADD CONSTRAINT fk_ID_Kategori FOREIGN KEY (ID_Kategori)
    REFERENCES Kategorie(ID)
    ON DELETE SET NULL
    ON UPDATE CASCADE;

CREATE TABLE Klucze
(
    ID_Produkty int,
    ID_Czesci int,
    PRIMARY KEY (ID_Produkty, ID_Czesci)
);

ALTER TABLE Klucze
ADD CONSTRAINT fk_ID_Czesci FOREIGN KEY (ID_Czesci)
    REFERENCES Czesci(ID)
    ON DELETE CASCADE
    ON UPDATE CASCADE;