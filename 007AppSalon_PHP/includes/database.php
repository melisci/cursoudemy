<?php
$db = mysqli_connect('localhost', 'root', 'contraseña', 'appsalon');

/* echo "<pre>";
var_dump($db);
echo "</pre>";  */

if (!$db){
    echo "hubo un error";
    exit;
}