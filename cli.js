const { mdLinks } = require ('./index.js');

mdLinks ('./newReadme.md')
.then(()=>{

})
.catch((error)=>{
    console.log(error)
})
