1.Wyświetl nazwisko i imię oraz adres osób które:
    a)płacą mniej niż 50;
SELECT  imie, nazwisko, adres
FROM dom
    INNER JOIN osoba ON dom.nrtel = osoba.nrtel
WHERE oplaty < 50;

    b)mieszkają w miejscowości o numerze 1, 2, 3;
SELECT imie, nazwisko, adres
FROM dom
    INNER JOIN osoba ON dom.nrtel = osoba.nrtel
WHERE nrmiejscow IN (1,2,3);

    c)są głównymi abonentami;
SELECT imie, nazwisko, adres
FROM dom
    
 


Wyświetl nazwisko, imię i zawód osób, które:
płacą za telefon między 40 a 80;
mieszkają w miejscowości, której nazwa zaczyna się na ' P' lub na 'K';
w numerze telefonu występuje cyfra 3 na trzecim miejscu;


Wyświetl nr telefonu, nazwisko, miejscowość adres i zawód osoby, która:
pracują w miejscu, gdzie w polu NAZWA znajduje się litera 'u';
mieszka w miejscowości, w której serwis prowadzi firma, której nazwa kończy się na 'A' (lub 'a') i w polu ADRES ma literę 'o';
pole SYMBZATR kończy się dużą lub małą literą 'm' lub 'k' ;