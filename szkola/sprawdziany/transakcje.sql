1.1 START TRANSACTION;
1.2 DELETE FROM Customers WHERE Country = 'Brazil'
1.3 SELECT * FROM Customers;
ROLLBACK ;
1.4 START TRANSACTION;
1.5 
1.6 SUBMIT;
1.7 START TRANSACTION;
1.8 INSERT INTO Customers(ContactName)
VALUES ('daniel sobiech');
1.9 SUBMIT;