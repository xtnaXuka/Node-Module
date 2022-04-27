const https = require("https");
const http = require("http");
const { EventEmitter } = require("stream");
const chatEmitter = new EventEmitter();
const port = 3003;
const fs = require("fs");
const url = "https://ghibliapi.herokuapp.com/films ";
const url_people = "https://ghibliapi.herokuapp.com/people";
http
  .createServer((req, res) => {
    res.writeHead(200, "Content-Type:application/html");
    if (req.url.match(/^\/films/)) {
      chatEmitter.emit("films-show");

      const films = fs.readFileSync("films1.html").toString();
      res.write(films);
    }
    if (req.url.match(/^\/people/)) {
      chatEmitter.emit("films-people");
      const people = fs.readFileSync("people.html").toString();
      res.write(people);
    }
    res.end();
  })
  .listen(port);
console.log(port);

chatEmitter.on("films-show", () => {
  https.get(url, (response) => {
    const data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const films = JSON.parse(Buffer.concat(data).toString());
      let txt = "";

      films.map((film) => {
        txt += `

                    <tr>
                        <td>${film.title}</td>
                        <td>
                        <img src="${film.image}" alt=""></td>
                    </tr>

                
                `;
      });

      fs.writeFileSync("films1.html", `<table>${txt}</table>`);
    });
  });
});
chatEmitter.on("films-people", () => {
  https.get(url_people, (response) => {
    const data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const films = JSON.parse(Buffer.concat(data).toString());
      let txt = "";

      films.map((film) => {
        txt += `

                    <tr>
                        <td>${film.name}</td>
                        <td>${film.age}</td>
                        <td>${film.gender}</td>
                    </tr>

                
                `;
      });

      fs.writeFileSync("people.html", `<table>${txt}</table>`);
    });
  });
});
