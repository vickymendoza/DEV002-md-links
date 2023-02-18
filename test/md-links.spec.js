const { mdLinks } = require('../index.js');


describe('mdLinks', () => {

  // it('should...', () => {
  //   console.log('FIX ME!');
  // });

  // it('shoul return a promise', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });

  it('should don´t exist the path ', () => {
    return mdLinks('/Sarayueimy/cursos/noexiste.md').catch((error) => {
       expect(error).toBe('la ruta no existe')
    })

    

  });

});
