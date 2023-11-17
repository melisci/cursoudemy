// String o cadena de texo
const producto = "Monitor de 20\"";
const producto2 = String('Monitor 30 pulgadas');
const producto3 = new String('Monitor 50 pulgadas');
const tweet = 'Aprendiendo javascript en el curso de desarrollo web completo';

console.log(producto.length); //cuenta caracteres
console.log(producto2);
console.log(producto3);


//IndexOf = en que posicion se encuentra el texto que estoy buscando si es que esta en el texto si dice -1 es porque no esta
console.log(tweet.indexOf('javascript'));
console.log(producto2.indexOf('tablet'));

// Includes retorna true o false
console.log(tweet.includes('javascript'));
console.log(producto2.includes('tablet'));