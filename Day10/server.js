const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use('/static',express.static('Public'))


app.get("/", (req, res) => {
  console.log(res);
  // res.send(result)
  res.status(200);
});
app.get("/library", (req, res) => {


  const data = fs.readFileSync("library.json");
  const jsondata = JSON.parse(data);
  jsondata.map((e, i) => {
    if (req.query.userId == e.user.id && req.query.bookId == e.book.id) {
      res.send(jsondata[i]);
    }
  });
  const filteredData = jsondata.filter((e) => {
    return req.query.userId == e.user.id && req.query.bookId == e.book.id;
  });
  res.send(filteredData);
  // res.send(req.query)
});

app
  .route("/book")
  .get((req, res) => {
    res.send("Get a randon book");
  })
  .post((req, res) => {
    res.send(req.body);
  })
  .put((req, res) => {
    res.send(req.body);
  });

app.listen(3003);
console.log("App is");
