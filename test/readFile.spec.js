const readFile = require ('../docs/lib/readFile')
describe ('testreadFile', () =>{
    it ('readFile debe devolverme un mensaje de texto', () => {
      readFile("C:\\Users\\Laura\\DEV010-md-links\\test\\md\\testReadFile.md")
      .then((result) => {
        const prueba = 'Hola gente linda!\r\n' +
        '![prueba](https://www.youtube.com/watch?v=yxLOBFXSkv0&pp=ygUNdmVyY2VsIGRlcGxveQ%3D%3D)'
        // console.log(result);
        expect(result).toBe(prueba)
    });
    });
    });
