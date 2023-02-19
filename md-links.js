const { changeToAbsolute, isRelative, readFiles, getFileByExtension } = require('./api.js')
const fs = require("fs");
let extension = "md";
const path = require('path');


const mdLinks = (userPath, options) => {
  return new Promise((resolve, reject) => {

    console.log(userPath, options);

    if(fs.existsSync(userPath)){
      
      if(isRelative(userPath)){
        userPath = changeToAbsolute(userPath);
      }

      let foundFiles = [];
      if(fs.lstatSync(userPath).isDirectory()){
        foundFiles = getFileByExtension(userPath, extension);
      }else if (fs.lstatSync(userPath).isFile() && path.extname(userPath) ===  ".".concat(extension)) {
        foundFiles.push(userPath);
      }else{
        reject("la ruta no es un directorio o no tiene la extension valida")
      }


        // const linksEncontrados = readFiles(rutaNueva);

        // linksEncontrados.then(links => {
        //   resolve(links)        
        // })
    } else {
      reject("la ruta no existe")
    }
  })
}

module.exports = {
  mdLinks
}