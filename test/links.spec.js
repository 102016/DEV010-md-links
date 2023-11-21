 // archivo principal de la configuración
const extracLinks = require ('../docs/lib/links')

describe('test links', () => {

  it('que me regresa una array con links', () => {
    
    const prueba = `Usando un módulo como
    [Markdown-it](https://www.npmjs.com/package/markdown-it), que nos devuelve
    un arreglo de tokens que podemos recorrer para identificar los links.
  
  * También podríamos usar una combinación de varios módulos (podría ser válido
    transformar el Markdown a HTML usando algo como [marked](https://github.com/markedjs/marked)
    y de ahí extraer los links con una librería de DOM como [JSDOM](https://www.npmjs.com/package/jsdom)
    o [Cheerio](https://cheerio.js.org/) entre otras)."
    expect(isMarkdownFile("./docs")).toBe(false)`
    const resultado = [{
      text: 'Markdown-it',
      href: 'https://www.npmjs.com/package/markdown-it',
      file: 'ruta'
    },
    {
      text: 'marked',
      href: 'https://github.com/markedjs/marked',   
      file: 'ruta'
    },
    {
      text: 'JSDOM',
      href: 'https://www.npmjs.com/package/jsdom',
      file: 'ruta'
    },
    {
      text: 'Cheerio',
      href: 'https://cheerio.js.org/',
      file: 'ruta'
    },
  
      ];
      expect(extracLinks(prueba,"ruta")).toEqual(resultado); //toEqua que el resultdo sea igual a la contante 
});  
});