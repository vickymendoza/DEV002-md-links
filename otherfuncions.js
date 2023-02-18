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
      reject("Link que no sirve", e)
    })    
  });
}
//Función para iniciar a crear las flags -- validate
  const flagsValidate = (Arraylinks) => {
    Arraylinks.then((links=>{        
      links.forEach(linkhttp => {
        console.log("Con  David",linkhttp.href)
      validatelinks(linkhttp.href)
      .then(({validateStatus,ValidateMessage}) => {
         linkhttp.validateStatus = validateStatus;
         linkhttp.ValidateMessage = ValidateMessage;
         console.log ("imprima algo pues", linkhttp)
        })
      .catch((error) => console.log ("por si te rompes", error))
      
     });
     
     
  }))
}

module.exports = {
  validatelinks, flagsValidate
}
