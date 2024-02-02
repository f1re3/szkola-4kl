<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Daniel Sobiech</h1>
    <ol>
    <?php
        $conn = new mysqli('localhost','root','','4e_2_spr_DS_tizbd2');

        $sql='SELECT tytul, imie, nazwisko
        FROM autorzy
            inner join ksiazki on autorzy.id=ksiazki.id_autor;';
        $result = $conn->query($sql);
        while($row = $result->fetch_assoc()){
            $tytul = $row['tytul'];
            $imie = $row['imie'];
            $nazwisko = $row['nazwisko'];
            echo"<li> $imie $nazwisko - <b>$tytul</b> </li>";
        }
    ?>
    </ol>
    <form action="usuwanie.php" method="POST">
        <label for="list">podaj czytelnika</label><br>
        <select id="czytelnik">
            <?php

            $sql = 'SELECT id, imie, nazwisko
            FROM czytelnicy;';
            $result = $conn->query($sql);
            while($row = $result->fetch_assoc()){
                
            }
            $conn ->close();
            ?>
        </select>
    </form>
</body>
</html>