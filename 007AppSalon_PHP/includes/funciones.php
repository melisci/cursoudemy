<?php

function obtener_servicios() {
    try{
        //importar las credenciales
            require 'database.php';

        //consulta SQL
            $sql = "SELECT * FROM servicios;";

        // Realizar la consulta
            $consulta =  mysqli_query($db, $sql);

            return $consulta;

        /* //Acceder a los resultados
            echo "<pre>";
            var_dump( mysqli_fetch_assoc($consulta));
            echo "</pre>"; */

        //cerrar la conexión (opcional) 
            mysqli_close($db);


    }catch (\Throwable $th) {
        var_dump($th);
    }

}

obtener_servicios();