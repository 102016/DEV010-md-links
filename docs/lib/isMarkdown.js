// extensiones de Markow
const path = require('path');

const mdExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
const isMarkdownFile = (filePath)=> {
  const fileExtension = path.extname(filePath);
  return mdExtensions.includes(fileExtension);
};
module.exports = isMarkdownFile;

