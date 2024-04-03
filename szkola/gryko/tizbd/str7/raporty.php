<?php
$conn = new mysqli('localhost','root','','4e_2_fetch_all_1');

$sql = "SELECT imie, nazwisko, email
FROM uzytkownik;";
$result = $conn -> query($sql);
$users = $result -> fetch_all(1);

$sql = "SELECT marka, model, rocznik
FROM samochody;";
$result = $conn -> query($sql);
$cars = $result -> fetch_all(1);

$conn -> close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ol>
        <?php
        foreach ($users as $user) {
            echo "<li> {$user['imie']} 
            {$user['nazwisko']} 
            <b> {$user['email']} </b> </li>";
        };
        ?>
    </ol>
    <ul>
    <?php
        foreach ($cars as $car) {
            echo "<li> {$car['marka']}
            {$car['model']}
            <b>{$car['rocznik']}</b> </li>";
        };
        ?>
    </ul>
</body>
</html>