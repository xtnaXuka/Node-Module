const { fstat } = require("fs");
var http = require("http");
var fs = require("fs")
var host = "127.0.0.1";
var port = 3001;
const object = {
    name: 'Hatnaa',
    age: 15
}

const data =  JSON.stringify(object)

//audio/mp3
//image/jpg
//video/mp4
//application/pdf

var server = http.createServer((server, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  console.log("server Working");
  response.end(data);
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log("Error occured : ", error);
  }
  console.log("Server is listening on " + host + ":" + port);
});
