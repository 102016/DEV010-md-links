
const validar = require("mdLinks");


mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);


mdLinks("./some/example.md", true)
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);


mdLinks("./some/example.md", false)
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
