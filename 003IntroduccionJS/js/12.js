//"use strict"; //correr codigo de javascript estricto
const producto ={
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

Object.freeze(producto) // no se le pueden agregar ni eliminar ni cambiar valor o mas propiedades al objeto
// producto.imagen = 'imagen.jpg'
Object.seal(producto) // no te permite eliminar o agregar, pero si te permite modificar

console.log (Object.isFrozen(producto)); //saber si esta frizado

console.log(producto)

console.log (Object.isSealed(producto));