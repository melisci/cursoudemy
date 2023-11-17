//Spread Operator

const producto ={
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

const medidas ={
    peso : '1kg',
    medida : '3m',
}

const nuevoProducto = { ...producto , ...medidas}

console.log(nuevoProducto)