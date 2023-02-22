const { mdLinks } = require ('./md-links.js');

let path;
// process.argv.forEach((value, index) => {
//     console.log(index, value);
//     if(value == "--validate"){
//         imprimir = true;
//     }
// });
// console.log(process.argv[2]);
path = process.argv[2]

// node cli.js ./newReadme.md  '{"""validate""":false}'
// node cli.js ./newReadme.md  '{"""validate""":true}'

mdLinks (path, process.argv)
.then(links => 
    console.log(links)
)
.catch((error)=>
    console.log(error)
)




//Escenarios de prueba
// mdLinks ('C:/Users/Victoria/Desktop/mdLinksDos/DEV002-md-links/probandocarpetas')
// mdLinks ('C:/Users/Victoria/Desktop/mdLinksDos/DEV002-md-links/probandocarpetasd')
// mdLinks ('./probandocarpetas')
// mdLinks ('./probandocarpetas1')
// mdLinks ('C:/Users/Victoria/Desktop/mdLinksDos/DEV002-md-links/newReadmed.md')
// mdLinks ('C:/Users/Victoria/Desktop/mdLinksDos/DEV002-md-links/newReadme.md')
// mdLinks ('./newReadmed.md')
// mdLinks ('./newReadme.md')