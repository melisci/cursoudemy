// This

const reservacion = {
    nombre: 'Meli',
    apellido: 'xx',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion()

//si usa un arrow function no funciona, da undefinded,  xq tomaria un widow.nombre 
