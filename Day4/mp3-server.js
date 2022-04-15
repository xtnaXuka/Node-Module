const { fstat } = require("fs");
var http = require("http");
var fs = require("fs")
var host = "127.0.0.1";
var port = 30000;

//audio/mp3
//image/jpg
//video/mp4
//application/pdf

var server = http.createServer((server, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  console.log("server Working");
  data = fs.readFileSync('image.png')
  response.end(data);
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log("Error occured : ", error);
  }
  console.log("Server is listening on " + host + ":" + port);
});
