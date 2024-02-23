<?php include 'includes/header.php';

//while

$i = 0; //inicializador[primero ejecuta la condicion y despues revisa el codigo]

while($i < 10) {
    echo $i . "<br>";

    $i++; //incremento

};

echo "<br>";
//do while [primero ejecuta el codigo y despues revisa la condicion]
$i = 0;

do{
    echo $i . "<br>";
    $i++;

}while($i <10);

/**
 * 3 imprimir fizz
 * 5 imprimir buzz
 * 3 y 5 imprimir fizz buzz
 */



// for loop
for ($i = 1; $i < 100; $i++){
    if ($i%3 === 0 && $i%15 === 0) {
        echo $i . "- fizz buzz <br/>";
    } else if ($i%3 === 0){
        echo $i . " -fizz <br/>";
    } else if ($i % 15 === 0){
        echo $i . " - buzz <br/>";
    } else {
        echo $i . "<br/>";
    }   
    
};

//for each

$clientes = [ 'Pedro', 'Juan', 'karen'];

foreach ($clientes as $cliente) {
    echo $cliente . '<br/>';
}


echo count($clientes); //saber cuantos hay (length)

for ($i = 0; $i <count($clientes); $i++) {
    echo $clientes[$i] . '<br/>';
}


$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200,
    'tipo' => 'Premium'
];

foreach ($cliente as $valor) {
    echo $valor . '<br/>';
}

include 'includes/footer.php';

