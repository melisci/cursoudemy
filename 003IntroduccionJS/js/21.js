//arrow funtions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia =>  console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('Javascript')

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

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

meses.forEach (mes => {
    if(mes=='marzo'){
        console.log('marzo si existe')
    }
});

//cuando es un arreglo de objetos hay que usar some
resultado = carrito.some (producto => producto.nombre == 'Celular')

console.log(resultado)

//esta sintaxis se hace mas corta con arrow functions

resultado = carrito.some( producto => producto.nombre == 'Celular') 

//sumar los totales
//Reduce

const resultado2 = carrito.reduce((total, producto) => total = producto.precio, 0);

console.log(resultado2)

//Filter

resultado = carrito.filter (producto => producto.precio > 400)
resultado = carrito.filter(producto => producto.nombre !== 'Celular')


console.log(resultado)