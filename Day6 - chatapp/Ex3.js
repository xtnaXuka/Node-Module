var https = require("https");
var http = require("http");
var fs = require("fs");
const port = 3000;

http
  .createServer((req, res) => {
      res.writeHead(200, "Content-Type : application/html");
    https
      .get("https://ghibliapi.herokuapp.com/films", (response) => {
        let data = [];
        response.on("data", (chunk) => {
          data.push(chunk);
        });
        response.on("end", () => {

            const films = JSON.parse(Buffer.concat(data).toString());

            fs.readFile('films.json', (error, data) =>{
                if(error){
                    throw error;
                }
                else{
                    console.log("Operation success");
                    // console.log(films);
                    films.map(e=>{
                        console.log(e.url);
                        res.write(`<table> <tr> <td>${e.title}</td> <td> <img src='${e.image}' style='width: 100px' alt="" /></td> </tr> </table>`)
                    })
                    res.end();
                }
            });




        });
      })
      .on("error", (err) => {
        console.log("error" + err.message);
      });

  })
  .listen(port);
console.log("server is working on " + port + " port");
