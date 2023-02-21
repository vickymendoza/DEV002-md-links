const { readFiles, validatelinks, getEstadisticas} = require('./api.js')
const { changeToAbsolute, isRelative, getFileByExtension } = require('./otherfuncions.js')
const fs = require("fs");
const path = require('path');

const extension = "md";

const mdLinks = (userPath, options = []) => {
  return new Promise((resolve, reject) => {

    let validate = false
    // let validate = JSON.parse(options[3]);

    let estadísticas  = false;
    // const estadísticas  = options[4];

    // console.log(userPath, options);
    // console.log(options);
    options.forEach(option => {
      if(option == "--validate"){
        validate = true;
      }

      if(option == "--stats"){
        estadísticas = true;
      }
    });

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

      let listaPromesas_readFiles = [];
      let Arraylinks = [];
      foundFiles.forEach(objetoInicial => {
        listaPromesas_readFiles.push(readFiles(objetoInicial));
      });
      Promise.all(listaPromesas_readFiles)
      .then(responses => {
        responses.forEach(response => {
          response.forEach(element => {
            Arraylinks.push(element);
          });
        })

        if(validate){
          let listaPromesas = [];
          Arraylinks.forEach(objetoInicial => {
            listaPromesas.push(validatelinks(objetoInicial));
          });

          Arraylinks = [];
          Promise.all(listaPromesas)
          .then(responses => {
            responses.forEach(response => {
              Arraylinks.push(response);
            })

            if(estadísticas){
              resolve(getEstadisticas(Arraylinks));
            }else{
              resolve(Arraylinks)
            }
          })
          .catch(err =>
            reject(err)        
          )
        }else{
          if(estadísticas){
            resolve(getEstadisticas(Arraylinks));
          }else{
            resolve(Arraylinks)
          }
        }
      })
      .catch(err =>
        reject(err)        
      )     

    } else {
      reject("la ruta no existe")
    }
  })
}

module.exports = {
  mdLinks
}
