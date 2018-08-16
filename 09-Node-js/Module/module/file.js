// const fs = require('fs');

// fs.writeFileSync('001.txt','zzz',{flog:'a'});

// let data = fs.readFileSync('001.txt');

// console.log(data.toString());

// fs.writeFile('001.txt','ccc',{flog:'a'});







const fs = require('fs');

const ws = fs.createWriteStream('001.txt');
const rs = fs.createWriteStream('002.txt');

let body = '';

// const file = 'rs.txt';

rs.pipe(ws);