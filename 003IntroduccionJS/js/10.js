//Objetos

const nombreProducto = "monitor 20 Pulgadas"
const precio = 300
const disponible = true

const producto ={
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}
// agegar nuevas propiedades
producto.imagen = 'imagen.jpg'

// eliminar propiedades
delete producto.disponible

console.log(producto);
console.log(producto.precio);