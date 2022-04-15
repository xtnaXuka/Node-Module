var http = require("http");
var fs = require('fs');
header = {
  'Content-Type': 'application/pdf'
}
http
  .createServer(function (request, response) {
    response.writeHead(200, header);

    data = fs.readFileSync('B170910049.pdf');
    response.end(data);

  })
  .listen(2000);

console.log("server is started at localhost:2000");
