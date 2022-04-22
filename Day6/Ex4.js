var https = require("https");
var http = require("http");
var fs = require("fs");
const port = 3000;
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

http
  .createServer((req, res) => {
    res.writeHead(200, "Content-Type : application/html");

    if (req.url.match(/^\/ghibli=films/)) {

      https
      .get("https://ghibliapi.herokuapp.com/films", (response) => {
        let data = [];
        response.on("data", (chunk) => {
          data.push(chunk);
        });
        response.on("end", () => {
          const films = JSON.parse(Buffer.concat(data).toString());

            films.map((e) => {
              res.write(
                `<table> <tr> <td>${e.title}</td> <td> <img src='${e.image}' style='width: 100px' alt="" /></td> </tr> </table>`
              );
            });
            res.end();

        });
      })
      .on("error", (err) => {
        console.log("error" + err.message);
      });

    } 

   else if (req.url.match(/^\/ghibli=people/)) {

      https
      .get("https://ghibliapi.herokuapp.com/people", (response) => {
        let data = [];
        response.on("data", (chunk) => {
          data.push(chunk);
        });
        response.on("end", () => {
          const films = JSON.parse(Buffer.concat(data).toString());

            films.map((person) => {
              res.write(
                `<table> <tr> <td>${person.name}</td> <td> ${person.age}</td> <td> ${person.gender}</td></tr> </table>`
              );
            });
            res.end();

        });
      })
      .on("error", (err) => {
        console.log("error" + err.message);
      });

    } 
    else {
      res.writeHead(404, txt);
      res.write("Not Found.");
      res.end();
    }


  
  })
  .listen(port);
console.log("server is working on " + port + " port");
