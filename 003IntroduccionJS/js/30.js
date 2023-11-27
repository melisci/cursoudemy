//promises

const usuarioAutenticado = new Promise ( (resolve , reject) => {
    const auth = true;

    if(auth){
        resolve('usuario autenticado'); //el promise se cumple
    } else {
        reject('no se pudo iniciar sesión');  // el promise no se cumple  
    }

});
//para ejecutar el resuktadi de resilve
usuarioAutenticado
    .then(resultado =>console.log(resultado))
    //para ejecutar el resultado de reject cambiando el auth a false
    .catch(resultado =>console.log(resultado))

console.log(usuarioAutenticado)



//en los promises existen 3 valores posibles
//Pending: No se ha cumplido, pero tampoco de ha rechazado
//Fulfielld: ya se cumplió
//Rejected: se ha rechazado o no se cumplió