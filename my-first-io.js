const fs = require('fs')

const contents = fs.readFileSync(process.argv[2], 'utf-8')
const nbLines = contents.split('\n').length - 1
console.log(nbLines)


