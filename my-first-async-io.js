fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
      if (err) {
            return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      const nblines = data.toString().split('\n').length - 1
      console.log(nblines)
})