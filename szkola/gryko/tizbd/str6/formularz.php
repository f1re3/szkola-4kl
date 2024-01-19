<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <h1>uczniowie</h1>
    <section>
        <h2>lista uczniow</h2>
        <table>
            <?php
                $conn = new mysqli('localhost', 'root','','4e_2_szkola');

                    $sql = 'SELECT * FROM uczen';
                    $result = $conn -> query($sql);
                    
                    while($row = $result -> fetch_row()){
                        echo '<tr>';
                        
                        foreach($row as $field){
                            echo '<td>'.$field.'</td>';
                        }

                        echo '</tr>';
                    }

                $conn -> close();

            ?>
        </table>
    </section>
</body>
</html>