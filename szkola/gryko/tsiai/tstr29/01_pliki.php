<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "to jest glowny skrypt: ";

        // include "jeden.php";
        // require "dwa.php";
        $nazwa_pliku = $_GET['nazwa_pliku'];

        if(!file_exists("jeden.php"))
            echo "plik nie istnieje";
        else{
            echo "plik istenieje, jego rozmiar to: ".
            filesize("jeden.php");
            include "jeden.php";
        }
        
        $nazwa_pliku = 'folder';
        if(file_exists($nazwa_pliku)){
            if(is_file($nazwa_pliku)){
                echo "rozmiar pliku to: ". filesize($nazwa_pliku);
                include $nazwa_pliku;
            }
            else
                echo $nazwa_pliku." jest katalogiem";
        }
        else
            echo $nazwa_pliku." nie istnieje";
    ?>
</body>
</html>