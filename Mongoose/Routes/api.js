const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const users = require("../models/users");
const Polls = require("../models/users");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

router.get("/users", (req, res) => {
  Polls.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      return res.json({
        data: data,
      });
    }
  });
});
router.put("/users", (req, res) => {
  // console.log(JSON.parse(JSON.stringify(req.params)));
  console.log(req.body);
  // Polls.findOneAndUpdate({_id:req.body.id},{
  //   _id:req.body.id,
  //   pollName:req.body.pollName
  // },(err, data)=>{
  //   if(err) throw err;
  //   res.send("Updated")
  // })
});

router.post("/users", (req, res) => {
  const reqBody = req.body;

  console.log(reqBody);
  let newPoll = new Polls({
    _id: new mongoose.Types.ObjectId(),
    orderdate: reqBody.orderdate,
    orderNumber: reqBody.orderNumber,
    user: reqBody.user,
    order: reqBody.order,
    total: reqBody.total,
    card: reqBody.card,
    phoneNumber: reqBody.phoneNumber,
  });

  newPoll
    .save()
    .then((data) => {
      return res.json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        message: "error",
        error: err,
      });
    });
});
module.exports = router;
