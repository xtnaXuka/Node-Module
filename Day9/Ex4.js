const express = require("express");
const app = express();
const request = require("request");
const fs = require('fs')
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


app.get("/films", (req, res) => {
 
fs.readFile('./data/data.csv', 'utf8', function (err, data){
  var dataArray = data.split(/\r?n/);
  console.log(typeof data);


  const lines = data.split('\n')
  const result = []
  const headers = lines[0].split(',')

  lines.map(l => {
      const obj = {}
      const line = l.split(',')

      headers.map((h, i) => {
          obj[h] = line[i]
      })

      result.push(obj)
  })

  // const data1 =  JSON.stringify(result)
  console.log(typeof result);
  res.send(result)
 
})
  res.status(200);
});

app.listen(3000);

