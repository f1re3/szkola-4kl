<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $numery = [1,4,-12,3,2,1,-6,-123,231,2,-145,12,76];

        foreach ($numery as $element) {
            if($element %2 != 0)
                echo "zadanie 1 DS <p> $element </p>";
        };

        foreach ($numery as $element) {
            $element2 = $element -= 1;
            echo "<p>zadanie 2 DS $element2</p>";
        };

        $imiona = ['Jakub','Daniel','Dorian','Mateusz','Bartosz'];

        echo "zadanie 5 DS $imiona[2] $imiona[4]";

        echo "<p>zadanie 6 DS <ul> ";
        foreach ($imiona as $element) {
            echo "<li> $element </li>";
        }
        echo "</ul></p>";

        $zawodnik1 = array(
            'nazwisko' => 'Sledzik', 'dyscyplina' => 'bieganie', 'wynik' => 4
        );

        $zawodnik2 = array(
            'nazwisko' => 'Sobiech', 'dyscyplina' => 'pilka nozna', 'wynik' =>7
        );

        $zawodnicy = [$zawodnik1, $zawodnik2];

        echo '<table >';
        echo '<tr>';
        echo '<th> nazwisko</th>';
        echo '<th> dyscyplina</th>';
        echo '<th> wynik</th>';
        echo '</tr>';
        echo '<tr>';
        echo "<td>{$zawodnicy[0]['nazwisko']}</td>";
        echo "<td>{$zawodnicy[0]['dyscyplina']}</td>";
        echo "<td>{$zawodnicy[0]['wynik']}</td>";
        echo '</tr>';
        echo '<tr>';
        echo "<td>{$zawodnicy[1]['nazwisko']}</td>";
        echo "<td>{$zawodnicy[1]['dyscyplina']}</td>";
        echo "<td>{$zawodnicy[1]['wynik']}</td>";
        echo '</tr>';
        echo '</table>';
    ?>
</body>
</html>