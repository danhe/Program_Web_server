var fs = require('fs');//filesystem de module

var filename = process.argv[2];

buf = fs.readFileSync(filename); //return an object Buffer

var str = buf.toString();

console.log(str.split('\n').length - 1);