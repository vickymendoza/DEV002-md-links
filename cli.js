const { mdLinks } = require ('./md-links.js');

// let imprimir = false;
// process.argv.forEach((value, index) => {
//     console.log(index, value);
//     if(value == "--validate"){
//         imprimir = true;
//     }
//   });

mdLinks ('./newReadme.md')
.then(links => {
    console.log("Aqui imprime la ruta enviada y que se metio en el resolve", links)
})
.catch((error)=>{
    console.log(error)
})
