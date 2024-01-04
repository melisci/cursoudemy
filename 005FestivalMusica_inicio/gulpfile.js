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
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps')

// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif= require('gulp-avif');


// Javascript
const terser = require('gulp-terser');



function css (done) {    
    src('src/scss/**/*.scss') //identificar el archivo de sass
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())  //compilar el archivo
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css')); //almacenarla en el disco duro
    done();//callback que avisa a gulp cuando llegamos al final
}

function imagenes(done){
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe( cache(imagemin(opciones)))
        .pipe( gulp.dest('build/img') )
    done();
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
function versionAvif( done ) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( avif(opciones) )
        .pipe( gulp.dest('build/img') )
    done();
}
function javascript(done) {
    src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'))

    done();
}


function dev (done){
    watch('src/scss/**/*.scss', css)
    watch('src/scss/**/*.js', javascript)
    done();
}
exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp,versionAvif, javascript, dev);