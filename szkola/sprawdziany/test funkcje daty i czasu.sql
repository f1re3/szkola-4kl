1.
SELECT DATE_ADD('2024-04-30', INTERVAL 2 YEAR);

2.
SELECT DATE(data_zatrudnienia) AS data_zatrudnienia, DATE_ADD(data_zatrudnienia, INTERVAL 20 YEAR) AS rocznica
FROM pracownicy;

3.
SELECT CURDATE();

SELECT imie, nazwisko, DATE_FORMAT(data_zatrudnienia, "%d/%m/%Y")
FROM pracownicy;
WHERE 

SELECT UPPER(SupplierName) FROM Suppliers;

SELECT SUBSTRING(OrderDate,6,5) FROM Orders;

SELECT RIGHT(OrderDate, 2) FROM Orders;

SELECT LEFT(SupplierName, 4) FROM Suppliers;

INSERT INTO pracownicy ('pracownik_ID', 'imie', 'nazwisko', 'EMAIL', 'data_zatrudnienia', 'stanowisko_ID')
    VALUES (543.2, 'Daniel', 'Sobiech', 'email@email.com', CURDATE(), 'IT');



