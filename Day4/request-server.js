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
      else if(request.url === '/q?a=5&x=57&y=3&z=1'){
        const {a,x,y,z} = queryString.parse(request.url.slice(3))

        response.writeHead(200, txt);
        const total = Number(a)+Number(y)+Number(x)+Number(z)
        console.log(typeof total);
        response.write(`${total}`)
        response.end();
      }
      else if(request.url.slice(0, 11) === '/q?question'){
        //   console.log('request.url');
        // const {a,x,y,z} = queryString.parse(request.url.slice(3))
        response.writeHead(200, txt);
        if(request.url.slice(12) == 'why'){
            response.write(`doesnt match`)
            response.end();
        }
        if(request.url.slice(12) == 'hi'){
            response.write(`bye`)
            response.end();
        }
        else{
            response.write(`mori`)
            response.end();
        }
        // const total = Number(a)+Number(y)+Number(x)+Number(z)
        // console.log(typeof total);
        
      }

      else{
          console.log(typeof '/q?question'.slice(0, 11));
          response.writeHead(404, txt);
          response.write("Not Found.")
          response.end();

      }

  })
  .listen(2000);

console.log("server is started at localhost:2000");
