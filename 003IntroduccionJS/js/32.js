// async /await  esperar a que se cumpla algo para ejecutar una acción


function descargarNuevosClientes () {
    return new Promise(resolve => {
            console.log('descargando clientes... espere...');
        
            setTimeout(()=>{
                resolve('los clientes fueron descargados')
            },5000)

    });
}

function descargarUltimosPedidos () {
    return new Promise(resolve => {
            console.log('descargando pedidos... espere...');
        
            setTimeout(()=>{
                resolve('los pedidos fueron descrgados')
            },3000)

    });
}

// setTimeout( function(){
//     console.log('set time out')
// }, 5000);
const clientes = {
    nombre :'Tablet',
    apellido: 500
}
 function mostrarClientes (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
 };


// async function app(){
//     try {
//         const resultado = await descargarNuevosClientes();

//         mostrarClientes(clientes)
//         console.log('este codigo SI se bloquea')
        
//         console.log(resultado);
//         console.log(mostrarClientes);
//     }catch (error){
//         console.log(error)
//     }
    
// }

async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes)
        // console.log(pedidos)

        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]); //muestra descargar nuevos clientes por separado a descargar ultimos pedidos
        console.log(resultado[1])

    }catch (error){
        console.log(error)
    }
    
}

app();

console.log('este codigo no se bloquea')

