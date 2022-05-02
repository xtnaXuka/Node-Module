const express = require("express");
const app = express();
const request = require("request");

app.get("/films", (req, res) => {
  request(
    "https://ghibliapi.herokuapp.com/films ",
    function (error, response, body) {
      // body.map(film=>{
      //     console.log(film);
      // })
      const data = JSON.parse(body);
      let htmlrender = "";
      data.map((film) => {
        // console.log(film.title);
        htmlrender = htmlrender + `<h1>title : ${film.title}</h1> <br>
        <h1>original_title : ${film.original_title}</h1> <br>
        <h1>original_title_romanised : ${film.original_title_romanised}</h1> <br>
        <img src="${film.image}" alt="">
        `;
      });

      res.send(htmlrender);
    }
  );
  console.log("here");
  res.status(200);
});

app.listen(3000);
