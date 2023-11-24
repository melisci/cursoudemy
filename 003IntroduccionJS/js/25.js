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

//forEach

carrito.forEach(producto=> console.log(producto.nombre));

//map

const arreglo2 = carrito.map(producto=> `${producto.nombre} - ${producto.precio}`);


console.log(arreglo2)


//cuando hay que usar un nuevo arreglo hay que usar map.