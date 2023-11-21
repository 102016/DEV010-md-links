// inicirar la funcion de lo que vamos a desarrollar para exportarla en exports//
//  acregamos los 2 parametros , path y  option = opciones 
// tiene que devolver una promesa, primerodevemos crear una promesa 

// importación
const path = require('path'); //  se importa aquí todo el metodode path, nombre del paquete
const fs = require ('fs');
const isMarkdownFile = require ('./isMarkdown');
const extracLinks = require('./links.js')
const { rejects } = require('assert');
const readFile = require ('./readFile.js');
const mdLinks = (route) => { // route = ruta
const mdLinks = require("md-links");
    try {
        return new Promise ((resolve, reject) => {
            const absolute = path.resolve (route); //absolute = absoluta
            const pathExists = fs.existsSync(absolute)
            if (pathExists){
    
                if (isMarkdownFile(absolute)){
                    readFile (absolute).then((res)=>{
                       const array =  extracLinks(res, absolute)
                       console.log(array, '***********');
                        resolve(res)
                    })
                     
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
  
  