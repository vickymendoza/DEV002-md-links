const fs = require('fs');
const axios = require ('axios');

/**
 * función para obtener los links en un archivo especifico y los retorna en un array
 * @param userPath userPath
 * @returns [{text, href, path}, ...] if validate is false or [{text, href, path, status, ok}, ...] if validate is true
 */
const readFiles = (userPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(userPath, 'utf-8', (error, contentlink) => {
      if (error) {
        return reject("Hubo un error");
      }
      const regex = /\[(.*)\]\((https?:\/\/\S+)\)/g;
      const Arraylinks = [];
      let savelink;
      while ((savelink = regex.exec(contentlink))) {
        let detailLink = new Object();
        //texto que aparece dentro del link
        detailLink.text = savelink[1];
        //url
        detailLink.href = savelink[2];
        // Es el archivo en el que se encontró
        detailLink.path = userPath;

        Arraylinks.push(detailLink);
      }
      resolve(Arraylinks);
    });
  });
};

/**
 * ¿?
 * @param  url ¿?
 * @returns ¿?
 */
const validatelinks = (objetoInicial) => {
  // console.log(objetoInicial);
  return new Promise((resolve, reject) => {
    axios.get(objetoInicial.href)
    .then(response => {
      const validateStatus = response.status
      const ValidateMessage= response.statusText
      objetoInicial.status = validateStatus;
      objetoInicial.ok = ValidateMessage;
      // console.log(objetoInicial);
      resolve(objetoInicial)
    })
    .catch(e => {
      objetoInicial.status = e.response.status;
      objetoInicial.ok = e.response.statusText;
      // console.log(objetoInicial);
      resolve(objetoInicial)
    })  
  });
}

const getEstadisticas = (arrayObjetos) => {
  let broken = 0;
  let estadisticas = new Object();
  estadisticas.Total = arrayObjetos.length;
  arrayObjetos.forEach(objeto => {
    if(objeto.status != 200){
      broken++;
    }
  });
  estadisticas.Broken = broken;
  estadisticas.unique = quantityUniqueObject(arrayObjetos);
  return estadisticas;
}


function quantityUniqueObject(arrayObjetos) {
  let todosLosObjetos = [];
  arrayObjetos.forEach(objeto => {
    if (!todosLosObjetos.includes(objeto.href)) {
      todosLosObjetos.push(objeto.href);
    }
  });
  return todosLosObjetos.length;
}

module.exports = {
  readFiles, validatelinks, getEstadisticas, quantityUniqueObject
};