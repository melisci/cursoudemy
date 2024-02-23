<?php include 'includes/header.php';

$carrito = ['Tablet', 'tele', 'compu'];





//acceder a un elemento del array
echo $carrito[1];


//añade un elemento en el indice 3 del arreglo
$carrito[3] = "nuevo producto...";


//añadir un elemento nuevo al final del array
array_push($carrito, 'audifonos');


//añadir un elemento nuevo al inicio del array
array_unshift($carrito, 'smartwatch');


// util para ver los contenidos de un array
echo "<pre>";
var_dump($carrito);
echo "</pre>";


$clientes = array('cliente 1', 'cliente 2', 'cliente 3');
echo "<pre>";
var_dump($clientes);
echo "</pre>";

echo $clientes[1];

include 'includes/footer.php';