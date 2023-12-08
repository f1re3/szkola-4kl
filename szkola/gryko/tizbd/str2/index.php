<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>raporty</h1>
<?php
// 1.  Stwórz bazę danych o nazwie Filmoteka.
// create database filmoteka;

// 2. Zaimportuj do bazy plik baza_zad3.sql rozpakowany z archiwum zad3.zip. Hasło Egz2016@
//--

// 3. Zapoznaj się ze strukturą bazy danych. Składają się na nią trzy tabele: filmy, rezyserzy oraz recenzje. Każda z nich ma klucz główny rozpoczynający się od „ID”, np. IDFilm. Tabela egzemplarze ma ponadto klucz obcy RezyserIDoraz recenzja id. Referują one kolejno do kluczy głównych tabel rezyszerzy oraz recenzje.
//--

// 4. Korzystając z zakładki SQL, przygotuj zapytania do bazy i wykonaj je. Kwerendy zapisz w pliku kwerendy.txt w podfolderze baza. Lista kwerend do zdefiniowania:

// a) Zwrócenie tytułów filmów, dla których gatunek to SF,
// SELECT tytul FROM filmy WHERE gatunek="SF";

// b) Zwrócenie wszystkich tytułów filmów wraz z nazwiskami reżyserów,
// SELECT tytul, nazwisko FROM filmy INNER JOIN rezyserzy ON filmy.rezyserid=rezyserzy.idrezyser;

// c) Zwrócenie filmów, dla których ocena w recenzji jest równa 4, 
// SELECT filmy.* FROM filmy INNER JOIN recenzje ON filmy.recenzjaid=recenzje.idrecenzja WHERE ocena='4';

// d) Dodanie rekordu do tabeli rezyserzy z danymi: ID – 4, Andrzej Wajda
//INSERT INTO `rezyserzy` (`IDRezyser`, `imie`, `nazwisko`) VALUES
//(4, 'Andrzej', 'Wajda');



// 5. Wykonaj zrzuty ekranowe z wynikami działania kwerend a, b, c. Na zrzucie powinny być widoczne zwrócone rekordy. Zrzuty zapisz w podfolderze baza.

 

 

// 6. Wyeksportuj bazę do pliku filmoteka.sql i umieść go w podfolderze baza.
 

 

// Wyświetlenie raportów

// 7 Wyświetl wynik działania kwerendy a. w postaci listy numerowanej
$conn = new mysqli('localhost','root','','4e_2_raporty_e14');

$sql = "SELECT tytul FROM filmy WHERE gatunek='SF'";
$result = $conn -> query($sql);

echo "<ol>";
while ($row = $result -> fetch_assoc()) {
    $tytul = $row['tytul'];
    echo "<li> $tytul </li>";
}
echo "</ol>";

$conn -> close();

// 8. Wyświetl wynik działania kwerendy b. w postaci listy wypunktowanej, tytuł powinien być pogrubiony
$conn = new mysqli('localhost', 'root', '','4e_2_raporty_e14');

$sql = 'SELECT tytul, nazwisko FROM filmy INNER JOIN rezyserzy ON filmy.rezyserid=rezyserzy.idrezyser;';
$result = $conn -> query($sql);

echo '<ul>';
while ($row = $result -> fetch_assoc()) {
    $tytul = $row['tytul'];
    $nazwisko = $row['nazwisko'];
    echo "<li> $tytul $nazwisko </li>";
}
echo '</ul>';

$conn -> close( );

// 9. Wyświetl wynik działania kwerendy c. w postaci tabeli, każde pole w osobnej komórce
$conn = new mysqli('localhost', 'root','','4e_2_raporty_e14');

$sql = "SELECT idfilm, tytul, gatunek, rezyserid, recenzjaid, link FROM filmy INNER JOIN recenzje ON filmy.recenzjaid=recenzje.idrecenzja WHERE ocena='4';";
$result = $conn -> query($sql);

echo '<table>';
while ($row = $result -> fetch_assoc()){
    $film = $row['idfilm'];
    $tytul = $row['tytul'];
    $gatunek = $row['gatunek'];
    $rezyser = $row['rezyserid'];
    $ocena = $row['recenzjaid'];
    $link = $row['link'];
    echo '<tr>';
    echo "<td> $film </td>";
    echo "<td> $tytul </td>";
    echo "<td> $gatunek </td>";
    echo "<td> $rezyser </td>";
    echo "<td> $ocena </td>";
    echo "<td> $link </td>";
    echo '</tr>';
}
echo '</table>';

$conn -> close();

?>
</body>
</html>