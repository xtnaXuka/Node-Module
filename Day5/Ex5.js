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
    console.log(request.url)

    if(request.url.match(/^\/data/)){
      console.log('adasd');

        if (request.url.slice(7) == 'html') {

            response.writeHead(200, html);
            response.write(`<h1>ahha</h1>`)
            response.end();
          }
          else if (request.url.slice(7) == 'png') {
            response.writeHead(200, img);
            data = fs.readFileSync('image1.png')
            response.end(data);
          }
          else if (request.url.slice(7) == 'json') {
            response.writeHead(200, json);
            response.end(json1);
          }
        // const total = Number(a)+Number(y)+Number(x)+Number(z)
        // console.log(typeof total);
        response.end()
        
      }
      else{
          response.writeHead(404, txt);
          response.write("Not Found.")
          response.end();

      }
      

  })
  .listen(3001);

console.log("server is started at localhost:2000");
