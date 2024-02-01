1.
UPDATE Products
SET SupplierID = 3 
WHERE SupplierID LIKE 2;

2.
UPDATE uczniowie
SET wiek = wiek + 1;

3.
UPDATE Customers
SET ContactName = 'Daniel Sobiech'
WHERE CustomerID LIKE 2;

4.
INSERT INTO produkty

5.
UPDATE uzytkownik
SET telefon = '123456789'
WHERE imie LIKE 'Anna' AND nazwisko LIKE 'Kowalska';

6.
DELETE CustomerID
FROM Orders
    INNER JOIN Customers IN Orders.CustomerID=Customers.CustomerID
WHERE City LIKE 'Italy';

7.
UPDATE podzespoly
SET cena = cena*0.9