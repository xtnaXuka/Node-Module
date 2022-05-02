const express = require("express");
const app = express();
const request = require("request");
const fs = require("fs");
const cors = require("cors");
app.use(express.json())
app.use(cors());
app.use((req, res, next)=>{
  res.header("Acces-Control-Allow-Origin", "localhost:3001")
  res.header('Access-Control-Allow-Headers', 
  "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Content-Type", "Application/json")
  next();
})

app.get("/get-data", (req, res) => {
  const readStream = fs.createReadStream("./ExpressJs/users.json");

  res.status(200);

  readStream.on("data", (chunk) => {
    // console.log(chunk);
    // console.log(res);
  });
  readStream.on("open", () => {
    readStream.pipe(res);
    // console.log(typeof res);
  });
});
app.listen(3000);
