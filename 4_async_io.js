var fs = require('fs');

var filename = process.argv[2];

// readFile: Asynchronously read file
//function callback(err, data): if occurred an error, pass the first argument
// if normally passing the content of file like the precedent exo
file = fs.readFile(filename, function callback(err, data) {
  console.log(data.toString().split('\n').length - 1);
});
//data: return an object Buffer, but wo can translate them in string