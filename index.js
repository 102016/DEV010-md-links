//llamar la funcion de mdLinks 
const mdLinks = require("./docs/lib/app.js");
//mdLinks("./some/example.md")
mdLinks("./README.md")
  .then(links => {
    // => [{ href, text, file }, ...] 
    console.log(links);
  })
  .catch(console.error);

 
  