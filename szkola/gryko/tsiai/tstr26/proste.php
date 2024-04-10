<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        <?php
        echo date("d m Y");
        ?>
    </h1>
    <?php
        echo 'Hello World';
    ?>
    <h2>
    <table>
        <tr>
            <td>
            <?php
            echo 'ISO:', date("Y-m-d");
            ?>
            </td>
        </tr>
        <tr>
            <td>
            <?php
            echo 'USA(tradycyjsny:)', date("m/d/Y");
            ?>
            </td>
        </tr>
        <tr>
            <td>
            <?php
            echo 'UK:', date("d/m/Y");
            ?>
            </td>
        </tr>
    </table>
    </h2>
    <?php
        echo phpinfo();
    ?>
    <footer>
        <?php
        echo 'copyright ( &copy; ) 2019-', date('Y');
        ?>
    </footer>
</body>
</html>