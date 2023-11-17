// arrays

const numeros = [10,20,30,40,50]

console.log(numeros)
console.table(numeros)

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio']
console.table(meses)

//acceder a los valores de un arreglo

console.log(numeros[4]) //50

//conocer la extensiónn de un arreglo

console.log(meses.length) //6

//recorre el array
meses.forEach(function(meses){
    console.log(meses)
})

//agregar al array forma no muy comun
numeros[5] = 60;
console.table(numeros)

//agregar al array al final
numeros.push(33, 70)

//agregar al array al principio
numeros.unshift(-20, -10)


//eliminar elementos de arreglos

meses.pop(); //elimina el ultimo elemento
meses.shift(); //elimina el primer elemento

meses.splice(2 , 1); //elimina elemento segun su indice

console.table(numeros)
console.table(meses)


//Rest operator o spread operator la mejor forma de hacerlo xq no modifica el arreglo original

const nuevoArreglo = [...meses, 'Julio'];
console.log (nuevoArreglo)

