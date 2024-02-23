<?php 
declare(strict_types=1);
include 'includes/header.php';

function usuarioAutenticado () : string {
    return "el usuario autenticado";
}

$usuario = usuarioautenticado();

echo $usuario;



include 'includes/footer.php';