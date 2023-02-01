const { mdLinks } = require('../index.js');


describe('mdLinks', () => {

  // it('should...', () => {
  //   console.log('FIX ME!');
  // });

  // it('shoul return a promise', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });

  it('Debe rechazar cuando el path no existe ', () => {
    return mdLinks('/erika/cursos/noexiste.md').catch((error) => {
       expect(error).toBe('la ruta no existe')
    })

    

  });

});
