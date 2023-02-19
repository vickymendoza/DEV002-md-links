const fs = require('fs');
const path = require('path');

/**
 * Transforma una ruta relativa a absoluta
 * @param ruta Ruta a transformar
 * @returns Retorna la ruta transformada a absoluta.
 */
const changeToAbsolute = (ruta) => {
  return path.resolve(ruta);
}

/**
 * @param ruta Ruta a validar
 * @returns Returns true if the path is relative, false otherwise.
 */
function isRelative(userPath) {
  return !/^([a-z]+:)?[\\/]/i.test(userPath);
}

const foundFiles = [];
/**
 * 
 * @param  directory Directorio sobre el que se realizara la busqueda
 * @param  extension Extension de los archivos a buscar 
 * @returns Lista de archivos encontrados que corresponden a la extension recibida
 */
const getFileByExtension = (directory, extension) => {
  if(fs.lstatSync(directory).isDirectory()){
    const files = fs.readdirSync(directory);
    files.forEach(file => {
      const fileWithPath = path.join(directory, file);
      if(fs.lstatSync(fileWithPath).isDirectory()){
        getFileByExtension(fileWithPath, extension)
      } else if (fs.lstatSync(fileWithPath).isFile() && path.extname(fileWithPath) ===  ".".concat(extension)) {
        foundFiles.push(fileWithPath);
      }
    });
  }
  return foundFiles;
}

// función para obtener los links en un archivo especifico y los retorna en un array
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
  changeToAbsolute, isRelative, getFileByExtension, readFiles
};