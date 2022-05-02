const express = require("express");
const app = express();
const request = require("request");
const fs = require("fs");

app.get("/get-data", (req, res) => {
  const readStream = fs.createReadStream("./data/data.csv");

  res.status(200);

  readStream.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  readStream.on("open", () => {
    readStream.pipe(res);
  });
});

app.listen(3000);
