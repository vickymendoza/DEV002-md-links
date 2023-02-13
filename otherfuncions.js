const fs = require('fs');
const path = require('path');
const axios = require ('axios')



//FUNCIÓN PARA VALIDAR LINKS
const validatelinks = (path) => {
  return new Promise((resolve, reject) => {

    axios.get(path)
    .then(response => {
       const validateStatus = response.status
       console.log (" validando el status",validateStatus)
    })
    .catch(e => {
        // Podemos mostrar los errores en la consola
        console.log(e);
    })    
  })
} 





module.exports = {
  validatelinks
  };