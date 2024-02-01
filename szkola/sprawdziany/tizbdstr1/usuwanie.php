<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Daniel Sobiech</h1>
    <?php
    $conn = new mysqli('localhost','root','','4e_2_spr_ds_tizbd');

        $sql = 'SELECT id_autor, tytul, kategorie.nazwa
        FROM ksiazki 
            INNER JOIN kategorie ON ksiazki.id_kategoria=kategorie.id;';
        $result = $conn -> query($sql);


        
    $conn -> close();
    ?>
</body>
</html>