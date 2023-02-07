const fs = require('fs');
const path = require('path');

const mdFiles = [ ];

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
/*const idDirFil = (path) => {
    
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
}*/

// esto es prueba para ver si es ruta absoluta o absoluta
const regEx = /^(\/|[A-Za-z]:\\)/;
function isAbsolute(path) {
  return regEx.test(path);
}

const checkPath = (ruta) => {
  
  const files = fs.readdirSync(ruta);
  files.forEach(file => {
    const filePath = path.join(ruta, file)
    //console.log("filepath",filePath);
    const stats = fs.lstatSync(filePath);
   // console.log("fuera", stats)
    //console.log("extencion", path.extname(filePath) )
    if(stats.isFile() && path.extname(filePath) === '.md'){
      mdFiles.push(filePath);
    } else if(stats.isDirectory()){
      checkPath(filePath);
    }
  });
  return mdFiles;
}


    // funcion - chequear o convertir una ruta absoluta
    // probar si esa ruta  es una archivo o directorio
    //  Si es un directorio filtrar los archivos md. arry filtrado

//Función para leer los archivos
  const readFiles = (path)=>{
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return err;
      }
    console.log("¿estás leyendo archivos?",data);

  });
  }



module.exports = {
  changeToAbsolute, checkPath,readFiles

};