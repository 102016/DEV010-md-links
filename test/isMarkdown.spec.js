// archivo principal de la configuración
const isMarkdownFile = require ('../docs/lib/isMarkdown.js')

describe('test isMarKdown', () => {

  it('que me de un boleano si es isMarkdown ', () => {
    expect(isMarkdownFile("./docs")).toBe(false);
})  
});



  
  