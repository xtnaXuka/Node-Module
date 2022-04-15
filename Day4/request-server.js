var http = require("http");
var fs = require('fs');
img = {
  'Content-Type': 'image/jpg'
}
mp3 = {
  'Content-Type': 'audio/mp3'
}
pdf = {
  'Content-Type': 'application/pdf'
}
html = {
  'Content-Type': 'text/html'
}
txt = {
  'Content-Type': 'text/plain'
}

//audio/mp3
//image/jpg
//video/mp4
//application/pdf
http
  .createServer(function (request, response) {
      if (request.url === '/pdf') {
        response.writeHead(200, pdf);
        data = fs.readFileSync('B170910049.pdf');
        response.end(data);
      }
      else if (request.url === '/img') {
        response.writeHead(200, img);
        data = fs.readFileSync('image.png')
        response.end(data);
      }
      else if (request.url === '/mp3') {
        response.writeHead(200, html);
        response.write('<h1>Mp3 edr haahah</h1>')
        response.end();
      }

      else{
          response.writeHead(404, txt);
          response.write("Not Found.")
          response.end();

      }

  })
  .listen(2000);

console.log("server is started at localhost:2000");
