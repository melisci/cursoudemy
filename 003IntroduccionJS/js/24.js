//For loop

// for (let i = 0; i < 10; i++) {
//     console.log (i);
// }

// for (let i = 0; i < 10; i++) {
//     if(i % 2 ===0) {
//         console.log(`El Númeo ${i} es par`)

//     } else {
//         console.log(`El Númeo ${i} es impar`)
//     }
// }
const carrito = [
    {
        nombre : 'Monitor 20 Pulgadas',
        precio : 500
    },
    {
        nombre : 'Television 50 Pulgadas',
        precio : 800
    },
    {
        nombre : 'Tablet',
        precio : 300
    },
    {
        nombre : 'Audifonos',
        precio : 200
    },
    {
        nombre : 'Teclado',
        precio : 50
    },
    {
        nombre : 'Celular',
        precio : 500
    },
    {
        nombre : 'Bocinas',
        precio : 300
    },
    {
        nombre : 'Laptop',
        precio : 200
    },
];

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre)
}


//While loop


// let i = 1; //indice o valor inicial

// while(i<=100) {
//     if (i % 2===0){
//         console.log(`el numero ${i} es par`);
//     } else{
//         console.log(`el numero ${i} es impar`);
//     }
//     i++
// }


//Do while loop

let i = 0;

do {

console.log(i);
i++;

}while (i<10);

//en do while loop el codigo se ejecuta al menos una vez y luego evalua si la condicion se cumple. En el while no, primero revisa la ejecución y luego ejecuta.