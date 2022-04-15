var http = require("http");
var fs = require('fs');

http
  .createServer(function (request, response) {
    response.writeHead(200);

    data = fs.readFileSync('B170910049.pdf');

    response.end(data);

  })
  .listen(2000);

console.log("server is started at localhost:2000");
