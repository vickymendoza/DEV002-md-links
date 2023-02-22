
const { changeToAbsolute, isRelative, getFileByExtension } = require('../otherfuncions.js')

describe('test for isRelative', () => {
  const relativa = './newReadme.md';
  const absolute = 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md';

  expect(isRelative(relativa)).toBe(true);
  expect(isRelative(absolute)).toBe(false);
});

describe('test for changeToAbsolute', () => {

  const relativa = './newReadme.md';

  expect(changeToAbsolute(relativa)).toBe('C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md');
});

describe('test for getFileByExtension', () => {

  const absolute = 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\newReadme.md';

  it('should by a new array', () => {
    const extension = "md";
    let esperado = [];
    expect(getFileByExtension(absolute, extension)).toStrictEqual(esperado);

    const directory = 'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\probandocarpetas';
    esperado = [
      'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\probandocarpetas\\otracarpeta\\README - copia.md',
      'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\probandocarpetas\\otracarpeta\\README.md',
      'C:\\Users\\Victoria\\Desktop\\mdLinksDos\\DEV002-md-links\\probandocarpetas\\README.md'
    ];

    expect(getFileByExtension(directory, extension)).toStrictEqual(esperado)
  });
});