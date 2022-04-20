var http = require("http");
var fs = require('fs');
var queryString = require('querystring')
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
json = {

  'Content-Type': 'application/json'
}

const object = {
    name: 'Hatnaa',
    age: 15
}

const json1 =  JSON.stringify(object)
//audio/mp3
//image/jpg
//video/mp4
//application/pdf
http
  .createServer(function (request, response) {
      if (request.url === '/html') {
        response.writeHead(200, html);
        response.write(`<h1>ahha</h1>`)
        response.end();
      }
      else if (request.url === '/png') {
        response.writeHead(200, img);
        data = fs.readFileSync('image1.png')
        response.end(data);
      }
      else if (request.url === '/json') {
        response.writeHead(200, json);
        response.end(json1);
      }
      

      else{
          console.log(typeof '/q?question'.slice(0, 11));
          response.writeHead(404, txt);
          response.write("Not Found.")
          response.end();

      }

  })
  .listen(3000);

console.log("server is started at localhost:2000");
