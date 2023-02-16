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
  // función para obtener los links en un array
    const readFiles = (route) => {
    return new Promise((resolve, reject) => {
        fs.readFile(route, 'utf-8', (error, contentlink) => {
            if (error) {
                return reject(error);
            }
            const regex = /\[(.*)\]\((https?:\/\/\S+)\)/g;
            const Arraylinks = [];
            let savelink;
            while ((savelink = regex.exec(contentlink))) {
             // console.log (" vamos a descubri la ubicación", savelink)
              Arraylinks.push({

                //texto que aparece dentro del link
                text: savelink[1],
                //url encontrado =
                href: savelink[2],
                // Es el archivo en el que se encontró
                path: route,
                
              });
            }

            resolve(Arraylinks);
        });
    });
};
    

module.exports = {
  changeToAbsolute, checkPath, readFiles

};