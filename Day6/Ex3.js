var https = require("https");
var fs = require('fs');

https
  .get("https://ghibliapi.herokuapp.com/films", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const films = JSON.parse(Buffer.concat(data).toString());
    //   console.log(foods);
      fs.appendFile('films.json' , JSON.stringify(films), (err)=>{
        if(err){
            throw err;
        }
        else{
            console.log('\n the new content is appended successfully');
        }
    })


    });
  })
  .on("error", (err) => {
    console.log("error" + err.message);
  });
