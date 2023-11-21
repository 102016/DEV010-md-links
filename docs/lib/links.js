const extracLinks  = (contenido, absolute) =>{
    // console.log(contenido, '*******************************************');
    const regex = /[^!]\[.+?\]\(.+?\)/g
    const result = contenido.match(regex)
    // console.log(result, '---------------------------------');
    const linksObj = [];
    result.forEach(element => {
        // console.log(element);
        // {href, text, file} => []
        if(element.match(/https*?:([^"')\s]+)/) !== null){
            linksObj.push({
                text: element.match(/\[(.*)\]/)[1],
                href: element.match(/https*?:([^"')\s]+)/)[0],
                file: absolute
              })
        }
       
    });
// console.log(linksObj);
return linksObj;

}

module.exports = extracLinks;