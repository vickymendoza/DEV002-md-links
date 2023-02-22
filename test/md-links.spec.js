const { mdLinks } = require('../md-links.js');


describe('mdLinks', () => {
  it('shoul return a promise', () => {
    const result =  mdLinks('').catch((e) => console.error(e))
    expect(result instanceof Promise).toBe(true);
  });

  it('should don´t exist the path ', () => {
    return mdLinks('/Sarayueimy/cursos/noexiste.md').catch((err) => {
       expect(err).toBe('la ruta no existe')
    })
  });
});

test('test for mdLinks', () => {
  const esperado =  [
    {
      "text":"md-links",
      "href":"https://ouser-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
      "path":"C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md"
    },
    {
      "text":"Arreglos",
      "href":"https://curriculum.laboratoria.la/es/topics/javascript/04-arrays",
      "path":"C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md"
    }
  ]

  return expect(mdLinks('./newReadme.md')).resolves.toStrictEqual(esperado);
});

test('test for mdLinks --validate', () => {
  const esperado =  [
    {
      "text":"md-links",
      "href":"https://ouser-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
      "path":"C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md",
      "status": 500,
      "ok":"Domain Not Found"
    },
    {
      "text":"Arreglos",
      "href":"https://curriculum.laboratoria.la/es/topics/javascript/04-arrays",
      "path":"C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md",
      "status":200,
      "ok":"OK"
    }
  ]

  const args =  ['--validate'];

  return expect(mdLinks('./newReadme.md', args)).resolves.toStrictEqual(esperado);
});

test('test for mdLinks --stats', () => {
  const esperado = JSON.parse('{"Total":2,"Broken":2,"unique":2}');

  const args =  ['--stats'];

  return expect(mdLinks('./newReadme.md', args)).resolves.toStrictEqual(esperado);
});

test('test for mdLinks --stats --validate', () => {
  const esperado = JSON.parse('{"Total":2,"Broken":1,"unique":2}');

  const args =  ['--stats', '--validate'];

  return expect(mdLinks('./newReadme.md', args)).resolves.toStrictEqual(esperado);
});

test('test for mdLinks directory --validate', () => {
  const esperado = JSON.parse('{"Total":5,"Broken":5,"unique":3}');

  const args =  ['--stats'];

  return expect(mdLinks('./probandocarpetas', args)).resolves.toStrictEqual(esperado);
});