const express = require("express");
const app = express();
const port = 3000;
const logStuff = require("./logStuff")
app.use(express.json());
app.use(express.static("public"));

app.set("view options", { layout: true });

app.get("/user/:id", (req, res, next) => {
  const user_id = req.params.id;
  console.log(user_id);
  if (user_id > 2000) next("route");
  if (user_id < 50) next();
  res.send("1");
}, function(req,res,next){
    res.send('I will send user information #1.1')
});
app.get("/arrayuser/:id", logStuff ,(req, res) => {
  res.send("2");
  console.log(req.params.id);
});

app.listen(port, () => {
  console.log(`Example app listening at http:localhost:${port}`);
});

