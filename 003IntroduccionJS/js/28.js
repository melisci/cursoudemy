
//clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`
    }
}

const producto2 = new Producto('Monitor curvo 49" ', 800);
const producto3 = new Producto('Laptop', 200);

class Libro{
    constructor(nombre, precio, isbn){
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn
    }
}
const libro = new Libro('Javascript la revolucion', 120, '9103254566');
console.log(libro);

console.log(producto2);
console.log(producto3);