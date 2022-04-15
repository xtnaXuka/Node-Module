var http = require("http");
var fs = require('fs');

http
  .createServer(function (request, response) {
    response.writeHead(200);

    fs.readFile('index.html', (error, data) =>{
        if(error){
            throw error;
        }
        else{
            console.log("Operation success");
            console.log(data);
            response.end(data);
        }
    });


  })
  .listen(2000);

console.log("server is started at localhost:2000");
