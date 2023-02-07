const { pathAbsolute, changeToAbsolute,  checkPath } = require('./api.js')
const fs = require("fs");
const path = require("path");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    

    if(fs.existsSync(path)){
      console.log(" ruta absoluta",changeToAbsolute(path))
      console.log ("recursividad de carpetas y por ahora sale lista de los files que terminan .md dice ",checkPath(path))
     // readFiles(path)
    } else {
      reject("la ruta no existe")
    }
  })
}
module.exports = {
  mdLinks
}