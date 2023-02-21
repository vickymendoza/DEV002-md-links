const { getEstadisticas, quantityUniqueObject, readFiles, validatelinks } = require('../api.js')

describe('test for getEstadisticas', () => {

  const arrayObjetos =  [
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

  const esperado = JSON.parse('{"Total":2,"Broken":1,"unique":2}');

  it('should by a true', () => {
    expect(getEstadisticas(arrayObjetos)).toStrictEqual(esperado);
  });
});

describe('test for quantityUniqueObject', () => {

  const arrayObjetos =  [
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

  const esperado = 2;

  it('should by a true', () => {
    expect(quantityUniqueObject(arrayObjetos)).toBe(esperado);
  });
});

test('test for readFiles', () => {
  const absolute = 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md';
  const esperado = [
    {
      text: 'md-links',
      href: 'https://ouser-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
      path: 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md'
    },
    {
      text: 'Arreglos',
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      path: 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md'
    }
  ];
  return expect(readFiles(absolute)).resolves.toStrictEqual(esperado);
});


test('test for readFiles file not exist', () => {
  const rutaNoExiste = 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadmeo.md';

  return expect(readFiles(rutaNoExiste)).rejects.toBe('Hubo un error');
});

// test('test for validatelinks VICKY', () => {
//   const absoluteValidate = []
//   const esperado = [
//     {
//       text: 'md-links',
//       href: 'https://ouser-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
//       path: 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md',
//       status: '200',
//       ok:'OK'
//     },
//     {
//       text: 'Arreglos',
//       href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
//       path: 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md',
//       status: '200',
//       ok:'OK'
//     }
//   ];
//   return expect(validatelinks(absoluteValidate)).resolves.toStrictEqual(esperado);
// });


test('test for validatelinks', () => {

  // const objetoIniciaL_valido = JSON.parse('{"text":"md-links","href":"https://ouser-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg","path":"C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md"}');
  const objetoIniciaL_valido = JSON.parse('{"Total":2,"Broken":1,"unique":2}');

  const esperado_valido = JSON.parse('{"Total":2,"Broken":1,"unique":2}');

  // {
  //   "text":"md-links'"
  //   "href":"https://ouser-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
  //   "path":"C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md",
  //   "status":500,
  //   "ok":"Domain Not Found"
  // }
  
  return expect(validatelinks(objetoIniciaL_valido)).resolves.toStrictEqual(esperado_valido);
});




// {
//   text: 'Arreglos',
//   href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
//   path: 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md'
// }

// {
//   text: 'Arreglos',
//   href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
//   path: 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md',
//   status: 200,
//   ok: 'OK'
// }


