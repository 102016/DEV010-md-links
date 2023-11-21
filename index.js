//llamar la funcion de mdLinks 
const mdLinks = require("./docs/lib/app.js");
//mdLinks("./some/example.md")
const route = "./README.md"
// const route = './laura.md'
//const route = './laura.png'
mdLinks(route)
 .then(links => {
// => [{ href, text, file }, ...] 
  //console.log(links);
  })
 .catch(console.error);

console.log(process.argv);

 
  