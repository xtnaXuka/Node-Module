var http = require('http');

var object = {
    name : 'asdas',
    age : 'asadasdad'
}
var data = JSON.stringify(object)

http.createServer(function (request, response){
    response.writeHead(200);
    response.write('<h1> adasdas Node!!!</h1>\n');
    response.end()

}).listen(10000);
console.log('Server running at http://localhost:10000');