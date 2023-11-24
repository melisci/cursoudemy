//declaracion de funcion los parametros se ponen en el parentesis

function sumar(numero1 = 0, numero2 = 0){ // el = 0 es el parametro por default para que convierta a 0 si no esta el valor en los argumentos
    console.log(numero1 + numero2);

}
sumar(10, 10);// argumentos o valore reales
sumar(3, 10);
sumar(6, 6);
sumar(1); //NaN si no hubiera un parametro por default

//Expresión de la función

const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);