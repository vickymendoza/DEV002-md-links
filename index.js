const { pathAbsolute, changeToAbsolute, idDirFil } = require('./api.js')
const fs = require("fs");
const path = require("path");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    

    if(fs.existsSync(path)){
      console.log(" dino q es",changeToAbsolute(path))
      console.log("si es directorio",idDirFil(path) )


    } else {
      reject("la ruta no existe")
    }
  })
}
module.exports = {
  mdLinks
}