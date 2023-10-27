// inicirar la funcion de lo que vamos a desarrollar para exportarla en exports//
//  acregamos los 2 parametros , path y  option = opciones 
// tiene que devolver una promesa, primerodevemos crear una promesa 

// importación
const path = require('path'); //  se importa aquí todo el metodode path, nombre del paquete
const fs = require ('fs');
const isMarkdownFile = require ('./isMarkdown');
const { rejects } = require('assert');
const readFile = require ('./readFile');
const mdLinks = (route) => { // route = ruta

    try {
        return new Promise ((resolve, reject) => {
            const absolute = path.resolve (route); //absolute = absoluta
            const pathExists = fs.existsSync(absolute)
            if (pathExists){
    
                if (isMarkdownFile(absolute)){
                    const contenido = readFile (absolute);
                    resolve (contenido); 
                } else {
                    reject (new Error("no es un archivo Markdown"));
                }    
            
            } else {
                reject (new Error("El archivo no existe"));
            }
        });
    } 
         catch (e)    {
            reject (e);
         }
   
  };
   // console.log(path.join('mdLinks','docs', 'lib'));
  module.exports = mdLinks;
  
  