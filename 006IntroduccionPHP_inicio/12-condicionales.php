<?php include 'includes/header.php';

$autenticado = true;
$admin = false;

if($autenticado || $admin) {
    echo "usuario autenticado correctamente";
} else {
    echo "usuario no autenticado, inicia sesión";
}

//If anidados...
$cliente = [
    'nombre' => 'juan',
    'saldo' => 0,
    'info' => [
        'tipo'=> 'Premium',
    ]
];

echo "<br>";
if( !empty($cliente)){
    
    echo "el arreglo de cliente no esta vacio";

    if ($cliente['saldo']>0){
        echo "el cliente tiene saldo disponible";
    } else {
        echo "no hay saldo";
    }
};

echo "<br>";

//else if

if ($cliente ['saldo']>0){
    echo "el cliente tiene saldo";
} else if ($cliente['info']['tipo']=== 'Premium'){
    echo "el cliente es premium";
} else {
    echo "no hay cliente definido o no tiene saldo o no es premium";
}

echo "<br>";
//switch

$tecnologia = 'PHP';

switch ($tecnologia) {
    case 'PHP':
        echo "PHP un lenguaje";
        break;
    case 'javascrtpt':
        echo "el lenguaje d ela web";
        break;

    default:
        echo "algun otro lenguaje";
        break;    
}

    





include 'includes/footer.php';