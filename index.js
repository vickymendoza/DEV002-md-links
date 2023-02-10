const { pathAbsolute, changeToAbsolute,  checkPath, readFiles } = require('./api.js')
const fs = require("fs");
const path = require("path");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    

    if(fs.existsSync(path)){
      console.log(" ruta absoluta",changeToAbsolute(path))
      console.log ("recursividad de carpetas leyendo .md ",checkPath(path)) 
      readFiles(path)
    .then((contentlink) => console.log(" ojalá funcione", contentlink)) 
    .catch((error) => console.log(" ojalá funcione", error))
    } else {
      reject("la ruta no existe")
    }
  })
}


module.exports = {
  mdLinks
}