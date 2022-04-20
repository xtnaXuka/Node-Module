var http = require("http");
var fs = require("fs");
var queryString = require("querystring");
img = {
  "Content-Type": "image/jpg",
};
mp3 = {
  "Content-Type": "audio/mp3",
};
pdf = {
  "Content-Type": "application/pdf",
};
html = {
  "Content-Type": "text/html",
};
txt = {
  "Content-Type": "text/plain",
};

//audio/mp3
//image/jpg
//video/mp4
//application/pdf
http
  .createServer(function (request, response) {
    console.log(request.url);
    // console.log(request.url.match(/^\/question/)[0].length);
    // let aa = request.url.match(/^\/question/)[0].length

    if (request.url.match(/^\/question/)) {
        let req = request.url.slice(10)
        console.log('aa',req);
        console.log('working');
        response.writeHead(200, html);
        response.write(`<h1>ahha</h1>`)
        response.end();
    //   if (req.url.match(/^\/why/)) {
    //     response.write(`doesnt match`);
    //     response.end();
    //   }
    //   if (req.url.match(/^\/hi/)) {
    //     response.write(`bye`);
    //     response.end();
    //   } else {
    //     response.write(`mori`);
    //     response.end();
    //   }
    } else {
      console.log(typeof "/q?question".slice(0, 11));
      response.writeHead(404, txt);
      response.write("Not Found.");
      response.end();
    }
  })
  .listen(2000);

console.log("server is started at localhost:2000");
