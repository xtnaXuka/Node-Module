var fs = require('fs');

var content = 'We are appending this file synchronously using node.js';

fs.appendFileSync('message.txt', content);

console.log('File appended successfully');