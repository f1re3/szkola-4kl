<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="01_04pliki.php" method="get">
        <label for="nazwa_pliku">nazwa_pliku</label>
        <input type="text" name="nazwa_pliku" id="nazwa_pliku">
        <button>wyslij</button>
    </form>
    <?php
        if(empty($_GET['nazwa_pliku']))
            echo "wpisz nazwe pliku";
        else{
            $nazwa_pliku = $_GET['nazwa_pliku'];
            if(file_exists($nazwa_pliku)){
                echo "plik $nazwa_pliku istnieje ". filesize($nazwa_pliku);
                unlink($nazwa_pliku);
            }
            else{
                echo "plik $nazwa_pliku nie istnieje ";
                touch($nazwa_pliku);
                echo "ale juz istnieje";
            }
        }


    ?>
</body>
</html>