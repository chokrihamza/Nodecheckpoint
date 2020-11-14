const filterFn = require('./make_it_modular.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
      if (err) {
            return console.error(err)
      }

      list.forEach(function (file) {
            console.log(file)
      })
})
