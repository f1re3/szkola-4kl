<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>raporty sprawdzian</title>
</head>
<body>
    <?php
$conn = new mysqli('localhost','root','','4e_2_szkola_DS');
    // SELECT imie, nazwisko FROM uczen WHERE id_klasy='1'

    $sql = "SELECT imie, nazwisko FROM uczen WHERE id_klasy='1';";
    $result = $conn -> query($sql);

    echo "<ol>";
    while ($row = $result -> fetch_assoc()) {
    $imie = $row['imie'];
    $nazwisko = $row['nazwisko'];
    echo "<li> $imie $nazwisko </li>";
    }
    echo "</ol>";

    //SELECT imie, nazwisko, id_klasy FROM wychowawca;

    $sql = "SELECT imie, nazwisko, id_klasy FROM wychowawca;";
    $result = $conn -> query($sql);

    while ($row = $result -> fetch_assoc()) {
        $imie = $row['imie'];
        $nazwisko = $row['nazwisko'];
        $id = $row['id_klasy'];
        echo "<p> klasa $id - $imie $nazwisko </p>";
    }

$conn -> close();
    ?>
</body>
</html>