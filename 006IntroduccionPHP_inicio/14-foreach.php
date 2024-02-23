<?php include 'includes/header.php';

$productos =[
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Television 24"',
        'precio' => 300,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor Curvo',
        'precio' => 400,
        'disponible' => false
    ]
];

foreach ($productos as $producto) { ?>
    <li>
    <p> Producto: <?php echo $producto['nombre']; ?>  </p>
    <p> Precio: <?php echo "$ " . $producto['precio']; ?>  </p>
    <p><?php echo ($producto['disponible']) ? "disponible" : "no disponible"; ?></p>
        <?php
            if ($producto['disponible']=== true){
                echo "<p>el producto esta</p>";
            } else {
                echo "<p>el producto no esta</p>";
            }

        ?>
    </li>
    <?php

    echo "<pre>";
    var_dump($producto);
    echo "</pre>";

}

include 'includes/footer.php';