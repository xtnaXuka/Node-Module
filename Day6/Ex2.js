var https = require("https");
var http = require("http");
var fs = require("fs");
const port = 3000;

http
  .createServer((req, res) => {
      res.writeHead(200, "Content-Type : application/json");
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
                    console.log(films);
                    res.end(data);
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
