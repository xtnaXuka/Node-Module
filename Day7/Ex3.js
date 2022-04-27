const https = require("https");
const http = require("http");
const { EventEmitter } = require("stream");
const chatEmitter = new EventEmitter();
const port = 3002;
const fs = require("fs");
const url = "https://ghibliapi.herokuapp.com/films ";
http
  .createServer((req, res) => {
    res.writeHead(200, "Content-Type:application/html");
    if (req.url.match(/^\/films/)) {
      // console.log(req.url.slice(req.url.length));
      // const url = req.url.slice(req.url.length)
      if (req.url.slice(6).match(/^\/show/)) {
        chatEmitter.emit("films-show");
      }
    }
    const films = fs.readFileSync('films.html').toString()
    // console.log(films);
    res.write(films)
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
    response.on('end', ()=>{
        const films = JSON.parse(Buffer.concat(data).toString())
        let txt = ''
        // console.log(typeof JSON.stringify(films));
            films.map((film)=>{
                // console.log(film);
                txt += `

                    <tr>
                        <td>${film.title}</td>
                        <td>
                        <img src="${film.image}" alt=""></td>
                    </tr>

                
                `
        })
        // console.log(`<table>${txt}</table>`);
        fs.writeFileSync('films.html', `<table>${txt}</table>`)
    })
  });
});
