<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //4 zadanie funkcja gdzie za zmienna ustawia sie nazwe i potem wywoluje sie nazwe wiersza
        $plik = fopen("wiersze/jeden.txt", "r");
        $linijka = fgets($plik);
        echo "<h1>$linijka</h1>";
        $linijka = fgets($plik);
        echo "<h2>$linijka</h2>";
        while(!feof($plik)){
            $linijka = fgets($plik);
            $linijka = nl2br($linijka);
            echo $linijka;
        }
        fclose($plik);

        $zawartosc = scandir("wiersze");
        foreach ($zawartosc as $key) {
            if(is_file("wiersze/$key"))
                echo "<p>$key</p>";
        }
        
    ?>
</body>
</html>