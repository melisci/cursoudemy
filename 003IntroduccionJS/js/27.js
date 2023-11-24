//POO
/** Object literal **/

const producto = {
    nombre :'Tablet',
    precio: 500
}

//object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio
}

//Crear funciones que solo se utilizan en un objeto en específico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un preco de: $ ${this.precio}`
}


const producto2 = new Producto('Monitor curvo 49"', 800);
const producto3 = new Producto('Laptop', 200);

function formatearProducto (producto) {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`
}

console.log(producto2.formatearProducto());
console.log(producto3);






console.log (formatearProducto(producto2))

