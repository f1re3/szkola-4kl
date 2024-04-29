CREATE TABLE czlowiek
(
    ID int PRIMARY KEY auto_increment,
    wiek int NOT NULL check(wiek>18)
);

CREATE TABLE jezyki
(
    ID int PRIMARY KEY auto_increment,
    jezyk varchar(20) NOT NULL UNIQUE
);

ALTER TABLE czlowiek
ADD jezyk int,
ADD constraint fk_jezyki foreign key (jezyk) references jezyki (Id);

CREATE TABLE tabela
(
    obcy int,
    nazwa varchar(20)
);

ALTER TABLE tabela
ADD constraint fk_obcy foreign key (obcey) references obcy (Id);