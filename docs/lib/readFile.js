// metodo readFile

const fs = require('fs');
const readFile = (markdownFile) => {
return new Promise((resolve, reject) =>{
  fs.readFile (markdownFile,'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
      throw err; 
    } else {
      //console.log(data);
      // return data
      resolve(data)
    }
  });
})
};
module.exports = readFile;
