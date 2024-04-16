<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
//1
  $ludzie= array(
    array('imie' => 'Jan', 'praca' => 'Budowlaniec'),
    array('imie' => 'Ewa', 'praca' => 'Astronauta'),
    array('imie' => 'Emilia', 'praca' => 'Lekarz'),      
  );

  $osoba = [ 'imie' => 'Jan', 'praca'=> 'Budowlaniec'];

  $osoba1=['imie' => 'Ewa', 'praca' => 'Astronauta'];
  $osoba2 = ['imie' => 'Emilia', 'praca' => 'Lekarz'];

  $ludzie2 = [$osoba, $osoba1, $osoba2];
  echo $ludzie2[0]['imie'];
  echo $ludzie[1]['praca'];

  foreach ($ludzie as $person){
    echo "<p> {$person['imie']} to {$person['praca']} </p>";
  }

  echo '<table border="1">';
  echo '<tr><th>imie</th><th>praca</th></tr>';
  foreach ($ludzie as $person) {
    echo "<tr>";
      foreach ($person as $element) {
        echo "<td> $element </td>";
      };
    echo "</tr>";
  };
  echo '</table>';

//2
$imie= array(
  'nazwisko' => 'kowalski', 'miasto' =>'bydgoszcz', 'wiek'=>43
);
echo '<ol>';
foreach ($imie as $element) {
  echo "<li>$element</li>";
};
echo '</ol>';

echo '<ul>';
foreach ($imie as $key => $value) {
  echo "<li>$key => $value</li>";
};
echo '</ul>';
?>
</body>
</html>