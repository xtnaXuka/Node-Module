const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const port = 3000;
const fs = require("fs");
app.use(express.json());
app.use(express.static("public"));
app.engine("ejs", require("ejs").__express);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: true });

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/404", (req, res) => {
  res.render("404", { message: " oopsie" });
});
app.get("/js", (req, res) => {
  // var data = {
  //     name: "John",
  //     hobbies: ['Playing football', "playing chess", 'Cycling']

  // }
  fs.readFile("public/donats.json", (err, data) => {
    const data1 = JSON.parse(data)
    console.log(data1);
    res.render("js", { data: data1});
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http:localhost:${port}`);
});

// app.post(
//     "/register",
//     body("email").isemail(),
//     body("phone").isLength({min : 6, max : 8}),
//     (req, res) =>{
//         const errors = validationResult(req);
//         if(errors.isEmpty()){
//             return res.json("My registration");
//         }
//         else{
//             return res.status(400).json({errors: errors.array()})
//         }
//     }
// ).listen(port)
