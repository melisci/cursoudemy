//Métodos de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`reproduciendo canción con el ID: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    }, 
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    } 

}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`)
}


reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('heavy metal')
reproductor.reproducirPlaylist('heavy metal')
//console.log(reproductor)