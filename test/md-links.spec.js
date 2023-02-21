const { mdLinks } = require('../md-links.js');


describe('mdLinks', () => {
  // it('should...', () => {
  //   console.log('FIX ME!');
  // });
  // it('shoul return a promise', () => {
  //   const result =  mdLinks('').catch((e) => console.error(e))
  //   expect(result instanceof Promise).toBe(true);
  // });

  it('should don´t exist the path ', () => {
    return mdLinks('/Sarayueimy/cursos/noexiste.md').catch((err) => {
       expect(err).toBe('la ruta no existe')
    })
  });

});
