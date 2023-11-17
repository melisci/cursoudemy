const producto ={
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto; 

console.log(precioProducto)
console.log(nombreProducto)

//destructuring de objetos

const {precio} = producto;
console.log(precio)