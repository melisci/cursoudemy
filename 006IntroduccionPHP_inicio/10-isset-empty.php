<?php include 'includes/header.php';

$clientes = [];
$clientes2 = array();
$clientes3 = array('Pedro', 'Juan', 'Karen');
$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200,
];

//empty
var_dump( empty($clientes));
var_dump( empty($clientes3));

//isset - revisar si un arreglo esta creado o una propiedad esta definida
echo "<br>";
var_dump( isset($clientes4));
var_dump( isset($clientes3));


//isset - permite revisar si una propiedad de un arreglo asociativo, existe!
var_dump(isset($cliente['nombre']));


include 'includes/footer.php';