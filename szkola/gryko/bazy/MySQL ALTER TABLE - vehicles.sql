Utwórz tabelę vehicles : pole vehicledId całkowite, klucz podstawowy, make tekst do 100 znaków, wszystkie pola wymagane (bez null)
CREATE TABLE vehicles
(
    vehicledId int PRIMARY KEY NOT NULL,
    year int NOT NULL,
    make varchar(100) NOT NULL
);

Dodaj do tabeli pole model (tekst do 100 znaków, pole wymagane)
ALTER TABLE vehicles
ADD model varchar(100) NOT NULL;

Jednym zapytaniem dodaj pole color i note
ALTER TABLE vehicles
ADD 
(
    color varchar(50),
    note varchar(255)
);

Kolumna note powinna mieć tylko do 100 znaków Zmień to.
ALTER TABLE vehicles
MODIFY note varchar(100) NOT NULL;

Jednym zapytaniem zmień typ pola year i color (pole color ma zmienioną pozycję w tabeli)
ALTER TABLE vehicles
MODIFY year smallint,
MODIFY color varchar(20);

Zmięń nazwę pola note na vehicleCondition
ALTER TABLE vehicles
CHANGE note vehicleCondition varchar(100);

Usuń kolumnę vehicleCondition
ALTER TABLE vehicles
DROP vehicleCondition;

Ustaw wartość domyślną dla pola year na 2023
ALTER TABLE vehicles
MODIFY year int default(2023);

Zmień nazwę tabeli vehicles na cars
ALTER TABLE vehicles
rename cars;