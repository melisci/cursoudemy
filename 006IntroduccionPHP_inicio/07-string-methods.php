<?php include 'includes/header.php';

$nombreCliente = "Juan Pablo";

//conocer extencion de un string
echo strlen($nombreCliente);

//eleiminar espacios en blanco
$texto = trim($nombreCliente);
echo $texto;

//convertir a mayusculas

echo strtoupper($nombreCliente);

//convertir en minuscular
echo strtolower($nombreCliente);

$mail1 = "correo@correo.com";
$mail2 = "Correo@correo.com";

var_dump(strtolower($mail1) === strtolower($mail2));
echo str_replace('Juan', 'j', $nombreCliente);

//Revisar si un string existe o no
echo strpos($nombreCliente, 'Juan');

$tipoCliente = "Premium";

echo "<br>";

echo "El Cliente " . $nombreCliente . " es " . $tipoCliente;

echo "el cliente {$nombreCliente} es {$tipoCliente}";


include 'includes/footer.php';