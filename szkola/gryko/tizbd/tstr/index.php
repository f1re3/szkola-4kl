<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RAPORTY</title>
</head>
<body>
    <h1>RAPORTY</h1>
    <?php
        // 1. Wyświetl wszystkie nazwy dań (pole nazwa, tabela dania), każdy jako osobny element listy numerowanej
        $conn  = new mysqli('localhost','root','','4e_2_raporty');    
        
        $sql = "SELECT nazwa FROM dania";
        $result = $conn -> query($sql);

        echo "to jest zapytanie $sql a to jest wynik: ";
        echo $result->num_rows;

        $row = $result->fetch_assoc();
        echo $row['nazwa'];
        
        echo "<ol>";
        while($row = $result->fetch_assoc()){
            echo "<li> {$row['nazwa']} </li>";
        }
        echo "</ol>";

        $conn -> close();

        // 2. Wyświetl imiona i nazwiska pracowników w postaci listy wypunktowanej w formacie: "[imię] [nazwisko]"  (pola imie, nazwisko z tabeli pracownicy)
        $conn  = new mysqli('localhost','root','','4e_2_raporty');

        $sql = "SELECT imie, nazwisko FROM pracownicy";
        $result = $conn ->query($sql);

        echo "to jest zapytanie $sql a to jest wynik: ";
        $row = $result->fetch_assoc();

        echo '<ol>';
        while($row = $result->fetch_assoc()){
            $imie = $row['imie'];
            $nazwisko = $row['nazwisko'];
            echo "<li>$imie $nazwisko</li>";
        }
        echo '</ol>';

        $conn -> close();
        // 3. wyświetl markę model, kolor i stan samochodów w postaci listy wypunktowanej w formacie: "[kolor] [marka] [model], stan [stan]" (pola marka, model, kolor, stan z tabeli samochody)
        $conn  = new mysqli('localhost','root','','4e_2_raporty');

        $sql = "SELECT kolor, marka, model, stan FROM samochody";
        $result = $conn -> query($sql);

        echo "to jest zapytanie $sql a to jest wynik: ";
        $row = $result->fetch_assoc();

        echo "<ol>";
        while($row = $result->fetch_assoc()){
            echo "<li> {$row['kolor']} {$row['marka']} {$row['model']} {$row['stan']} </li>";
        }
        echo "</ol>";

        $conn -> close();
    ?>
</body>
</html>