<?php include 'includes/header.php';

//in_array - buscar elementos en un arreglo
$carrito = ['Tablet', 'Computadora', 'Televisión'];

var_dump( in_array('Tablet', $carrito));
var_dump( in_array('Tabldddet', $carrito));

//ordenar elementos de un arreglo

$numeros = array (1,2,3,4,5,1,2);
sort($numeros); //de menor a mayor
rsort($numeros); //de mayor a menor

echo "<pre>";
var_dump($numeros);
echo "</pre>";

//Ordenar arreglo asociativo
$cliente = array(
    'saldo' => 200,
    'tipo' => 'Premium',
    'nombre' => 'juan'

);

asort($cliente); //Ordena por valores (orden alfabético)
arsort($cliente);
ksort($cliente); //Ordena por llaves (orden alfabético)
krsort($cliente); //ordena por llaves (orden alfabetico d ela Z a la A)

echo "<pre>";
var_dump($cliente);
echo "</pre>";

include 'includes/footer.php';