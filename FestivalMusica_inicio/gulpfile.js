// function tarea(done) {
//     console.log("mi primer tarea");
//     done();
// }

// exports.tarea = tarea;
const gulp = require('gulp'); 
const { src, dest, watch, parallel } = require("gulp");

//css
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber");

//imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');



function css (done) {    
    src('src/scss/**/*.scss') //identificar el archivo de sass
        .pipe(plumber())
        .pipe(sass())  //compilar el archivo
        .pipe(dest('build/css')); //almacenarla en el disco duro
    done();//callback que avisa a gulp cuando llegamos al final
}

function imagenes(done){
    
}

function versionWebp( done ) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( webp(opciones) )
        .pipe( gulp.dest('build/img') )
    done();
}

function dev (done){
    watch('src/scss/**/*.scss', css)
    done();
}
exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev);