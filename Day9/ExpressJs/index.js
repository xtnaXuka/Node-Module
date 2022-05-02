const e = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
app.use(bodyParser);


app.get("/", (req, res) => {
  res.send("Hello");
});
app.post('/', function(req, res){
    console.log(req.body);
    res.send("test");
}); 
// app.post("/", (req, res) => {
//   console.log("got post request from client");
//   // console.log(req.body);
//   res.json({ requestBody: req.body });
//   res.send("Got the post request");
// });
app.get("/users/:userId/books/:bookId", (req, res) => {
  const films = fs.readFileSync("ExpressJs/users.json");

  const data = JSON.parse(films);
  // res.send(data)
  const userId = parseInt(req.params.userId);
  // const data1 = data.filter(e=>{
  //     return e.bookId == req.params.bookId
  // })
  const data2 = data.filter((e) => {
    return e.userId == userId || e.bookId == req.params.bookId;
  });
  // res.send(data2)
  let render = "";
  data2.map((e) => {
    return (render += `<tr><td>UserId: ${e.userId}  </td><td>BookId: ${e.bookId}  </td><td>Name: ${e.name}</td></tr>`);
  });
  res.send(`<table border=2 style="padding:5px">${render}</table>`);
  // console.log(render);
});

app.listen(3000);
