const fs = require('fs');

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if(fs.existsSync(path)){
      //Crear una función paraChequear o convertir a una ruta absoluta
      //Probar si esa ruta absoluta es un archivo o directorio
      //Si es un directorio filtrar los archivos que devuelva un Array filtrado
    } else {

      reject('la ruta no existe')

    }

  })
}

module.exports =  {
  mdLinks
  // ...
};
