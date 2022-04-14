var fs = require('fs')

var content = 'This is the content of the file.'

fs.writeFileSync('message.txt', content);

console.log('File written successfully');