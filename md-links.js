const { readFiles } = require('./api.js')
const fs = require("fs");

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    //valida si existe o no la ruta
    //Returns true if the path exists, false otherwise.
    if(fs.existsSync(path)){
      const linksEncontrados = readFiles(path);
      linksEncontrados.then(links => {
        resolve(links)
      })    
    } else {
      reject("la ruta no existe")
    }
  })
}

module.exports = {
  mdLinks
}