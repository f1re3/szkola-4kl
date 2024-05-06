<?php
    session_start();
    $_SESSION['nygus']='wartosc';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h4>witaj na stronie, sesja zostala rozpoczeta</h4>
    <p>identyfikatorem sesji jest: <?php echo session_id(); ?></p>
    <p>wartoscia zmiennej jest: <?php echo $_SESSION['nygus']; ?></p>
    <p><a href="02.php">link</a></p>
</body>
</html>