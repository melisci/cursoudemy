// cuando quiero usar algo del html siempre inicia con document

const boton = document.querySelector('#boton');

//evento

boton.addEventListener('click', () =>{
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es: ${resultado}`))
})
//podemos pedir acceso a la camara, al microfono a la ubicacion
if(Notification.permission == 'granted') {
    new Notification ('esta es una notificación', {
        icon: 'img/curso3.jpg',
        body: 'lalalaalal lalalal'
    })
    new Notification ('esta es una notificación', {
        icon: 'img/curso3.jpg',
        body: 'pupupupu'
    })
}