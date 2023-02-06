const fs = require('fs');
const path = require('path');

// la ruta es absoluta True-False pero no estamos utilizando

// validando si es absoluta o relativa también esta convirtiendo la ruta relativa a absoluta
const changeToAbsolute = (ruta) => {
    if (isAbsolute(ruta)) {
        return ruta;
      } else {
        return path.resolve(ruta);
      }
}

//Para saber si es un directorio
const idDirFil = (path) => {
    
fs.lstat(path, (err, stats) => {
    if (err) {
      console.error(err);
    } else if (stats.isDirectory()) {
      console.log('Es una carpeta');
    } else if (stats.isFile()) {
      console.log('Es un archivo');
    } else {
      console.log('No es ni una carpeta ni un archivo');
    }
  });
}

// esto es prueba para ver si es ruta absoluta o absoluta
const regEx = /^(\/|[A-Za-z]:\\)/;
function isAbsolute(path) {
  return regEx.test(path);
}


    // funcion - chequear o convertir una ruta absoluta
    // probar si esa ruta absoluta  es una archivo o directorio
    //  Si es un directorio filtrar los archivos md. arry filtrado



  




module.exports = {
  changeToAbsolute, idDirFil

};