//1
CREATE table Wystawa
(
    IDWystawy int,
    nazwa varchar(50),
    data date,
    IDGalerii int
);

CREATE table Galeria
(
    IDGalerii int PRIMARY KEY,
    nazwa varchar(50)
);

//2
ALTER TABLE Wystawa
MODIFY IDWystawy int PRIMARY KEY;

//3
ALTER TABLE Galeria
rename GaleriaSztuki;

//4
ALTER TABLE Wystawa
MODIFY nazwa varchar(100);

//5
ALTER TABLE Wystawa
ADD budzet int;

//6
ALTER TABLE Wystawa
MODIFY budzet dec(8,2);

//7
ALTER TABLE Wystawa
MODIFY IDGalerii int AFTER IDWystawy;

//8
ALTER TABLE Wystawa
DROP budzet;

//9
ALTER TABLE Wystawa
CHANGE data data_wystawy date;

//10
ALTER TABLE Wystawa
MODIFY nazwa varchar(100) default 'biennale';