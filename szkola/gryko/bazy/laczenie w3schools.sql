1. Wyświetl nazwy firm klientów  i daty zamówień
 
2, Wyświetl dane spedytora z datą zamówienia
 
3. Wyświetl nazwiska pracowników i daty zamówień
 
4. Wyświetl nazwy towarów, nazwy kategorii
SELECT ProductName, CategoryName 
FROM Products 
INNER JOIN Categories ON Products.CategoryID=Categories.CategoryID;
 
5. Wyświetl nazwy towarów, nazwy kategorii i idzamówień
SELECT ProductName, CategoryName , OrderID
FROM Products 
INNER JOIN Categories ON Products.CategoryID=Categories.CategoryID
INNER JOIN OrderDetails ON Products.ProductID=OrderDetails.ProductID;

6. Wyświetl nazwy towarów, nazwy kategorii, daty zamówień i idklienta
SELECT ProductName, CategoryName, OrderDate, CustomerID, OrderDetails.OrderID
FROM Products 
INNER JOIN Categories ON Products.CategoryID=Categories.CategoryID
INNER JOIN OrderDetails ON Products.ProductID=OrderDetails.ProductID
INNER JOIN Orders ON OrderDetails.OrderID=Orders.OrderID;
 
7. Wyświetl nazwy towarów, nazwy kategorii, daty zamówień i nazwę firmy klienta
 
8. Ile razy był zamawiany dany produkt? (podaj nazwy produktów)
 
9. Wyświetl nazwy firm klientów, daty zamówień i nazwy towarów