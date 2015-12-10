var fs = require('fs');

var dirname = process.argv[2];
var extname = process.argv[3];

file = fs.readdir(dirname, function callback(err, files){
	for(var i = 0; i< files.length; i++){
		if(files[i].split('.')[1] == extname)
			console.log(files[i]);
	}
});

/* Official solution:
     var fs = require('fs')  
     var path = require('path')  
     fs.readdir(process.argv[2], function (err, list) {  
       list.forEach(function (file) {  
         if (path.extname(file) === '.' + process.argv[3])  
           console.log(file)  
       })  
     })
*/