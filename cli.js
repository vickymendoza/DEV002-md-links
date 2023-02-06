const { mdLinks } = require ('./index.js');

mdLinks ('./README.md')
.then(()=>{

})
.catch((error)=>{
    console.log(error)
})
/*absoOurRelative('./README.md')
.then(() =>  {
    absoOurRelative  => console.log(absoOurRelative)

})
.catch((error) => {
    error => console.error(error)
})*/