var url = require('url')
var adr = 'http://localhost:3000'
var q = url.parse(adr, true)

console.log(q.host); //return localhost:3000
// console.log(q.pathname); //returns 'default.html' 
// console.log(q.search); //retruns domaini sulin heseg
console.log(q);