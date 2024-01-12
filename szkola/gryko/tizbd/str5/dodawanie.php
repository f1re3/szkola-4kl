<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $_firstname = $_POST["firstname"];
        $_surname = $_POST["surname"];
        echo "<p> $firstname $surname </p>";
        $conn = new mysqli('localhost','root','','4e_2_formularze');
        $sql = "INSERT INTO klient
        (imie, nazwisko)
        VALUES
        ('$firstname','$surname');";
    ?>
</body>
</html>