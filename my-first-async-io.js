const fs = require('fs')

fs.readFile(process.argv[2], function (err, data) {
    if (err) {
       return console.error(err);
    }
    var lineNumber = data.toString().split('\n').length -1
    console.log(lineNumber)
});

