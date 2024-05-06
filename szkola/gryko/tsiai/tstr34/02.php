<?php
    session_start();
    $_SESSION['inna']='45';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h4>witamy na kolejnej sesji <?php echo session_id(); ?></h4>
    <p>wartoscia zmiennej jest: <?php echo $_SESSION['nygus']; ?></p>
    <p>wartoscia 2 zmiennej jest: <?php echo $_SESSION['inna']; ?></p>
    <p><a href="03.php">link</a></p>
</body>
</html>