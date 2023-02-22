const fs = require('fs');
const path = require('path');

/**
 * Transforma una ruta relativa a absoluta
 * @param userPath Ruta a transformar
 * @returns Retorna la ruta transformada a absoluta.
 */
const changeToAbsolute = (userPath) => {
  return path.resolve(userPath);
}

/**
 * @param userPath Ruta a validar
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

module.exports = {
  changeToAbsolute, isRelative, getFileByExtension
}
