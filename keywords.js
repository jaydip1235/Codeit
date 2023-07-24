const fs = require("fs");
const keywordsstr = fs.readFileSync("keywords.txt").toString();
const keywords = keywordsstr.split("\n").map((e)=>{
    return e.split('\r')[0]
});

console.log(keywords.indexOf('less'))
module.exports = keywords;
