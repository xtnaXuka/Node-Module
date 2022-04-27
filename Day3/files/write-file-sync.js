var fs = require('fs')

var content = 'This is the content of the file.'

fs.writeFileSync('message1.txt', content);
var content1 = fs.readFileSync('message1.txt');

console.log('Content : ' + content1);
