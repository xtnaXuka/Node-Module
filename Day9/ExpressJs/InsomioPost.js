const e = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
  const data  = fs.readFileSync('ExpressJs/users.json')
  let parsedArray = JSON.parse(data);

});
app.post("/", function (req, res) {
  const data  = fs.readFileSync('ExpressJs/users.json')
  let parsedArray = JSON.parse(data);
//   console.log( req.body);
    const a = data.map(e=>{
        if(e.name == req.body.name){
            return 'aaa'
        }
        else{
            return 'aa'
        }
    })
    // let aa =JSON.parse(a)
    console.log(a);
// fs.writeFileSync('ExpressJs/users.json', JSON.stringify(parsedArray))
//   console.log(typeof JSON.stringify(parsedArray));
  res.send("test");
});
app.get("/users/:userId/books/:bookId", (req, res) => {
  const films = fs.readFileSync("ExpressJs/users.json");
//   console.log(films);
  const data = JSON.parse(films);
  console.log(data);
  console.log(data);
  const userId = parseInt(req.params.userId);
  const data2 = data.filter((e) => {
    return e.userId == userId || e.bookId == req.params.bookId;
  });

  let render = "";
  data2.map((e) => {
    return (render += `<tr><td>UserId: ${e.userId}  </td><td>BookId: ${e.bookId}  </td><td>Name: ${e.name}</td></tr>`);
  });
  res.send(`<table border=2 style="padding:5px">${render}</table>`);
});

app.listen(3000);
