const fs = require('fs');
const path = require('path');
const axios = require ('axios');
const { readFiles } = require('./API.js')




//FUNCIÓN PARA VALIDAR LINKS
const validatelinks = (path) => {
  return new Promise((resolve, reject) => {

    axios.get(path)
    .then(response => {
       const validateStatus = response.status
       const ValidateMessage= response.statusText
      //  console.log (" validando el status",validateStatus)
      resolve({validateStatus,ValidateMessage})
    })
    .catch(e => {
        // Podemos mostrar los errores en la consola
        reject("Link que no sirve")
    })    
  });
}
//Función para iniciar a crear las flags -- validate
  const flagsValidate = (Arraylinks) => {
    Arraylinks.then((links=>{
      console.log("Buscando el objeto",links)
    links.forEach(linkhttp => {
      console.log("recorriendo uno por uno los links", linkhttp);
      validatelinks(linkhttp.href)
      .then(({validateStatus,ValidateMessage}) => console.log({validateStatus,ValidateMessage}))
      .catch((error) => console.log ("por si te rompes", error))
      
    });

    
  }))
}






module.exports = {
  validatelinks, flagsValidate
  };