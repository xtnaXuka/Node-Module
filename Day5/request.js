var https = require("https");
var fs = require('fs');

https
  .get("https://dev-api.mstars.mn/api/foods", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const foods = JSON.parse(Buffer.concat(data).toString());
    //   console.log(foods);
      fs.appendFile('foods.json' , JSON.stringify(foods), (err)=>{
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
