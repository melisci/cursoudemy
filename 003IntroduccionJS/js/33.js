// function obtenerEmpleados() {
//     const url = 'empleados.json';
//     fetch(url)
//         .then (resultado => resultado.json())
//         .then (datos => {
//             // console.log(datos.empleados)
//             const {empleados} = datos;
            

//         //    empleados.forEach(empleado => {
//         //         console.log(empleado);
//         //         console.log(empleado.nombre)
//         //         //para mostrarlo en el html
//         //         document.querySelector('.contenido').textContent += empleado.nombre
//         //     });
//         })
//     }

// obtenerEmpleados();

//lo anterior funciona pero ahora lo hago con async await

async function obtenerEmpleados(){
    const url = 'empleados.json';

    const resultado = await fetch(url)
    const datos = await resultado.json()

    console.log(datos)
}

obtenerEmpleados();