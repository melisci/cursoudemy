//querySelector: retorna un elemento siempre tiene que iniciar con document

const heading = document.querySelector('.header__texto h2') //0 o 1 elemento

heading.textContent = 'nuevo heading'
heading.classList.add('nueva-clase')
console.log(heading)



//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
console.log(enlaces[0]);//muestra el primer enlace
enlaces[0].textContent='Nuevo texto';
enlaces[0].href='https://google.com'
enlaces[0].classList.add('nueva-clase') //agrega nueva clase al primer
// .remove borra la clase



//getElementById
const heading2 = document.getElementById('heading');


//generar un NUEVO enlace

const nuevoEnlace = document.createElement('A')

//AGEGAR HREF
nuevoEnlace.href = "nuevo-enlace.html"

//Agregar el texto
nuevoEnlace.textContent = "un nuevo enlace"

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')


//Agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)


console.log(nuevoEnlace);


//Eventos

console.log(1);

window.addEventListener('load', function() { //load espera a que el js y los archivos que dependen del html esten listos
    console.log(2);
});

window.onload = function(){ //es igual al de arriba
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function(){ // espera a que se descargue el html, pero no espera css e imagenes
    console.log(4)
})



console.log(5);

window.onscroll = function() {
    console.log('scrolling...')
}

//seleccionar elementos y asociarle un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault(); //es especial para formularios
//     console.log('enviando formu');
// })



//eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


const nombreInput = document.querySelector('#nombre');
nombreInput.addEventListener('change', function(e){
    console.log(e.target.value)
});

//evento de submit


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //validar formulario
    const {nombre, email, mensaje} = datos;
    if (nombre === '' ||  email === '' || mesaje === '') {
        mostrarError('el nombre o el email o mesaje estan vacios')
        return; //corta la ejecucion del codigo
    }

    //crear otra alerta enviar formulario correctamente
    mostrarMensaje('Mensaje enviado correctamente');
    console.log('enviando formulario');

});

function leerTexto (){
    datos[e.target.id] = e.target.value;
    // console.log(datos)
}


function mostrarMensaje(mensaje){
    const alerta = document.createElement ('P');
    alerta.textContent = mensaje;
    alerta.classList.add('mensaje');
    formulario.appendChild ( error ); //para que lo agregue al html
   
    //que desaparezca despues de 3 segundos
    setTimeout(()=> {
        error.remove();
    },3000);
}


//muestra un error en pantalla

function mostrarError(mensaje){
    const error = document.createElement ('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild ( error ); //para que lo agregue al html
   
    //que desaparezca despues de 3 segundos
    setTimeout(()=> {
        error.remove();
    },3000);
}