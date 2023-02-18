const fs = require('fs');

// función para obtener los links en un archivo especifico y los rrtorna en un array
const readFiles = (route) => {
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf-8', (error, contentlink) => {
      if (error) {
        return reject(error);
      }
      const regex = /\[(.*)\]\((https?:\/\/\S+)\)/g;
      const Arraylinks = [];
      let savelink;
      while ((savelink = regex.exec(contentlink))) {
          // console.log (" vamos a descubri la ubicación", savelink)
          Arraylinks.push({
          //texto que aparece dentro del link
          text: savelink[1],
          //url encontrado =
          href: savelink[2],
          // Es el archivo en el que se encontró
          path: route,
        });
      }
      resolve(Arraylinks);
    });
  });
};


module.exports = {
  readFiles
};