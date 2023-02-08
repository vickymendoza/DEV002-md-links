const fs = require('fs');
const path = require('path');

const mdFiles = [ ];

// validando si es absoluta o relativa también esta convirtiendo la ruta relativa a absoluta
const changeToAbsolute = (ruta) => {
    if (isAbsolute(ruta)) {
        return ruta;
      } else {
        return path.resolve(ruta);
      }
}

// esto es prueba para ver si es ruta absoluta o relativa
const regEx = /^(\/|[A-Za-z]:\\)/;
function isAbsolute(path) {
     return regEx.test(path);
}

//Función para recorrer las carpetas, sacar la ruta y hacer recursividad ingresando a todas las carpetas
//para traer los archivos .md
const checkPath = (dir) => {
const stats = fs.lstatSync(dir);
    if (stats.isFile() && path.extname(dir) === '.md') {
         mdFiles.push(dir);
  } else if (stats.isDirectory()) {
const files = fs.readdirSync(dir);
    files.forEach(file => {
const filePath = path.join(dir, file);
          checkPath(filePath);
    });
  }
  return mdFiles;
}
      // Función para leer los archivos
const readFiles = (mdFiles)=>{
    return new Promise((resolve, reject) => {
        fs.readFile(mdFiles, 'utf8', (err, mdFiles) => {
    if (err) {
      reject(err)      
    }else {
        resolve (mdFiles)
      }
        })
  });
  }
console.log ("acá con este console", mdFiles)


module.exports = {
  changeToAbsolute, checkPath, readFiles

};